import { Link } from 'react-router-dom';
import { testSeoContent } from '../../data/testSeoContent';

interface Props {
  testId: string;
}

export function TestSEOSection({ testId }: Props) {
  const content = testSeoContent[testId];
  if (!content) return null;

  return (
    <div className="mt-16 border-t border-slate-100 pt-12 max-w-2xl mx-auto text-left">
      <div className="mb-10 rounded-2xl bg-brand-50 border border-brand-100 p-5 sm:p-6">
        <p className="text-xs font-bold tracking-[0.16em] text-brand-600 uppercase mb-2">이 문답의 초점</p>
        <p className="text-slate-700 leading-relaxed">{content.purpose}</p>
      </div>

      {content.sections.map((section, sectionIndex) => (
        <section key={section.heading} className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-5">{section.heading}</h2>

          {section.paragraphs && (
            <div className="space-y-3 mb-5">
              {section.paragraphs.map(paragraph => (
                <p key={paragraph} className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {section.items && (
            <ul className="space-y-3">
              {section.items.map(item => (
                <li key={item} className="flex items-start gap-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <span className="text-brand-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {section.prompts && (
            <div className="space-y-3">
              {section.prompts.map((prompt, promptIndex) => (
                <div
                  key={prompt}
                  className="bg-slate-50 border-l-4 border-brand-200 rounded-r-xl px-5 py-4 text-slate-600 text-sm sm:text-base leading-relaxed"
                >
                  <span className="font-semibold text-brand-700 mr-2">{sectionIndex + 1}.{promptIndex + 1}</span>
                  {prompt}
                </div>
              ))}
            </div>
          )}
        </section>
      ))}

      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-800 mb-5">{content.faqTitle}</h2>
        <div className="space-y-4">
          {content.faq.map(item => (
            <div key={item.q} className="border border-slate-100 rounded-2xl p-5">
              <p className="font-semibold text-slate-800 text-sm sm:text-base mb-2">Q. {item.q}</p>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">A. {item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <aside className="rounded-2xl border border-slate-200 p-5 sm:p-6 text-sm text-slate-600 leading-relaxed">
        <p className="font-semibold text-slate-800 mb-2">문항과 점수는 어떻게 만들었나요?</p>
        <p className="mb-3">
          심심풀이 문답은 자체 구성한 생활 장면과 단순 합산 규칙을 사용합니다. 결과가 정해지는 방식,
          동점 처리 순서, 검토 범위와 운영자의 한계를 공개합니다.
        </p>
        <Link to="/test-methodology" className="text-brand-600 font-semibold hover:underline">
          문답 제작 원칙과 채점 방식 보기 →
        </Link>
      </aside>
    </div>
  );
}
