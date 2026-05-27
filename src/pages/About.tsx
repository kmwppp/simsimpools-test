import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SEOMeta } from '../components/seo/SEOMeta';

const BASE_URL = 'https://simsimpools.co.kr';

export function About() {
  return (
    <>
      <SEOMeta
        title="심심풀이 소개"
        description="심심풀이는 심리학적 이론을 바탕으로 누구나 쉽게 자신을 탐색할 수 있는 감성 심리 콘텐츠 플랫폼입니다. 동물 성격 유형, 연애 성향, 스트레스 반응 등 무료 심리 테스트를 제공합니다."
        canonical="/about"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: '심심풀이 소개',
          url: `${BASE_URL}/about`,
          description: '심심풀이는 심리학적 이론을 기반으로 누구나 쉽게 자신을 탐색할 수 있는 감성 심리 콘텐츠 플랫폼입니다.',
          mainEntity: {
            '@type': 'Organization',
            name: '심심풀이',
            url: BASE_URL,
            description: '심리 테스트와 칼럼을 통해 자기이해를 돕는 무료 콘텐츠 플랫폼',
            foundingDate: '2025',
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'kmwppp@daum.net',
              contactType: 'customer support',
              availableLanguage: 'Korean',
            },
          },
        })}</script>
      </Helmet>

      {/* ── 페이지 헤더 ── */}
      <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="section-container py-14">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-600 uppercase mb-3">About</p>
          <h1 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">심심풀이 소개</h1>
          <p className="text-slate-500 max-w-lg leading-relaxed">
            나를 이해하는 여정을 함께합니다.
          </p>
        </div>
      </div>

      <div className="section-container py-12 max-w-3xl mx-auto">

        {/* ── 미션 카드 ── */}
        <div className="bg-gradient-to-br from-brand-50 to-indigo-50 rounded-2xl p-8 mb-10 text-center border border-brand-100">
          <div className="text-5xl mb-5">🧠</div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">우리의 미션</h2>
          <p className="text-slate-700 leading-relaxed text-lg font-medium mb-3">
            "심리학을 일상으로. 자기이해를 즐겁게."
          </p>
          <p className="text-slate-500 leading-relaxed max-w-md mx-auto">
            심심풀이는 복잡한 심리학 이론을 누구나 쉽게 접근할 수 있는 콘텐츠로 만들어,
            자기 자신을 더 깊이 이해하는 경험을 제공합니다.
          </p>
        </div>

        {/* ── 서비스 소개 ── */}
        <div className="prose-content mb-10">
          <h2>심심풀이는 어떤 플랫폼인가요?</h2>
          <p>
            심심풀이는 단순한 재미용 테스트 사이트가 아닙니다. 성격 심리학, 애착 이론,
            감정 심리학 등 학술적 근거를 바탕으로, 사람들이 자신의 성격·감정 패턴·관계 방식을
            이해하는 데 도움을 주는 감성 심리 콘텐츠 플랫폼입니다.
          </p>
          <p>
            각 테스트의 결과는 "당신은 이런 사람입니다"라는 한 줄 설명이 아닙니다.
            성격 특징, 강점과 약점, 인간관계 스타일, 스트레스 패턴, 추천 활동까지
            풍부한 내용을 담아 진정한 자기 이해를 돕습니다.
          </p>

          <h2>콘텐츠 철학</h2>
          <p>
            우리는 모든 사람이 각자의 방식으로 특별하다고 믿습니다. 내향적인 것이 나쁜 것이
            아니고, 외향적인 것이 더 좋은 것도 아닙니다. 감정을 표출하는 것이 약한 것이 아니고,
            감정을 억제하는 것이 강한 것도 아닙니다.
          </p>
          <p>
            심심풀이의 모든 콘텐츠는 어떤 유형이나 성향도 판단하지 않습니다.
            오직 "이런 사람도 있구나", "나는 이런 특징이 있구나"라는 따뜻한 자기 이해를
            목표로 합니다.
          </p>

          <h2>테스트는 어떻게 만들어지나요?</h2>
          <p>
            심심풀이의 테스트는 성격 심리학, 애착 이론, 감정 심리학 등의 이론적 토대 위에서
            개발됩니다. 다만, 이 테스트들은 전문적인 임상 심리 진단 도구가 아닌,
            자기 탐색을 위한 교육·오락 목적의 콘텐츠임을 명확히 밝힙니다.
          </p>
          <p>
            심각한 심리적 어려움이나 정신건강 관련 이슈는 반드시 전문 심리상담사나
            정신건강의학과 전문의의 상담을 받으시길 권장합니다.
          </p>
        </div>

        {/* ── 핵심 가치 ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { icon: '🔬', title: '심리학 기반', desc: '검증된 심리학적 이론을 쉬운 언어로 풀어냅니다.' },
            { icon: '💡', title: '깊이 있는 결과', desc: '단순 라벨링이 아닌 진정한 자기이해 인사이트를 제공합니다.' },
            { icon: '🤝', title: '비판 없는 이해', desc: '어떤 유형도 더 좋거나 나쁘지 않습니다. 다름을 존중합니다.' },
            { icon: '🎁', title: '완전 무료', desc: '모든 테스트와 칼럼을 비용 없이 이용할 수 있습니다.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="card p-5">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-bold text-slate-800 mb-1">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* ── 편집 방침 ── */}
        <div className="card p-7 mb-10 bg-slate-50 border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 mb-5">📋 편집 방침</h2>
          <div className="space-y-5 text-sm text-slate-600 leading-relaxed">
            {[
              {
                title: '콘텐츠 기준',
                desc: '모든 글은 심리학 관련 학술 자료, 단행본, 연구 논문을 참고하여 작성됩니다. 각 칼럼 하단에는 참고문헌을 명시합니다.',
              },
              {
                title: '전문성 고지',
                desc: '심심풀이의 테스트와 칼럼은 심리학 이론을 바탕으로 한 교육·오락 목적의 콘텐츠입니다. 임상 심리 진단이나 정신건강 의학적 판단을 대체하지 않습니다.',
              },
              {
                title: '광고 정책',
                desc: 'Google AdSense를 통해 광고 수익이 발생할 수 있습니다. 광고는 콘텐츠의 방향에 영향을 주지 않으며, 모든 콘텐츠는 광고주와 무관하게 독립적으로 작성됩니다.',
              },
              {
                title: '오류 신고',
                desc: (
                  <>
                    콘텐츠 오류나 수정 요청은{' '}
                    <a href="mailto:kmwppp@daum.net" className="text-brand-600 underline">
                      kmwppp@daum.net
                    </a>
                    으로 보내주세요. 확인 후 신속히 반영하겠습니다.
                  </>
                ),
              },
            ].map(({ title, desc }) => (
              <div key={title}>
                <p className="font-semibold text-slate-700 mb-1">{title}</p>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 편집팀 ── */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-5">✍️ 편집팀</h2>
          <div className="space-y-4">
            {[
              {
                name: '이수현',
                role: '성격 심리 전문 에디터',
                bio: '성격 심리학과 자기이해를 주제로 10년간 콘텐츠를 연구해온 에디터. 내향성·외향성 스펙트럼과 인간관계 패턴을 쉬운 언어로 풀어냅니다.',
              },
              {
                name: '박지민',
                role: '심리학 전공 콘텐츠 큐레이터',
                bio: '심리학을 전공하고 MBTI 기반 성격·관계 콘텐츠를 연구합니다. 이론을 일상에 적용하는 실용적인 글쓰기를 지향합니다.',
              },
              {
                name: '김민서',
                role: '자기계발·인간관계 칼럼니스트',
                bio: '심리학과 철학을 접목해 일상의 감정과 관계를 탐구합니다. 고독, 회복, 자기 돌봄을 주제로 깊이 있는 글을 씁니다.',
              },
            ].map(({ name, role, bio }) => (
              <div key={name} className="card p-5 flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-lg flex-shrink-0">
                  {name[0]}
                </div>
                <div>
                  <p className="font-semibold text-slate-800">{name}</p>
                  <p className="text-xs text-brand-600 mb-1">{role}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">지금 시작해보세요</h2>
          <p className="text-slate-500 mb-6 leading-relaxed">
            심심풀이의 심리 테스트와 칼럼으로 나를 더 잘 이해하는 여정을 시작해보세요.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/tests" className="btn-primary">심리 테스트 시작</Link>
            <Link to="/blog" className="btn-secondary">칼럼 읽기</Link>
          </div>
        </div>
      </div>
    </>
  );
}
