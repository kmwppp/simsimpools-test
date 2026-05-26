import { Link } from 'react-router-dom';
import { SEOMeta } from '../components/seo/SEOMeta';

export function About() {
  return (
    <>
      <SEOMeta
        title="About - 심심풀이 소개"
        description="심심풀이는 심리학적 이론을 바탕으로 누구나 쉽게 자신을 탐색할 수 있는 감성 심리 콘텐츠 플랫폼입니다."
        canonical="/about"
      />

      <div className="bg-white border-b border-slate-100">
        <div className="section-container py-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">심심풀이 소개</h1>
          <p className="text-slate-500">나를 이해하는 여정을 함께합니다</p>
        </div>
      </div>

      <div className="section-container py-12 max-w-3xl mx-auto">
        {/* Mission */}
        <div className="card p-8 mb-8 text-center">
          <div className="text-5xl mb-5">🧠</div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">우리의 미션</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            "심리학을 일상으로. 자기이해를 즐겁게."
          </p>
          <p className="text-slate-500 mt-3 leading-relaxed">
            심심풀이는 복잡한 심리학 이론을 누구나 쉽게 접근할 수 있는 콘텐츠로 만들어,
            자기 자신을 더 깊이 이해하는 경험을 제공합니다.
          </p>
        </div>

        {/* About content */}
        <div className="prose-content mb-8">
          <h2>심심풀이는 어떤 플랫폼인가요?</h2>
          <p>
            심심풀이는 단순한 재미용 테스트 사이트가 아닙니다. 심리학적 이론과 성격 분석 연구를 바탕으로,
            사람들이 자신의 성격, 감정 패턴, 관계 방식을 이해하는 데 도움을 주는 감성 심리 콘텐츠 플랫폼입니다.
          </p>
          <p>
            각 테스트의 결과는 단순한 "당신은 이런 사람입니다"라는 한 줄 설명이 아닙니다.
            성격 특징, 강점과 약점, 인간관계 스타일, 스트레스 패턴, 추천 활동, 자기이해 가이드까지
            풍부한 내용을 담아 진정한 자기 이해를 돕습니다.
          </p>

          <h2>콘텐츠 철학</h2>
          <p>
            우리는 모든 사람이 각자의 방식으로 특별하다고 믿습니다. 내향적인 것이 나쁜 것이 아니고,
            외향적인 것이 더 좋은 것도 아닙니다. 감정을 표출하는 것이 약한 것이 아니고,
            감정을 억제하는 것이 강한 것도 아닙니다.
          </p>
          <p>
            심심풀이의 모든 콘텐츠는 어떤 유형이나 성향도 판단하지 않습니다.
            오직 "이런 사람도 있구나", "나는 이런 특징이 있구나"라는 따뜻한 자기 이해를 목표로 합니다.
          </p>

          <h2>테스트는 어떻게 만들어지나요?</h2>
          <p>
            심심풀이의 테스트는 심리학적 이론(성격 심리학, 애착 이론, 감정 심리학 등)을 바탕으로
            개발됩니다. 다만, 이 테스트들은 전문적인 심리 진단 도구가 아닌 자기 탐색을 위한
            오락 목적의 콘텐츠임을 명확히 밝힙니다.
          </p>
          <p>
            진지한 심리적 문제나 정신 건강 관련 이슈는 전문가의 상담을 받으시길 권장합니다.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {[
            { icon: '🔬', title: '심리학 기반', desc: '검증된 심리학적 이론을 쉽게 풀어냄' },
            { icon: '💡', title: '깊이 있는 결과', desc: '단순 결과가 아닌 진정한 자기이해 가이드' },
            { icon: '🤝', title: '비판 없는 이해', desc: '어떤 유형도 더 좋거나 나쁘지 않음' },
            { icon: '🎁', title: '완전 무료', desc: '모든 콘텐츠를 비용 없이 이용 가능' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="card p-5">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-bold text-slate-800 mb-1">{title}</h3>
              <p className="text-sm text-slate-500">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">지금 시작해보세요</h2>
          <p className="text-slate-500 mb-6">
            심심풀이의 심리 테스트와 칼럼으로 나를 더 잘 이해하는 여정을 시작해보세요.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/tests" className="btn-primary">심리 테스트 시작</Link>
            <Link to="/blog" className="btn-secondary">칼럼 읽기</Link>
          </div>
        </div>
      </div>
    </>
  );
}
