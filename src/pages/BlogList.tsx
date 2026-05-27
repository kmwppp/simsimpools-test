import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog';
import { SEOMeta } from '../components/seo/SEOMeta';
import { AdPlaceholder } from '../components/ui/AdPlaceholder';
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
        title="심리 칼럼"
        description="내향성, 감정 소비, MBTI, 애착 유형, 경계선 설정 등 심리와 자기이해에 관한 깊이 있는 칼럼을 읽어보세요."
        canonical="/blog"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: '심심풀이 칼럼',
          description: '심리학과 자기이해를 주제로 한 깊이 있는 칼럼',
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
            Column
          </p>
          <h1 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            심리 칼럼
          </h1>
          <p className="text-slate-500 max-w-lg leading-relaxed">
            자기이해, 감정 회복, 인간관계—우리가 살면서 한 번쯤 마주하는 심리적 주제들을
            편안한 언어로 풀어냅니다.
          </p>
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

        {/* ── 피처드 하단 광고 ── */}
        <AdPlaceholder position="article-top" className="mb-10" />

        {/* ── 포스트 그리드 ── */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post, idx) => (
              <>
                <BlogCard key={post.id} post={post} />
                {/* 6번째 카드 뒤에 광고 삽입 (그리드 깨지지 않게 col-span) */}
                {idx === 5 && (
                  <div key="ad-mid" className="col-span-full my-2">
                    <AdPlaceholder position="article-mid" />
                  </div>
                )}
              </>
            ))}
          </div>
        )}

        {/* ── 하단 광고 ── */}
        <AdPlaceholder position="content-bottom" className="mt-12" />
      </div>
    </>
  );
}
