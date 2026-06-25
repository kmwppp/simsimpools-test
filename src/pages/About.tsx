import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SEOMeta } from '../components/seo/SEOMeta';

const BASE_URL = 'https://simsimpools.co.kr';

const CHANGELOG = [
  { date: '2026년 5월', note: '에세이 21편 관찰 중심 문체 개편, 독자 피드백 기능 추가, 수정일 표시 적용' },
  { date: '2026년 3월', note: '사이트 전체 UI 개편 및 에세이 카테고리 재편' },
  { date: '2026년 1월', note: '짧은 문답 5종 추가 (관계·연애·스트레스·회복·감정)' },
  { date: '2025년 11월', note: '심심풀이 서비스 오픈, 에세이 1차 게시 (11편)' },
];

export function About() {
  return (
    <>
      <SEOMeta
        title="심심풀이 소개"
        description="심심풀이는 설명하기 어려운 나의 반응들을 조금 더 선명하게 관찰하는 독립 콘텐츠 사이트입니다. 2025년 시작, 개인이 운영합니다."
        canonical="/about"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'AboutPage',
              '@id': `${BASE_URL}/about`,
              name: '심심풀이 소개',
              url: `${BASE_URL}/about`,
              description: '심심풀이는 설명하기 어려운 나의 반응들을 관찰하는 독립 콘텐츠 사이트입니다.',
              mainEntity: { '@id': `${BASE_URL}/#organization` },
            },
            {
              '@type': 'Organization',
              '@id': `${BASE_URL}/#organization`,
              name: '심심풀이',
              url: BASE_URL,
              email: 'kmwppp@daum.net',
              foundingDate: '2025',
              description: '말로 잘 정리되지 않는 피로와 서운함, 관계의 어긋남을 생활 가까이에서 관찰해 적는 독립 콘텐츠 사이트',
              inLanguage: 'ko-KR',
              sameAs: [
                'https://github.com/kmwppp/simsimpools-test',
                'mailto:kmwppp@daum.net',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'kmwppp@daum.net',
                contactType: 'customer support',
                availableLanguage: 'Korean',
              },
              founder: { '@id': `${BASE_URL}/#author` },
            },
            {
              '@type': 'Person',
              '@id': `${BASE_URL}/#author`,
              name: '심심풀이 운영자',
              description:
                '심리학 전문가나 임상가가 아니라, 자신의 감정 반응을 오래 관찰하고 기록해 온 개인 운영자입니다. 직접 겪고 관찰한 경험을 바탕으로 글을 씁니다.',
              url: `${BASE_URL}/about`,
              email: 'kmwppp@daum.net',
              knowsAbout: ['감정 관찰', '관계 심리', '자기 이해', '에세이 글쓰기'],
            },
          ],
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
            심심풀이는 사람들이 자신의 반응을 관찰하는 데 도움을 주는 독립 콘텐츠 사이트입니다.
            재밌게 놀고 왔는데 집에 오자마자 혼자 있고 싶은 이유, 거절하고 나서 왜 내가 더 불편한지,
            어떤 사람을 만나고 오면 유난히 지치는 이유처럼 —
            설명하기 어려운 내 반응들을 조금 더 선명하게 들여다보기 위한 짧은 문답과 에세이를 만들고 있습니다.
          </p>
          <p>
            심리학 이론을 배우는 것이 목적이 아닙니다.
            성격 심리학, 애착 이론, 감정 심리학의 개념들을 빌려 오지만,
            그 이론보다 먼저 있었던 실제 경험에 더 가까이 다가가려고 합니다.
          </p>

          <h2>이 글을 쓰는 사람</h2>
          <p>
            글 끝에는 "심심풀이 편집팀"이라고 적혀 있지만, 사실 이곳은 한 사람이 혼자
            기획하고, 쓰고, 다듬는 작은 사이트입니다. 심리학을 전공했거나 임상 자격이 있는
            사람은 아닙니다. 다만 "왜 나는 이런 순간에 이렇게 반응할까"를 그냥 흘려보내지 않고
            오래 문장으로 남겨온 사람입니다.
          </p>
          <p>
            처음에는 저 자신을 위해 적었습니다. 사람들 사이에서 돌아온 날의 피로, 별것 아닌
            말에 며칠을 걸려 있던 마음 같은 걸 메모해두다 보니, 같은 장면을 겪는 사람이
            저만은 아니겠다는 생각이 들었어요. 그래서 2025년부터 그 기록을 조금 다듬어 이곳에
            하나씩 공개하기 시작했습니다.
          </p>
          <p>
            그래서 이 사이트의 글은 "이것이 정답"이라고 단정하지 않습니다. 제가 직접 겪고
            관찰한 범위 안에서, 필요하면 성격·애착·감정 심리학의 개념을 참고해 풀어 쓸
            뿐입니다. 전문적인 진단이 필요한 부분은 분명히 선을 긋고, 그건 전문가의 영역이라고
            말합니다. 콘텐츠의 한계는{' '}
            <Link to="/disclaimer" className="text-brand-600 underline">면책 고지</Link>에 더
            자세히 적어두었습니다.
          </p>

          <h2>콘텐츠에 대해</h2>
          <p>
            문답 결과는 "당신은 이런 사람입니다"라는 선언이 아닙니다.
            지금의 나를 관찰하는 출발점에 가깝습니다.
            같은 문답을 1년 뒤에 다시 하면 달라질 수 있고, 컨디션에 따라 다르게 나올 수도 있어요.
            그 변화 자체가 나에 대한 정보입니다.
          </p>
          <p>
            심심풀이의 콘텐츠는 전문적인 심리 상담이나 임상 진단을 대체하지 않습니다.
            심각한 심리적 어려움이 있다면 반드시 전문 상담사나 정신건강의학과 전문의와 상담하시길 권장합니다.
          </p>
        </div>

        {/* ── 운영 정보 ── */}
        <div className="card p-7 mb-10 bg-slate-50 border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 mb-5">🏠 운영 정보</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
            {[
              { label: '운영 형태', value: '개인이 운영하는 독립 콘텐츠 사이트' },
              { label: '시작', value: '2025년 11월' },
              {
                label: '연락',
                value: (
                  <a href="mailto:kmwppp@daum.net" className="text-brand-600 underline break-all">
                    kmwppp@daum.net
                  </a>
                ),
              },
              {
                label: '소스코드',
                value: (
                  <a
                    href="https://github.com/kmwppp/simsimpools-test"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 underline break-all"
                  >
                    GitHub
                  </a>
                ),
              },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">{label}</p>
                <p className="text-slate-700">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 편집 방침 ── */}
        <div className="card p-7 mb-10 bg-slate-50 border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 mb-5">📋 편집 방침</h2>
          <div className="space-y-5 text-sm text-slate-600 leading-relaxed">
            {[
              {
                title: '콘텐츠 기준',
                desc: '모든 글은 실제 생활에서 반복되는 감정의 장면을 중심에 두고 작성합니다. 필요한 경우 관련 자료를 참고하되, 이론 설명보다 경험의 결을 우선합니다.',
              },
              {
                title: '전문성 고지',
                desc: '심심풀이의 문답과 에세이는 개인적인 관찰을 돕기 위한 콘텐츠입니다. 임상 심리 진단이나 정신건강 의학적 판단을 대체하지 않습니다.',
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

        {/* ── 업데이트 로그 ── */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-5">🗓 업데이트 기록</h2>
          <div className="space-y-0 border border-slate-100 rounded-2xl overflow-hidden">
            {CHANGELOG.map(({ date, note }, i) => (
              <div
                key={date}
                className={`flex items-start gap-4 px-6 py-4 text-sm ${
                  i < CHANGELOG.length - 1 ? 'border-b border-slate-100' : ''
                }`}
              >
                <span className="text-xs font-medium text-brand-600 whitespace-nowrap mt-0.5 min-w-[80px]">
                  {date}
                </span>
                <span className="text-slate-600 leading-relaxed">{note}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">천천히 둘러보세요</h2>
          <p className="text-slate-500 mb-6 leading-relaxed">
            글을 읽다가 마음에 남는 장면이 있다면, 짧은 질문으로 내 경우도 함께 떠올려볼 수 있습니다.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/blog" className="btn-primary">에세이 읽기</Link>
            <Link to="/tests" className="btn-secondary">짧은 문답 해보기</Link>
          </div>
        </div>
      </div>
    </>
  );
}
