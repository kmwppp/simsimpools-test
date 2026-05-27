import { Link } from 'react-router-dom';

const NAV = {
  service: [
    { label: '심리 테스트', to: '/tests' },
    { label: '에세이', to: '/blog' },
    { label: '소개 (About)', to: '/about' },
    { label: '문의하기 (Contact)', to: '/contact' },
  ],
  legal: [
    { label: '개인정보처리방침', to: '/privacy' },
    { label: '이용약관', to: '/terms' },
    { label: '면책고지 (Disclaimer)', to: '/disclaimer' },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 mt-auto" aria-label="사이트 푸터">
      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

          {/* ── 브랜드 영역 ── */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <span className="text-2xl" aria-hidden="true">🧠</span>
              <span className="font-bold text-xl text-white group-hover:text-brand-300 transition-colors">
                심심풀이
              </span>
            </Link>

            <p className="text-sm leading-relaxed max-w-xs mb-3 text-slate-400">
              왜 이렇게 되는 건지 설명하기 어려운 날들을 위한 사이트.<br />
              심리 테스트 5가지, 관찰 에세이 18편 — 모두 무료입니다.
            </p>

            {/* 운영 정보 */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 mb-5">
              <span>2025년 시작 · 개인 운영</span>
              <span>·</span>
              <a
                href="mailto:kmwppp@daum.net"
                className="text-slate-500 hover:text-brand-400 transition-colors"
              >
                kmwppp@daum.net
              </a>
              <span>·</span>
              <a
                href="https://github.com/kmwppp/simsimpools-test"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-brand-400 transition-colors"
              >
                GitHub
              </a>
            </div>

            {/* AdSense 고지 */}
            <div className="bg-slate-800 rounded-xl px-4 py-3 text-xs text-slate-500 leading-relaxed max-w-xs">
              본 사이트는 Google AdSense를 통한 광고가 표시될 수 있습니다.
              광고 맞춤화 설정은{' '}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-400 hover:underline"
              >
                Google 광고 설정
              </a>
              에서 변경 가능합니다.
            </div>
          </div>

          {/* ── 서비스 링크 ── */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">서비스</h4>
            <ul className="space-y-3">
              {NAV.service.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm hover:text-white transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── 법적 링크 ── */}
          <div className="md:col-span-4">
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">법적 정보</h4>
            <ul className="space-y-3 mb-5">
              {NAV.legal.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm hover:text-white transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* 연락처 */}
            <div className="border-t border-slate-700 pt-4">
              <p className="text-xs text-slate-500 mb-1 font-medium">문의</p>
              <a
                href="mailto:kmwppp@daum.net"
                className="text-xs text-brand-400 hover:text-brand-300 transition-colors"
              >
                kmwppp@daum.net
              </a>
            </div>
          </div>
        </div>

        {/* ── 구분선 ── */}
        <div className="border-t border-slate-800 mt-10 pt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              © 2025–{year} 심심풀이. All rights reserved.
            </p>
            <p className="text-xs text-slate-600 max-w-sm text-left sm:text-right leading-relaxed">
              본 사이트의 심리 테스트는 오락·자기탐색 목적으로 제작되었으며,
              전문적인 심리 진단을 대체하지 않습니다.{' '}
              <Link to="/disclaimer" className="underline hover:text-slate-400">
                면책고지
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
