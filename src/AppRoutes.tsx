import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { TestList } from './pages/TestList';
import { TestDetail } from './pages/TestDetail';
import { ResultPage } from './pages/ResultPage';
import { BlogList } from './pages/BlogList';
import { BlogDetail } from './pages/BlogDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Disclaimer } from './pages/Disclaimer';
import { NotFound } from './pages/NotFound';

/** 라우트 정의 — 클라이언트(BrowserRouter)와 서버 사전렌더(StaticRouter)가 공유 */
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tests" element={<TestList />} />
        <Route path="tests/:testId" element={<TestDetail />} />
        <Route path="results/:testId/:resultId" element={<ResultPage />} />
        <Route path="blog" element={<BlogList />} />
        <Route path="blog/:postId" element={<BlogDetail />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
