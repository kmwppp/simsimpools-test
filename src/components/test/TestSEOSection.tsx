import { testSeoContent } from '../../data/testSeoContent';

interface Props {
  testId: string;
}

export function TestSEOSection({ testId }: Props) {
  const content = testSeoContent[testId];
  if (!content) return null;

  return (
    <div className="mt-16 border-t border-slate-100 pt-12 max-w-2xl mx-auto text-left">

      {/* ① 이 테스트는 무엇인가요? */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-800 mb-5">이 테스트는 무엇인가요?</h2>
        <div className="space-y-3">
          {content.whatIsIt.map((p, i) => (
            <p key={i} className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* ② 언제 받아보면 좋을까요? */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-800 mb-5">언제 받아보면 좋을까요?</h2>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-5">
          {content.whenToUse.intro}
        </p>
        <ul className="space-y-3">
          {content.whenToUse.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-slate-600 text-sm sm:text-base leading-relaxed"
            >
              <span className="text-brand-500 font-bold mt-0.5 flex-shrink-0">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ③ 사용 방법 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-800 mb-5">어떻게 진행되나요?</h2>
        <div className="space-y-3">
          {content.howToUse.map((p, i) => (
            <p key={i} className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* ④ 실제 예시 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-800 mb-5">실제 이런 분들이 찾으세요</h2>
        <div className="space-y-4">
          {content.realExamples.map((ex, i) => (
            <div
              key={i}
              className="bg-slate-50 border-l-4 border-brand-200 rounded-r-xl px-5 py-4 text-slate-600 text-sm sm:text-base leading-relaxed"
            >
              {ex}
            </div>
          ))}
        </div>
      </section>

      {/* ⑤ 자주 묻는 질문 */}
      <section>
        <h2 className="text-xl font-bold text-slate-800 mb-5">자주 묻는 질문</h2>
        <div className="space-y-4">
          {content.faq.map((item, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl p-5">
              <p className="font-semibold text-slate-800 text-sm sm:text-base mb-2">
                Q. {item.q}
              </p>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                A. {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
