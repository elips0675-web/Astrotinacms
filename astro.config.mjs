import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  // Домен задаётся окружением при выкате, а не правкой этого файла.
  // Иначе деплой требует изменения отслеживаемого исходника — и его забывают,
  // после чего canonical и sitemap.xml уезжают на localhost (питфол 24).
  site: process.env.SITE_URL ?? 'http://localhost:4321',
  // hybrid: публичные страницы по умолчанию пререндерятся в статику (SEO, быстрая отдача),
  // а страницы, которым нужен свежий контент или запись в файл, помечают `export const prerender = false`
  // и рендерятся на сервере адаптера @astrojs/node.
  // Динамические роуты (/services/:id, /printing-services/:id, /books/:id, /news/:id)
  // перечислены в getStaticPaths() на основе данных самих страниц, поэтому список id
  // не может разойтись с контентом.
  output: 'hybrid',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    react(),
    tailwind(),
    // Служебные маршруты не должны попадать в карту сайта: на /admin/** уже стоит
    // noindex из AdminLayout.astro, и страница одновременно в sitemap.xml и под
    // noindex — противоречивый сигнал для поисковика.
    // ВАЖНО: /admin НЕ закрывается через robots.txt. Робот, которому запретили
    // краулинг, не прочитает noindex, и URL попадёт в выдачу как
    // «No information is available for this URL». Способы прятать URL смешивать
    // нельзя: либо noindex, либо Disallow, не оба сразу.
    sitemap({ filter: (page) => !new URL(page).pathname.startsWith('/admin') && !new URL(page).pathname.startsWith('/panel') }),
  ],
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
