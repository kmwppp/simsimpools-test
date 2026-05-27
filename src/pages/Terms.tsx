import { Helmet } from 'react-helmet-async';
import { SEOMeta } from '../components/seo/SEOMeta';
import { LegalLayout } from '../components/layout/LegalLayout';

const EFFECTIVE_DATE = '2025년 11월 1일';
const UPDATED_DATE = '2026년 5월 27일';
const SITE_NAME = '심심풀이';
const CONTACT_EMAIL = 'kmwppp@daum.net';
const BASE_URL = 'https://simsimpools.co.kr';

const TOC = [
  { id: 'sec1', title: '제1조 목적' },
  { id: 'sec2', title: '제2조 정의' },
  { id: 'sec3', title: '제3조 약관의 효력 및 변경' },
  { id: 'sec4', title: '제4조 서비스의 내용' },
  { id: 'sec5', title: '제5조 서비스 이용 제한' },
  { id: 'sec6', title: '제6조 콘텐츠 성격 및 면책' },
  { id: 'sec7', title: '제7조 지식재산권' },
  { id: 'sec8', title: '제8조 광고 서비스' },
  { id: 'sec9', title: '제9조 서비스 중단 및 변경' },
  { id: 'sec10', title: '제10조 준거법 및 관할' },
  { id: 'sec11', title: '제11조 문의' },
];

export function Terms() {
  return (
    <>
      <SEOMeta
        title="이용약관"
        description={`${SITE_NAME} 이용약관입니다. 서비스 이용 조건, 콘텐츠 저작권, 광고 정책 등을 확인하세요.`}
        canonical="/terms"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `이용약관 | ${SITE_NAME}`,
          description: '심심풀이 이용약관',
          url: `${BASE_URL}/terms`,
          dateModified: UPDATED_DATE,
          publisher: { '@type': 'Organization', name: SITE_NAME, url: BASE_URL },
        })}</script>
      </Helmet>

      <LegalLayout
        title="이용약관"
        subtitle={`${SITE_NAME}이 제공하는 서비스 이용 전 반드시 읽어주세요. 서비스를 이용하시면 본 약관에 동의하신 것으로 간주됩니다.`}
        badge="Terms of Service"
        effectiveDate={`${EFFECTIVE_DATE} (최종 수정: ${UPDATED_DATE})`}
        tocSections={TOC}
      >
        {/* 서문 */}
        <div className="info-box mb-8">
          <strong>핵심 요약:</strong> 심심풀이의 테스트와 칼럼은 <strong>오락 및 자기 탐색 목적</strong>의
          콘텐츠로, 전문적인 심리 진단이나 의료 행위를 대체하지 않습니다. 모든 콘텐츠는 무료로
          제공되며, 광고를 통해 운영됩니다.
        </div>

        <h2 id="sec1">제1조 (목적)</h2>
        <p>
          이 약관은 {SITE_NAME}(이하 "서비스" 또는 "회사")가 운영하는 심리 테스트 및 콘텐츠
          플랫폼({BASE_URL})의 이용에 관한 조건, 절차, 권리와 의무, 기타 필요한 사항을 규정함을
          목적으로 합니다.
        </p>

        <h2 id="sec2">제2조 (정의)</h2>
        <ul>
          <li>
            <strong>"서비스"</strong>란 {SITE_NAME}가 제공하는 웹사이트({BASE_URL}) 및
            해당 사이트를 통해 이용할 수 있는 모든 콘텐츠와 기능을 의미합니다.
          </li>
          <li>
            <strong>"이용자"</strong>란 본 약관에 따라 서비스를 이용하는 모든 방문자를 말합니다.
          </li>
          <li>
            <strong>"콘텐츠"</strong>란 서비스가 제공하는 심리 테스트, 테스트 결과, 칼럼 글,
            이미지, 텍스트 등 모든 자료를 의미합니다.
          </li>
        </ul>

        <h2 id="sec3">제3조 (약관의 효력 및 변경)</h2>
        <p>
          본 약관은 서비스 화면에 게시되는 시점부터 효력이 발생합니다. {SITE_NAME}는 필요하다고
          인정되는 경우 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지를 통해 고지합니다.
          변경 고지 후 7일 이내에 이의를 제기하지 않으면 변경 사항에 동의한 것으로 간주합니다.
        </p>

        <h2 id="sec4">제4조 (서비스의 내용)</h2>
        <p>{SITE_NAME}는 다음과 같은 서비스를 제공합니다.</p>
        <ul>
          <li>심리 성격 유형 테스트 및 결과 분석 콘텐츠</li>
          <li>심리학·자기이해·인간관계 관련 칼럼 및 읽을거리</li>
          <li>자기 탐색을 위한 정보 콘텐츠</li>
        </ul>
        <p>
          서비스는 연중무휴 24시간 제공을 원칙으로 하나, 시스템 점검·기술적 문제·천재지변 등으로
          일시 중단될 수 있습니다.
        </p>

        <h2 id="sec5">제5조 (서비스 이용의 제한)</h2>
        <p>이용자는 다음 각 호의 행위를 하여서는 안 됩니다.</p>
        <ul>
          <li>서비스의 정상적인 운영을 방해하는 행위</li>
          <li>서비스에서 취득한 정보를 사전 동의 없이 복제·유통·상업적으로 이용하는 행위</li>
          <li>허위 정보를 등록하거나 타인의 정보를 도용하는 행위</li>
          <li>스크래핑, 크롤링 등 자동화 수단으로 콘텐츠를 대량 수집하는 행위</li>
          <li>바이러스·악성코드 등을 유포하는 행위</li>
          <li>기타 관련 법령을 위반하는 행위</li>
        </ul>
        <p>
          위반 시 {SITE_NAME}는 해당 이용자의 서비스 접근을 제한하거나 법적 조치를 취할 수 있습니다.
        </p>

        <h2 id="sec6">제6조 (콘텐츠의 성격 및 면책)</h2>
        <div className="highlight-box">
          ⚠️ {SITE_NAME}의 심리 테스트 및 결과는 <strong>오락 및 자기 탐색 목적</strong>으로 제작된
          콘텐츠입니다. 전문적인 심리 진단·정신건강 평가·의료 행위를 대체하지 않습니다.
        </div>
        <p>
          테스트 결과는 참고 자료로만 활용하시기 바랍니다. 심각한 심리적·정서적 어려움을 겪고
          계신다면 반드시 자격을 갖춘 심리상담사 또는 정신건강의학과 전문의의 도움을 받으시기
          바랍니다.
        </p>
        <p>
          {SITE_NAME}는 테스트 결과의 정확성이나 완전성을 보장하지 않으며,
          결과를 기반으로 한 이용자의 판단과 행동에 대한 법적 책임을 지지 않습니다.
        </p>

        <h2 id="sec7">제7조 (지식재산권)</h2>
        <p>
          서비스 내 모든 콘텐츠(테스트 문항, 결과 텍스트, 칼럼, 이미지 등)에 대한 저작권은
          {SITE_NAME}에 귀속됩니다. 이용자는 개인적·비상업적 목적으로만 콘텐츠를 이용할 수 있으며,
          사전 서면 동의 없이 상업적으로 이용하거나 제3자에게 무단으로 배포·수정할 수 없습니다.
        </p>

        <h2 id="sec8">제8조 (광고 서비스)</h2>
        <p>
          {SITE_NAME}는 Google AdSense 등 제3자 광고 서비스를 통해 수익을 창출할 수 있습니다.
          서비스에 표시되는 광고는 광고주가 제공하며, {SITE_NAME}는 광고 콘텐츠의 내용에 대한
          책임을 지지 않습니다.
        </p>
        <p>
          광고와 편집 콘텐츠는 명확히 구분되며, 광고주는 콘텐츠의 방향이나 내용에 영향을 미치지
          않습니다. Google AdSense의 개인정보 처리는 Google의 개인정보처리방침을 따릅니다.
        </p>

        <h2 id="sec9">제9조 (서비스 중단 및 변경)</h2>
        <p>
          {SITE_NAME}는 서비스의 일부 또는 전부를 사전 고지 없이 수정·변경·종료할 수 있습니다.
          서비스의 중단 또는 변경으로 인한 손해에 대해 고의·과실이 없는 한 책임을 지지 않습니다.
        </p>

        <h2 id="sec10">제10조 (준거법 및 관할)</h2>
        <p>
          본 약관은 대한민국 법률에 따라 해석되며, 서비스와 관련하여 분쟁이 발생한 경우
          {SITE_NAME}의 소재지를 관할하는 법원을 전속 관할법원으로 합니다.
        </p>

        <h2 id="sec11">제11조 (문의)</h2>
        <p>
          약관에 관한 문의사항은 아래 이메일로 연락해주시기 바랍니다.
        </p>
        <div className="info-box">
          <strong>문의 이메일:</strong>{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>

        <p className="text-xs text-slate-400 mt-8">
          부칙: 이 약관은 {EFFECTIVE_DATE}부터 적용되며, {UPDATED_DATE}에 최종 수정되었습니다.
        </p>
      </LegalLayout>
    </>
  );
}
