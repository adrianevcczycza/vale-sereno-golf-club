import React from 'react';
import { Brand, Footer, ExperienceImage } from './components.jsx';
import { experiences } from './experiences.js';

function ExperienceCard({ slug, experience }) {
  return (
    <figure className="card">
      <ExperienceImage slug={slug} alt={experience.alt} loading="lazy" />
      <figcaption>
        <h3><a href={`${slug}.html`}>{experience.title}</a></h3>
        <p>{experience.summary}</p>
      </figcaption>
    </figure>
  );
}

export function Home() {
  return (
    <>
  <header className="top" id="inicio">
    <nav className="nav shell" aria-label="Navegação principal">
      <a href="#inicio">Vale Sereno</a>
      <div className="nav-links"><a href="#clube">O clube</a><a href="#experiencias">Experiências</a><a href="#contato">Contato</a></div>
      <a className="pill light" href="#primeira-visita">Primeira visita</a>
    </nav>
  </header>
  <main id="conteudo">
    <section className="hero" aria-labelledby="titulo">
      <img src="assets/hero.webp" alt="" width="1536" height="1024" fetchPriority="high" />
      <div className="hero-content shell">
        <Brand hero />
        <h1 id="titulo">Golfe em harmonia <em>com a natureza.</em></h1>
        <a className="pill light" href="#clube">Conheça o clube</a>
      </div>
    </section>
    <section className="intro shell" id="clube" aria-labelledby="titulo-clube">
      <div className="intro-inner">
        <div><h2 id="titulo-clube">Um convite para<br /><em>desacelerar.</em></h2></div>
        <p>Entre colinas e horizontes abertos, uma volta pelo campo é também um passeio. Da primeira tacada ao último green, há tempo para apreciar a paisagem e a companhia de quem joga com você.</p>
      </div>
    </section>
    <section className="experiences" id="experiencias" aria-labelledby="titulo-experiencias">
      <div className="shell">
        <div className="section-heading">
          <div><h2 id="titulo-experiencias">O golfe ao ar livre.</h2></div>
          <p>Da caminhada pelo campo à precisão da última tacada, descubra diferentes formas de aproveitar o jogo.</p>
        </div>
        <div className="photo-grid">
          {Object.entries(experiences).map(([slug, experience]) => (
            <ExperienceCard key={slug} slug={slug} experience={experience} />
          ))}
        </div>
      </div>
    </section>
    <section className="visit shell" id="primeira-visita" aria-labelledby="titulo-visita">
      <div className="visit-grid">
        <div><h2 id="titulo-visita">Seu primeiro dia <em>no campo.</em></h2><p>Prepare-se para jogar com tranquilidade.</p></div>
        <div>
          <details><summary>Preciso ter experiência?</summary><p>Você pode começar no green de prática, aprendendo a controlar a distância do putt, e avançar para tacadas mais longas conforme ganhar confiança.</p></details>
          <details><summary>O que devo levar?</summary><p>Use roupas confortáveis e calçados com boa aderência. Leve água, protetor solar e um boné para os momentos de sol.</p></details>
          <details><summary>Como respeitar o ritmo do jogo?</summary><p>Espere a área ficar livre antes de bater, fique em silêncio durante a tacada de outra pessoa e deixe o grupo seguinte passar se houver espaço à frente.</p></details>
        </div>
      </div>
    </section>
    <section className="contact" id="contato" aria-labelledby="titulo-contato">
      <div className="shell contact-inner">
        <h2 id="titulo-contato">Fale com o clube.</h2>
        <div>
          <ul className="contact-channels" aria-label="Canais de contato">
            <li>WhatsApp</li>
            <li>Instagram</li>
            <li>Gmail</li>
          </ul>
          <p className="contact-note">Os links serão disponibilizados assim que os canais oficiais forem informados.</p>
        </div>
      </div>
    </section>
  </main>
  <Footer home />
    </>
  );
}
