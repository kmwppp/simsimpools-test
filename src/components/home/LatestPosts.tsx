import { Link } from 'react-router-dom';
import { getRecentPosts } from '../../data/blog';
import { Badge } from '../ui/Badge';

export function LatestPosts() {
  const posts = getRecentPosts(4);

  return (
    <section className="py-16 bg-slate-50">
      <div className="section-container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="section-title">최신 칼럼</h2>
            <p className="section-subtitle">심리와 자기이해에 관한 깊이 있는 글</p>
          </div>
          <Link to="/blog" className="text-brand-600 text-sm font-medium hover:underline hidden sm:block">
            전체 보기 →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {posts.map(post => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="card group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex gap-4 p-5"
            >
              <div className="text-3xl flex-shrink-0 mt-0.5">{post.thumbnail}</div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <Badge color={post.categoryColor as 'violet'}>{post.category}</Badge>
                  <span className="text-xs text-slate-400">{post.readTime} 읽기</span>
                </div>
                <h3 className="font-semibold text-slate-800 group-hover:text-brand-600 transition-colors leading-snug mb-1 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-500 line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link to="/blog" className="btn-outline text-sm">
            전체 칼럼 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
