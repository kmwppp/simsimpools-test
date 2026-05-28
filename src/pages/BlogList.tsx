import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog';
import { SEOMeta } from '../components/seo/SEOMeta';
import { BlogCard } from '../components/blog/BlogCard';
import { CategoryFilter } from '../components/blog/CategoryFilter';

const BASE_URL = 'https://simsimpools.co.kr';

export function BlogList() {
  const [activeCategory, setActiveCategory] = useState('전체');

  const categories = useMemo(
    () => [...new Set(blogPosts.map((p) => p.category))],
    []
  );

  const filtered = useMemo(
    () =>
      activeCategory === '전체'
        ? blogPosts
        : blogPosts.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const [featured, ...rest] = filtered;

  return (
    <>
      <SEOMeta
        title="관찰 에세이 — 설명하기 어려운 마음의 장면들"
        description="재밌게 놀고 왔는데 왜 혼자 있고 싶은지, 거절했는데 왜 내가 더 불편한지. 말로 잘 정리되지 않는 반응을 관찰하는 에세이 21편."
        canonical="/blog"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: '심심풀이 관찰 에세이',
          description: '일상에서 반복되는 피로와 서운함, 관계의 어긋남을 관찰해 적은 글',
          url: `${BASE_URL}/blog`,
          inLanguage: 'ko-KR',
          publisher: {
            '@type': 'Organization',
            name: '심심풀이',
            url: BASE_URL,
          },
          blogPost: blogPosts.slice(0, 5).map((p) => ({
            '@type': 'BlogPosting',
            headline: p.title,
            description: p.excerpt,
            url: `${BASE_URL}/blog/${p.id}`,
            datePublished: p.publishedAt,
          })),
        })}</script>
      </Helmet>

      {/* ── 페이지 헤더 ── */}
      <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="section-container py-14">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-600 uppercase mb-3">
            Essay
          </p>
          <h1 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            관찰 에세이
          </h1>
          <p className="text-slate-500 max-w-lg leading-relaxed mb-6">
            설명하기 어려운 내 반응들을 조금 더 선명하게 들여다봅니다.
          </p>
          <div className="max-w-2xl">
            <p className="text-slate-600 leading-[1.92] text-[0.975rem] mb-4">
              왜 어떤 사람을 만나고 오면 유난히 지치는지, 거절하고 나서 오히려 내가 더 불편해지는 이유가 뭔지,
              분명히 화가 난 건데 그 감정을 어디에 두어야 할지 모를 때가 있어요.
              이 글들은 그런 순간들 주변을 맴돕니다.
            </p>
            <p className="text-slate-500 leading-[1.92] text-[0.975rem]">
              이론을 먼저 설명하기보다, 실제로 마음이 걸렸던 장면에서 출발합니다.
              "나는 왜 이런 상황에서 이렇게 되는 걸까"를 같이 들여다보기 위한 글들입니다.
            </p>
          </div>
        </div>
      </div>

      <div className="section-container py-10">
        {/* ── 카테고리 필터 ── */}
        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        {/* ── 피처드 포스트 ── */}
        {featured && <BlogCard post={featured} variant="featured" />}

        {/* ── 포스트 그리드 ── */}
        {rest.length > 0 && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
