import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const root = resolve(import.meta.dirname, 'site');
const pages = ['index', 'campo', 'jogo', 'green'];

export default defineConfig({
  root,
  base: './',
  build: {
    outDir: resolve(import.meta.dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(pages.map(page => [page, resolve(root, `${page}.html`)])),
    },
  },
});
