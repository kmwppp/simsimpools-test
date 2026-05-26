import { Link } from 'react-router-dom';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-slate-400 mt-auto">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🧠</span>
              <span className="font-bold text-lg text-white">심심풀이</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              나를 더 잘 이해하는 감성 심리 콘텐츠 플랫폼.
              심리 테스트부터 성격 분석 칼럼까지 — 자기 이해의 여정을 함께합니다.
            </p>
          </div>

          {/*콘텐츠 */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">콘텐츠</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tests" className="hover:text-white transition-colors">심리 테스트</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">칼럼</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">소개</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">문의하기</Link></li>
            </ul>
          </div>

          {/* 정책 */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">정책</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">이용약관</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {year} 심심풀이. All rights reserved.
          </p>
          <p className="text-xs">
            본 사이트의 심리 테스트는 오락 목적으로 제작되었으며, 전문적인 심리 진단을 대체하지 않습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
