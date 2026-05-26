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
            <span>✨</span>
            <span>무료 심리 테스트 & 성격 분석</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            나를 이해하는 가장
            <br />
            <span className="text-brand-200">쉽고 재미있는</span> 방법
          </h1>

          <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
            동물 성격 유형부터 연애 성향, 스트레스 반응까지.
            다양한 심리 테스트와 깊이 있는 성격 분석 칼럼으로
            진정한 나를 발견해보세요.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link to="/tests" className="btn-primary bg-white text-brand-700 hover:bg-brand-50 shadow-lg">
              지금 테스트 시작하기
            </Link>
            <Link to="/blog" className="btn-outline border-white/40 text-white hover:bg-white/10">
              칼럼 읽기
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20">
            {[
              { value: '5가지+', label: '심리 테스트' },
              { value: '12개+', label: '심리 칼럼' },
              { value: '무료', label: '100% 무료' },
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
