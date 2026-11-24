import { readFile, writeFile } from 'node:fs/promises';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

const dist = new URL('../dist/', import.meta.url);
const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { App } = await vite.ssrLoadModule('/src/main.jsx');
  for (const page of ['index', 'campo', 'jogo', 'green']) {
    const file = new URL(`${page}.html`, dist);
    const template = await readFile(file, 'utf8');
    const root = `<div id="root" data-page="${page}">`;
    if (!template.includes(`${root}</div>`)) throw new Error(`Raiz ausente em ${page}.html`);
    const content = renderToString(createElement(App, { page }));
    await writeFile(file, template.replace(root, () => root + content));
  }
} finally {
  await vite.close();
}
