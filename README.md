# SuperPanel (NLB Studio 7) — Astro

Панель управления контентом «Библиотеки 2026», портированная с Next.js
(`D:\admin-nlb-studio7-main`) на **Astro + Tailwind v3**.

## Запуск

```
запуск-панель.bat      →  http://localhost:4321   (dev, HMR)
сборка-панели.bat      →  build + preview
```

Либо вручную:

```bash
npm install --no-audit --no-fund --legacy-peer-deps --ignore-scripts
npm run dev
npm run build && npm run preview
```

## Структура

```
src/
├─ data/mock.ts              данные-прототип (порт src/lib/wordpress-mock.ts)
├─ globals.css               дизайн-токены + классы .argon-shadow/.argon-card-icon
├─ layouts/AdminLayout.astro HTML-каркас, <title>, canonical, noindex
├─ components/
│  ├─ AdminSidebar.astro     боковая навигация
│  ├─ AdminShell.astro       верхняя панель + <main>
│  ├─ Icon.astro             инлайновые SVG (lucide-пути, без зависимости)
│  ├─ PageHeader.astro       заголовок + кнопка действия
│  ├─ SearchToolbar.astro    строка поиска
│  ├─ ContentEditor.astro    редактор публикации
│  └─ EntityEditor.astro     форма услуги / полиграфии / события
└─ pages/
   ├─ index.astro            вход на панель
   ├─ 404.astro
   └─ admin/
      ├─ index.astro         дашборд
      ├─ content/            список + new/ + new/[id]/
      ├─ services/           список + new/ + new/[id]/
      ├─ printing-services/  список + new/ + new/[id]/
      ├─ events/             список + new/ + new/[id]/
      ├─ media.astro
      ├─ settings.astro
      └─ support.astro
```

## Страницы (27 маршрутов)

| Раздел | Маршруты |
|--------|----------|
| Вход | `/` |
| Дашборд | `/admin` |
| Контент | `/admin/content`, `/admin/content/new`, `/admin/content/new/1..5` |
| Услуги | `/admin/services`, `/admin/services/new`, `/admin/services/new/301..303` |
| Полиграфия | `/admin/printing-services`, `.../new`, `.../new/401..403` |
| Мероприятия | `/admin/events`, `/admin/events/new`, `/admin/events/new/201..203` |
| Медиатека | `/admin/media` |
| Поддержка | `/admin/support` |
| Настройки | `/admin/settings` |

## Важные решения

1. **Только статика.** `output: 'static'` — все страницы пререндерятся в `dist/`.
   Query-параметры (`?id=2`) в статике **не доступны**, поэтому редактирование
   сделано через динамические маршруты `new/[id].astro` + `getStaticPaths()`.
   Ссылки вида `?id=` в статике всегда дают «Новый пост».
2. **`noindex, nofollow`** на всех страницах админки — панель не должна попадать
   в выдачу. `sitemap.xml` при этом генерируется, но содержит только админку;
   для публичного сайта sitemap нужно собирать отдельно.
3. **Иконки инлайном.** `Icon.astro` хранит SVG-пути lucide в виде строк и
   рендерит через `set:html`. Нет зависимости от `lucide-react`, нет JS на клиенте.
4. **`@astrojs/sitemap` закреплён на `3.2.1`.** Версии `3.3+` читают `_routes`
   из хука `astro:build:done`, а Astro 4.16 передаёт `routes` → падение сборки с
   `Cannot read properties of undefined (reading 'reduce')`.
5. **`globals.css` импортируется в `AdminLayout.astro`.** Без этого импорта
   страницы отдаются без единого `<style>` — Tailwind-классы не применяются.
6. **Установка только с `--legacy-peer-deps --ignore-scripts`.**
   На этой машине `better-sqlite3` и часть зависимостей падают на node-gyp.

## Проверка

```bash
npm run build     # 27 pages + sitemap-index.xml
npm run check     # astro check (типы)
npm run audit:prod
```

Визуальная проверка: `http://localhost:4321/admin`, все страницы 200,
`.argon-shadow` даёт `box-shadow: 0 0 32px rgba(136,152,170,.12)`.

## Чего пока нет

- Бэкенда: формы `method="post"` уходят в никуда, кнопки — заглушки.
- Авторизации (в оригинале `/login`).
- TinaCMS в рантайме не подключена (конфликт peer-версий); `tina/config.ts`
  остаётся конфигурацией. Подключать после апгрейда на Astro 5+.
- Изображений в `public/` кроме `favicon.svg`.