import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { SEOMeta } from '../components/seo/SEOMeta';
import { Badge } from '../components/ui/Badge';
import { AdPlaceholder } from '../components/ui/AdPlaceholder';

export function BlogList() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <SEOMeta
        title="심리 칼럼"
        description="내향성, 감정 소비, MBTI, 애착 유형, 경계선 설정 등 심리와 자기이해에 관한 깊이 있는 칼럼을 읽어보세요."
        canonical="/blog"
      />

      <div className="bg-white border-b border-slate-100">
        <div className="section-container py-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">심리 칼럼</h1>
          <p className="text-slate-500">자기이해와 인간관계에 관한 깊이 있는 이야기</p>
        </div>
      </div>

      <div className="section-container py-12">
        {/* Featured */}
        <Link
          to={`/blog/${featured.id}`}
          className="card group flex flex-col md:flex-row gap-6 p-6 mb-8 hover:shadow-md transition-all"
        >
          <div className="text-7xl flex-shrink-0 flex items-center justify-center w-32 h-32 bg-slate-50 rounded-2xl">
            {featured.thumbnail}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Badge color={featured.categoryColor as 'violet'}>{featured.category}</Badge>
              <span className="text-xs text-slate-400">{featured.readTime} 읽기</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 group-hover:text-brand-600 transition-colors mb-2">
              {featured.title}
            </h2>
            <p className="text-slate-500 text-sm mb-3">{featured.subtitle}</p>
            <p className="text-slate-600 leading-relaxed line-clamp-3">{featured.excerpt}</p>
            <div className="mt-4 text-sm font-medium text-brand-600 group-hover:underline">
              읽기 →
            </div>
          </div>
        </Link>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map(post => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="card group hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <div className="p-5">
                <div className="text-4xl mb-4">{post.thumbnail}</div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge color={post.categoryColor as 'violet'}>{post.category}</Badge>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>
                <h2 className="font-bold text-slate-800 group-hover:text-brand-600 transition-colors leading-snug mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed">{post.excerpt}</p>
              </div>
              <div className="px-5 pb-5">
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs bg-slate-100 text-slate-400 px-2 py-0.5 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <AdPlaceholder position="content-bottom" />
        </div>
      </div>
    </>
  );
}
