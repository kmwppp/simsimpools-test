import { Link } from 'react-router-dom';
import { Badge } from '../ui/Badge';
import type { BlogPost } from '../../types/blog';

interface Props {
  post: BlogPost;
  variant?: 'default' | 'horizontal' | 'featured';
}

/** lastModified 기준 최근 수정 여부 (60일 이내) */
function isRecentlyUpdated(post: BlogPost): boolean {
  if (!post.lastModified || post.lastModified === post.publishedAt) return false;
  const diff = Date.now() - new Date(post.lastModified).getTime();
  return diff < 60 * 24 * 60 * 60 * 1000;
}

export function BlogCard({ post, variant = 'default' }: Props) {
  const recentlyUpdated = isRecentlyUpdated(post);
  /* ── 가로형 (related posts 등) ── */
  if (variant === 'horizontal') {
    return (
      <Link
        to={`/blog/${post.id}`}
        className="card group flex items-center gap-4 p-4 hover:shadow-md transition-all hover:-translate-y-0.5"
      >
        <span className="text-3xl w-12 h-12 flex items-center justify-center bg-slate-50 rounded-xl flex-shrink-0">
          {post.thumbnail}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Badge color={post.categoryColor as 'violet'}>{post.category}</Badge>
            {recentlyUpdated && (
              <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                업데이트
              </span>
            )}
          </div>
          <p className="font-semibold text-slate-800 text-sm leading-snug line-clamp-2 group-hover:text-brand-600 transition-colors">
            {post.title}
          </p>
          <p className="text-xs text-slate-400 mt-0.5">{post.readTime} 읽기</p>
        </div>
        <span className="text-brand-500 flex-shrink-0">→</span>
      </Link>
    );
  }

  /* ── 피처드 히어로형 ── */
  if (variant === 'featured') {
    return (
      <Link
        to={`/blog/${post.id}`}
        className="card group block p-0 overflow-hidden hover:shadow-lg transition-all mb-10"
      >
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center justify-center bg-gradient-to-br from-brand-50 to-indigo-50 md:w-52 h-40 md:h-auto text-7xl flex-shrink-0">
            {post.thumbnail}
          </div>
          <div className="p-7 flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Badge color={post.categoryColor as 'violet'}>{post.category}</Badge>
              <span className="text-xs text-slate-400 font-medium">추천 글</span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-slate-400">{post.readTime} 읽기</span>
              {recentlyUpdated && (
                <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                  업데이트
                </span>
              )}
            </div>
            <h2 className="text-2xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug mb-2">
              {post.title}
            </h2>
            <p className="text-slate-500 text-sm mb-3">{post.subtitle}</p>
            <p className="text-slate-600 leading-relaxed line-clamp-3 text-sm">{post.excerpt}</p>
            <div className="flex items-center gap-3 mt-5">
              {post.author && (
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-xs">
                    {post.author.name[0]}
                  </div>
                  <span className="text-xs text-slate-500">{post.author.name}</span>
                </div>
              )}
              <span className="text-xs text-slate-400">{post.publishedAt}</span>
              <span className="ml-auto text-sm font-medium text-brand-600 group-hover:underline">
                읽기 →
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  /* ── 기본 카드형 ── */
  return (
    <Link
      to={`/blog/${post.id}`}
      className="card group hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col"
    >
      <div className="p-5 flex-1">
        <div className="text-4xl mb-4">{post.thumbnail}</div>
        <div className="flex items-center gap-2 mb-2">
          <Badge color={post.categoryColor as 'violet'}>{post.category}</Badge>
          <span className="text-xs text-slate-400">{post.readTime}</span>
          {recentlyUpdated && (
            <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
              업데이트
            </span>
          )}
        </div>
        <h2 className="font-bold text-slate-800 group-hover:text-brand-600 transition-colors leading-snug mb-2 line-clamp-2 text-base">
          {post.title}
        </h2>
        <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
      </div>
      <div className="px-5 pb-5 flex items-center justify-between border-t border-slate-50 pt-3 mt-auto">
        <div className="flex flex-wrap gap-1">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-slate-100 text-slate-400 px-2 py-0.5 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
        <span className="text-xs text-slate-400">
          {recentlyUpdated
            ? `수정 ${post.lastModified}`
            : post.publishedAt}
        </span>
      </div>
    </Link>
  );
}
