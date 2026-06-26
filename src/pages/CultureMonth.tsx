import { useParams, Link } from 'react-router-dom';
import { SEOMeta } from '../components/seo/SEOMeta';
import { Badge } from '../components/ui/Badge';
import {
  isValidMonth,
  monthLabel,
  getEventsByMonth,
  formatPeriod,
  isOngoing,
} from '../data/culture';

export function CultureMonth() {
  const { month } = useParams<{ month: string }>();
  const valid = !!month && isValidMonth(month);
  const events = valid ? getEventsByMonth(month) : [];

  if (!valid) {
    return (
      <>
        <SEOMeta title="문화 행사 일정" canonical="/culture" noindex />
        <div className="section-container py-20 text-center">
          <p className="text-slate-500 mb-6">해당 월의 문화 일정을 찾을 수 없습니다.</p>
          <Link to="/culture" className="btn-primary">
            전체 문화 일정 보기
          </Link>
        </div>
      </>
    );
  }

  const label = monthLabel(month);

  return (
    <>
      <SEOMeta
        title={`${label} 문화 행사 일정`}
        description={`${label}에 전국에서 열리는 공연·전시 등 문화 행사 ${events.length}건을 정리했습니다. 일정과 장소를 한눈에 확인하세요.`}
        canonical={`/culture/${month}`}
      />

      {/* Page header */}
      <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="section-container py-10">
          <nav className="text-xs text-slate-400 mb-3">
            <Link to="/culture" className="hover:text-brand-600">
              문화 행사 일정
            </Link>
            <span className="mx-1.5">/</span>
            <span className="text-slate-600">{label}</span>
          </nav>
          <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
            {label} 문화 행사 일정
          </h1>
          <p className="text-slate-500">
            {label}에 진행 중이거나 시작하는 공연·전시 {events.length}건입니다.
          </p>
        </div>
      </div>

      <div className="section-container py-12">
        {events.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-500 mb-6">{label}에 등록된 행사가 없습니다.</p>
            <Link to="/culture" className="btn-outline">
              다른 달 보기
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {events.map((e) => (
              <div key={e.id} className="card p-4 sm:p-5 flex gap-4">
                {e.thumbnail && (
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
                    <img
                      src={e.thumbnail}
                      alt={e.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="min-w-0 flex-1 flex flex-col">
                  {isOngoing(e) && (
                    <div className="mb-1.5">
                      <Badge color="emerald">진행 중</Badge>
                    </div>
                  )}
                  <h2 className="font-semibold text-slate-800 leading-snug mb-1 line-clamp-2">
                    {e.title}
                  </h2>
                  <p className="text-sm text-slate-500">{e.place}</p>
                  <p className="text-xs text-slate-400 mt-1">
                    {formatPeriod(e.startDate, e.endDate)}
                    {e.price ? ` · ${e.price}` : ''}
                  </p>
                  {e.url && (
                    <a
                      href={e.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-sm font-medium text-brand-600 hover:underline self-start"
                    >
                      공식 페이지 →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 출처 */}
        <p className="mt-12 text-xs text-slate-400 leading-relaxed">
          데이터 출처: 문화체육관광부 · 문화공공데이터광장(문화예술공연 통합). 일정·관람료는 변동될
          수 있으니 방문 전 각 행사의 공식 페이지에서 다시 확인해 주세요. 심심풀이는 공개된 문화
          정보를 정리해 보여주는 곳으로, 행사 주최·운영 기관이 아닙니다.
        </p>
      </div>
    </>
  );
}
