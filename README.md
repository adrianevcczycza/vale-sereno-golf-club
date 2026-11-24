# Vale Sereno Golf Club

Site institucional responsivo em português, criado com React e Vite. As quatro páginas são renderizadas em HTML durante o build, e o React assume a interface no navegador. A hospedagem é estática e pode servir as páginas diretamente.

## Rodar localmente

Use Node.js 22.12 ou superior. Na raiz do repositório, execute:

```bash
npm ci
npm run dev
```

Abra o endereço indicado no terminal. Para testar a versão de produção, execute:

```bash
npm run build
npm run preview
```

## Organização do código

| Caminho | Conteúdo |
| --- | --- |
| `site/src/Home.jsx` | Página inicial, cartões de experiências, primeira visita e contato |
| `site/src/Experience.jsx` | Página reutilizada para campo, jogo e green |
| `site/src/experiences.js` | Títulos, textos e descrições das experiências |
| `site/src/components.jsx` | Marca, rodapé e imagens compartilhadas |
| `site/src/style.css` | Estilos e pontos de quebra do layout |
| `site/public/assets/` | Fotografias WebP utilizadas no build |
| `scripts/prerender.mjs` | Geração do HTML das quatro páginas a partir dos componentes React |
| `dist/` | Arquivos gerados localmente pelo build |

## Publicar no GitHub Pages

O site é publicado a partir da raiz da branch `main`. As URLs `index.html`, `campo.html`, `jogo.html` e `green.html` são mantidas.

1. Faça as alterações em `site/` e execute `npm run build`.
2. Copie o conteúdo de `dist/` para a raiz do repositório, incluindo os arquivos gerados em `assets/`. Mantenha `site/`, `scripts/`, a configuração do Vite e o arquivo `.nojekyll` na raiz. Para uma hospedagem estática separada, use `dist/` como diretório de saída.
3. Envie o commit para `main`. Em **Settings → Pages**, confirme **Deploy from a branch → main → /(root)**.
4. Acompanhe o deploy em **Actions** e teste a página inicial e os links de experiências no site publicado.

[Site público](https://adrianevcczycza.github.io/vale-sereno-golf-club/) · [Guia oficial do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) · [Build para produção com Vite](https://vite.dev/guide/build.html)

## Ativar os canais de contato

A área de contato em `site/src/Home.jsx` apresenta WhatsApp, Instagram e Gmail. Quando tiver os dados oficiais, adicione um elemento `<a>` dentro de cada item da lista `contact-channels`.

| Canal | Destino do link |
| --- | --- |
| WhatsApp | `https://wa.me/NUMERO`, com código do país e DDD, usando apenas dígitos |
| Instagram | `https://www.instagram.com/USUARIO/`, sem o símbolo @ |
| Gmail | `mailto:ENDERECO`, com o endereço completo |

Depois de cadastrar os links, remova o parágrafo `contact-note`, recompile e teste cada canal.
