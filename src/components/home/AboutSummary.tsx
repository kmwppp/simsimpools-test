import { Link } from 'react-router-dom';

export function AboutSummary() {
  return (
    <section className="py-16 bg-gradient-to-br from-brand-50 to-indigo-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl mb-5">🌙</div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            심심풀이는 어떤 사이트인가요?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4 max-w-xl mx-auto">
            재밌게 놀고 왔는데 아무 말도 하기 싫을 때,
            거절했는데 왜 내가 더 불편한지,
            어떤 사람을 만나고 나면 유독 기운이 빠지는 이유.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto">
            그 이유를 딱 꼬집어 말하기 어려운 날들을 위한 기록과 짧은 질문들을 만들고 있습니다.
            2025년부터 개인이 운영하는 독립 콘텐츠 사이트입니다.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {[
              { icon: '🎯', title: '질문 5가지', desc: '일상의 반응을 가볍게 살피는 문답' },
              { icon: '✍️', title: '에세이 21편', desc: '관계와 감정의 장면을 기록' },
              { icon: '🎁', title: '회원 가입 없음', desc: '바로 읽고 조용히 돌아볼 수 있습니다' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="text-2xl mb-2">{icon}</div>
                <h3 className="font-semibold text-slate-800 mb-1">{title}</h3>
                <p className="text-sm text-slate-500">{desc}</p>
              </div>
            ))}
          </div>

          <Link to="/about" className="btn-primary">
            사이트 소개 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
