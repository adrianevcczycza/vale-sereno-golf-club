import React from 'react';

export function Brand({ href, hero = false }) {
  const Tag = href ? 'a' : 'div';
  return (
    <Tag className={hero ? 'brand hero-brand' : 'brand'} href={href}>
      <span>Vale Sereno</span><small>GOLF CLUB</small>
    </Tag>
  );
}

export function ExperienceImage({ slug, alt, loading }) {
  return <img src={`assets/${slug}.webp`} alt={alt} width="508" height="1024" loading={loading} />;
}

export function Footer({ home = false }) {
  return (
    <footer>
      <div className="shell footer">
        <Brand href={home ? '#inicio' : 'index.html'} />
        <p>Clube conceitual · Imagens ilustrativas</p>
        {home ? (
          <div className="footer-links"><a href="#contato">Contato</a><a href="#inicio">Voltar ao topo</a></div>
        ) : (
          <a href="index.html#experiencias">Todas as experiências</a>
        )}
      </div>
    </footer>
  );
}
