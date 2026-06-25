import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': 'https://simsimpools.co.kr/#website',
              name: '심심풀이',
              url: 'https://simsimpools.co.kr',
              description: '말로 잘 정리되지 않는 피로와 서운함, 관계의 어긋남을 생활 가까이에서 관찰해 적는 독립 콘텐츠 사이트',
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
              description: '사람들이 자주 겪지만 쉽게 설명하지 못하는 감정의 장면을 담백하게 기록하는 독립 콘텐츠 사이트',
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
      <LatestPosts />
      <PopularTests />
      <CategorySection />
      <AboutSummary />
    </>
  );
}
