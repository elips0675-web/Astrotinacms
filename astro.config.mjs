import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'http://localhost:4321',
  // hybrid: публичные страницы по умолчанию пререндерятся в статику (SEO, быстрая отдача),
  // а страницы, которым нужен свежий контент или запись в файл, помечают `export const prerender = false`
  // и рендерятся на сервере адаптера @astrojs/node.
  // Динамические роуты (/services/:id, /printing-services/:id, /books/:id, /news/:id)
  // перечислены в getStaticPaths() на основе данных самих страниц, поэтому список id
  // не может разойтись с контентом.
  output: 'hybrid',
  adapter: node({ mode: 'standalone' }),
  integrations: [react(), tailwind(), sitemap()],
  vite: {
    resolve: {
      alias: {
        // Публичный сайт портирован из react-router-приложения (nlb-studio6-main).
        // В Astro маршруты живут в src/pages, поэтому react-router заменён на шим,
        // который отдаёт параметры из Astro и рендерит обычные <a>.
        'react-router-dom': fileURLToPath(new URL('./src/site/lib/router.tsx', import.meta.url)),
      },
    },
  },
});
