import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { build } from 'esbuild';

const ROOT = process.cwd();

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

const flow = await loadTypeScript('src/utils/testFlow.ts');
const testDataModules = await Promise.all(
  fs.readdirSync(path.join(ROOT, 'src/data/tests'))
    .filter(file => file.endsWith('.ts'))
    .sort()
    .map(file => loadTypeScript(`src/data/tests/${file}`)),
);
const tests = testDataModules.map(module => Object.values(module)[0]);
const { testsMeta } = await loadTypeScript('src/data/tests.ts');
const { testSeoContent } = await loadTypeScript('src/data/testSeoContent.ts');
const { testResultContent } = await loadTypeScript('src/data/testResultContent.ts');

const ORIGINAL_RESULT_KEYS = {
  'animal-personality': ['cat', 'dog', 'fox', 'owl'],
  'love-style': ['romantic', 'pragmatic', 'independent', 'devoted'],
  'stress-response': ['expressive', 'suppressive', 'avoidant', 'solver'],
  'social-distance': ['close', 'balanced', 'independent', 'adaptive'],
  'emotional-recovery': ['active', 'solitary', 'social', 'creative'],
};

const IMMUTABLE_DATA_HASHES = {
  'animal-personality': 'c9eb7e3ef4d89ecaf16dce153d0e2d4a4522fabb8ce5eac3483722a4e781b44b',
  'love-style': '657d6c0d79e764f6cc1e3737ec31706546b91232ffa1837b6f593f9b625f75fb',
  'stress-response': '3eb71206de97f755bba4064b2bebed17144c0ea64708169d5d9046e58b0e47df',
  'social-distance': '0cad131a0b545ecc1c03a88eeed07c2cc311a9ea0d0cc751ff9724c76ab0520a',
  'emotional-recovery': 'd45be12351a8ff66e797e9311608d4f7ae3c6dea69c29cd3e1327e668709b70c',
};

const RESULT_EVIDENCE_TERMS = {
  'animal-personality': { cat: '혼자', dog: '함께', fox: '판단', owl: '정보' },
  'love-style': { romantic: '표현', pragmatic: '생활', independent: '시간', devoted: '약속' },
  'stress-response': { expressive: '드러내', suppressive: '이어가', avoidant: '거리', solver: '원인' },
  'social-distance': { close: '연락', balanced: '혼자', independent: '시간', adaptive: '거리' },
  'emotional-recovery': { active: '움직', solitary: '혼자', social: '함께', creative: '그림' },
};

test('시작은 첫 번째 질문 인덱스를 유지하고 점수를 만들지 않는다', () => {
  const initial = flow.createInitialTestState('sample');
  const started = flow.startTestState(initial);
  assert.equal(started.started, true);
  assert.equal(started.currentQuestion, 0);
  assert.deepEqual(started.scores, {});
  assert.deepEqual(started.answers, []);
});

test('모든 문답은 전체 문항을 답하고 마지막 답변까지 포함해 완료한다', () => {
  for (const definition of tests) {
    let state = flow.startTestState(flow.createInitialTestState(definition.id));
    const expectedScores = {};

    for (const question of definition.questions) {
      const scores = question.options[0].scores;
      for (const [key, value] of Object.entries(scores)) {
        expectedScores[key] = (expectedScores[key] ?? 0) + value;
      }
      state = flow.answerTestQuestion(
        state,
        scores,
        definition.questions.length,
        definition.calculateResult,
      );
    }

    assert.equal(state.answers.length, definition.questions.length, definition.id);
    assert.equal(state.currentQuestion, definition.questions.length, definition.id);
    assert.equal(state.completed, true, definition.id);
    assert.deepEqual(state.scores, expectedScores, definition.id);
    assert.equal(state.resultId, definition.calculateResult(expectedScores), definition.id);
  }
});

test('완료 상태는 재방문 시 복원되고 잘못되거나 오래된 상태는 초기화된다', () => {
  const definition = tests[0];
  let completed = flow.startTestState(flow.createInitialTestState(definition.id));
  for (const question of definition.questions) {
    completed = flow.answerTestQuestion(
      completed,
      question.options[0].scores,
      definition.questions.length,
      definition.calculateResult,
    );
  }

  const restored = flow.normalizeTestState(
    JSON.parse(JSON.stringify(completed)),
    definition.id,
    definition.questions.length,
    Object.keys(definition.results),
  );
  assert.equal(restored.completed, true);
  assert.equal(restored.resultId, completed.resultId);

  const legacy = { ...completed, version: undefined, currentQuestion: 999 };
  assert.deepEqual(
    flow.normalizeTestState(legacy, definition.id, definition.questions.length, Object.keys(definition.results)),
    flow.createInitialTestState(definition.id),
  );

  const corrupted = { ...completed, scores: { unknown: 999 } };
  assert.deepEqual(
    flow.normalizeTestState(corrupted, definition.id, definition.questions.length, Object.keys(definition.results)),
    flow.createInitialTestState(definition.id),
  );
});

test('다시 시작은 질문 인덱스, 답변, 점수와 완료 결과를 초기화한다', () => {
  const restarted = flow.restartTestState('sample');
  assert.equal(restarted.started, true);
  assert.equal(restarted.currentQuestion, 0);
  assert.equal(restarted.completed, false);
  assert.equal(restarted.resultId, undefined);
  assert.deepEqual(restarted.answers, []);
  assert.deepEqual(restarted.scores, {});
});

test('동점은 결과 데이터에 선언된 첫 번째 키 순서를 유지한다', () => {
  for (const definition of tests) {
    const resultKeys = Object.keys(definition.results);
    const tiedScores = Object.fromEntries(resultKeys.map(key => [key, 1]));
    assert.equal(definition.calculateResult(tiedScores), resultKeys[0], definition.id);
  }
});

test('표시 문항 수와 데이터 키가 모든 문답에서 일치한다', () => {
  const metaById = new Map(testsMeta.map(meta => [meta.id, meta]));
  for (const definition of tests) {
    const resultKeys = Object.keys(definition.results);
    assert.equal(metaById.get(definition.id)?.questionCount, definition.questions.length, definition.id);
    assert.equal(new Set(resultKeys).size, resultKeys.length, definition.id);

    for (const [key, result] of Object.entries(definition.results)) {
      assert.equal(result.id, key, `${definition.id}:${key}`);
    }
    for (const question of definition.questions) {
      for (const option of question.options) {
        for (const scoreKey of Object.keys(option.scores)) {
          assert.ok(resultKeys.includes(scoreKey), `${definition.id}:${question.id}:${scoreKey}`);
        }
      }
    }
  }
});

test('SEO 안내는 데이터의 문항 수와 시간을 사용하고 존재하지 않는 결과 설명을 포함하지 않는다', () => {
  for (const definition of tests) {
    const content = JSON.stringify(testSeoContent[definition.id]);
    assert.match(content, new RegExp(`${definition.questions.length}개`), definition.id);
    assert.ok(content.includes(definition.duration), definition.id);
  }

  const loveContent = JSON.stringify(testSeoContent['love-style']);
  for (const result of Object.values(tests.find(item => item.id === 'love-style').results)) {
    assert.ok(loveContent.includes(result.title), result.title);
  }
  for (const misleading of ['불안형', '회피형', '애착 이론', 'Attachment Theory']) {
    assert.ok(!loveContent.includes(misleading), misleading);
  }

  const allSeoContent = JSON.stringify(testSeoContent);
  for (const staleType of ['선택적 친밀형', '외현화 반응 유형', '과활성화 대처 유형']) {
    assert.ok(!allSeoContent.includes(staleType), staleType);
  }
});

test('공개 경로에 가상 이름과 전문가 직함이 남아 있지 않다', () => {
  const targets = ['src', 'public', 'scripts', 'index.html'];
  const files = [];
  const visit = target => {
    const stat = fs.statSync(target);
    if (stat.isDirectory()) {
      for (const entry of fs.readdirSync(target)) visit(path.join(target, entry));
    } else {
      files.push(target);
    }
  };
  targets.map(target => path.join(ROOT, target)).forEach(visit);
  const source = files.map(file => fs.readFileSync(file, 'utf8')).join('\n');
  const forbidden = [
    '박지민', '이수현', '김민서', '상담심리 연구자', '심리 콘텐츠 기획자',
    '심리 콘텐츠 에디터', '성격 심리 전문 에디터', '심리학 전공 콘텐츠 큐레이터',
    '자기계발·인간관계 칼럼니스트', '심심풀이 편집팀', '심심풀이 운영팀',
  ];
  for (const value of forbidden) assert.ok(!source.includes(value), value);
});

test('문답 화면에는 빈 화면 반환과 시작용 가짜 답변이 없다', () => {
  const source = fs.readFileSync(path.join(ROOT, 'src/pages/TestDetail.tsx'), 'utf8');
  assert.ok(!source.includes('answerQuestion({})'));
  assert.ok(!source.includes('if (!currentQ) return null'));
  assert.ok(source.includes('canonical={`/tests/${test.id}`}'));
  assert.ok(source.includes('articleAuthor={AUTHOR_NAME}'));
});

test('개발용 빈 루트는 hydrate하지 않고 새로 렌더링한다', () => {
  const source = fs.readFileSync(path.join(ROOT, 'src/main.tsx'), 'utf8');
  assert.ok(source.includes('root.childElementCount > 0'));
  assert.ok(!source.includes('root.hasChildNodes()'));
});

test('프리렌더 대상이 아닌 결과 URL은 SPA fallback HTML을 hydrate하지 않는다', () => {
  const source = fs.readFileSync(path.join(ROOT, 'src/main.tsx'), 'utf8');
  assert.ok(source.includes("window.location.pathname.startsWith('/results/')"));
  assert.ok(source.includes('hasPrerenderedHtml && !isResultRoute'));
  assert.ok(source.includes('root.replaceChildren()'));
});

test('저장된 문답 상태는 첫 렌더 이후 복원해 프리렌더 HTML과 일치시킨다', () => {
  const source = fs.readFileSync(path.join(ROOT, 'src/hooks/useTestState.ts'), 'utf8');
  assert.ok(source.includes('useState<TestState>(() => createInitialTestState(testId))'));
  assert.ok(source.includes("localStorage.getItem(`${STORAGE_KEY}_${testId}`)"));
});

test('다섯 문답은 서로 다른 목적과 유연한 상세 구조를 가진다', () => {
  const contents = tests.map(definition => testSeoContent[definition.id]);
  assert.equal(new Set(contents.map(content => content.purpose)).size, tests.length);
  assert.equal(new Set(contents.map(content => content.faqTitle)).size, tests.length);
  assert.ok(contents.every(content => content.sections.length >= 4));

  const headingSequences = contents.map(content => content.sections.map(section => section.heading).join('|'));
  assert.equal(new Set(headingSequences).size, tests.length);
});

test('상세 설명은 실제 결과 이름·문항 수·시간만 사용한다', () => {
  for (const definition of tests) {
    const serialized = JSON.stringify(testSeoContent[definition.id]);
    assert.ok(serialized.includes(`${definition.questions.length}개`), definition.id);
    assert.ok(serialized.includes(definition.duration), definition.id);
    for (const result of Object.values(definition.results)) {
      assert.ok(serialized.includes(result.title), `${definition.id}:${result.title}`);
    }
  }
});

test('공개 결과 콘텐츠는 모든 기존 결과 키를 빠짐없이 유지한다', () => {
  for (const definition of tests) {
    const actualKeys = Object.keys(definition.results);
    assert.deepEqual(actualKeys, ORIGINAL_RESULT_KEYS[definition.id], definition.id);
    assert.deepEqual(Object.keys(testResultContent[definition.id]), actualKeys, definition.id);

    for (const key of actualKeys) {
      const content = testResultContent[definition.id][key];
      assert.ok(content.summary.length >= 1, `${definition.id}:${key}:summary`);
      assert.ok(content.sections.length >= 1, `${definition.id}:${key}:sections`);
      assert.ok(content.reflectionQuestion, `${definition.id}:${key}:question`);
      assert.ok(content.smallAction, `${definition.id}:${key}:action`);
    }
  }
});

test('문답 공개 설명에는 판정·우열·근거 없는 인과를 주장하는 문장이 없다', () => {
  const publicContent = [
    JSON.stringify(testSeoContent),
    JSON.stringify(testResultContent),
    fs.readFileSync(path.join(ROOT, 'src/pages/TestMethodology.tsx'), 'utf8'),
  ].join('\n');
  const forbiddenClaims = [
    '성격을 진단합니다', '애착 유형을 알려줍니다', '번아웃 여부를 알려줍니다',
    '우울증을 진단', '더 우월한', '회복력이 더 높', '관계 성공 가능성을 예측',
    '기질에서 비롯됩니다', '의지가 없는',
  ];
  for (const claim of forbiddenClaims) assert.ok(!publicContent.includes(claim), claim);
});

test('문답 제작 원칙 경로는 라우트·푸터·상세·결과·사이트맵 생성기에 연결된다', () => {
  const route = fs.readFileSync(path.join(ROOT, 'src/AppRoutes.tsx'), 'utf8');
  const footer = fs.readFileSync(path.join(ROOT, 'src/components/layout/Footer.tsx'), 'utf8');
  const detail = fs.readFileSync(path.join(ROOT, 'src/components/test/TestSEOSection.tsx'), 'utf8');
  const result = fs.readFileSync(path.join(ROOT, 'src/pages/ResultPage.tsx'), 'utf8');
  const sitemapGenerator = fs.readFileSync(path.join(ROOT, 'scripts/generate-sitemap.mjs'), 'utf8');
  assert.ok(route.includes('path="test-methodology"'));
  for (const source of [footer, detail, result, sitemapGenerator]) {
    assert.ok(source.includes('/test-methodology'));
  }
});

test('결과 검색 정책과 상태 버전 2는 변경되지 않는다', () => {
  const resultPage = fs.readFileSync(path.join(ROOT, 'src/pages/ResultPage.tsx'), 'utf8');
  const flowSource = fs.readFileSync(path.join(ROOT, 'src/utils/testFlow.ts'), 'utf8');
  assert.ok(resultPage.includes('canonical={`/tests/${testId}`}'));
  assert.ok(resultPage.includes('noindex'));
  assert.equal(flow.TEST_STATE_VERSION, 2);
  assert.ok(flowSource.includes('TEST_STATE_VERSION = 2'));
});

test('방법론 페이지는 목적·문항·채점·동점·검토·출처·운영 한계를 공개한다', () => {
  const source = fs.readFileSync(path.join(ROOT, 'src/pages/TestMethodology.tsx'), 'utf8');
  for (const heading of ['문답의 목적', '문항을 만드는 방식', '점수 합산과 결과', '검토와 업데이트', '출처 사용 원칙', '운영자의 범위와 한계']) {
    assert.ok(source.includes(heading), heading);
  }
  assert.ok(source.includes("'@type': 'WebPage'"));
  assert.ok(source.includes('canonical="/test-methodology"'));
  assert.ok(!source.includes('FAQPage'));
  assert.ok(!source.includes('Quiz'));
});

test('결과 객체와 TestResult 타입에는 실제 사용 필드만 남는다', () => {
  const expectedFields = ['emoji', 'id', 'relatedTests', 'subtitle', 'title'];
  const removedFields = [
    'description', 'traits', 'strengths', 'weaknesses', 'relationships',
    'stressPattern', 'recommendedActivities', 'selfGuide', 'shareText',
  ];
  const typeSource = fs.readFileSync(path.join(ROOT, 'src/types/test.ts'), 'utf8');
  const interfaceSource = typeSource.match(/export interface TestResult \{([\s\S]*?)\n\}/)?.[1] ?? '';

  for (const field of removedFields) assert.ok(!interfaceSource.includes(`${field}:`), field);
  for (const definition of tests) {
    for (const [key, result] of Object.entries(definition.results)) {
      assert.deepEqual(Object.keys(result).sort(), expectedFields, `${definition.id}:${key}`);
    }
  }
});

test('결과 20개의 키·순서·이름·관련 문답과 문항·선택지·점수는 기준 상태를 유지한다', () => {
  assert.equal(tests.reduce((count, definition) => count + Object.keys(definition.results).length, 0), 20);

  for (const definition of tests) {
    assert.deepEqual(Object.keys(definition.results), ORIGINAL_RESULT_KEYS[definition.id], definition.id);
    const immutableData = JSON.stringify({
      questions: definition.questions,
      resultKeys: Object.keys(definition.results),
      resultTitles: Object.values(definition.results).map(result => result.title),
      relatedTests: Object.values(definition.results).map(result => result.relatedTests),
    });
    const hash = createHash('sha256').update(immutableData).digest('hex');
    assert.equal(hash, IMMUTABLE_DATA_HASHES[definition.id], definition.id);
  }
});

test('결과 subtitle 20개는 존재하며 선택 경향만 중립적으로 요약한다', () => {
  const forbiddenPattern = /(?:하는 당신|당신$|사랑의 달인|치유|최고|탁월|완벽|천재|우월|전문성|따뜻하|영리하|성격|기질|진단|애착|정신건강|번아웃)/;
  const subtitles = [];

  for (const definition of tests) {
    for (const [key, result] of Object.entries(definition.results)) {
      assert.equal(typeof result.subtitle, 'string', `${definition.id}:${key}`);
      assert.ok(result.subtitle.trim().length >= 20, `${definition.id}:${key}`);
      assert.doesNotMatch(result.subtitle, forbiddenPattern, `${definition.id}:${key}`);
      subtitles.push(result.subtitle);
    }
  }

  assert.equal(subtitles.length, 20);
  assert.equal(new Set(subtitles).size, 20);
});

test('결과 subtitle과 새 결과 본문은 같은 응답 선택 근거를 공유한다', () => {
  for (const definition of tests) {
    for (const [key, result] of Object.entries(definition.results)) {
      const evidence = RESULT_EVIDENCE_TERMS[definition.id][key];
      const summary = testResultContent[definition.id][key].summary.join(' ');
      assert.ok(result.subtitle.includes(evidence), `${definition.id}:${key}:subtitle:${evidence}`);
      assert.ok(summary.includes(evidence), `${definition.id}:${key}:summary:${evidence}`);
    }
  }
});

test('공개 결과 데이터에서 구형 단정·우열·치유 문구가 제거된다', () => {
  const publicResultData = [JSON.stringify(tests), JSON.stringify(testResultContent)].join('\n');
  const stalePhrases = [
    '사랑의 달인', '감정을 치유하는 당신', '성격을 가진 당신',
    '독립적이고 신비로운 나만의 세계를 가진 당신',
    '영리하고 유연하게 세상을 헤쳐나가는 당신',
    '표현하고 만들어내며 감정을 치유',
  ];
  for (const phrase of stalePhrases) assert.ok(!publicResultData.includes(phrase), phrase);
});

test('문답 상단 공개 필드는 검사나 건강 판정으로 오인할 표현을 사용하지 않는다', () => {
  for (const definition of tests) {
    const publicMeta = [
      definition.title, definition.subtitle, definition.description,
      definition.category, ...definition.tags,
    ].join(' ');
    assert.doesNotMatch(publicMeta, /테스트|심리 성향|심리|건강/, definition.id);
  }
});

test('결과 화면과 공유는 중립 subtitle과 새 결과 본문을 사용하고 결과 URL 정책을 유지한다', () => {
  const resultPage = fs.readFileSync(path.join(ROOT, 'src/pages/ResultPage.tsx'), 'utf8');
  const detailPage = fs.readFileSync(path.join(ROOT, 'src/pages/TestDetail.tsx'), 'utf8');
  const sitemapGenerator = fs.readFileSync(path.join(ROOT, 'scripts/generate-sitemap.mjs'), 'utf8');
  assert.ok(resultPage.includes('<p className="text-white/80 text-lg">{result.subtitle}</p>'));
  assert.ok(resultPage.includes('description={`${test.title} 결과: ${result.subtitle}. ${content.summary[0]}`}'));
  assert.ok(resultPage.includes('text: content.summary[0]'));
  assert.ok(detailPage.includes('to={`/results/${test.id}/${result.id}`}'));
  assert.ok(!sitemapGenerator.includes('/results/'));
});

test('방법론 페이지는 1인 운영과 전문 자격·진단·증상 대응의 한계를 명시한다', () => {
  const source = fs.readFileSync(path.join(ROOT, 'src/pages/TestMethodology.tsx'), 'utf8');
  for (const statement of [
    '심심풀이 운영자 1인이 운영', '전문 상담가', '임상심리사', '의료인이 아닙니다',
    '전문 상담, 표준화 검사, 의료적 판단 또는 진단을 대신하지 않습니다',
    '심각하거나 지속되는 증상', '전문가나 기관의 도움',
  ]) {
    assert.ok(source.includes(statement), statement);
  }
});
