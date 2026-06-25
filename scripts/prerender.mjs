/**
 * prerender.mjs
 * 빌드된 SSR 번들(dist/server/entry-server.js)로 sitemap.xml 의 모든 라우트를
 * 정적 HTML 로 렌더링해 dist/<route>/index.html 로 저장합니다.
 *
 * 목적: 클라이언트 사이드 렌더링 SPA 라 크롤러에게 빈 페이지로 보이던 문제를 해결.
 *       각 페이지가 첫 HTML 응답에 완성된 본문 + 페이지별 SEO 메타를 포함하게 됩니다.
 *
 * 실행 순서: vite build (client) → vite build --ssr → 이 스크립트
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const BASE_URL = 'https://simsimpools.co.kr';

// ── 1. 라우트 목록: 빌드 시 생성된 sitemap.xml 에서 추출 ──────────────────
function getRoutes() {
  const xml = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  return locs.map((loc) => loc.replace(BASE_URL, '') || '/');
}

// ── 2. HTML 템플릿 (vite 가 자산 해시를 주입한 dist/index.html) ───────────
const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

if (!template.includes('<!--app-html-->') || !template.includes('<!--app-head-->')) {
  console.error('✗ dist/index.html 에 <!--app-html--> / <!--app-head--> 자리표시자가 없습니다.');
  process.exit(1);
}

// ── 3. SSR 렌더 함수 로드 ─────────────────────────────────────────────────
const { render } = await import(path.join(DIST, 'server/entry-server.js'));

// ── 4. 라우트별 렌더링 & 저장 ─────────────────────────────────────────────
function outFile(route) {
  if (route === '/') return path.join(DIST, 'index.html');
  return path.join(DIST, route.replace(/^\//, ''), 'index.html');
}

const routes = getRoutes();
let ok = 0;

for (const route of routes) {
  const { html, helmet } = render(route);

  const head = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(), // 페이지별 JSON-LD 구조화 데이터
  ]
    .filter(Boolean)
    .join('\n    ');

  const page = template
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html);

  const file = outFile(route);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page, 'utf8');
  ok += 1;
}

// ── 5. SSR 번들 정리 (배포 산출물에서 제외) ───────────────────────────────
fs.rmSync(path.join(DIST, 'server'), { recursive: true, force: true });

console.log(`✓ 사전 렌더링 완료: ${ok}개 라우트 → dist/<route>/index.html`);
