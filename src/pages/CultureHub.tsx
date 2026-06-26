import { Link } from 'react-router-dom';
import { SEOMeta } from '../components/seo/SEOMeta';
import { Badge } from '../components/ui/Badge';
import { getMonths, getHighlights, getActiveCount, formatPeriod, isOngoing } from '../data/culture';

export function CultureHub() {
  const months = getMonths();
  const highlights = getHighlights(6);
  const total = getActiveCount();

  return (
    <>
      <SEOMeta
        title="문화 행사 일정 — 지금 가볼 만한 전국 공연·전시"
        description={`전국 공연·전시 등 문화 행사 일정을 월별로 정리했습니다. 현재 진행 중·예정 행사 ${total}건을 한눈에 확인하세요.`}
        canonical="/culture"
      />

      {/* Page header */}
      <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="section-container py-12">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-600 uppercase mb-3">Culture</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            문화 행사 일정
          </h1>
          <p className="text-slate-500 max-w-xl leading-relaxed">
            지금 전국에서 열리는 공연·전시를 월별로 모았습니다. 혼자 천천히 둘러보기 좋은 시간을
            찾아보세요.
          </p>
        </div>
      </div>

      <div className="section-container py-12">
        {/* 소개 */}
        <div className="mb-12 max-w-2xl">
          <p className="text-slate-700 leading-[1.9] mb-4 text-[0.975rem]">
            마음이 복잡한 날일수록, 익숙한 공간을 잠깐 벗어나 다른 장면 속에 있어 보는 게 도움이 될
            때가 있어요. 꼭 누군가와 함께가 아니어도 괜찮습니다. 조용한 공연장이나 전시장을 혼자
            천천히 거니는 한 시간이, 머릿속을 정리해주기도 하니까요.
          </p>
          <p className="text-slate-600 leading-[1.9] text-[0.975rem]">
            아래는 전국에서 진행 중이거나 예정된 문화 행사들입니다. 월을 골라 그달의 공연·전시를
            살펴보세요. 혼자 보내는 시간이 왜 더 편한지 궁금하다면{' '}
            <Link to="/blog/solitude-recovery" className="text-brand-600 underline">
              혼자 있을 때 더 회복되는 이유
            </Link>
            도 함께 읽어볼 수 있어요.
          </p>
        </div>

        {/* 하이라이트 */}
        {highlights.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xl font-bold text-slate-800 mb-5">지금 눈여겨볼 만한 행사</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {highlights.map((e) => (
                <div key={e.id} className="card overflow-hidden flex flex-col">
                  {e.thumbnail && (
                    <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                      <img
                        src={e.thumbnail}
                        alt={e.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-5 flex flex-col flex-1">
                    {isOngoing(e) && (
                      <div className="mb-2">
                        <Badge color="emerald">진행 중</Badge>
                      </div>
                    )}
                    <h3 className="font-semibold text-slate-800 leading-snug mb-1 line-clamp-2">
                      {e.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-1">{e.place}</p>
                    <p className="text-xs text-slate-400 mb-3">{formatPeriod(e.startDate, e.endDate)}</p>
                    <div className="mt-auto flex items-center justify-between text-xs">
                      <span className="text-slate-500">{e.price ?? '관람료는 공식 페이지 참고'}</span>
                      {e.url && (
                        <a
                          href={e.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-brand-600 hover:underline"
                        >
                          자세히 →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 월별 */}
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-5">월별로 보기</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {months.map((m) => (
              <Link
                key={m.key}
                to={`/culture/${m.key}`}
                className="card group p-5 text-center hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="text-lg font-bold text-slate-800 group-hover:text-brand-600 transition-colors">
                  {m.label}
                </div>
                <div className="text-xs text-slate-400 mt-1">{m.count}건</div>
              </Link>
            ))}
          </div>
        </section>

        {/* 출처 */}
        <p className="mt-14 text-xs text-slate-400 leading-relaxed">
          데이터 출처: 문화체육관광부 · 문화공공데이터광장(문화예술공연 통합). 일정·관람료는 변동될
          수 있으니 방문 전 각 행사의 공식 페이지에서 다시 확인해 주세요. 심심풀이는 공개된 문화
          정보를 정리해 보여주는 곳으로, 행사 주최·운영 기관이 아닙니다.
        </p>
      </div>
    </>
  );
}
