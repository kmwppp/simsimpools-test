import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://simsimpools.co.kr';

export interface AuthorInfo {
  name: string;
  role: string;
  bio: string;
}

export interface AuthorBoxProps {
  author: AuthorInfo;
  /** 최초 게시일 (YYYY-MM-DD) */
  publishedAt: string;
  /** 마지막 수정일 (YYYY-MM-DD). 미제공 시 publishedAt 사용 */
  lastModified?: string;
  /** 운영 목적 설명 */
  purpose?: string;
  /** 데이터 출처 목록 */
  sources?: string[];
  /** 업데이트 정책 설명 */
  updatePolicy?: string;
  /** schema.org Article 주입 여부 (기본값: true) */
  injectJsonLd?: boolean;
  /** schema.org용 페이지 URL (절대 경로 또는 전체 URL) */
  pageUrl?: string;
  /** schema.org용 페이지 제목 */
  pageTitle?: string;
}

const DEFAULT_PURPOSE =
  '심리학적 자기이해와 성격 탐색을 돕기 위한 오락·교육 목적의 콘텐츠입니다. 전문적인 심리 진단이나 상담을 대체하지 않습니다.';

const DEFAULT_UPDATE_POLICY =
  '최신 심리학 연구 및 이용자 피드백을 반영하여 정기적으로 검토·업데이트합니다.';

export function AuthorBox({
  author,
  publishedAt,
  lastModified,
  purpose,
  sources,
  updatePolicy,
  injectJsonLd = true,
  pageUrl,
  pageTitle,
}: AuthorBoxProps) {
  const modified = lastModified ?? publishedAt;

  const fullUrl = pageUrl
    ? pageUrl.startsWith('http')
      ? pageUrl
      : `${BASE_URL}${pageUrl}`
    : undefined;

  const jsonLd =
    injectJsonLd && fullUrl && pageTitle
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: pageTitle,
          url: fullUrl,
          datePublished: publishedAt,
          dateModified: modified,
          author: {
            '@type': 'Person',
            name: author.name,
            jobTitle: author.role,
          },
          publisher: {
            '@type': 'Organization',
            name: '심심풀이',
            url: BASE_URL,
          },
          inLanguage: 'ko-KR',
        }
      : null;

  return (
    <>
      {jsonLd && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>
      )}

      <div className="border border-slate-200 bg-slate-50 rounded-2xl p-5 mb-8">

        {/* ── 작성자 정보 ── */}
        <div className="flex items-start gap-4 pb-4 mb-4 border-b border-slate-200">
          <div className="w-11 h-11 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-lg flex-shrink-0 select-none">
            {author.name[0]}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-slate-800 text-sm leading-snug">{author.name}</p>
            <p className="text-xs text-brand-600 mb-1">{author.role}</p>
            <p className="text-xs text-slate-500 leading-relaxed">{author.bio}</p>
          </div>
        </div>

        {/* ── 날짜 ── */}
        <div className="flex flex-wrap gap-x-5 gap-y-1 pb-4 mb-4 border-b border-slate-200 text-xs text-slate-500">
          <span>
            <span className="font-medium text-slate-600">📅 작성일</span>{' '}
            <time dateTime={publishedAt}>{publishedAt}</time>
          </span>
          <span>
            <span className="font-medium text-slate-600">🔄 최근 수정</span>{' '}
            <time dateTime={modified}>{modified}</time>
          </span>
        </div>

        {/* ── 운영 목적 ── */}
        <div className="mb-3">
          <p className="text-xs font-semibold text-slate-600 mb-1">📌 운영 목적</p>
          <p className="text-xs text-slate-500 leading-relaxed">
            {purpose ?? DEFAULT_PURPOSE}
          </p>
        </div>

        {/* ── 데이터 출처 ── */}
        {sources && sources.length > 0 && (
          <div className="mb-3">
            <p className="text-xs font-semibold text-slate-600 mb-1">📚 데이터 출처</p>
            <ul className="space-y-0.5">
              {sources.map((src, i) => (
                <li key={i} className="text-xs text-slate-500 leading-relaxed">
                  · {src}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ── 업데이트 정책 ── */}
        <div>
          <p className="text-xs font-semibold text-slate-600 mb-1">🔁 업데이트 정책</p>
          <p className="text-xs text-slate-500 leading-relaxed">
            {updatePolicy ?? DEFAULT_UPDATE_POLICY}
          </p>
        </div>
      </div>
    </>
  );
}
