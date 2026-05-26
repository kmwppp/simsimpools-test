import { useParams, Link } from 'react-router-dom';
import { getBlogPostById, getRelatedPosts } from '../data/blog';
import { SEOMeta } from '../components/seo/SEOMeta';
import { Badge } from '../components/ui/Badge';
import { AdPlaceholder } from '../components/ui/AdPlaceholder';

export function BlogDetail() {
  const { postId = '' } = useParams<{ postId: string }>();
  const post = getBlogPostById(postId);
  const related = getRelatedPosts(postId, 3);

  if (!post) {
    return (
      <div className="section-container py-24 text-center">
        <p className="text-slate-500">글을 찾을 수 없습니다.</p>
        <Link to="/blog" className="btn-primary mt-4">칼럼 목록으로</Link>
      </div>
    );
  }

  return (
    <>
      <SEOMeta
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.id}`}
        ogType="article"
      />

      <div className="section-container py-10 max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
          <Link to="/" className="hover:text-slate-600">홈</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-slate-600">칼럼</Link>
          <span>/</span>
          <span className="text-slate-600 line-clamp-1">{post.title}</span>
        </div>

        {/* Article header */}
        <article>
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge color={post.categoryColor as 'violet'}>{post.category}</Badge>
              <span className="text-sm text-slate-400">{post.readTime} 읽기</span>
              <span className="text-sm text-slate-400">·</span>
              <span className="text-sm text-slate-400">{post.publishedAt}</span>
            </div>

            <div className="text-5xl mb-5">{post.thumbnail}</div>

            <h1 className="text-3xl font-bold text-slate-800 leading-tight mb-3">
              {post.title}
            </h1>
            <p className="text-xl text-slate-500">{post.subtitle}</p>

            <div className="flex flex-wrap gap-1.5 mt-4">
              {post.tags.map(tag => (
                <span key={tag} className="text-xs bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {/* Intro excerpt */}
          <div className="bg-brand-50 border-l-4 border-brand-400 p-4 rounded-r-xl mb-8 text-slate-600 leading-relaxed">
            {post.excerpt}
          </div>

          {/* Article body */}
          <div className="prose-content">
            {post.sections.map((section, i) => (
              <div key={i}>
                {section.heading && <h2>{section.heading}</h2>}
                <p>{section.content}</p>
              </div>
            ))}
          </div>
        </article>

        {/* Tags */}
        <div className="border-t border-slate-100 pt-8 mt-10">
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="bg-slate-100 text-slate-600 text-sm px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share */}
        <div className="bg-brand-50 rounded-2xl p-6 mt-8 text-center">
          <p className="text-slate-700 font-medium mb-3">이 글이 도움이 됐나요? 주변에 공유해보세요.</p>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: post.title, text: post.excerpt, url: window.location.href });
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

        {/* Ad */}
        <div className="my-10">
          <AdPlaceholder position="content-bottom" />
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-5">관련 글</h2>
            <div className="space-y-3">
              {related.map(p => (
                <Link
                  key={p.id}
                  to={`/blog/${p.id}`}
                  className="card flex items-center gap-4 p-4 hover:shadow-md transition-all hover:-translate-y-0.5"
                >
                  <span className="text-3xl">{p.thumbnail}</span>
                  <div className="min-w-0">
                    <Badge color={p.categoryColor as 'violet'} className="mb-1">{p.category}</Badge>
                    <p className="font-semibold text-slate-800 text-sm leading-snug line-clamp-2">{p.title}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{p.readTime} 읽기</p>
                  </div>
                  <span className="ml-auto text-brand-500 flex-shrink-0">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Test CTA */}
        <div className="mt-10 card p-6 text-center bg-gradient-to-br from-brand-50 to-indigo-50 border-brand-100">
          <p className="font-semibold text-slate-800 mb-2">직접 테스트해보고 싶으신가요?</p>
          <p className="text-sm text-slate-500 mb-4">다양한 심리 테스트로 나를 더 잘 이해해보세요.</p>
          <Link to="/tests" className="btn-primary text-sm">테스트 목록 보기 →</Link>
        </div>
      </div>
    </>
  );
}
