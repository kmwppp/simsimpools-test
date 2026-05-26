import { useState } from 'react';
import { SEOMeta } from '../components/seo/SEOMeta';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static site — form is for display only; integrate with Formspree/Netlify Forms after deployment
    setSubmitted(true);
  };

  return (
    <>
      <SEOMeta
        title="문의하기"
        description="심심풀이에 문의사항이 있으시면 언제든지 연락해주세요. 콘텐츠 제안, 오류 신고, 제휴 문의 등 모든 문의를 환영합니다."
        canonical="/contact"
      />

      <div className="bg-white border-b border-slate-100">
        <div className="section-container py-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">문의하기</h1>
          <p className="text-slate-500">궁금한 점이나 제안이 있으시면 편하게 연락해주세요.</p>
        </div>
      </div>

      <div className="section-container py-12 max-w-2xl mx-auto">
        {/* Contact info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: '📧', title: '이메일', desc: 'contact@simsimpools.com' },
            { icon: '⏰', title: '응답 시간', desc: '영업일 기준 1~3일 이내' },
            { icon: '💬', title: '문의 유형', desc: '콘텐츠, 오류, 제휴 등' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="card p-5 text-center">
              <div className="text-3xl mb-2">{icon}</div>
              <h3 className="font-semibold text-slate-800 text-sm mb-1">{title}</h3>
              <p className="text-xs text-slate-500">{desc}</p>
            </div>
          ))}
        </div>

        {submitted ? (
          <div className="card p-8 text-center">
            <div className="text-5xl mb-4">✉️</div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">문의가 접수됐습니다!</h2>
            <p className="text-slate-600">
              소중한 의견 감사합니다. 영업일 기준 1~3일 내로 답변 드리겠습니다.
            </p>
          </div>
        ) : (
          <div className="card p-8">
            <h2 className="text-xl font-bold text-slate-800 mb-6">문의 양식</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">이름 *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">이메일 *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">문의 유형 *</label>
                <select
                  required
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent bg-white"
                >
                  <option value="">선택해주세요</option>
                  <option value="content">콘텐츠 문의 / 제안</option>
                  <option value="error">오류 신고</option>
                  <option value="partnership">제휴 문의</option>
                  <option value="privacy">개인정보 관련</option>
                  <option value="other">기타</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">문의 내용 *</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent resize-none"
                  placeholder="문의 내용을 자세히 적어주세요."
                />
              </div>

              <p className="text-xs text-slate-400">
                * 수집된 개인정보는 문의 답변 목적으로만 사용되며, 답변 완료 후 즉시 파기됩니다.
              </p>

              <button type="submit" className="btn-primary w-full">
                문의 보내기
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
