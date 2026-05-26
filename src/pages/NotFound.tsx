import { Link } from 'react-router-dom';
import { SEOMeta } from '../components/seo/SEOMeta';

export function NotFound() {
  return (
    <>
      <SEOMeta title="페이지를 찾을 수 없습니다" description="요청하신 페이지를 찾을 수 없습니다." noindex />
      <div className="section-container py-24 text-center max-w-lg mx-auto">
        <div className="text-7xl mb-6">🔍</div>
        <h1 className="text-4xl font-bold text-slate-800 mb-3">404</h1>
        <p className="text-xl text-slate-600 mb-2">페이지를 찾을 수 없습니다</p>
        <p className="text-slate-500 mb-8">
          요청하신 페이지가 존재하지 않거나 이동됐을 수 있습니다.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/" className="btn-primary">홈으로 가기</Link>
          <Link to="/tests" className="btn-secondary">테스트 목록</Link>
        </div>
      </div>
    </>
  );
}
