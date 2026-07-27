import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const BASE_URL = 'https://simsimpools.co.kr';
const EXPECTED_INDEXABLE_ROUTES = 43;

async function loadTypeScript(entryPoint) {
  const result = await build({
    entryPoints: [path.join(ROOT, entryPoint)],
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: 'node20',
    write: false,
  });
  const source = result.outputFiles[0].text;
  return import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
}

function outputFile(route) {
  return route === '/'
    ? path.join(DIST, 'index.html')
    : path.join(DIST, route.replace(/^\//, ''), 'index.html');
}

function collectIndexFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectIndexFiles(fullPath);
    return entry.name === 'index.html' ? [fullPath] : [];
  });
}

function routeFromFile(file) {
  const relative = path.relative(DIST, file).split(path.sep).join('/');
  return relative === 'index.html' ? '/' : `/${relative.replace(/\/index\.html$/, '')}`;
}

function assertContains(source, value, context) {
  assert.ok(source.includes(value), `${context}: ${value}`);
}

const [{ tests }, { testSeoContent }] = await Promise.all([
  loadTypeScript('src/data/tests.ts'),
  loadTypeScript('src/data/testSeoContent.ts'),
]);
const { render } = await import(path.join(DIST, 'server/entry-server.js'));

const sitemap = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
const sitemapRoutes = sitemapUrls.map(url => url.replace(BASE_URL, '') || '/');
assert.equal(sitemapRoutes.length, EXPECTED_INDEXABLE_ROUTES, 'sitemap URL 수');
assert.equal(new Set(sitemapRoutes).size, EXPECTED_INDEXABLE_ROUTES, 'sitemap URL 중복');
assert.ok(sitemapRoutes.every(route => !route.startsWith('/results/')), '결과 URL은 sitemap에서 제외');

const prerenderFiles = collectIndexFiles(DIST);
const prerenderRoutes = prerenderFiles.map(routeFromFile).sort();
assert.equal(prerenderRoutes.length, EXPECTED_INDEXABLE_ROUTES, '프리렌더 HTML 수');
assert.deepEqual(prerenderRoutes, [...sitemapRoutes].sort(), 'sitemap과 프리렌더 경로 일치');

for (const definition of tests) {
  const route = `/tests/${definition.id}`;
  const html = fs.readFileSync(outputFile(route), 'utf8');
  const seo = testSeoContent[definition.id];
  assertContains(html, `<title data-rh="true">${definition.title} | 심심풀이</title>`, `${route}:title`);
  assertContains(html, `name="description" content="${definition.description}"`, `${route}:description`);
  assertContains(html, `rel="canonical" href="${BASE_URL}${route}"`, `${route}:canonical`);
  assertContains(html, 'name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"', `${route}:robots`);
  assertContains(html, seo.purpose, `${route}:purpose`);
  for (const section of seo.sections) assertContains(html, section.heading, `${route}:section`);
  for (const result of Object.values(definition.results)) assertContains(html, result.title, `${route}:result-title`);
  assertContains(html, 'href="/test-methodology"', `${route}:methodology-link`);
}

const methodologyRoute = '/test-methodology';
const methodologyHtml = fs.readFileSync(outputFile(methodologyRoute), 'utf8');
for (const text of [
  '<title data-rh="true">문답 제작 원칙과 채점 방식 | 심심풀이</title>',
  `rel="canonical" href="${BASE_URL}${methodologyRoute}"`,
  'name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"',
  '"@type":"WebPage"',
  '문답의 목적', '문항을 만드는 방식', '점수 합산과 결과', '검토와 업데이트',
  '출처 사용 원칙', '운영자의 범위와 한계', '심심풀이 운영자 1인이 운영',
  '전문 상담가', '임상심리사', '의료인이 아닙니다', '심각하거나 지속되는 증상',
  '전문가나 기관의 도움',
]) {
  assertContains(methodologyHtml, text, `${methodologyRoute}:body`);
}

const resultRoutes = new Set(
  tests.flatMap(definition => Object.keys(definition.results).map(key => `/results/${definition.id}/${key}`)),
);
const validInternalRoutes = new Set([...sitemapRoutes, ...resultRoutes]);
const internalLinkErrors = [];
for (const file of prerenderFiles) {
  const sourceRoute = routeFromFile(file);
  const html = fs.readFileSync(file, 'utf8');
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (!href.startsWith('/') || href.startsWith('/assets/')) continue;
    const target = href.split(/[?#]/, 1)[0] || '/';
    if (/\.[a-z0-9]+$/i.test(target)) continue;
    if (!validInternalRoutes.has(target)) internalLinkErrors.push(`${sourceRoute} -> ${href}`);
  }
}
assert.deepEqual(internalLinkErrors, [], '내부 링크 오류');

const legacySubtitles = [
  '독립적이고 신비로운 나만의 세계를 가진 당신', '따뜻하고 활발한 에너지로 주변을 밝히는 당신',
  '영리하고 유연하게 세상을 헤쳐나가는 당신', '깊고 체계적인 사고로 세상을 이해하는 당신',
  '사랑의 설레임과 감동을 소중히 여기는 당신', '안정과 신뢰를 기반으로 사랑을 쌓아가는 당신',
  '나답게 사랑하며 자신을 잃지 않는 당신', '온 마음을 다해 상대를 위하는 사랑의 달인',
  '감정을 바깥으로 드러내며 에너지를 발산하는 당신', '감정을 안으로 삭이며 혼자 견디는 당신',
  '스트레스 상황에서 거리를 두며 재충전하는 당신', '스트레스의 원인을 찾아 직접 해결하려는 당신',
  '따뜻한 유대감으로 가까운 관계를 소중히 여기는 당신', '가깝지도 멀지도 않은 편안한 거리를 찾는 당신',
  '명확한 경계선으로 나만의 공간을 소중히 여기는 당신', '관계와 맥락에 따라 유연하게 거리를 조율하는 당신',
  '몸을 움직이고 행동하면서 에너지를 되찾는 당신', '혼자만의 조용한 시간으로 내면을 채우는 당신',
  '소중한 사람과의 연결로 힘을 되찾는 당신', '표현하고 만들어내며 감정을 치유하는 당신',
];

let renderedResults = 0;
for (const definition of tests) {
  for (const [key, result] of Object.entries(definition.results)) {
    const route = `/results/${definition.id}/${key}`;
    const rendered = render(route);
    const head = [rendered.helmet.title.toString(), rendered.helmet.meta.toString(), rendered.helmet.link.toString()].join('\n');
    assertContains(head, 'name="robots" content="noindex,nofollow"', `${route}:robots`);
    assertContains(head, `rel="canonical" href="${BASE_URL}/tests/${definition.id}"`, `${route}:canonical`);
    assertContains(head, result.subtitle, `${route}:meta-subtitle`);
    assertContains(rendered.html, result.subtitle, `${route}:screen-subtitle`);
    const resultDocument = `${head}\n${rendered.html}`;
    for (const stale of legacySubtitles) assert.ok(!resultDocument.includes(stale), `${route}:구형 subtitle: ${stale}`);
    assert.doesNotMatch(resultDocument, /사랑의 달인|감정을 치유하는 당신|성격을 가진 당신/, route);
    renderedResults += 1;
  }
}
assert.equal(renderedResults, 20, 'SSR 결과 페이지 수');

fs.rmSync(path.join(DIST, 'server'), { recursive: true, force: true });
console.log(`✓ 빌드 검증 완료: sitemap ${sitemapRoutes.length}, 프리렌더 ${prerenderRoutes.length}, 내부 링크 오류 ${internalLinkErrors.length}, SSR 결과 ${renderedResults}`);
