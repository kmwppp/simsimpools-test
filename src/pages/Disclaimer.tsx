import { Helmet } from 'react-helmet-async';
import { SEOMeta } from '../components/seo/SEOMeta';
import { LegalLayout } from '../components/layout/LegalLayout';

const EFFECTIVE_DATE = '2026년 5월 27일';
const SITE_NAME = '심심풀이';
const CONTACT_EMAIL = 'kmwppp@daum.net';
const BASE_URL = 'https://simsimpools.co.kr';

const TOC = [
  { id: 'sec1', title: '콘텐츠의 성격 및 한계' },
  { id: 'sec2', title: '심리 테스트 면책고지' },
  { id: 'sec3', title: '의료·전문 조언 아님' },
  { id: 'sec4', title: '정보의 정확성 면책' },
  { id: 'sec5', title: '광고 및 제3자 서비스 면책' },
  { id: 'sec6', title: '외부 링크 면책' },
  { id: 'sec7', title: '서비스 가용성 면책' },
  { id: 'sec8', title: '손해배상 제한' },
  { id: 'sec9', title: '저작권 및 공정 이용' },
  { id: 'sec10', title: '준거법' },
];

export function Disclaimer() {
  return (
    <>
      <SEOMeta
        title="면책고지"
        description={`${SITE_NAME}의 면책고지입니다. 심리 테스트의 성격, 콘텐츠 한계, 광고 및 외부 링크 면책 등을 확인하세요.`}
        canonical="/disclaimer"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `면책고지 | ${SITE_NAME}`,
          description: '심심풀이 면책고지',
          url: `${BASE_URL}/disclaimer`,
          dateModified: EFFECTIVE_DATE,
          publisher: { '@type': 'Organization', name: SITE_NAME, url: BASE_URL },
        })}</script>
      </Helmet>

      <LegalLayout
        title="면책고지"
        subtitle={`${SITE_NAME}을 이용하기 전, 서비스의 성격과 한계에 대한 중요한 안내를 확인해주세요.`}
        badge="Disclaimer"
        effectiveDate={EFFECTIVE_DATE}
        tocSections={TOC}
      >
        {/* 서문 */}
        <div className="highlight-box mb-8">
          ⚠️ <strong>중요 안내:</strong> 심심풀이의 모든 콘텐츠는 오락 및 자기 탐색 목적으로
          제작되었습니다. 본 서비스는 전문적인 심리 상담, 정신건강 진단, 의료 서비스를
          제공하지 않습니다.
        </div>

        {/* 1. 콘텐츠 성격 */}
        <h2 id="sec1">1. 콘텐츠의 성격 및 한계</h2>
        <p>
          심심풀이({BASE_URL})에서 제공하는 모든 콘텐츠—심리 테스트, 성격 분석, 칼럼,
          자기이해 가이드 등—는 심리학적 이론과 연구를 참고하여 <strong>교육 및 오락 목적</strong>으로
          제작된 일반 정보 콘텐츠입니다.
        </p>
        <p>
          본 서비스의 콘텐츠는 심리학적 개념을 쉽게 전달하는 것을 목표로 하며,
          학술적 엄밀성이나 임상적 정확성을 완전히 보장하지 않습니다.
          개인의 심리·성격·행동에 대한 설명은 일반화된 경향을 기반으로 하며,
          특정 개인에게 정확하게 적용되지 않을 수 있습니다.
        </p>

        {/* 2. 심리 테스트 면책 */}
        <h2 id="sec2">2. 심리 테스트 면책고지</h2>
        <p>
          심심풀이의 심리 테스트는 다음과 같은 한계를 가집니다.
        </p>
        <ul>
          <li>
            본 테스트는 표준화된 임상 심리 검사(예: MMPI, 로르샤흐 테스트, K-WISC 등)가
            아닙니다.
          </li>
          <li>
            테스트 결과는 응답 시점의 심리 상태, 기분, 최근 경험 등에 따라 달라질 수 있으며,
            고정된 성격이나 심리 상태를 나타내지 않습니다.
          </li>
          <li>
            동일 개인도 다른 시점에 테스트를 수행하면 다른 결과가 나올 수 있습니다.
          </li>
          <li>
            테스트 결과는 자기 탐색의 출발점으로만 활용하시고, 중요한 결정의 근거로 삼지
            마시기 바랍니다.
          </li>
        </ul>

        {/* 3. 의료 면책 */}
        <h2 id="sec3">3. 의료·전문 조언 아님</h2>
        <div className="highlight-box">
          본 서비스는 <strong>정신건강 전문 서비스가 아닙니다.</strong> 우울증, 불안장애,
          ADHD 등 정신건강 문제가 의심되거나 심각한 심리적 어려움을 겪고 있다면,
          반드시 정신건강의학과 전문의 또는 공인 심리상담사의 도움을 받으시기 바랍니다.
        </div>
        <p>
          심심풀이의 콘텐츠는 다음을 대체하지 않습니다.
        </p>
        <ul>
          <li>정신건강의학과 진료 및 진단</li>
          <li>공인 심리상담사 또는 임상심리사의 상담</li>
          <li>의사, 간호사 등 의료 전문가의 의료 조언</li>
          <li>법적 자문 또는 재정 조언</li>
        </ul>
        <p>
          위기 상황이라면 즉시 전문기관에 연락하세요:<br />
          • 정신건강 위기상담 전화: <strong>1577-0199</strong> (24시간)<br />
          • 자살예방상담전화: <strong>1393</strong> (24시간)
        </p>

        {/* 4. 정확성 면책 */}
        <h2 id="sec4">4. 정보의 정확성 면책</h2>
        <p>
          심심풀이는 제공하는 정보의 정확성, 완전성, 최신성을 보장하기 위해 노력하지만,
          콘텐츠의 완벽한 정확성을 보장하지 않습니다. 심리학 연구는 지속적으로 발전하며,
          일부 정보는 최신 연구 결과와 다를 수 있습니다.
        </p>
        <p>
          콘텐츠 내 오류나 부정확한 정보를 발견하신 경우{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>로 알려주시면
          검토 후 신속히 수정하겠습니다.
        </p>

        {/* 5. 광고 면책 */}
        <h2 id="sec5">5. 광고 및 제3자 서비스 면책</h2>
        <p>
          심심풀이는 Google AdSense를 통해 광고를 게재합니다. 게재되는 광고는 Google의 알고리즘에
          의해 자동으로 선택되며, {SITE_NAME}는 광고 콘텐츠의 내용·품질·정확성을 통제하거나
          보장하지 않습니다.
        </p>
        <p>
          광고는 편집 콘텐츠와 명확히 구분되며, 광고주는 심심풀이의 콘텐츠 방향에 영향을
          미치지 않습니다. 광고를 통해 제품이나 서비스를 구매하는 것은 이용자의 자유로운
          선택이며, {SITE_NAME}는 이에 대한 책임을 지지 않습니다.
        </p>

        {/* 6. 외부 링크 */}
        <h2 id="sec6">6. 외부 링크 면책</h2>
        <p>
          심심풀이의 콘텐츠에는 외부 웹사이트 링크가 포함될 수 있습니다.
          이러한 외부 링크는 참고 목적으로 제공되며, {SITE_NAME}는 외부 사이트의 내용,
          개인정보처리방침, 운영 방식에 대해 통제권을 가지지 않으며 이에 대한 책임을 지지
          않습니다.
        </p>
        <p>
          외부 사이트 방문 시 해당 사이트의 이용약관 및 개인정보처리방침을 직접 확인하시기
          바랍니다.
        </p>

        {/* 7. 서비스 가용성 */}
        <h2 id="sec7">7. 서비스 가용성 면책</h2>
        <p>
          심심풀이는 서비스를 상시 제공하기 위해 노력하지만, 서버 점검, 기술적 문제,
          인터넷 장애, 천재지변 등으로 인해 서비스가 일시 중단되거나 오류가 발생할 수 있습니다.
          이로 인한 손해에 대해 {SITE_NAME}는 고의 또는 중대한 과실이 없는 한 책임을 지지
          않습니다.
        </p>

        {/* 8. 손해배상 제한 */}
        <h2 id="sec8">8. 손해배상 제한</h2>
        <p>
          관련 법령이 허용하는 최대 범위 내에서, {SITE_NAME}는 서비스 이용 또는 이용 불가로
          인한 직접적·간접적·부수적·결과적 손해에 대해 책임을 지지 않습니다. 여기에는 수익 손실,
          데이터 손실, 정신적 손해 등이 포함됩니다.
        </p>
        <p>
          일부 관할권에서는 결과적 손해에 대한 책임 면제를 허용하지 않으므로, 위 조항은
          해당 관할권에서는 적용되지 않을 수 있습니다.
        </p>

        {/* 9. 저작권 */}
        <h2 id="sec9">9. 저작권 및 공정 이용</h2>
        <p>
          심심풀이의 모든 콘텐츠는 저작권법에 의해 보호됩니다. 이용자는 개인적·비상업적
          목적으로 콘텐츠를 이용할 수 있으나, 사전 동의 없이 상업적으로 복제·배포하는 것은
          금지됩니다.
        </p>
        <p>
          콘텐츠 인용 및 공유 관련 문의는{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>로 연락해주세요.
        </p>

        {/* 10. 준거법 */}
        <h2 id="sec10">10. 준거법</h2>
        <p>
          본 면책고지는 대한민국 법률에 따라 해석되고 적용됩니다. 면책고지의 내용은
          서비스 정책 변경에 따라 사전 고지 없이 수정될 수 있으며, 변경된 내용은
          본 페이지에 게시된 시점부터 효력이 발생합니다.
        </p>

        <p className="text-xs text-slate-400 mt-8">
          본 면책고지는 {EFFECTIVE_DATE}부터 적용됩니다.
        </p>
      </LegalLayout>
    </>
  );
}
