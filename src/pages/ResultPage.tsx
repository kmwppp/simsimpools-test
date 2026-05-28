import { useParams, Link } from 'react-router-dom';
import { getTestById } from '../data/tests';
import { SEOMeta } from '../components/seo/SEOMeta';
import { Breadcrumb } from '../components/seo/Breadcrumb';
import { Badge } from '../components/ui/Badge';

export function ResultPage() {
  const { testId = '', resultId = '' } = useParams<{ testId: string; resultId: string }>();
  const test = getTestById(testId);
  const result = test?.results[resultId];

  if (!test || !result) {
    return (
      <div className="section-container py-24 text-center">
        <p className="text-slate-500">결과를 찾을 수 없습니다.</p>
        <Link to="/tests" className="btn-primary mt-4">테스트 목록으로</Link>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `나는 ${result.title}!`,
        text: result.shareText,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('링크가 복사되었습니다!');
    }
  };

  const relatedTests = result.relatedTests
    .map(id => getTestById(id))
    .filter(Boolean);

  return (
    <>
      {/* ──────────────────────────────────────────────────────────────
          결과 페이지 SEO 정책
          - noindex: 15개+ 유사 구조 중복, 자연 검색 유입 없음
          - canonical: 테스트 인트로 페이지로 귀속 (검색 신호 집중)
          - 사이트맵 미포함 (유지)
      ────────────────────────────────────────────────────────────── */}
      <SEOMeta
        title={`${result.emoji} 나는 ${result.title}!`}
        description={`${test.title} 결과: ${result.subtitle}. ${result.description[0]}`}
        canonical={`/tests/${testId}`}
        ogType="article"
        noindex
      />

      <div className="section-container py-10 max-w-2xl mx-auto">
        {/* 브레드크럼 + BreadcrumbList schema */}
        <Breadcrumb
          items={[
            { label: '홈', href: '/' },
            { label: '짧은 문답', href: '/tests' },
            { label: test.title, href: `/tests/${testId}` },
            { label: `${result.emoji} ${result.title}` },
          ]}
        />

        {/* Result hero */}
        <div className="card overflow-hidden mb-6">
          <div className="bg-gradient-to-br from-brand-600 to-indigo-700 text-white p-8 text-center">
            <div className="text-7xl mb-4 animate-fade-in">{result.emoji}</div>
            <Badge color="violet" className="mb-3 bg-white/20 text-white">
              {test.category}
            </Badge>
            <h1 className="text-3xl font-bold mb-2">{result.title}</h1>
            <p className="text-white/80 text-lg">{result.subtitle}</p>
          </div>

          <div className="p-6">
            <div className="space-y-3 text-slate-600 leading-relaxed">
              {result.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Traits */}
        <div className="card p-6 mb-5">
          <h2 className="text-lg font-bold text-slate-800 mb-4">🔍 나의 주요 성향</h2>
          <ul className="space-y-2">
            {result.traits.map((trait, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                <span className="text-brand-500 mt-0.5 flex-shrink-0">✓</span>
                <span>{trait}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Strengths & Weaknesses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div className="card p-6">
            <h2 className="text-lg font-bold text-slate-800 mb-4">💪 강점</h2>
            <ul className="space-y-2">
              {result.strengths.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                  <span className="text-emerald-500 mt-0.5">●</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h2 className="text-lg font-bold text-slate-800 mb-4">⚠️ 주의할 점</h2>
            <ul className="space-y-2">
              {result.weaknesses.map((w, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                  <span className="text-rose-400 mt-0.5">●</span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Relationships */}
        <div className="card p-6 mb-5">
          <h2 className="text-lg font-bold text-slate-800 mb-3">👥 인간관계 특징</h2>
          <p className="text-slate-600 leading-relaxed text-sm">{result.relationships}</p>
        </div>

        {/* Stress Pattern */}
        <div className="card p-6 mb-5">
          <h2 className="text-lg font-bold text-slate-800 mb-3">🌊 스트레스 패턴</h2>
          <p className="text-slate-600 leading-relaxed text-sm">{result.stressPattern}</p>
        </div>

        {/* Recommended Activities */}
        <div className="card p-6 mb-5">
          <h2 className="text-lg font-bold text-slate-800 mb-4">✨ 추천 활동</h2>
          <ul className="space-y-2">
            {result.recommendedActivities.map((a, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                <span className="text-brand-500 mt-0.5 flex-shrink-0">→</span>
                {a}
              </li>
            ))}
          </ul>
        </div>

        {/* Self Guide */}
        <div className="card p-6 bg-gradient-to-br from-brand-50 to-indigo-50 border-brand-100 mb-6">
          <h2 className="text-lg font-bold text-slate-800 mb-3">💌 돌아볼 장면</h2>
          <p className="text-slate-600 leading-relaxed text-sm">{result.selfGuide}</p>
        </div>

        {/* Share & Retry */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button onClick={handleShare} className="btn-primary flex-1 sm:flex-none">
            결과 공유하기 📤
          </button>
          <Link to={`/tests/${testId}`} className="btn-secondary flex-1 sm:flex-none">
            다시 해보기
          </Link>
          <Link to="/tests" className="btn-outline flex-1 sm:flex-none">
            다른 문답
          </Link>
        </div>

        {/* Related Tests */}
        {relatedTests.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg font-bold text-slate-800 mb-4">비슷한 문답도 있어요</h2>
            <div className="space-y-3">
              {relatedTests.map(t => t && (
                <Link
                  key={t.id}
                  to={`/tests/${t.id}`}
                  className="card flex items-center gap-4 p-4 hover:shadow-md transition-all hover:-translate-y-0.5"
                >
                  <span className="text-3xl">{t.thumbnail}</span>
                  <div>
                    <Badge color={t.categoryColor as 'violet'} className="mb-1">{t.category}</Badge>
                    <p className="font-semibold text-slate-800 text-sm">{t.title}</p>
                    <p className="text-xs text-slate-500">{t.questionCount}문항 · {t.duration}</p>
                  </div>
                  <span className="ml-auto text-brand-500 text-sm">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </>
  );
}
