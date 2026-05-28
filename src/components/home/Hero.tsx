import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-indigo-800 text-white">
      {/* Background decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/5 rounded-full" />
      </div>

      <div className="section-container relative py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-sm mb-6">
            <span>🌙</span>
            <span>마음의 장면을 적는 작은 기록</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            왜 이렇게 되는 건지
            <br />
            <span className="text-brand-200">설명하기 어려운 날들이 있어요</span>
          </h1>

          <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
            재밌게 놀고 왔는데 아무 말도 하기 싫을 때,
            거절했는데 왜 내가 더 불편한지,
            같은 말인데 어떤 사람에게 들으면 상처가 되는지.
            그 이유를 조금 더 선명하게 들여다봅니다.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link to="/tests" className="btn-primary bg-white text-brand-700 hover:bg-brand-50 shadow-lg">
              내 반응 살펴보기
            </Link>
            <Link to="/blog" className="btn-outline border-white/40 text-white hover:bg-white/10">
              에세이 읽기
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20">
            {[
              { value: '5가지', label: '짧은 문답' },
              { value: '21편', label: '관찰 에세이' },
              { value: '개인 운영', label: '2025년부터' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-bold">{value}</div>
                <div className="text-sm text-white/60">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
