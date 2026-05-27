import { Helmet } from 'react-helmet-async';
import { SEOMeta } from '../components/seo/SEOMeta';
import { LegalLayout } from '../components/layout/LegalLayout';

const EFFECTIVE_DATE = '2025년 11월 1일';
const UPDATED_DATE = '2026년 5월 27일';
const SITE_NAME = '심심풀이';
const CONTACT_EMAIL = 'kmwppp@daum.net';
const BASE_URL = 'https://simsimpools.co.kr';

const TOC = [
  { id: 'sec1', title: '수집하는 개인정보' },
  { id: 'sec2', title: '개인정보 수집 목적' },
  { id: 'sec3', title: '개인정보 보관 및 파기' },
  { id: 'sec4', title: '제3자 제공 및 공유' },
  { id: 'sec5', title: 'Google AdSense 및 쿠키' },
  { id: 'sec6', title: '이용자의 권리' },
  { id: 'sec7', title: '쿠키 관리 방법' },
  { id: 'sec8', title: '아동 개인정보 보호' },
  { id: 'sec9', title: '개인정보보호 책임자' },
  { id: 'sec10', title: '방침 변경 고지' },
];

export function Privacy() {
  return (
    <>
      <SEOMeta
        title="개인정보처리방침"
        description={`${SITE_NAME}의 개인정보처리방침입니다. 수집 정보, 이용 목적, Google AdSense 쿠키 정책, 이용자 권리 등을 확인하세요.`}
        canonical="/privacy"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `개인정보처리방침 | ${SITE_NAME}`,
          description: '심심풀이 개인정보처리방침',
          url: `${BASE_URL}/privacy`,
          dateModified: UPDATED_DATE,
          publisher: { '@type': 'Organization', name: SITE_NAME, url: BASE_URL },
        })}</script>
      </Helmet>

      <LegalLayout
        title="개인정보처리방침"
        subtitle="심심풀이는 이용자의 개인정보를 소중히 여기며, 개인정보보호법 및 관련 법령을 준수합니다."
        badge="Privacy Policy"
        effectiveDate={`${EFFECTIVE_DATE} (최종 수정: ${UPDATED_DATE})`}
        tocSections={TOC}
      >
        {/* 서문 */}
        <div className="info-box mb-8">
          <strong>핵심 요약:</strong> 심심풀이는 회원 가입 없이 이용 가능한 서비스입니다. 이용자의
          이름·이메일은 문의 시에만 수집되며, 테스트 결과는 서버에 저장되지 않습니다. Google
          Analytics와 Google AdSense를 통해 익명 통계 및 광고 데이터가 수집됩니다.
        </div>

        {/* 1. 수집하는 개인정보 */}
        <h2 id="sec1">1. 수집하는 개인정보</h2>
        <p>
          심심풀이는 서비스 제공을 위해 아래와 같은 최소한의 정보만을 수집합니다.
        </p>

        <h3>직접 수집 정보</h3>
        <ul>
          <li>
            <strong>문의 양식:</strong> 이름, 이메일 주소, 문의 내용. 문의하기 기능 이용 시에만
            수집되며, 이메일 클라이언트를 통해 전달됩니다.
          </li>
        </ul>

        <h3>자동 수집 정보</h3>
        <ul>
          <li>
            <strong>접속 로그:</strong> IP 주소, 브라우저 종류 및 버전, 운영체제, 방문 일시,
            참조 URL, 페이지 열람 기록. 서비스 보안 및 통계 분석 목적으로 수집됩니다.
          </li>
          <li>
            <strong>쿠키(Cookie):</strong> Google Analytics 및 Google AdSense를 통해 방문 패턴,
            광고 노출 횟수 등의 익명 통계 데이터가 수집됩니다.
          </li>
          <li>
            <strong>로컬 저장소(localStorage):</strong> 테스트 진행 상태, 결과, 쿠키 동의 여부는
            이용자 기기의 브라우저 로컬 저장소에만 저장되며, 서버로 전송되지 않습니다.
          </li>
        </ul>

        {/* 2. 수집 목적 */}
        <h2 id="sec2">2. 개인정보 수집 목적</h2>
        <p>수집된 정보는 아래 목적 외에는 사용되지 않습니다.</p>
        <ul>
          <li>이용자 문의에 대한 답변 및 처리</li>
          <li>서비스 이용 현황 파악 및 품질 개선을 위한 통계 분석</li>
          <li>Google AdSense를 통한 광고 서비스 제공 (Google의 정책에 따라 처리)</li>
          <li>서비스 보안 및 악용 방지</li>
          <li>법령에 의한 의무 이행</li>
        </ul>

        {/* 3. 보관 및 파기 */}
        <h2 id="sec3">3. 개인정보 보관 및 파기</h2>
        <p>
          심심풀이는 개인정보 수집 목적이 달성된 후 즉시 파기합니다.
          단, 관계 법령에 따라 보존이 필요한 경우에는 해당 기간 동안 보관합니다.
        </p>
        <ul>
          <li>문의 관련 기록: 답변 완료 후 즉시 파기</li>
          <li>소비자 불만 또는 분쟁 처리 기록: 3년 (전자상거래법 제6조)</li>
          <li>서비스 이용 로그 기록: 3개월 (통신비밀보호법 제15조의2)</li>
        </ul>

        {/* 4. 제3자 제공 */}
        <h2 id="sec4">4. 제3자 제공 및 공유</h2>
        <p>
          심심풀이는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
          다만 아래의 경우는 예외입니다.
        </p>
        <ul>
          <li>이용자가 사전에 동의한 경우</li>
          <li>법령의 규정에 의거하거나, 수사 목적으로 수사기관의 적법한 요청이 있는 경우</li>
        </ul>

        {/* 5. AdSense & 쿠키 */}
        <h2 id="sec5">5. Google AdSense 및 쿠키</h2>
        <div className="highlight-box">
          <strong>📢 AdSense 이용자 고지:</strong> 본 사이트는 Google AdSense를 통해 광고를
          제공하며, Google은 쿠키를 이용해 이용자의 관심사에 맞는 광고를 노출할 수 있습니다.
        </div>
        <p>
          심심풀이는 Google LLC가 제공하는 Google AdSense 광고 서비스를 사용합니다.
          Google AdSense는 쿠키를 사용하여 이용자의 서비스 이용 현황 및 관심사를 파악하고
          맞춤형 광고를 제공합니다. 이 과정에서 Google이 데이터를 처리하며,
          처리 방식은 Google의 개인정보처리방침을 따릅니다.
        </p>
        <ul>
          <li>
            Google 개인정보처리방침:{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/privacy
            </a>
          </li>
          <li>
            Google 광고 설정(맞춤 광고 거부):{' '}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://adssettings.google.com
            </a>
          </li>
          <li>
            Google Analytics 데이터 수집 거부 플러그인:{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics 옵트아웃
            </a>
          </li>
        </ul>
        <p>
          또한 본 사이트는 Google Analytics를 사용하여 서비스 이용 통계를 수집합니다.
          수집된 데이터는 익명 처리되며 개인을 특정하는 데 사용되지 않습니다.
        </p>

        {/* 6. 이용자 권리 */}
        <h2 id="sec6">6. 이용자의 권리</h2>
        <p>이용자는 언제든지 아래 권리를 행사할 수 있습니다.</p>
        <ul>
          <li>수집된 개인정보에 대한 열람 요청</li>
          <li>부정확한 개인정보의 정정 요청</li>
          <li>개인정보 삭제 요청 (단, 법령에 따라 보존 의무가 있는 경우 제외)</li>
          <li>개인정보 처리 정지 요청</li>
        </ul>
        <p>
          권리 행사는{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>로 이메일을 보내주시면
          영업일 기준 5일 이내에 처리합니다.
        </p>

        {/* 7. 쿠키 관리 */}
        <h2 id="sec7">7. 쿠키 관리 방법</h2>
        <p>
          이용자는 브라우저 설정을 통해 쿠키 저장을 거부하거나 삭제할 수 있습니다.
          아래 브라우저별 설정 방법을 참고해주세요.
        </p>
        <ul>
          <li>Chrome: 설정 → 개인정보 및 보안 → 쿠키 및 기타 사이트 데이터</li>
          <li>Safari: 환경설정 → 개인정보보호 → 쿠키 및 웹사이트 데이터 차단</li>
          <li>Firefox: 설정 → 개인정보 및 보안 → 쿠키 및 사이트 데이터</li>
          <li>Edge: 설정 → 쿠키 및 사이트 권한 → 쿠키 및 사이트 데이터 관리</li>
        </ul>
        <p>
          쿠키를 차단하면 광고가 개인화되지 않으며, 일부 서비스 기능이 제한될 수 있습니다.
        </p>

        {/* 8. 아동 보호 */}
        <h2 id="sec8">8. 아동 개인정보 보호</h2>
        <p>
          심심풀이는 만 14세 미만 아동의 개인정보를 고의로 수집하지 않습니다.
          만 14세 미만 아동은 보호자의 동의 없이 문의 양식을 통해 개인정보를 제공하지 않도록
          안내합니다. 만약 만 14세 미만 아동의 개인정보가 수집된 사실을 확인하게 되면,
          즉시 해당 정보를 삭제합니다.
        </p>

        {/* 9. 책임자 */}
        <h2 id="sec9">9. 개인정보보호 책임자</h2>
        <p>
          개인정보 처리에 관한 업무를 총괄하며, 이용자의 불만 처리 및 피해 구제를 위해
          아래와 같이 개인정보보호 책임자를 지정합니다.
        </p>
        <div className="info-box">
          <strong>책임자:</strong> 심심풀이 운영팀<br />
          <strong>이메일:</strong>{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a><br />
          <strong>처리 기간:</strong> 영업일 기준 5일 이내
        </div>

        {/* 10. 변경 고지 */}
        <h2 id="sec10">10. 방침 변경 고지</h2>
        <p>
          본 개인정보처리방침은 법령 변경 또는 서비스 정책 변경에 따라 내용이 추가·삭제·수정될
          수 있습니다. 변경 시 최소 7일 전 서비스 내 공지를 통해 안내드리며,
          중요한 변경사항의 경우 최소 30일 전에 고지합니다.
        </p>
        <p className="text-xs text-slate-400 mt-6">
          본 방침은 {EFFECTIVE_DATE}부터 시행되며, {UPDATED_DATE}에 최종 수정되었습니다.
        </p>
      </LegalLayout>
    </>
  );
}
