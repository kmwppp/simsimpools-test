import { Link } from 'react-router-dom';

const categories = [
  { emoji: '🦊', label: '나의 반응', description: '내가 편한 자리와 지치는 자리', color: 'bg-violet-50 border-violet-200 hover:bg-violet-100', to: '/tests/animal-personality' },
  { emoji: '💕', label: '연애 성향', description: '나의 사랑 방식은?', color: 'bg-rose-50 border-rose-200 hover:bg-rose-100', to: '/tests/love-style' },
  { emoji: '🌊', label: '스트레스', description: '나의 반응 유형은?', color: 'bg-amber-50 border-amber-200 hover:bg-amber-100', to: '/tests/stress-response' },
  { emoji: '🌿', label: '인간관계', description: '나의 거리감은?', color: 'bg-teal-50 border-teal-200 hover:bg-teal-100', to: '/tests/social-distance' },
  { emoji: '🌱', label: '감정 회복', description: '나의 회복 방식은?', color: 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100', to: '/tests/emotional-recovery' },
  { emoji: '🧩', label: '엇갈리는 대화', description: '같은 말을 다르게 듣는 순간', color: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100', to: '/blog' },
];

export function CategorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="mb-8">
          <h2 className="section-title">카테고리 탐색</h2>
          <p className="section-subtitle">마음에 남는 장면부터 천천히 골라보세요</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(({ emoji, label, description, color, to }) => (
            <Link
              key={label}
              to={to}
              className={`flex flex-col items-center text-center p-4 rounded-2xl border transition-colors cursor-pointer ${color}`}
            >
              <span className="text-3xl mb-2">{emoji}</span>
              <span className="font-semibold text-slate-800 text-sm">{label}</span>
              <span className="text-xs text-slate-500 mt-0.5">{description}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
