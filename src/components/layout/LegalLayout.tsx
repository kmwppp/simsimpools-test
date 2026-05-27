import { Link } from 'react-router-dom';

export interface LegalSection {
  id: string;
  title: string;
}

interface LegalLayoutProps {
  title: string;
  subtitle?: string;
  badge?: string;
  effectiveDate: string;
  tocSections?: LegalSection[];
  children: React.ReactNode;
}

/**
 * 법적 페이지(약관/정책/면책 등) 공통 레이아웃
 * - 헤더: 제목 + 시행일
 * - 목차 (선택적)
 * - 본문
 * - 하단 법적 고지
 */
export function LegalLayout({
  title,
  subtitle,
  badge,
  effectiveDate,
  tocSections,
  children,
}: LegalLayoutProps) {
  return (
    <>
      {/* ── 페이지 헤더 ── */}
      <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="section-container py-10 max-w-3xl mx-auto">
          {badge && (
            <p className="text-xs font-bold tracking-[0.18em] text-brand-600 uppercase mb-3">
              {badge}
            </p>
          )}
          <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">{title}</h1>
          {subtitle && (
            <p className="text-slate-500 text-sm mb-3 leading-relaxed">{subtitle}</p>
          )}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>시행일: {effectiveDate}</span>
            <span>·</span>
            <Link to="/contact" className="underline hover:text-slate-600 transition-colors">
              문의하기
            </Link>
          </div>
        </div>
      </div>

      <div className="section-container py-12 max-w-3xl mx-auto">
        {/* ── 목차 ── */}
        {tocSections && tocSections.length > 0 && (
          <nav
            aria-label="목차"
            className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-8"
          >
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
              목차
            </p>
            <ol className="space-y-1.5">
              {tocSections.map((sec, i) => (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    className="flex items-start gap-2 text-sm text-brand-700 hover:text-brand-900 transition-colors leading-snug"
                  >
                    <span className="text-brand-400 flex-shrink-0 font-mono text-xs mt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {sec.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* ── 본문 카드 ── */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7 sm:p-10 legal-prose">
          {children}
        </div>

        {/* ── 하단 법적 고지 ── */}
        <div className="mt-8 p-5 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-400 leading-relaxed">
          <strong className="text-slate-500 block mb-1">법적 고지</strong>
          본 페이지의 내용은 법적 조언을 구성하지 않습니다. 법적 문제에 대해서는 반드시
          자격 있는 법률 전문가의 조언을 구하시기 바랍니다. 심심풀이는 본 정책의 내용을
          사전 고지 후 변경할 수 있습니다.
        </div>
      </div>
    </>
  );
}
