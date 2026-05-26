import { SEOMeta } from '../components/seo/SEOMeta';
import { Hero } from '../components/home/Hero';
import { PopularTests } from '../components/home/PopularTests';
import { AdPlaceholder } from '../components/ui/AdPlaceholder';
import { LatestPosts } from '../components/home/LatestPosts';
import { CategorySection } from '../components/home/CategorySection';
import { AboutSummary } from '../components/home/AboutSummary';

export function Home() {
  return (
    <>
      <SEOMeta
        title="심심풀이 - 심리 테스트 & 성격 분석 플랫폼"
        description="나를 더 잘 이해하는 심리 테스트와 성격 분석 콘텐츠. 동물 유형, 연애 성향, 스트레스 반응 등 다양한 심리 테스트를 무료로 즐겨보세요."
        canonical="/"
      />
      <Hero />
      <PopularTests />

      {/* 홈 중간 광고 영역 */}
      <div className="section-container py-6">
        <AdPlaceholder position="home-mid" />
      </div>

      <LatestPosts />
      <CategorySection />
      <AboutSummary />

      {/* 하단 광고 영역 */}
      <div className="section-container py-8">
        <AdPlaceholder position="content-bottom" />
      </div>
    </>
  );
}
