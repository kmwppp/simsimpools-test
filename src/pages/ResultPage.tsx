import { useParams, Link } from 'react-router-dom';
import { getTestById } from '../data/tests';
import { SEOMeta } from '../components/seo/SEOMeta';
import { Breadcrumb } from '../components/seo/Breadcrumb';
import { Badge } from '../components/ui/Badge';
import { getTestResultContent } from '../data/testResultContent';

export function ResultPage() {
  const { testId = '', resultId = '' } = useParams<{ testId: string; resultId: string }>();
  const test = getTestById(testId);
  const result = test?.results[resultId];
  const content = getTestResultContent(testId, resultId);

  if (!test || !result || !content) {
    return (
      <>
        <SEOMeta
          title="결과를 찾을 수 없습니다"
          description="요청하신 문답 결과를 찾을 수 없습니다."
          noindex
        />
        <div className="section-container py-24 text-center">
          <p className="text-slate-500">결과를 찾을 수 없습니다.</p>
          <Link to="/tests" className="btn-primary mt-4">문답 목록으로</Link>
        </div>
      </>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${test.title} 결과: ${result.title}`,
        text: content.summary[0],
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
          - canonical: 문답 소개 페이지로 귀속 (검색 신호 집중)
          - 사이트맵 미포함 (유지)
      ────────────────────────────────────────────────────────────── */}
      <SEOMeta
        title={`${result.emoji} ${test.title} 결과: ${result.title}`}
        description={`${test.title} 결과: ${result.subtitle}. ${content.summary[0]}`}
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
              {content.summary.map(para => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </div>
        </div>

        {content.sections.map(section => (
          <section key={section.heading} className="card p-6 mb-5">
            <h2 className="text-lg font-bold text-slate-800 mb-4">{section.heading}</h2>
            {section.paragraphs && (
              <div className="space-y-3 text-slate-600 leading-relaxed text-sm">
                {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              </div>
            )}
            {section.items && (
              <ul className="space-y-2">
                {section.items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                    <span className="text-brand-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {(content.reflectionQuestion || content.smallAction) && (
          <section className="card p-6 bg-gradient-to-br from-brand-50 to-indigo-50 border-brand-100 mb-6">
            {content.reflectionQuestion && (
              <div className="mb-4">
                <h2 className="text-lg font-bold text-slate-800 mb-2">돌아볼 질문</h2>
                <p className="text-slate-600 leading-relaxed text-sm">{content.reflectionQuestion}</p>
              </div>
            )}
            {content.smallAction && (
              <div>
                <h2 className="text-lg font-bold text-slate-800 mb-2">작게 해볼 행동</h2>
                <p className="text-slate-600 leading-relaxed text-sm">{content.smallAction}</p>
              </div>
            )}
          </section>
        )}

        <p className="text-xs text-slate-500 leading-relaxed mb-6 px-1">
          결과는 이번 답변에서 상대적으로 많이 고른 방향입니다. 점수와 동점 처리 방식은{' '}
          <Link to="/test-methodology" className="text-brand-600 underline">문답 제작 원칙</Link>에서 확인할 수 있습니다.
        </p>

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
                    <p className="text-xs text-slate-500">{t.questions.length}문항 · {t.duration}</p>
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
