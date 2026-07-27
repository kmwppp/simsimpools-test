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

if (hasPrerenderedHtml) {
  ReactDOM.hydrateRoot(root, app);
} else {
  root.replaceChildren();
  ReactDOM.createRoot(root).render(app);
}
