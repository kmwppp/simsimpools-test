import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SEOMeta } from '../components/seo/SEOMeta';

const BASE_URL = 'https://simsimpools.co.kr';

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[심심풀이 문의] ${form.subject} - ${form.name}`
    );
    const body = encodeURIComponent(
      `이름: ${form.name}\n이메일: ${form.email}\n문의 유형: ${form.subject}\n\n${form.message}`
    );
    window.location.href = `mailto:kmwppp@daum.net?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <SEOMeta
        title="문의하기"
        description="심심풀이에 문의사항이 있으시면 언제든지 연락해주세요. 콘텐츠 제안, 오류 신고, 제휴 문의 등 모든 문의를 환영합니다."
        canonical="/contact"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: '문의하기 | 심심풀이',
          url: `${BASE_URL}/contact`,
          description: '심심풀이 문의 페이지',
          mainEntity: {
            '@type': 'Organization',
            name: '심심풀이',
            email: 'kmwppp@daum.net',
            url: BASE_URL,
          },
        })}</script>
      </Helmet>

      {/* ── 페이지 헤더 ── */}
      <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="section-container py-14">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-600 uppercase mb-3">Contact</p>
          <h1 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">문의하기</h1>
          <p className="text-slate-500 max-w-lg leading-relaxed">
            궁금한 점이나 제안이 있으시면 편하게 연락해주세요.
            영업일 기준 1~3일 이내에 답변 드립니다.
          </p>
        </div>
      </div>

      <div className="section-container py-12 max-w-2xl mx-auto">

        {/* ── 연락 방법 카드 ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: '📧', title: '이메일', desc: 'kmwppp@daum.net', sub: '문의 양식 또는 직접 메일' },
            { icon: '⏰', title: '응답 시간', desc: '1~3 영업일', sub: '주말·공휴일 제외' },
            { icon: '💬', title: '문의 유형', desc: '콘텐츠·오류·제휴', sub: '개인정보 요청 포함' },
          ].map(({ icon, title, desc, sub }) => (
            <div key={title} className="card p-5 text-center">
              <div className="text-3xl mb-2">{icon}</div>
              <h3 className="font-semibold text-slate-800 text-sm mb-0.5">{title}</h3>
              <p className="text-slate-700 text-sm font-medium">{desc}</p>
              <p className="text-xs text-slate-400 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {submitted ? (
          /* ── 전송 완료 ── */
          <div className="card p-10 text-center">
            <div className="text-5xl mb-5">✉️</div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">문의가 접수됐습니다!</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              소중한 의견 감사합니다.<br />
              영업일 기준 1~3일 내로 이메일로 답변 드리겠습니다.
            </p>
            <Link to="/" className="btn-primary text-sm">홈으로 돌아가기</Link>
          </div>
        ) : (
          /* ── 문의 폼 ── */
          <div className="card p-7 sm:p-8">
            <h2 className="text-xl font-bold text-slate-800 mb-6">문의 양식</h2>
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* 이름 + 이메일 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    이름 <span className="text-brand-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-shadow"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    이메일 <span className="text-brand-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-shadow"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              {/* 문의 유형 */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  문의 유형 <span className="text-brand-500">*</span>
                </label>
                <select
                  required
                  value={form.subject}
                  onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent bg-white"
                >
                  <option value="">선택해주세요</option>
                  <option value="content">콘텐츠 문의 / 제안</option>
                  <option value="error">오류 신고</option>
                  <option value="partnership">제휴 문의</option>
                  <option value="privacy">개인정보 열람·삭제 요청</option>
                  <option value="copyright">저작권 관련</option>
                  <option value="other">기타</option>
                </select>
              </div>

              {/* 내용 */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  문의 내용 <span className="text-brand-500">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent resize-none transition-shadow"
                  placeholder="문의 내용을 자세히 적어주세요."
                />
              </div>

              {/* ── 개인정보 수집 안내 ── */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <p className="text-xs font-semibold text-slate-600 mb-2">
                  📋 개인정보 수집 및 이용 안내
                </p>
                <div className="text-xs text-slate-500 space-y-1 leading-relaxed mb-3">
                  <p>• <strong>수집 항목:</strong> 이름, 이메일 주소, 문의 내용</p>
                  <p>• <strong>수집 목적:</strong> 문의 답변 및 처리</p>
                  <p>• <strong>보유 기간:</strong> 답변 완료 후 즉시 파기</p>
                  <p>• <strong>제3자 제공:</strong> 없음 (법령에 따른 경우 제외)</p>
                  <p className="text-slate-400">
                    위 정보 제공에 동의하지 않으셔도 되지만, 동의하지 않는 경우 문의 접수가
                    어려울 수 있습니다. 자세한 내용은{' '}
                    <Link to="/privacy" className="text-brand-600 underline">개인정보처리방침</Link>을
                    확인해주세요.
                  </p>
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={form.agreed}
                    onChange={(e) => setForm((f) => ({ ...f, agreed: e.target.checked }))}
                    className="w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-400"
                  />
                  <span className="text-xs text-slate-700 font-medium">
                    개인정보 수집 및 이용에 동의합니다 <span className="text-brand-500">*</span>
                  </span>
                </label>
              </div>

              <button type="submit" className="btn-primary w-full text-base py-3.5">
                문의 보내기 →
              </button>

              <p className="text-center text-xs text-slate-400">
                문의 양식 대신 직접 이메일을 보내실 수도 있습니다:{' '}
                <a href="mailto:kmwppp@daum.net" className="text-brand-600 underline">
                  kmwppp@daum.net
                </a>
              </p>
            </form>
          </div>
        )}

        {/* ── FAQ 미니 ── */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-slate-800 mb-5">자주 묻는 질문</h2>
          <div className="space-y-3">
            {[
              {
                q: '테스트 결과가 저장되나요?',
                a: '아니요. 테스트 결과는 서버에 저장되지 않으며, 이용자 기기의 브라우저 로컬 저장소에만 임시 보관됩니다.',
              },
              {
                q: '내 개인정보를 삭제 요청하고 싶어요.',
                a: '문의 유형에서 "개인정보 열람·삭제 요청"을 선택하고 양식을 보내주세요. 영업일 기준 5일 이내에 처리해드립니다.',
              },
              {
                q: '콘텐츠 제안은 어떻게 하나요?',
                a: '문의 유형에서 "콘텐츠 문의 / 제안"을 선택하고 내용을 보내주시면 편집팀에서 검토 후 연락드립니다.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="card p-5">
                <p className="font-semibold text-slate-800 text-sm mb-2">Q. {q}</p>
                <p className="text-slate-500 text-sm leading-relaxed">A. {a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
