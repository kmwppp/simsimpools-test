import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const BASE_URL = 'https://simsimpools.co.kr';
const EXPECTED_INDEXABLE_ROUTES = 43;
const UPDATED_BLOG_IDS = [
  'emotional-recovery-types', 'people-pleasing-signs', 'small-self-care-routine',
  'relationship-red-flags', 'emotional-drain-patterns', 'solitude-recovery',
  'perfectionism', 'high-empathy', 'self-efficacy-habits', 'mindfulness-habits',
];

async function loadTypeScript(entryPoint) {
  const result = await build({
    entryPoints: [path.join(ROOT, entryPoint)], bundle: true, format: 'esm',
    platform: 'node', target: 'node20', write: false,
  });
  return import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
}

function outputFile(route) {
  return route === '/' ? path.join(DIST, 'index.html') : path.join(DIST, route.replace(/^\//, ''), 'index.html');
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

function escapeHtmlAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function jsonLdDocuments(html, context) {
  return [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match, index) => {
    try { return JSON.parse(match[1]); }
    catch (error) { throw new Error(`${context}: JSON-LD ${index + 1} 파싱 실패: ${error.message}`); }
  });
}

function walk(value, visit, key = '') {
  visit(value, key);
  if (Array.isArray(value)) value.forEach(item => walk(item, visit, key));
  else if (value && typeof value === 'object') Object.entries(value).forEach(([childKey, child]) => walk(child, visit, childKey));
}

const [{ tests }, { testSeoContent }, { blogPosts }, { blogInteractiveById }] = await Promise.all([
  loadTypeScript('src/data/tests.ts'), loadTypeScript('src/data/testSeoContent.ts'),
  loadTypeScript('src/data/blog.ts'), loadTypeScript('src/data/blogInteractive.ts'),
]);

const sitemap = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
const sitemapRoutes = sitemapUrls.map(url => url.replace(BASE_URL, '') || '/');
assert.equal(sitemapRoutes.length, EXPECTED_INDEXABLE_ROUTES, 'sitemap URL 수');
assert.equal(new Set(sitemapRoutes).size, EXPECTED_INDEXABLE_ROUTES, 'sitemap URL 중복');
assert.ok(sitemapRoutes.every(route => !route.startsWith('/results/')), '결과 URL은 sitemap에서 제외');

const resultRoutes = tests.flatMap(definition =>
  Object.keys(definition.results).map(key => `/results/${definition.id}/${key}`),
);
assert.equal(resultRoutes.length, 20, '데이터에서 추출한 결과 URL 수');
assert.equal(new Set(resultRoutes).size, resultRoutes.length, '결과 URL 중복');

const prerenderFiles = collectIndexFiles(DIST);
const prerenderRoutes = prerenderFiles.map(routeFromFile).sort();
const expectedPrerenderRoutes = [...sitemapRoutes, ...resultRoutes].sort();
assert.equal(prerenderRoutes.length, EXPECTED_INDEXABLE_ROUTES + resultRoutes.length, '전체 프리렌더 HTML 수');
assert.deepEqual(prerenderRoutes, expectedPrerenderRoutes, '색인 및 결과 프리렌더 경로 일치');
assert.ok(sitemapRoutes.every(route => fs.existsSync(outputFile(route))), '모든 sitemap URL의 HTML 존재');

const canonicalPattern = /<link[^>]+rel="canonical"[^>]*>/g;
for (const route of sitemapRoutes) {
  const html = fs.readFileSync(outputFile(route), 'utf8');
  assert.equal((html.match(canonicalPattern) ?? []).length, 1, `${route}: canonical 하나`);
  assert.doesNotMatch(html, /name="robots" content="noindex/i, `${route}: sitemap 페이지 noindex 금지`);
}

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

assert.equal(blogPosts.length, 29, '에세이 데이터 수');
assert.equal(sitemapRoutes.filter(route => route.startsWith('/blog/')).length, 29, 'sitemap 에세이 URL 수');
let verifiedBlogPages = 0;
for (const post of blogPosts) {
  const route = `/blog/${post.id}`;
  const html = fs.readFileSync(outputFile(route), 'utf8');
  assertContains(html, `<title data-rh="true">${escapeHtmlAttribute(post.title)} | 심심풀이</title>`, `${route}:title`);
  assertContains(html, `name="description" content="${escapeHtmlAttribute(post.excerpt)}"`, `${route}:description`);
  assertContains(html, `rel="canonical" href="${BASE_URL}${route}"`, `${route}:canonical`);
  assertContains(html, 'name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"', `${route}:robots`);
  assertContains(html, escapeHtmlAttribute(post.subtitle), `${route}:subtitle`);
  assertContains(html, escapeHtmlAttribute(post.sections[0].content.slice(0, 40)), `${route}:body`);
  const interactive = blogInteractiveById[post.id];
  assertContains(html, interactive.title, `${route}:interactive-title`);
  for (const block of interactive.blocks) assertContains(html, block.label, `${route}:interactive-block`);

  const schemas = jsonLdDocuments(html, route);
  const article = schemas.find(schema => schema['@type'] === 'BlogPosting');
  assert.ok(article, `${route}: BlogPosting`);
  assert.deepEqual(article.author, {
    '@type': 'Person', '@id': `${BASE_URL}/#author`, name: '심심풀이 운영자', url: `${BASE_URL}/about`,
  }, `${route}: author`);
  assert.equal(article.publisher['@type'], 'Organization', `${route}: publisher type`);
  assert.equal(article.publisher.name, '심심풀이', `${route}: publisher name`);
  assert.equal(article.datePublished, post.publishedAt, `${route}: datePublished`);
  assert.equal(article.dateModified, post.lastModified ?? post.publishedAt, `${route}: dateModified`);
  assertContains(html, `property="article:author" content="${BASE_URL}/#author"`, `${route}:article-author`);
  if (UPDATED_BLOG_IDS.includes(post.id)) {
    assert.equal(article.dateModified, '2026-07-27', `${route}: requested modified date`);
    assertContains(html, '<time dateTime="2026-07-27">2026-07-27</time>', `${route}: screen modified date`);
  }
  verifiedBlogPages += 1;
}

const aboutHtml = fs.readFileSync(outputFile('/about'), 'utf8');
assertContains(aboutHtml, '에세이 게시 기록 2025년 8월부터', '/about: earliest publication');
assertContains(aboutHtml, '현재 Git 이력 2026년 5월 26일부터', '/about: Git history');
const aboutSchemas = jsonLdDocuments(aboutHtml, '/about');
const aboutGraph = aboutSchemas
  .filter(schema => Array.isArray(schema['@graph']))
  .flatMap(schema => schema['@graph']);
const person = aboutGraph.find(item => item['@type'] === 'Person');
assert.deepEqual(
  { type: person?.['@type'], id: person?.['@id'], name: person?.name, url: person?.url },
  { type: 'Person', id: `${BASE_URL}/#author`, name: '심심풀이 운영자', url: `${BASE_URL}/about` },
  '/about: author Person',
);

const methodologyRoute = '/test-methodology';
const methodologyHtml = fs.readFileSync(outputFile(methodologyRoute), 'utf8');
for (const text of [
  '<title data-rh="true">문답 제작 원칙과 채점 방식 | 심심풀이</title>',
  `rel="canonical" href="${BASE_URL}${methodologyRoute}"`,
  'name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"',
  '"@type":"WebPage"', '문답의 목적', '문항을 만드는 방식', '점수 합산과 결과',
  '검토와 업데이트', '출처 사용 원칙', '운영자의 범위와 한계',
]) assertContains(methodologyHtml, text, `${methodologyRoute}:body`);

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
let verifiedResults = 0;
for (const definition of tests) {
  for (const [key, result] of Object.entries(definition.results)) {
    const route = `/results/${definition.id}/${key}`;
    const html = fs.readFileSync(outputFile(route), 'utf8');
    assertContains(html, 'name="robots" content="noindex,nofollow"', `${route}:robots`);
    assertContains(html, `rel="canonical" href="${BASE_URL}/tests/${definition.id}"`, `${route}:canonical`);
    assertContains(html, result.subtitle, `${route}:subtitle`);
    assert.ok(!html.includes('<title data-rh="true">심심풀이 - 나를 알아가는 시간</title>'), `${route}: 홈 제목 금지`);
    assert.ok(!sitemapRoutes.includes(route), `${route}: sitemap 제외`);
    for (const stale of legacySubtitles) assert.ok(!html.includes(stale), `${route}: 구형 subtitle`);
    assert.doesNotMatch(html, /사랑의 달인|감정을 치유하는 당신|성격을 가진 당신/, route);
    verifiedResults += 1;
  }
}
assert.equal(verifiedResults, 20, '결과 프리렌더 HTML 수');

const notFoundHtml = fs.readFileSync(path.join(DIST, '404.html'), 'utf8');
assertContains(notFoundHtml, 'name="robots" content="noindex,nofollow"', '404:robots');
assert.equal((notFoundHtml.match(canonicalPattern) ?? []).length, 0, '404: canonical 없음');
assert.doesNotMatch(notFoundHtml, /google-adsense-account|pagead2\.googlesyndication\.com|adsbygoogle/i, '404: AdSense 없음');
assertContains(notFoundHtml, 'href="/"', '404:home link');
assertContains(notFoundHtml, 'href="/tests"', '404:tests link');

const png = fs.readFileSync(path.join(DIST, 'og-image.png'));
assert.deepEqual([...png.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10], 'OG PNG signature');
assert.equal(png.readUInt32BE(16), 1200, 'OG width');
assert.equal(png.readUInt32BE(20), 630, 'OG height');

for (const file of [...prerenderFiles, path.join(DIST, '404.html')]) {
  const route = file.endsWith('404.html') ? '/404.html' : routeFromFile(file);
  const html = fs.readFileSync(file, 'utf8');
  for (const schema of jsonLdDocuments(html, route)) {
    walk(schema, (value, key) => {
      if (typeof value !== 'string' || !/\.(?:png|jpe?g|webp)(?:$|\?)/i.test(value)) return;
      assert.ok(value.startsWith(BASE_URL), `${route}: 외부/잘못된 구조화 데이터 이미지 ${value}`);
      const imagePath = new URL(value).pathname.replace(/^\//, '');
      assert.ok(fs.existsSync(path.join(DIST, imagePath)), `${route}: 없는 구조화 데이터 이미지 ${key}=${value}`);
    });
  }
  for (const property of ['og:image', 'twitter:image']) {
    const pattern = new RegExp(`(?:property|name)="${property}" content="([^"]+)"`);
    const match = html.match(pattern);
    if (!match) continue;
    const imagePath = new URL(match[1]).pathname.replace(/^\//, '');
    assert.ok(fs.existsSync(path.join(DIST, imagePath)), `${route}: 없는 ${property} ${match[1]}`);
  }
}

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

fs.rmSync(path.join(DIST, 'server'), { recursive: true, force: true });
console.log(
  `✓ 빌드 검증 완료: sitemap ${sitemapRoutes.length}, 전체 프리렌더 ${prerenderRoutes.length} ` +
  `(색인 ${sitemapRoutes.length} + 결과 ${verifiedResults}), 에세이 ${verifiedBlogPages}, 내부 링크 오류 ${internalLinkErrors.length}`,
);
