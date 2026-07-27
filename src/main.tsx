import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';

const root = document.getElementById('root')!;

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const hasPrerenderedHtml = root.childElementCount > 0;
const isResultRoute = window.location.pathname.startsWith('/results/');

// 결과 URL은 indexable 프리렌더 대상이 아니므로 SPA fallback HTML을 hydrate하지 않는다.
if (hasPrerenderedHtml && !isResultRoute) {
  ReactDOM.hydrateRoot(root, app);
} else {
  root.replaceChildren();
  ReactDOM.createRoot(root).render(app);
}
