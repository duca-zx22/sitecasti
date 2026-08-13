// Patch window.fetch if it has only a getter in sandboxed iframe environments
(function () {
  try {
    let currentFetch = window.fetch;
    if (typeof currentFetch === 'function') {
      let proto: any = window;
      while (proto && !Object.getOwnPropertyDescriptor(proto, 'fetch')) {
        proto = Object.getPrototypeOf(proto);
      }
      const desc = proto ? Object.getOwnPropertyDescriptor(proto, 'fetch') : null;
      if (!desc || (desc.get && !desc.set)) {
        Object.defineProperty(window, 'fetch', {
          get() {
            return currentFetch;
          },
          set(fn) {
            currentFetch = fn;
          },
          configurable: true,
          enumerable: true,
        });
      }
    }
  } catch (_e) {
    // Ignore error if property is strictly sealed
  }
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

