import { Link } from 'react-router-dom';

export function AboutSummary() {
  return (
    <section className="py-16 bg-gradient-to-br from-brand-50 to-indigo-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl mb-5">🧠</div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            심심풀이는 어떤 곳인가요?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            심심풀이는 단순한 테스트 사이트가 아닙니다. 심리학적 이론과 자기 이해 콘텐츠를 바탕으로,
            누구나 쉽고 재미있게 자신을 탐색할 수 있는 플랫폼입니다.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            각 테스트의 결과는 성격 특징, 장단점, 인간관계 스타일, 스트레스 패턴 등 풍부한 설명을 담고 있습니다.
            정답은 없습니다. 오직 당신만의 고유한 이야기가 있을 뿐입니다.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {[
              { icon: '🔬', title: '심리학 기반', desc: '학문적 이론을 쉽게 풀어낸 콘텐츠' },
              { icon: '💡', title: '깊이 있는 결과', desc: '결과 한 줄이 아닌, 나를 이해하는 설명' },
              { icon: '🎁', title: '완전 무료', desc: '비용 없이 모든 콘텐츠를 즐길 수 있음' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="text-2xl mb-2">{icon}</div>
                <h3 className="font-semibold text-slate-800 mb-1">{title}</h3>
                <p className="text-sm text-slate-500">{desc}</p>
              </div>
            ))}
          </div>

          <Link to="/about" className="btn-primary">
            더 알아보기
          </Link>
        </div>
      </div>
    </section>
  );
}
