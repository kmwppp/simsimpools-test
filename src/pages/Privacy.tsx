import { SEOMeta } from '../components/seo/SEOMeta';

const EFFECTIVE_DATE = '2025년 11월 1일';
const SITE_NAME = '심심풀이';
const CONTACT_EMAIL = 'privacy@simsimpools.co.kr';

export function Privacy() {
  return (
    <>
      <SEOMeta
        title="개인정보처리방침"
        description={`${SITE_NAME}의 개인정보처리방침입니다. 수집하는 정보와 사용 목적, 보관 기간 등을 확인하세요.`}
        canonical="/privacy"
      />

      <div className="bg-white border-b border-slate-100">
        <div className="section-container py-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">개인정보처리방침</h1>
          <p className="text-slate-500">시행일: {EFFECTIVE_DATE}</p>
        </div>
      </div>

      <div className="section-container py-12 max-w-3xl mx-auto">
        <div className="card p-8">
          <div className="prose-content">
            <p>
              {SITE_NAME}(이하 "서비스")는 이용자의 개인정보를 중요하게 여기며, 개인정보보호법 및 관련 법령을 준수합니다.
              본 방침은 서비스가 어떤 정보를 수집하고, 어떻게 사용하며, 어떻게 보호하는지를 설명합니다.
            </p>

            <h2>1. 수집하는 정보</h2>
            <p>
              심심풀이는 기본적으로 서버리스(serverless) 정적 사이트로 운영되며, 별도의 회원 가입 절차 없이
              이용할 수 있습니다. 서비스 이용 과정에서 수집될 수 있는 정보는 다음과 같습니다.
            </p>
            <ul>
              <li>
                <strong>자동 수집 정보:</strong> 서비스 이용 시 IP 주소, 브라우저 유형, 방문 일시,
                페이지 뷰 등의 정보가 웹 서버 로그 또는 분석 도구를 통해 자동으로 수집될 수 있습니다.
              </li>
              <li>
                <strong>로컬 저장소(localStorage):</strong> 테스트 진행 상황 및 결과는 이용자의 기기 내
                브라우저 로컬 저장소에만 저장되며, 서버로 전송되지 않습니다.
              </li>
              <li>
                <strong>문의 양식:</strong> 문의하기 기능 이용 시 이름, 이메일 주소, 문의 내용이 수집됩니다.
              </li>
              <li>
                <strong>쿠키 및 유사 기술:</strong> 서비스 이용 경험 향상 및 광고 서비스 제공을 위해
                쿠키 또는 유사한 기술이 사용될 수 있습니다.
              </li>
            </ul>

            <h2>2. 정보의 이용 목적</h2>
            <p>수집된 정보는 다음 목적으로 이용됩니다.</p>
            <ul>
              <li>서비스의 정상적인 제공 및 유지·관리</li>
              <li>이용자 문의에 대한 답변</li>
              <li>서비스 개선을 위한 통계 분석</li>
              <li>Google AdSense를 통한 맞춤형 광고 제공 (Google의 개인정보처리방침 적용)</li>
              <li>서비스 관련 공지사항 전달</li>
            </ul>

            <h2>3. 정보의 보관 및 파기</h2>
            <p>
              문의를 통해 수집된 개인정보는 문의 답변 완료 후 지체 없이 파기됩니다.
              단, 관계 법령에 따라 보존이 필요한 경우에는 해당 기간 동안 보관됩니다.
            </p>
            <ul>
              <li>소비자 불만 또는 분쟁 처리 관련 기록: 3년 (전자상거래법)</li>
              <li>서비스 이용 관련 로그 기록: 3개월 (통신비밀보호법)</li>
            </ul>

            <h2>4. 제3자 제공</h2>
            <p>
              심심풀이는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
              다만, 다음의 경우는 예외로 합니다.
            </p>
            <ul>
              <li>이용자가 사전에 동의한 경우</li>
              <li>법령의 규정에 의거하거나 수사 목적으로 법령에서 정한 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
            </ul>
            <p>
              <strong>Google AdSense:</strong> 서비스는 Google AdSense 광고를 사용할 수 있으며,
              Google은 쿠키를 사용하여 이용자에게 맞춤형 광고를 제공할 수 있습니다.
              Google의 광고 정책에 대한 자세한 내용은
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline ml-1">
                Google 개인정보처리방침
              </a>
              을 참고해주세요.
            </p>

            <h2>5. 이용자의 권리</h2>
            <p>이용자는 언제든지 다음의 권리를 행사할 수 있습니다.</p>
            <ul>
              <li>개인정보 열람 요청</li>
              <li>개인정보 정정·삭제 요청</li>
              <li>개인정보 처리 정지 요청</li>
              <li>개인정보 이동 요청</li>
            </ul>
            <p>
              위 권리 행사는 {CONTACT_EMAIL}로 이메일을 보내주시면 지체 없이 처리하겠습니다.
            </p>

            <h2>6. 쿠키 관리</h2>
            <p>
              이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다. 쿠키 설정 방법은
              사용하시는 브라우저의 도움말을 참고해주세요. 단, 쿠키 저장을 거부하면 서비스 이용에
              일부 불편이 있을 수 있습니다.
            </p>

            <h2>7. 개인정보보호 책임자</h2>
            <p>
              개인정보 처리에 관한 업무를 총괄하고, 개인정보 처리와 관련한 이용자의 불만 처리 및
              피해 구제를 위하여 아래와 같이 개인정보보호 책임자를 지정합니다.
            </p>
            <ul>
              <li>책임자: 심심풀이 운영팀</li>
              <li>이메일: {CONTACT_EMAIL}</li>
            </ul>

            <h2>8. 개인정보처리방침의 변경</h2>
            <p>
              본 방침은 법령 변경, 정책 변경 등에 따라 내용이 추가·삭제·수정될 수 있으며,
              변경 시에는 최소 7일 전에 서비스 내 공지사항을 통해 알립니다.
              중요한 변경의 경우에는 최소 30일 이전에 고지합니다.
            </p>
            <p>이 방침은 {EFFECTIVE_DATE}부터 적용됩니다.</p>
          </div>
        </div>
      </div>
    </>
  );
}
