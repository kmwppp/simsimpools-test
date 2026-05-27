import { Link } from 'react-router-dom';
import { getRecentlyModifiedPosts } from '../../data/blog';
import { Badge } from '../ui/Badge';
import type { BlogPost } from '../../types/blog';

function isRecentlyUpdated(post: BlogPost): boolean {
  if (!post.lastModified || post.lastModified === post.publishedAt) return false;
  const diff = Date.now() - new Date(post.lastModified).getTime();
  return diff < 60 * 24 * 60 * 60 * 1000;
}

export function LatestPosts() {
  const posts = getRecentlyModifiedPosts(4);

  return (
    <section className="py-16 bg-slate-50">
      <div className="section-container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="section-title">최근 업데이트된 에세이</h2>
            <p className="section-subtitle">편집팀이 최근 보완하고 다듬은 글들입니다</p>
          </div>
          <Link to="/blog" className="text-brand-600 text-sm font-medium hover:underline hidden sm:block">
            전체 보기 →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {posts.map(post => {
            const updated = isRecentlyUpdated(post);
            const displayDate = post.lastModified ?? post.publishedAt;
            return (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="card group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex gap-4 p-5"
              >
                <div className="text-3xl flex-shrink-0 mt-0.5">{post.thumbnail}</div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge color={post.categoryColor as 'violet'}>{post.category}</Badge>
                    {updated && (
                      <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                        업데이트
                      </span>
                    )}
                    <span className="text-xs text-slate-400">{post.readTime} 읽기</span>
                  </div>
                  <h3 className="font-semibold text-slate-800 group-hover:text-brand-600 transition-colors leading-snug mb-1 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2">{post.excerpt}</p>
                  <p className="text-xs text-slate-400 mt-2">
                    {post.lastModified && post.lastModified !== post.publishedAt
                      ? `수정 ${displayDate}`
                      : displayDate}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link to="/blog" className="btn-outline text-sm">
            전체 에세이 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
