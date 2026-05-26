import { Link } from 'react-router-dom';
import { testsMeta } from '../data/tests';
import { SEOMeta } from '../components/seo/SEOMeta';
import { Badge } from '../components/ui/Badge';
import { AdPlaceholder } from '../components/ui/AdPlaceholder';

export function TestList() {
  return (
    <>
      <SEOMeta
        title="심리 테스트 목록"
        description="동물 성격 유형, 연애 성향, 스트레스 반응, 인간관계 거리감, 감정 회복 스타일까지. 나를 이해하는 다양한 심리 테스트를 무료로 즐겨보세요."
        canonical="/tests"
      />

      {/* Page header */}
      <div className="bg-white border-b border-slate-100">
        <div className="section-container py-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">심리 테스트</h1>
          <p className="text-slate-500">나를 이해하는 다양한 심리 테스트. 모두 무료입니다.</p>
        </div>
      </div>

      <div className="section-container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testsMeta.map(test => (
            <Link
              key={test.id}
              to={`/tests/${test.id}`}
              className="card group hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="text-5xl mb-4">{test.thumbnail}</div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge color={test.categoryColor as 'violet'}>{test.category}</Badge>
                  {test.popular && <Badge color="amber">🔥 인기</Badge>}
                  {test.isNew && <Badge color="emerald">NEW</Badge>}
                </div>
                <h2 className="text-lg font-bold text-slate-800 group-hover:text-brand-600 transition-colors leading-snug mb-2">
                  {test.title}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-4">
                  {test.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {test.tags.map(tag => (
                    <span key={tag} className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-5 flex items-center justify-between border-t border-slate-50 pt-4">
                <span className="text-xs text-slate-400">⏱ {test.duration}</span>
                <span className="text-xs text-slate-400">{test.questionCount}문항</span>
                <span className="text-sm font-medium text-brand-600 group-hover:underline">
                  시작하기 →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <AdPlaceholder position="content-bottom" />
        </div>
      </div>
    </>
  );
}
