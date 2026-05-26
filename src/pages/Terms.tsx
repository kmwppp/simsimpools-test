import { SEOMeta } from '../components/seo/SEOMeta';

const EFFECTIVE_DATE = '2025년 11월 1일';
const SITE_NAME = '심심풀이';
const CONTACT_EMAIL = 'contact@simsimpools.com';

export function Terms() {
  return (
    <>
      <SEOMeta
        title="이용약관"
        description={`${SITE_NAME} 이용약관입니다. 서비스 이용 전 반드시 확인해주세요.`}
        canonical="/terms"
      />

      <div className="bg-white border-b border-slate-100">
        <div className="section-container py-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">이용약관</h1>
          <p className="text-slate-500">시행일: {EFFECTIVE_DATE}</p>
        </div>
      </div>

      <div className="section-container py-12 max-w-3xl mx-auto">
        <div className="card p-8">
          <div className="prose-content">
            <p>
              본 이용약관(이하 "약관")은 {SITE_NAME}(이하 "서비스")이 제공하는 심리 테스트 및 콘텐츠 서비스의
              이용에 관한 조건과 절차, 기타 필요한 사항을 규정합니다.
              서비스를 이용하시면 본 약관에 동의하신 것으로 간주합니다.
            </p>

            <h2>제1조 (목적)</h2>
            <p>
              이 약관은 {SITE_NAME}가 제공하는 심리 테스트, 성격 분석, 칼럼 콘텐츠 등 인터넷 관련 서비스의
              이용 조건 및 절차에 관한 사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>

            <h2>제2조 (정의)</h2>
            <ul>
              <li>
                <strong>"서비스"</strong>란 {SITE_NAME}가 제공하는 모든 콘텐츠와 기능을 의미합니다.
              </li>
              <li>
                <strong>"이용자"</strong>란 서비스에 접속하여 이 약관에 따라 서비스를 이용하는 모든 이용자를 말합니다.
              </li>
              <li>
                <strong>"콘텐츠"</strong>란 서비스에서 제공하는 심리 테스트, 결과, 칼럼, 이미지 등 모든 자료를 의미합니다.
              </li>
            </ul>

            <h2>제3조 (약관의 효력 및 변경)</h2>
            <p>
              이 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.
              {SITE_NAME}는 필요하다고 인정되는 경우 이 약관을 변경할 수 있으며,
              변경된 약관은 서비스 내 공지를 통해 이용자에게 고지합니다.
              변경 고지 후 7일 이내에 이의를 제기하지 않으면 변경 사항에 동의한 것으로 간주합니다.
            </p>

            <h2>제4조 (서비스의 내용)</h2>
            <p>{SITE_NAME}는 다음과 같은 서비스를 제공합니다.</p>
            <ul>
              <li>심리 테스트 및 성격 분석 콘텐츠</li>
              <li>심리·인간관계 관련 칼럼 및 읽을거리</li>
              <li>자기이해를 위한 다양한 정보 콘텐츠</li>
            </ul>
            <p>
              서비스는 연중무휴, 24시간 제공을 원칙으로 하나, 시스템 점검이나 기술적 문제 등으로
              일시 중단될 수 있습니다.
            </p>

            <h2>제5조 (서비스 이용의 제한)</h2>
            <p>이용자는 다음 행위를 하여서는 안 됩니다.</p>
            <ul>
              <li>서비스의 정상적인 운영을 방해하는 행위</li>
              <li>서비스에서 얻은 정보를 {SITE_NAME}의 사전 동의 없이 복제, 유통, 상업적 이용하는 행위</li>
              <li>허위 정보를 등록하거나 타인의 정보를 도용하는 행위</li>
              <li>다른 이용자의 서비스 이용을 방해하거나 개인정보를 침해하는 행위</li>
              <li>음란하거나 폭력적인 내용을 유포하는 행위</li>
              <li>기타 법령을 위반하는 행위</li>
            </ul>

            <h2>제6조 (콘텐츠의 성격 및 면책)</h2>
            <p>
              {SITE_NAME}에서 제공하는 심리 테스트 및 분석 결과는 <strong>오락 및 자기 탐색 목적</strong>으로
              제작된 것으로, 전문적인 심리 진단, 정신 건강 진단, 의료 행위를 대체하지 않습니다.
            </p>
            <p>
              테스트 결과는 참고 자료로만 활용하시기 바라며, 심리적·정신적 문제에 대해서는
              전문 의료인이나 상담사의 도움을 받으시기 바랍니다.
              {SITE_NAME}는 테스트 결과의 정확성이나 완전성을 보장하지 않으며,
              결과를 기반으로 한 이용자의 판단과 행동에 대한 책임을 지지 않습니다.
            </p>

            <h2>제7조 (지식재산권)</h2>
            <p>
              서비스 내 모든 콘텐츠(텍스트, 이미지, 테스트 문항, 결과 등)에 대한 저작권은
              {SITE_NAME}에 귀속됩니다. 이용자는 개인적, 비상업적 목적으로만 콘텐츠를 이용할 수 있으며,
              사전 서면 동의 없이 상업적으로 이용하거나 무단으로 배포할 수 없습니다.
            </p>

            <h2>제8조 (광고)</h2>
            <p>
              {SITE_NAME}는 Google AdSense 등의 광고 서비스를 통해 수익을 창출할 수 있습니다.
              서비스에 표시되는 광고 콘텐츠는 광고주가 제공하며, {SITE_NAME}는 광고 내용에 대한
              책임을 지지 않습니다.
            </p>

            <h2>제9조 (준거법 및 관할)</h2>
            <p>
              본 약관은 대한민국 법률에 따라 해석됩니다. 서비스와 관련하여 분쟁이 발생한 경우
              {SITE_NAME}의 주소지를 관할하는 법원을 전속 관할법원으로 합니다.
            </p>

            <h2>제10조 (문의)</h2>
            <p>
              이 약관에 대한 문의사항은 {CONTACT_EMAIL}로 연락해주시기 바랍니다.
            </p>

            <p className="text-sm text-slate-400 mt-6">부칙: 이 약관은 {EFFECTIVE_DATE}부터 적용됩니다.</p>
          </div>
        </div>
      </div>
    </>
  );
}
