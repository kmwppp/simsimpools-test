import { Helmet } from 'react-helmet-async';

/* ── 상수 ────────────────────────────────────────────────────────────── */
const SITE_NAME = '심심풀이';
const BASE_URL  = 'https://simsimpools.co.kr';
const DEFAULT_DESC =
  '나를 더 잘 이해하는 심리 테스트와 성격 분석 콘텐츠. 동물 유형, 연애 성향, 스트레스 반응 등 다양한 심리 테스트를 무료로 즐겨보세요.';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

/* ── Props ───────────────────────────────────────────────────────────── */
export interface SEOMetaProps {
  /** 페이지 제목 (| 심심풀이 자동 추가) */
  title: string;
  /** 메타 디스크립션 (공백이면 기본값 사용) */
  description?: string;
  /** 절대 경로 canonical (예: "/blog/my-post") */
  canonical?: string;
  /** OG 이미지 URL (기본: /og-image.png 1200×630) */
  ogImage?: string;
  /** OG 이미지 대체 텍스트 */
  ogImageAlt?: string;
  /** OG type (기본: 'website') */
  ogType?: 'website' | 'article';
  /** true 이면 noindex,nofollow */
  noindex?: boolean;

  /* ── article 전용 ────────────────────────────────────── */
  /** 최초 게시일 (YYYY-MM-DD) — ogType='article' 일 때 사용 */
  publishedAt?: string;
  /** 마지막 수정일 (YYYY-MM-DD) — ogType='article' 일 때 사용 */
  modifiedAt?: string;
  /** 작성자 이름 — article:author meta */
  articleAuthor?: string;

  /* ── 추가 메타 ───────────────────────────────────────── */
  /** 키워드 배열 → meta name="keywords" */
  keywords?: string[];
}

export function SEOMeta({
  title,
  description,
  canonical,
  ogImage,
  ogImageAlt,
  ogType = 'website',
  noindex = false,
  publishedAt,
  modifiedAt,
  articleAuthor,
  keywords,
}: SEOMetaProps) {
  /* 제목 조합 */
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;

  /* 디스크립션 — 150자 이내로 자름 (너무 길면 검색결과에서 잘림) */
  const desc = (description || DEFAULT_DESC).slice(0, 160);

  /* OG 이미지 */
  const img    = ogImage ?? DEFAULT_OG_IMAGE;
  const imgAlt = ogImageAlt ?? fullTitle;

  /* Canonical 전체 URL */
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;

  /* robots 디렉티브 */
  const robotsContent = noindex
    ? 'noindex,nofollow'
    : 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1';

  return (
    <Helmet>
      {/* ── 기본 메타 ──────────────────────────────────────── */}
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="robots" content={robotsContent} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {articleAuthor && <meta name="author" content={articleAuthor} />}

      {/* ── Canonical ──────────────────────────────────────── */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* ── Open Graph 공통 ────────────────────────────────── */}
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={img} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imgAlt} />
      <meta property="og:image:type" content="image/png" />

      {/* ── Open Graph — article 전용 ──────────────────────── */}
      {ogType === 'article' && publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      {ogType === 'article' && modifiedAt && (
        <meta property="article:modified_time" content={modifiedAt} />
      )}
      {ogType === 'article' && articleAuthor && (
        <meta property="article:author" content={articleAuthor} />
      )}

      {/* ── Twitter Card ───────────────────────────────────── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
      <meta name="twitter:image:alt" content={imgAlt} />
    </Helmet>
  );
}
