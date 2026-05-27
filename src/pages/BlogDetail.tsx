import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getBlogPostById, getRelatedPosts } from '../data/blog';
import { SEOMeta } from '../components/seo/SEOMeta';
import { Breadcrumb } from '../components/seo/Breadcrumb';
import { Badge } from '../components/ui/Badge';
import { AdPlaceholder } from '../components/ui/AdPlaceholder';
import { ReadingProgress } from '../components/blog/ReadingProgress';
import { BlogMarkdown } from '../components/blog/BlogMarkdown';
import { BlogCard } from '../components/blog/BlogCard';
import { TextWithLinks } from '../components/blog/InternalLinks';
import { AuthorBox } from '../components/shared/AuthorBox';
import { PostFeedback } from '../components/blog/PostFeedback';

/** lastModified(또는 publishedAt)으로부터 지난 일수 */
function daysSince(dateStr: string): number {
  const diff = Date.now() - new Date(dateStr).getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

const BASE_ORG = {
  '@type': 'Organization',
  '@id': 'https://simsimpools.co.kr/#organization',
  name: '심심풀이',
  url: 'https://simsimpools.co.kr',
} as const;

/** 본문 글자 수 기준으로 단어 수 추정 (한국어 기준 약 2자/단어) */
function estimateWordCount(post: ReturnType<typeof getBlogPostById>): number {
  if (!post) return 0;
  if (post.body) return Math.round(post.body.length / 2);
  return Math.round(
    post.sections.reduce((sum, s) => sum + (s.content?.length ?? 0) + (s.heading?.length ?? 0), 0) / 2
  );
}

const BASE_URL = 'https://simsimpools.co.kr';

/* 섹션이 몇 번째 이상일 때 중간 광고를 삽입할지 결정 */
const MID_AD_AFTER = 3;

export function BlogDetail() {
  const { postId = '' } = useParams<{ postId: string }>();
  const post = getBlogPostById(postId);
  const related = getRelatedPosts(postId, 3);

  if (!post) {
    return (
      <div className="section-container py-24 text-center">
        <p className="text-slate-500">글을 찾을 수 없습니다.</p>
        <Link to="/blog" className="btn-primary mt-4">
          칼럼 목록으로
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* ── SEO ── */}
      <SEOMeta
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.id}`}
        ogType="article"
        publishedAt={post.publishedAt}
        modifiedAt={post.lastModified ?? post.publishedAt}
        articleAuthor="심심풀이"
        keywords={post.tags}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            '@id': `${BASE_URL}/blog/${post.id}#article`,
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAt,
            dateModified: post.lastModified ?? post.publishedAt,
            url: `${BASE_URL}/blog/${post.id}`,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${BASE_URL}/blog/${post.id}`,
            },
            author: BASE_ORG,
            publisher: {
              ...BASE_ORG,
              logo: {
                '@type': 'ImageObject',
                url: `${BASE_URL}/og-image.png`,
                width: 1200,
                height: 630,
              },
            },
            image: {
              '@type': 'ImageObject',
              url: `${BASE_URL}/og-image.png`,
              width: 1200,
              height: 630,
            },
            keywords: post.tags.join(', '),
            articleSection: post.category,
            wordCount: estimateWordCount(post),
            inLanguage: 'ko-KR',
          })}
        </script>
      </Helmet>

      {/* ── 읽기 진행 바 ── */}
      <ReadingProgress />

      <div className="section-container py-10 max-w-3xl mx-auto">

        {/* ── 브레드크럼 + BreadcrumbList schema ── */}
        <Breadcrumb
          items={[
            { label: '홈', href: '/' },
            { label: '칼럼', href: '/blog' },
            { label: post.title },
          ]}
        />

        {/* ── 아티클 헤더 ── */}
        <article>
          <header className="mb-10">
            {/* 카테고리 + 메타 */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <Badge color={post.categoryColor as 'violet'}>{post.category}</Badge>
              <span className="text-sm text-slate-400">{post.readTime} 읽기</span>
              <span className="text-slate-300">·</span>
              <time dateTime={post.publishedAt} className="text-sm text-slate-400">
                {post.publishedAt}
              </time>
              {post.lastModified && post.lastModified !== post.publishedAt && (
                <>
                  <span className="text-slate-300">·</span>
                  <span className="text-sm text-slate-400">
                    수정{' '}
                    <time dateTime={post.lastModified}>{post.lastModified}</time>
                  </span>
                </>
              )}
            </div>

            {/* 썸네일 이모지 */}
            <div className="text-6xl mb-6 leading-none">{post.thumbnail}</div>

            {/* 제목 */}
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4 tracking-tight">
              {post.title}
            </h1>

            {/* 부제목 */}
            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-6">
              {post.subtitle}
            </p>

            {/* 태그 */}
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {/* ── 저자 정보 (AuthorBox) ── */}
          <AuthorBox
            publishedAt={post.publishedAt}
            lastModified={post.lastModified}
          />

          {/* ── 아티클 상단 광고 ── */}
          <AdPlaceholder position="article-top" className="mb-8" />

          {/* ── 오래된 글 안내 (lastModified 기준 12개월 초과 시) ── */}
          {daysSince(post.lastModified ?? post.publishedAt) > 365 && (
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 text-sm text-amber-800">
              <span className="flex-shrink-0 mt-0.5">🕐</span>
              <span>
                이 글은 마지막으로 수정된 지{' '}
                <strong>{Math.floor(daysSince(post.lastModified ?? post.publishedAt) / 30)}개월</strong>이 지났습니다.
                일부 내용이 현재와 다를 수 있습니다.
              </span>
            </div>
          )}

          {/* ── 인트로 발췌 ── */}
          <div className="bg-brand-50 border-l-4 border-brand-400 px-5 py-4 rounded-r-2xl mb-10 text-slate-600 leading-relaxed text-[0.95rem] sm:text-base">
            {post.excerpt}
          </div>

          {/* ── 본문 ── */}
          {post.body ? (
            /* Markdown 포맷 */
            <BlogMarkdown content={post.body} />
          ) : (
            /* 레거시 섹션 포맷 */
            <div className="article-body">
              {post.sections.map((section, i) => (
                <div key={i}>
                  {/* 중간 광고: MID_AD_AFTER번째 섹션 뒤 */}
                  {i === MID_AD_AFTER && (
                    <AdPlaceholder position="article-mid" className="my-10" />
                  )}

                  {section.heading && (
                    <h2 className="text-[1.35rem] font-bold text-slate-800 mt-12 mb-4 leading-snug tracking-tight">
                      {section.heading}
                    </h2>
                  )}
                  <p className="text-slate-700 leading-[1.95] mb-6 text-[0.975rem] sm:text-base">
                    <TextWithLinks text={section.content} />
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* ── 참고문헌 ── */}
          {post.references && post.references.length > 0 && (
            <div className="mt-12 border-t border-slate-100 pt-8">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                참고문헌
              </h3>
              <ul className="space-y-2">
                {post.references.map((ref, i) => (
                  <li
                    key={i}
                    className="text-xs text-slate-400 leading-relaxed pl-3 border-l-2 border-slate-100"
                  >
                    {ref}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>

        {/* ── 태그 ── */}
        <div className="border-t border-slate-100 pt-8 mt-10">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-slate-100 text-slate-600 text-sm px-3 py-1 rounded-full hover:bg-slate-200 transition-colors cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── 피드백 + 공유 ── */}
        <PostFeedback
          postId={post.id}
          postTitle={post.title}
          postExcerpt={post.excerpt}
        />

        {/* ── 아티클 하단 광고 ── */}
        <AdPlaceholder position="article-bottom" className="my-10" />

        {/* ── 관련 글 ── */}
        {related.length > 0 && (
          <section aria-label="관련 글">
            <h2 className="text-xl font-bold text-slate-800 mb-5">관련 글</h2>
            <div className="space-y-3">
              {related.map((p) => (
                <BlogCard key={p.id} post={p} variant="horizontal" />
              ))}
            </div>
          </section>
        )}

        {/* ── 테스트 CTA ── */}
        <div className="mt-10 card p-7 text-center bg-gradient-to-br from-slate-50 to-indigo-50 border-slate-100">
          <p className="font-bold text-slate-800 mb-2 text-lg">
            직접 확인해보고 싶으신가요?
          </p>
          <p className="text-sm text-slate-500 mb-5">
            다양한 심리 테스트로 나를 더 깊이 이해해보세요.
          </p>
          <Link to="/tests" className="btn-primary text-sm">
            심리 테스트 보기 →
          </Link>
        </div>
      </div>
    </>
  );
}
