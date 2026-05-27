import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getTestById } from '../data/tests';
import { SEOMeta } from '../components/seo/SEOMeta';
import { Badge } from '../components/ui/Badge';
import { useTestState } from '../hooks/useTestState';
import { TestSEOSection } from '../components/test/TestSEOSection';

export function TestDetail() {
  const { testId = '' } = useParams<{ testId: string }>();
  const navigate = useNavigate();
  const test = getTestById(testId);
  const { state, answerQuestion, resetTest } = useTestState(testId);

  useEffect(() => {
    if (!test) return;
    if (state.completed && state.resultId) {
      navigate(`/results/${testId}/${state.resultId}`, { replace: true });
    }
  }, [state.completed, state.resultId, testId, navigate, test]);

  if (!test) {
    return (
      <div className="section-container py-24 text-center">
        <p className="text-slate-500">테스트를 찾을 수 없습니다.</p>
        <Link to="/tests" className="btn-primary mt-4">테스트 목록으로</Link>
      </div>
    );
  }

  const currentQ = test.questions[state.currentQuestion];
  const progress = (state.currentQuestion / test.questions.length) * 100;
  const isIntro = state.currentQuestion === 0 && state.answers.length === 0;

  const handleOptionClick = (optionScores: Record<string, number>) => {
    answerQuestion(optionScores);

    const nextIndex = state.currentQuestion + 1;
    if (nextIndex >= test.questions.length) {
      const tempScores = { ...state.scores };
      for (const [k, v] of Object.entries(optionScores)) {
        tempScores[k] = (tempScores[k] ?? 0) + v;
      }
      const resultId = test.calculateResult(tempScores);
      navigate(`/results/${testId}/${resultId}`);
    }
  };

  if (isIntro) {
    return (
      <>
        <SEOMeta
          title={test.title}
          description={test.description}
          canonical={`/tests/${test.id}`}
          ogType="article"
        />
        <div className="section-container py-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-7xl mb-6">{test.thumbnail}</div>
            <div className="mb-3">
              <Badge color={test.categoryColor as 'violet'}>{test.category}</Badge>
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">{test.title}</h1>
            <p className="text-slate-500 mb-2">{test.subtitle}</p>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-lg mx-auto">{test.description}</p>

            <div className="flex justify-center gap-6 text-sm text-slate-500 mb-8">
              <span>⏱ {test.duration}</span>
              <span>📝 {test.questionCount}문항</span>
              <span>🆓 무료</span>
            </div>

            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {test.tags.map(tag => (
                <span key={tag} className="text-xs bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="bg-brand-50 rounded-2xl p-5 text-sm text-slate-600 text-left mb-8 border border-brand-100">
              <p className="font-medium text-slate-700 mb-2">📌 테스트 안내</p>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>정답은 없습니다. 가장 직관적으로 느껴지는 답을 선택하세요.</li>
                <li>너무 깊이 생각하지 말고 첫 번째 반응을 따라주세요.</li>
                <li>결과는 오락 목적으로 제작되었습니다.</li>
              </ul>
            </div>

            <button onClick={() => answerQuestion({})} className="btn-primary text-lg px-10 py-4 w-full sm:w-auto">
              테스트 시작하기
            </button>
          </div>

          {/* SEO 설명 섹션 */}
          <TestSEOSection testId={testId} />
        </div>
      </>
    );
  }

  if (!currentQ) return null;

  const questionIndex = state.answers.length;

  return (
    <>
      <SEOMeta
        title={`${test.title} 진행 중`}
        description={test.description}
        noindex
      />
      <div className="section-container py-10 max-w-2xl mx-auto">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-slate-500 mb-2">
            <span>{questionIndex + 1} / {test.questions.length}</span>
            <button
              onClick={resetTest}
              className="text-slate-400 hover:text-slate-600 transition-colors text-xs"
            >
              처음부터
            </button>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-600 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="card p-8 mb-6 animate-slide-up">
          <div className="text-center mb-8">
            <p className="text-xs text-slate-400 uppercase tracking-wider mb-4">Q{questionIndex + 1}</p>
            <h2 className="text-xl font-semibold text-slate-800 leading-relaxed">
              {currentQ.question}
            </h2>
          </div>

          <div className="space-y-3">
            {currentQ.options.map(option => (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option.scores)}
                className="w-full text-left p-4 rounded-xl border-2 border-slate-100 hover:border-brand-400 hover:bg-brand-50 transition-all duration-150 text-slate-700 text-sm leading-relaxed active:scale-98"
              >
                <span className="font-medium text-brand-600 mr-2">{option.id.toUpperCase()}.</span>
                {option.text}
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-slate-400">
          직관적으로 느껴지는 답을 선택해주세요
        </p>
      </div>
    </>
  );
}
