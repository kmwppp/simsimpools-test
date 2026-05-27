import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getBlogPostById, getRelatedPosts } from '../data/blog';
import { SEOMeta } from '../components/seo/SEOMeta';
import { Badge } from '../components/ui/Badge';
import { AdPlaceholder } from '../components/ui/AdPlaceholder';
import { ReadingProgress } from '../components/blog/ReadingProgress';
import { BlogMarkdown } from '../components/blog/BlogMarkdown';
import { BlogCard } from '../components/blog/BlogCard';
import { TextWithLinks } from '../components/blog/InternalLinks';
import { AuthorBox } from '../components/shared/AuthorBox';

const DEFAULT_BLOG_AUTHOR = {
  name: '심심풀이 편집팀',
  role: '콘텐츠 에디터',
  bio: '심리학을 일상의 언어로 풀어내는 콘텐츠를 기획하고 편집합니다.',
};

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
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAt,
            dateModified: post.lastModified ?? post.publishedAt,
            url: `${BASE_URL}/blog/${post.id}`,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${BASE_URL}/blog/${post.id}`,
            },
            author: post.author
              ? { '@type': 'Person', name: post.author.name, jobTitle: post.author.role }
              : { '@type': 'Organization', name: '심심풀이 편집팀' },
            publisher: {
              '@type': 'Organization',
              name: '심심풀이',
              url: BASE_URL,
              logo: { '@type': 'ImageObject', url: `${BASE_URL}/favicon.ico` },
            },
            keywords: post.tags.join(', '),
            inLanguage: 'ko-KR',
            image: `${BASE_URL}/og-image.png`,
          })}
        </script>
      </Helmet>

      {/* ── 읽기 진행 바 ── */}
      <ReadingProgress />

      <div className="section-container py-10 max-w-3xl mx-auto">

        {/* ── 브레드크럼 ── */}
        <nav
          aria-label="breadcrumb"
          className="flex items-center gap-1.5 text-xs text-slate-400 mb-8"
        >
          <Link to="/" className="hover:text-slate-600 transition-colors">홈</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-slate-600 transition-colors">칼럼</Link>
          <span>/</span>
          <span className="text-slate-500 line-clamp-1">{post.title}</span>
        </nav>

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
            author={post.author ?? DEFAULT_BLOG_AUTHOR}
            publishedAt={post.publishedAt}
            lastModified={post.lastModified}
            sources={post.references}
            purpose="심리학 지식의 대중화와 독자의 자기이해를 돕기 위한 교육·정보 목적의 칼럼입니다."
            updatePolicy="최신 연구 동향 및 독자 피드백을 반영하여 필요 시 내용을 보완합니다."
            injectJsonLd={false}
            pageUrl={`/blog/${post.id}`}
            pageTitle={post.title}
          />

          {/* ── 아티클 상단 광고 ── */}
          <AdPlaceholder position="article-top" className="mb-8" />

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

        {/* ── 공유 CTA ── */}
        <div className="bg-gradient-to-br from-brand-50 to-indigo-50 rounded-2xl p-7 mt-10 text-center border border-brand-100">
          <p className="text-slate-700 font-semibold mb-1">
            이 글이 도움이 됐나요?
          </p>
          <p className="text-sm text-slate-500 mb-4">
            공감하는 분께 공유해보세요.
          </p>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: post.title,
                  text: post.excerpt,
                  url: window.location.href,
                });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('링크가 복사됐습니다!');
              }
            }}
            className="btn-primary text-sm"
          >
            공유하기 📤
          </button>
        </div>

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
