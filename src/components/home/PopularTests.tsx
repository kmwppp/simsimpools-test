import { Link } from 'react-router-dom';
import { testsMeta } from '../../data/tests';
import { Badge } from '../ui/Badge';

export function PopularTests() {
  const popular = testsMeta.slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="section-title">많이 열어본 문답</h2>
            <p className="section-subtitle">짧은 질문으로 내 반응을 떠올려봅니다</p>
          </div>
          <Link to="/tests" className="text-brand-600 text-sm font-medium hover:underline hidden sm:block">
            전체 보기 →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {popular.map(test => (
            <Link
              key={test.id}
              to={`/tests/${test.id}`}
              className="card group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="p-5">
                <div className="text-4xl mb-3">{test.thumbnail}</div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge color={test.categoryColor as 'violet'}>{test.category}</Badge>
                  {test.popular && <Badge color="amber">인기</Badge>}
                  {test.isNew && <Badge color="emerald">NEW</Badge>}
                </div>
                <h3 className="font-semibold text-slate-800 group-hover:text-brand-600 transition-colors leading-snug mb-1">
                  {test.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">{test.subtitle}</p>
              </div>
              <div className="px-5 pb-4 flex items-center justify-between text-xs text-slate-400">
                <span>⏱ {test.duration}</span>
                <span>{test.questionCount}문항</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link to="/tests" className="btn-outline text-sm">
            전체 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
