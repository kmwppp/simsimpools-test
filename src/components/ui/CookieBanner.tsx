import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const COOKIE_KEY = 'simsimpools_cookie_consent';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 text-white px-4 py-4 shadow-2xl">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 text-sm leading-relaxed text-slate-200">
          <p>
            심심풀이는 서비스 개선을 위해 Google Analytics 분석 쿠키를 사용합니다.{' '}
            <Link to="/privacy" className="underline text-brand-300 hover:text-brand-200">
              개인정보처리방침
            </Link>
            에서 자세한 내용을 확인하세요.
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm rounded-lg border border-slate-500 text-slate-300 hover:bg-slate-700 transition-colors"
          >
            거부
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm rounded-lg bg-brand-500 hover:bg-brand-600 text-white transition-colors font-medium"
          >
            동의
          </button>
        </div>
      </div>
    </div>
  );
}
