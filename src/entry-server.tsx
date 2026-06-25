import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import type { HelmetServerState } from 'react-helmet-async';
import { AppRoutes } from './AppRoutes';

/**
 * 빌드 시 각 라우트를 정적 HTML로 렌더링한다.
 * 브라우저 API(window/localStorage)는 모두 useEffect/이벤트 핸들러 또는
 * try-catch 안에 있어 renderToString 시점에 실행되지 않는다.
 */
export function render(url: string): { html: string; helmet: HelmetServerState } {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>,
  );

  return { html, helmet: helmetContext.helmet! };
}
