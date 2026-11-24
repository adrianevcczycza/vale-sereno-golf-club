import React, { useLayoutEffect } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { Home } from './Home.jsx';
import { Experience } from './Experience.jsx';
import './style.css';

export function App({ page }) {
  useLayoutEffect(() => {
    const anchor = window.location.hash.slice(1);
    if (anchor) document.getElementById(anchor)?.scrollIntoView({ behavior: 'instant' });
  }, []);

  return (
    <>
      <a className="skip" href="#conteudo">Ir para o conteúdo</a>
      {page === 'index' ? <Home /> : <Experience slug={page} />}
    </>
  );
}

const root = typeof document === 'undefined' ? null : document.getElementById('root');
if (root) {
  const app = <App page={root.dataset.page} />;
  if (root.hasChildNodes()) hydrateRoot(root, app);
  else createRoot(root).render(app);
}
