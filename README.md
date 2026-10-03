# NLB Studio 7 (Astro)

Публичный сайт библиотеки + панель управления контентом (SuperPanel).
**Astro 4 + React 18 островами + Tailwind v3**, один репозиторий, один порт,
один origin.

```
Сайт:    http://localhost:4321/
Админка: http://localhost:4321/admin
```

Публичная часть — порт `D:\nlb-studio6-main` (React Router) в Astro **с
внешним видом 1:1**. Это не редизайн: правило паритета — в
[`docs/AGENTS-porting.md`](docs/AGENTS-porting.md).

## Запуск

```
запуск-панели.bat      →  http://localhost:4321   (dev, HMR)
сборка-панели.bat      →  build + preview
```

Либо вручную:

```bash
npm install --no-audit --no-fund --legacy-peer-deps --ignore-scripts
npm run dev                              # astro dev --port 4321
npm run build && npm run preview
```

Флаги установки обязательны на этой машине: без `--legacy-peer-deps`
конфликт peer-зависимостей, без `--ignore-scripts` падает node-gyp.

## Что работает

**Публичный сайт — 68 маршрутов, все отдают 200.**

| Раздел | Маршруты |
|--------|----------|
| Главная | `/` |
| Услуги | `/services`, `/services/cafe`, `/services/concert-hall`, `/services/kids-zone`, `/services/lecture-hall`, `/services/[id]` |
| Полиграфия | `/printing-services`, `/printing-services/[id]`, `/printing-services/order-confirmation` |
| Мероприятия | `/all-events`, `/interactive-map`, `/minsk-map` |
| Новости | `/all-news`, `/news/[id]` |
| Книги | `/books-catalog`, `/books/[id]` |
| Прочее | `/notifications`, `/profile`, `/registration` |
| Админка | `/admin`, `/admin/content`, `/admin/content/new`, `/admin/content/new/[id]`, `/admin/services`, `/admin/printing-services`, `/admin/events`, `/admin/media`, `/admin/settings`, `/admin/support` |

**Контент замкнут на админку.** Раздел `/admin/content` работает end-to-end:

```
форма → POST /api/admin/posts → атомарная запись в src/content/posts.json
      → /all-news и /news/<id] читают хранилище → правка видна сразу
```

Публикация появляется на сайте **без пересборки**. Черновик скрыт с сайта
**и** отдаёт 404. Проверено в браузере, не только HTTP-статусами.

## Что не работает

Честный список — он же бэклог с критериями приёмки в
[`Что доделать.txt`](Что%20доделать.txt).

- **Автотестов нет.** Vitest и Playwright не установлены. Есть 9 скриптов
  ручной проверки в `%TEMP%\opencode`, они не в CI. Говорить «покрыто
  тестами» нельзя.
- **Авторизации нет.** `/admin` и `/api/admin/*` открыты любому. **Блокер
  выката.**
- **6 разделов админки на заглушках** `MOCK_*`: дашборд, услуги,
  полиграфия, мероприятия, медиатека, поддержка. Формы не сохраняют.
- **Хранилище — JSON-файл.** Не переживает конкурентную запись и read-only FS.
- **CI нет.** Регресс попадает в `main` без проверки.
- **Превью в мессенджерах без картинки.** OG-разметка готова, но
  `public/og-default.jpg` 1200×630 нужно положить вручную — это растровый
  файл, его нельзя сгенерировать кодом.
- **TinaCMS не подключена** — peer-конфликт: `@tinacms/astro@0.7.1` требует
  Astro 5–7, проект на 4.16.19.
- **5 внешних картинок отдают 404** — ссылки идентичны исходнику, то есть
  это дефект оригинала, а не регрессия порта.

## Структура

```
astro.config.mjs            output: 'hybrid', node adapter, алиасы
src/
├─ lib/content.ts            хранилище: readAll/readPublished/upsert/remove/
│                            toPublicNews/formatDate/resolveContentDir
├─ content/posts.json        19 записей: 14 новостей сайта + 5 демо админки
├─ data/mock.ts              остатки исходника: MOCK_SERVICES и др.
├─ pages/
│  ├─ *.astro                публичные страницы
│  ├─ admin/                 админка (серверный Astro + vanilla JS)
│  └─ api/admin/posts.ts     CRUD + валидация
├─ site/                     портированная публичная часть (React)
│  ├─ lib/router.tsx         шим react-router-dom (алиас в конфиге)
│  ├─ lib/with-router.tsx    HOC: контекст роутера внутри острова
│  ├─ lib/slider.ts          interop react-slick (CJS)
│  └─ routes/*.tsx           export default withRouter(Page)
├─ components/               UI админки (Astro)
├─ layouts/                  SiteLayout.astro, AdminLayout.astro
└─ styles/site-theme.css     токены сайта (HSL)
docs/AGENTS-*.md             правила проекта для ИИ-агентов
консультации/                6 файлов внешних консультаций + индекс с вердиктом
                             по каждому. Это МНЕНИЕ, не правила проекта
test/                        бандл для ИИ-анализа
scripts/gen-svodka.mjs       генератор test/СВОДКА.md из docs/
```

## Важные решения

1. **`output: 'hybrid'` + `@astrojs/node`.** При `output: 'static'` страницы
   читают контент **при сборке**, а админка пишет в рантайме — правка не могла
   бы попасть на сайт без пересборки. Маркетинговые страницы остались
   статикой, контентные (`all-news`, `news/[id]`) помечены
   `export const prerender = false`.
2. **Порт как React SSR + острова, а не переписывание в `.astro`.**
   Гарантирует идентичную разметку. Главное требование — паритет.
3. **`react-router-dom` — алиас** на `src/site/lib/router.tsx`. Роутинг живёт
   в `src/pages`, `Link` рендерит обычный `<a>`.
4. **Роутер-контекст внутри острова** (`withRouter`). React-контекст не
   пересекает границу Astro-островов, а `<Page client:load />` работает
   только для статически импортированного компонента.
5. **`ssr.noExternal: ['react-slick']` нельзя возвращать.** Флаг чинит
   `astro build` и ломает `astro dev` (`exports is not defined`). Interop
   сделан в `src/site/lib/slider.ts`.
6. **Tailwind v3, не v4.** В исходнике v4-классы заменены на v3-эквиваленты:
   `size-9` → `h-9 w-9`, `rounded-xs` → `rounded-sm`,
   `outline-hidden` → `outline-none`.
7. **`noindex, nofollow`** на всех страницах админки.
8. **`@astrojs/sitemap` закреплён на `3.2.1`.** Версии `3.3+` читают `_routes`
   из `astro:build:done`, а Astro 4.16 передаёт `routes` → падение сборки.
9. **Иконки админки — инлайновые SVG** (`Icon.astro`), без `lucide-react` и без
   клиентского JS. Иконки сайта — `lucide-react`.
10. **`NLB_CONTENT_DIR`** переопределяет каталог хранилища. Не задан —
    определяется автоматически. Нужен, когда сервер запускают не из корня.
11. **`site` берётся из `SITE_URL`** (`astro.config.mjs`). Домен задаётся
    окружением при выкате, а не правкой исходника: иначе деплой требует
    изменения отслеживаемого файла, его забывают, и `canonical` +
    `sitemap.xml` уезжают на `localhost`.
12. **`robots.txt` — эндпоинт `src/pages/robots.txt.ts`, а не файл в `public/`.**
    RFC 9309 требует абсолютный URL в `Sitemap:`, поэтому домен должен
    подставляться в рантайме из того же `SITE_URL`.
13. **`/admin` исключён из sitemap, но НЕ закрыт в robots.txt.** На `/admin/**`
    уже стоит `noindex`. Если добавить `Disallow: /admin`, робот не сможет
    прочитать `noindex`, и URL попадёт в выдачу как «No information is
    available for this URL». Способы прятать URL смешивать нельзя.
14. **`public/og-default.jpg` (1200×630) не создан.** Разметка и фолбэк
    готовы; без файла превью будет без картинки. Как только файл появится в
    `public/` — заработает без правки кода.

Полный список — `docs/AGENTS-pitfalls.md` (25 граблей с симптомом, причиной и
уроком).

## Проверка

```bash
npm run build          # BUILD_EXIT=0 (код возврата — через spawnSync, не $LASTEXITCODE)
npm run check          # astro check (типы)
npm run audit:prod     # prod-зависимости, --omit=dev --audit-level=high

node %TEMP%\opencode\smoke.mjs        # 69 проверок маршрутов
node %TEMP%\opencode\audit-http.mjs   # битые внутренние ссылки
node %TEMP%\opencode\compare-src.mjs  # паритет с исходником
node %TEMP%\opencode\test-loop.mjs    # замкнутый цикл админка → сайт
node %TEMP%\opencode\test-api.mjs     # валидация API
```

Подробности — [`docs/AGENTS-startup.md`](docs/AGENTS-startup.md) и
[`test/ИНВЕНТАРЬ-ТЕСТОВ.md`](test/ИНВЕНТАРЬ-ТЕСТОВ.md).

### Проверка SEO-разметки

Команды даны и под Windows (PowerShell), и под Linux/macOS. Пути в примерах
выше — Windows; на других системах `%TEMP%` = `$TMPDIR`.

```bash
# PowerShell
Invoke-WebRequest http://localhost:4321/robots.txt | Select-Object -Expand Content
Select-String -Path (Invoke-WebRequest http://localhost:4321/ | Select-Object -Expand Content) -Pattern 'og:'

# Linux / macOS
curl -s http://localhost:4321/robots.txt
curl -s http://localhost:4321/ | grep -o 'og:[a-z:_]*' | sort -u
```

Ожидания:

| Что | Ожидание |
|---|---|
| `robots.txt` | 200, `Content-Type: text/plain`, `Sitemap:` с **абсолютным** URL |
| `robots.txt` | строки `Disallow: /admin` быть **не должно** — рядом с `noindex` она даёт «No information is available for this URL» |
| `/` | 9 `og:*` тегов + `twitter:card` |
| `og:image` | ведёт на `/og-default.jpg` — файла пока нет, см. `Что доделать.txt` п. 7a |
| `dist/sitemap.xml` после сборки с `SITE_URL` | ни одного `localhost`, ни одного `/admin` |

`SITE_URL` — переменная **времени сборки**, а не рантайма. Проверка:

```bash
SITE_URL=https://example.com npm run build   # PowerShell: $env:SITE_URL=...
grep -c example.com dist/sitemap.xml         # > 0
grep -c localhost   dist/sitemap.xml         # 0
```

## Для ИИ-агентов

Прочитай [`AGENTS.md`](AGENTS.md) первым: правила, которые нарушать нельзя, и
25 уже пойманные грабли. Полный бандл для аудита — [`test/`](test/README.md).

В репозитории лежат шесть файлов с рекомендациями сторонних моделей
([`консультации/`](консультации/README.md)). Это мнение о проекте, а не
проектные требования: из шести приняты две находки, четыре предлагали
изменения, которые сделали бы проект хуже. Не применяй их без проверки.

## Git

Репозиторий: <https://github.com/elips0675-web/Astrotinacms>, ветка `main`.
Conventional Commits. Реальный `.env` не отслеживается, `.env.example` —
да. Правила вклада: [`CONTRIBUTING.md`](CONTRIBUTING.md).
