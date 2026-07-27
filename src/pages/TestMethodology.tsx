import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/seo/Breadcrumb';
import { SEOMeta } from '../components/seo/SEOMeta';
import { tests } from '../data/tests';

const BASE_URL = 'https://simsimpools.co.kr';
const UPDATED_AT = '2026-07-27';

const tiePriorities = tests.map(test => ({
  id: test.id,
  title: test.title,
  results: Object.values(test.results).map(result => result.title),
}));

export function TestMethodology() {
  return (
    <>
      <SEOMeta
        title="문답 제작 원칙과 채점 방식"
        description="심심풀이 짧은 문답 5개의 문항 설계, 점수 합산, 동점 처리, 검토와 출처 사용 원칙, 운영 범위를 공개합니다."
        canonical="/test-methodology"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: '문답 제작 원칙과 채점 방식',
          description: '심심풀이 짧은 문답의 제작, 채점, 검토, 출처와 한계를 설명하는 페이지',
          url: `${BASE_URL}/test-methodology`,
          dateModified: UPDATED_AT,
          inLanguage: 'ko-KR',
          isPartOf: { '@type': 'WebSite', name: '심심풀이', url: BASE_URL },
        })}</script>
      </Helmet>

      <div className="bg-gradient-to-b from-brand-50 to-white border-b border-slate-100">
        <div className="section-container py-12 sm:py-16 max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: '홈', href: '/' }, { label: '문답 제작 원칙' }]} />
          <p className="text-xs font-bold tracking-[0.18em] text-brand-600 uppercase mb-3">Test Methodology</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            문답 제작 원칙과 채점 방식
          </h1>
          <p className="text-slate-600 leading-relaxed max-w-2xl">
            질문이 무엇을 살펴보고, 어떤 규칙으로 결과가 정해지며, 어디까지 읽어야 하는지 공개합니다.
            심심풀이의 다섯 문답은 생활 장면을 돌아보기 위해 자체 구성한 콘텐츠입니다.
          </p>
        </div>
      </div>

      <div className="section-container py-12 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_240px] gap-10 items-start">
          <article className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-850 mb-4">1. 문답의 목적</h2>
              <div className="space-y-3 text-slate-600 leading-relaxed">
                <p>
                  짧은 문답은 일상 장면에서 무엇을 먼저 선택하는지 비교하고, 결과를 자기 관찰이나
                  대화의 출발점으로 쓰도록 만들었습니다. 사람의 고정된 성격, 능력, 관계의 질,
                  정신건강 상태를 측정하거나 판정하는 도구가 아닙니다.
                </p>
                <p>
                  결과 이름은 여러 선택을 읽기 쉽게 묶는 표지입니다. 응답 시점, 떠올린 관계,
                  장소와 여유 시간에 따라 같은 사람의 결과도 달라질 수 있습니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-850 mb-4">2. 문항을 만드는 방식</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  운영자가 문답마다 구분하려는 네 가지 선택 방향을 먼저 정하고, 그 차이가 드러나는
                  생활 장면을 질문으로 작성합니다. 질문은 한 방향을 좋거나 나쁘게 보이게 하는 표현,
                  존재하지 않는 사례·통계, 질환이나 임상 상태를 연상시키는 판정 문구를 피하도록 검토합니다.
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>동물 문답은 이미지와 장면 선택을 비교합니다.</li>
                  <li>연애 문답은 표현·현실 조건·자율성·꾸준함의 우선순위를 비교합니다.</li>
                  <li>스트레스 문답은 부담 직후 먼저 택하는 대응을 비교합니다.</li>
                  <li>관계 거리 문답은 연락, 함께하는 시간, 혼자 있는 여백의 선호를 비교합니다.</li>
                  <li>감정 회복 문답은 힘든 일 뒤 손이 가는 활동을 비교합니다.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-850 mb-4">3. 점수 합산과 결과</h2>
              <div className="space-y-3 text-slate-600 leading-relaxed mb-6">
                <p>
                  각 선택지는 해당하는 결과 키에 정해진 점수를 더합니다. 모든 질문에 답하면 네 결과의
                  누적 점수를 비교하고 가장 큰 점수 하나를 결과 URL에 표시합니다. 가중치와 결과 키는
                  문답 데이터에 고정되어 있으며, 브라우저에서 답변할 때 임의로 바뀌지 않습니다.
                </p>
                <p>
                  공동 1위가 나오면 아래에 적은 왼쪽 결과부터 선택합니다. 이는 통계적으로 더 가능성이
                  높다는 뜻이 아니라, 같은 답변에 언제나 같은 URL을 돌려주기 위한 고정 규칙입니다.
                </p>
              </div>
              <div className="space-y-3">
                {tiePriorities.map(test => (
                  <div key={test.id} className="rounded-2xl border border-slate-200 p-5">
                    <Link to={`/tests/${test.id}`} className="font-semibold text-slate-800 hover:text-brand-600">
                      {test.title}
                    </Link>
                    <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                      {test.results.join(' → ')}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-850 mb-4">4. 검토와 업데이트</h2>
              <div className="space-y-3 text-slate-600 leading-relaxed">
                <p>
                  공개 전에는 선택지가 실제 결과 키에만 점수를 주는지, 표시 문항 수와 데이터가 같은지,
                  마지막 답변이 합산되는지, 동점 규칙과 결과 URL이 유지되는지를 자동 테스트로 확인합니다.
                  상세·결과 페이지의 링크와 검색 메타 정보도 빌드된 HTML에서 다시 확인합니다.
                </p>
                <p>
                  문구를 고칠 때는 결과 키와 기존 URL을 유지해 저장된 결과와 공유 링크가 깨지지 않게 합니다.
                  오류나 오해할 수 있는 표현을 발견하면 운영자가 검토해 수정일을 갱신합니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-850 mb-4">5. 출처 사용 원칙</h2>
              <div className="space-y-3 text-slate-600 leading-relaxed">
                <p>
                  현재 다섯 문답의 문항, 점수, 결과 이름과 해석 문구는 심심풀이의 자체 구성입니다.
                  표준화된 심리검사나 특정 연구 척도를 번안한 것이 아니므로, 외부 연구가 이 채점 규칙을
                  검증했다고 주장하지 않습니다.
                </p>
                <p>
                  향후 외부 자료의 사실이나 개념을 직접 사용할 때는 해당 문답 페이지에 실제로 확인한
                  출처와 사용 범위를 표시합니다. 일반적인 아이디어를 빌린 것과 특정 채점 규칙이 검증된
                  것은 구분해 적습니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-850 mb-4">6. 운영자의 범위와 한계</h2>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 text-slate-600 leading-relaxed space-y-3">
                <p>
                  심심풀이는 개인 운영 콘텐츠 사이트이며, 운영자는 심리학 임상가나 의료인이 아닙니다.
                  문답은 전문 상담, 의학적 판단, 표준화 검사를 대신하지 않습니다.
                </p>
                <p>
                  결과가 현재의 경험과 맞지 않으면 결과보다 실제 경험을 우선하세요. 중요한 건강·관계·진로
                  결정을 이 결과만으로 내리지 마세요. 서비스 전체의 범위는 
                  <Link to="/disclaimer" className="text-brand-600 underline">면책고지</Link>에서도 확인할 수 있습니다.
                </p>
              </div>
            </section>

            <p className="text-xs text-slate-400">마지막 검토일: 2026년 7월 27일</p>
          </article>

          <aside className="lg:sticky lg:top-24 rounded-2xl border border-slate-200 p-5">
            <p className="font-semibold text-slate-800 mb-3">다섯 문답 보기</p>
            <ul className="space-y-2">
              {tests.map(test => (
                <li key={test.id}>
                  <Link to={`/tests/${test.id}`} className="text-sm text-slate-600 hover:text-brand-600">
                    {`${test.thumbnail} ${test.title}`}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}
