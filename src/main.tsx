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

// 사전 렌더링된 HTML이 있으면 hydrate, 없으면(개발 등) 새로 렌더
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
