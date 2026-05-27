import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://simsimpools.co.kr';

/* ── Types ───────────────────────────────────────────────────────────── */
export interface BreadcrumbItem {
  /** 표시 텍스트 */
  label: string;
  /** 내부 링크 경로 (예: "/blog"). 마지막 항목은 생략 → 현재 페이지 */
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/* ── Component ───────────────────────────────────────────────────────── */
export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  /* schema.org BreadcrumbList ─────────────────────────────────────────
   * 마지막 항목도 item URL 을 포함 (Google 권장)                         */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href
        ? `${BASE_URL}${item.href}`
        : undefined,
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* 시각적 브레드크럼 */}
      <nav
        aria-label="breadcrumb"
        className={`flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-xs text-slate-400 mb-8 ${className}`}
      >
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-1.5">
            {index > 0 && (
              <span aria-hidden="true" className="text-slate-300 select-none">
                /
              </span>
            )}
            {item.href ? (
              <Link
                to={item.href}
                className="hover:text-slate-600 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="text-slate-500 max-w-[200px] truncate"
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
