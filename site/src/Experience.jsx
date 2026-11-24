import React from 'react';
import { Brand, ExperienceImage, Footer } from './components.jsx';
import { experiences } from './experiences.js';

export function Experience({ slug }) {
  const { title, subtitle, description, tipTitle, tip, alt } = experiences[slug];
  return (
    <>
      <header className="detail-header">
        <nav className="shell detail-nav" aria-label="Navegação principal">
          <Brand href="index.html" />
          <a className="pill light" href="index.html#contato">Contato</a>
        </nav>
      </header>
      <main className="shell detail-grid" id="conteudo">
        <article className="detail-copy">
          <a className="detail-back" href="index.html#experiencias" aria-label="Voltar às experiências">
            <span className="detail-back-icon" aria-hidden="true"></span>
          </a>
          <h1>{title}</h1>
          <p className="detail-subtitle">{subtitle}</p>
          <p>{description}</p>
          <h2>{tipTitle}</h2>
          <p>{tip}</p>
        </article>
        <ExperienceImage slug={slug} alt={alt} />
      </main>
      <Footer />
    </>
  );
}
