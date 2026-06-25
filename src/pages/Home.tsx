import { SEOMeta } from '../components/seo/SEOMeta';
import { Hero } from '../components/home/Hero';
import { PopularTests } from '../components/home/PopularTests';
import { LatestPosts } from '../components/home/LatestPosts';
import { CategorySection } from '../components/home/CategorySection';
import { AboutSummary } from '../components/home/AboutSummary';

export function Home() {
  return (
    <>
      <SEOMeta
        title="심심풀이 — 설명하기 어려운 마음의 장면들"
        description="재밌게 놀고 돌아온 뒤의 피로, 거절하고 난 뒤의 불편함, 가까운 사람과 자꾸 엇갈리는 순간을 조용히 관찰해 적습니다."
        canonical="/"
      />
      {/* WebSite + Organization 구조화 데이터는 index.html 전역 템플릿에서 제공 */}
      <Hero />
      <LatestPosts />
      <PopularTests />
      <CategorySection />
      <AboutSummary />
    </>
  );
}
