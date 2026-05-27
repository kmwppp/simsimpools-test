import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SEOMeta } from '../components/seo/SEOMeta';

const BASE_URL = 'https://simsimpools.co.kr';

export function About() {
  return (
    <>
      <SEOMeta
        title="심심풀이 소개"
        description="심심풀이는 설명하기 어려운 나의 반응들을 조금 더 선명하게 관찰하는 사이트입니다. 심리 테스트 5가지, 관찰 에세이 18편을 무료로 제공합니다."
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
            설명하기 어려운 나의 반응들을 조금 더 선명하게.
          </p>
        </div>
      </div>

      <div className="section-container py-12 max-w-3xl mx-auto">

        {/* ── 서비스 소개 ── */}
        <div className="prose-content mb-10">
          <h2>심심풀이는 어떤 사이트인가요?</h2>
          <p>
            심심풀이는 사람들이 자신의 반응을 관찰하는 데 도움을 주는 사이트입니다.
            재밌게 놀고 왔는데 집에 오자마자 혼자 있고 싶은 이유, 거절하고 나서 왜 내가 더 불편한지,
            어떤 사람을 만나고 오면 유난히 지치는 이유처럼 —
            설명하기 어려운 내 반응들을 조금 더 선명하게 들여다보기 위한 테스트와 에세이를 만들고 있습니다.
          </p>
          <p>
            심리학 이론을 배우는 것이 목적이 아닙니다.
            성격 심리학, 애착 이론, 감정 심리학의 개념들을 빌려 오지만,
            그 이론보다 먼저 있었던 실제 경험 — 연락이 늦을 때 느끼는 불안, 말이 끝나고 나서야 오는 후회,
            특정 자리에서만 유독 기운이 빠지는 감각 — 에 더 가까이 다가가려고 합니다.
          </p>

          <h2>콘텐츠에 대해</h2>
          <p>
            테스트 결과는 "당신은 이런 사람입니다"라는 선언이 아닙니다.
            지금의 나를 관찰하는 출발점에 가깝습니다.
            같은 테스트를 1년 뒤에 다시 하면 달라질 수 있고, 컨디션에 따라 다르게 나올 수도 있어요.
            그 변화 자체가 나에 대한 정보입니다.
          </p>
          <p>
            에세이도 마찬가지입니다. 내향적인 것이 어떤 것인지를 설명하기보다,
            사람 많은 자리에서 돌아와 왜 아무 말도 하기 싫은지를 이야기합니다.
            어떤 유형이 더 좋다고 말하지 않습니다. 다만 이런 사람도 있고, 저런 사람도 있고,
            나는 어떤 순간에 어떻게 반응하는 사람인지 — 그걸 같이 들여다봅니다.
          </p>
          <p>
            심심풀이의 콘텐츠는 심리 상담이나 임상 진단을 대체하지 않습니다.
            심각한 심리적 어려움이나 정신건강 관련 이슈는 반드시 전문 심리상담사나
            정신건강의학과 전문의의 상담을 받으시길 권장합니다.
          </p>
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
