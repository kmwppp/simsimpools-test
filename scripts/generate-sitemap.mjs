/**
 * generate-sitemap.mjs
 * 빌드 시 src/data/ 파일을 파싱해 public/sitemap.xml 을 자동 생성합니다.
 * 새 테스트/블로그 포스트가 추가되면 자동으로 반영됩니다.
 *
 * 실행: node scripts/generate-sitemap.mjs
 * 빌드 통합: package.json "build" 스크립트 앞에 연결됨
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.resolve(__dirname, '..');
const BASE_URL  = 'https://simsimpools.co.kr';
const TODAY     = new Date().toISOString().split('T')[0];

// ── helpers ──────────────────────────────────────────────────────────────
function esc(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function urlEntry(loc, lastmod, changefreq, priority) {
  return [
    '  <url>',
    `    <loc>${esc(BASE_URL + loc)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n');
}

// ── blog.ts 파싱 ──────────────────────────────────────────────────────────
// 각 포스트의 id(4-space indent)와 publishedAt을 순서대로 추출 후 zip
function extractBlogPosts() {
  const src  = fs.readFileSync(path.join(ROOT, 'src/data/blog.ts'), 'utf8');
  const ids  = [...src.matchAll(/^\s{4}id:\s*'([^']+)'/gm)].map(m => m[1]);
  const dates = [...src.matchAll(/^\s{4}publishedAt:\s*'([^']+)'/gm)].map(m => m[1]);
  const mods  = [...src.matchAll(/^\s{4}lastModified:\s*'([^']+)'/gm)].map(m => m[1]);

  // lastModified 가 없는 포스트는 publishedAt 사용
  return ids.map((id, i) => ({
    id,
    lastmod: mods[i] ?? dates[i] ?? TODAY,
  }));
}

// ── tests/*.ts 파싱 ───────────────────────────────────────────────────────
// 각 파일에서 test meta id(첫 번째 문자열 id 필드), publishedAt, lastModified 추출
function extractTests() {
  const testDir = path.join(ROOT, 'src/data/tests');
  const files   = fs.readdirSync(testDir)
    .filter(f => f.endsWith('.ts') && f !== 'index.ts');

  return files.flatMap(file => {
    const src = fs.readFileSync(path.join(testDir, file), 'utf8');
    // test meta id 는 파일 내 첫 번째 다중문자 문자열 id: '...'
    const idMatch  = src.match(/\bid:\s*'([a-z][a-z0-9-]{4,})'/);  // 5자 이상 slug
    const modMatch = src.match(/lastModified:\s*'([^']+)'/);
    const pubMatch = src.match(/publishedAt:\s*'([^']+)'/);
    const id = idMatch?.[1];
    if (!id) return [];
    return [{ id, lastmod: modMatch?.[1] ?? pubMatch?.[1] ?? TODAY }];
  });
}

// ── 정적 페이지 ───────────────────────────────────────────────────────────
const STATIC = [
  { loc: '/',           changefreq: 'weekly',  priority: 1.0 },
  { loc: '/tests',      changefreq: 'weekly',  priority: 0.9 },
  { loc: '/blog',       changefreq: 'weekly',  priority: 0.9 },
  { loc: '/about',      changefreq: 'monthly', priority: 0.6 },
  { loc: '/contact',    changefreq: 'monthly', priority: 0.5 },
  { loc: '/privacy',    changefreq: 'yearly',  priority: 0.4 },
  { loc: '/terms',      changefreq: 'yearly',  priority: 0.4 },
  { loc: '/disclaimer', changefreq: 'yearly',  priority: 0.4 },
];

// ── 생성 ──────────────────────────────────────────────────────────────────
const tests  = extractTests();
const posts  = extractBlogPosts();

const entries = [
  ...STATIC.map(p => urlEntry(p.loc, TODAY, p.changefreq, p.priority)),
  ...tests.map(t => urlEntry(`/tests/${t.id}`, t.lastmod, 'monthly', 0.8)),
  ...posts.map(p => urlEntry(`/blog/${p.id}`, p.lastmod, 'monthly', 0.7)),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          https://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${entries.join('\n')}
</urlset>
`;

const outPath = path.join(ROOT, 'public/sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf8');

console.log(`✓ sitemap.xml 생성 완료`);
console.log(`  정적 페이지   : ${STATIC.length}개`);
console.log(`  심리 테스트   : ${tests.length}개`);
console.log(`  블로그 포스트 : ${posts.length}개`);
console.log(`  합계          : ${entries.length}개 URL → ${outPath}`);
