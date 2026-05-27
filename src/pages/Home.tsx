import { Helmet } from 'react-helmet-async';
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
        title="심심풀이 — 심리 테스트 & 관찰 에세이"
        description="왜 이렇게 되는 건지 설명하기 어려운 날들을 위한 사이트. 심리 테스트 5가지와 관찰 에세이 18편을 무료로 제공합니다."
        canonical="/"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': 'https://simsimpools.co.kr/#website',
              name: '심심풀이',
              url: 'https://simsimpools.co.kr',
              description: '설명하기 어려운 나의 반응들을 관찰하는 심리 테스트 & 에세이 사이트',
              inLanguage: 'ko-KR',
              publisher: { '@id': 'https://simsimpools.co.kr/#organization' },
            },
            {
              '@type': 'Organization',
              '@id': 'https://simsimpools.co.kr/#organization',
              name: '심심풀이',
              url: 'https://simsimpools.co.kr',
              email: 'kmwppp@daum.net',
              foundingDate: '2025',
              description: '설명하기 어려운 나의 반응들을 관찰하는 독립 콘텐츠 사이트',
              inLanguage: 'ko-KR',
              sameAs: [
                'https://github.com/kmwppp/simsimpools-test',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'kmwppp@daum.net',
                contactType: 'customer support',
                availableLanguage: 'Korean',
              },
            },
          ],
        })}</script>
      </Helmet>
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
