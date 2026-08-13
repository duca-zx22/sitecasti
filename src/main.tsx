// Patch window.fetch and Window.prototype.fetch for sandboxed environments
(function () {
  try {
    const rawFetch = window.fetch;
    let currentFetch = typeof rawFetch === 'function' ? rawFetch.bind(window) : rawFetch;

    const descriptor: PropertyDescriptor = {
      get() {
        return currentFetch;
      },
      set(fn: any) {
        currentFetch = fn;
      },
      configurable: true,
      enumerable: true,
    };

    if (typeof Window !== 'undefined' && Window.prototype) {
      try {
        Object.defineProperty(Window.prototype, 'fetch', descriptor);
      } catch (_) {}
    }

    try {
      Object.defineProperty(window, 'fetch', descriptor);
    } catch (_) {}

    if (typeof globalThis !== 'undefined' && globalThis !== window) {
      try {
        Object.defineProperty(globalThis, 'fetch', descriptor);
      } catch (_) {}
    }
  } catch (_) {}
})();

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

