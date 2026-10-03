# Production: DoD и Pre-flight Checklist

## Golden Rule: Production ≠ File Created

Файл создан — **ещё не значит**, что он работает. Если задача звучит «добавь X в продакшен», Definition of Done — не `git commit`, а **проверенный рабочий флоу**.

| Создано | Не значит «готово» |
|---------|--------------------|
| `api/admin/posts.ts` | Форма в панели реально отправляет данные **и** публикация появилась на сайте |
| Компонент React | Остров потерял атрибут `ssr` и клики работают |
| Правка CSS | Slayder выглядит как в исходнике (проверить computed styles) |
| Динамический роут | Он в `getStaticPaths()`, иначе в build его не будет |
| Таблица в UI | Читает хранилище, а не `MOCK_*` |
| Страница отдаёт 200 | Картинки грузятся, ссылки не битые |

---

## Pre-flight Checklist

Проверять **все** пункты, даже если задача «только фронт».

### 1. Сборка

```bash
node node_modules/astro/astro.js build
```

Зелёный `Complete!`. Проверять код возврата через `spawnSync` (`run-build.cjs`), не через `$LASTEXITCODE`.

**Dev ≠ Build.** Маршруты, алиасы и `ssr.noExternal` ведут себя по-разному (pitfall 1). Зелёный build не доказывает рабочий dev и наоборот.

### 2. Маршруты

```bash
node C:/Users/PC/AppData/Local/Temp/opencode/smoke.mjs
```

**69 проверок, 0 провалов.** `/does-not-exist` → 404. `astro-island: 1` на публичных, `0` на `/admin/**`.

### 3. Ссылки

```bash
node C:/Users/PC/AppData/Local/Temp/opencode/audit-http.mjs
```

**0 битых внутренних ссылок.**

### 4. Замкнутый цикл «админка → сайт»

```bash
node C:/Users/PC/AppData/Local/Temp/opencode/test-loop.mjs
node C:/Users/PC/AppData/Local/Temp/opencode/test-api.mjs
```

Обязательно после изменения `src/lib/content.ts`, API или контентных страниц:
- создание через API → запись в хранилище → видна на `/all-news` → открывается `/news/<id>` с полным текстом;
- черновик скрыт с сайта **и** отдаёт 404;
- удаление убирает страницу;
- все ветки валидации (пустой заголовок, битый JSON, нет `id`, несуществующий `id`);
- после прогона хранилище возвращено к сиду.

### 5. Паритет с исходником (если трогал публичную часть)

```bash
node C:/Users/PC/AppData/Local/Temp/opencode/compare-src.mjs
node C:/Users/PC/AppData/Local/Temp/opencode/diff-src.mjs
```

Изменения публичного компонента — **только механические**. Каждое отклонение объяснено в коммите.

### 6. Интерактив в браузере

Если затронут UI — руками: форма записи услуги, калькулятор полиграфии, пагинация `/all-news`, навигация, мобильный бургер, слайдер на `/services`.

### 7. Секреты

```bash
git ls-files | Select-String -Pattern '^\.env$'
```

Должно быть пусто. `.env.example` — в репо.

### 8. Контент-разделы на хранилище

```bash
grep -rn "MOCK_" src/pages/admin/
```

Непустой вывод = раздел ещё на заглушке. Сейчас непусто (см. `AGENTS-content-admin.md`) — **это известный долг, не новый дефект**, но при добавлении раздела сокращать список.

### 9. Домен в сборке, а не в рантайме

```bash
$env:SITE_URL='https://nlb.example.by'; npm run build
Select-String -Path dist/sitemap.xml -Pattern 'nlb.example.by'   # есть
Select-String -Path dist/sitemap.xml -Pattern 'localhost'        # пусто
```

`SITE_URL` читается в `astro.config.mjs`, то есть **на этапе сборки**.
`sitemap.xml` и `<link rel="canonical">` после этого запечены в `dist/`
навсегда; передача домена только при запуске сервера их не спасёт.
Подробно — pitfall 25.

### 10. Документация жила вместе с изменением

Менял архитектуру, API, модель данных, маршруты → правишь `AGENTS-*.md`, `README.md`, `Что сделано.txt`, `Что доделать.txt` **в том же коммите**.

### 11. Тесты

```bash
# тестового фреймворка нет — ЭТО ДОЛГ, а не «покрыто»
node C:/Users/PC/AppData/Local/Temp/opencode/smoke.mjs
node C:/Users/PC/AppData/Local/Temp/opencode/test-api.mjs
node C:/Users/PC/AppData/Local/Temp/opencode/test-loop.mjs
```

Не писать «все тесты проходят», если Vitest/Playwright не установлены. Честная формулировка: «смоук зелёный, автотестов нет».

---

## Что блокирует «продакшен» прямо сейчас

| # | Блокер | Почему блокирует |
|---|--------|------------------|
| 1 | **Нет авторизации** на `/admin` и `/api/admin/*` | Любой посетитель может переписать контент |
| 2 | **Нет тестов** | Требование пользователя не выполнено |
| 3 | **Хранилище пишет на диск** | Read-only контейнер/сервер → запись невозможна |
| 4 | **Нет CI** | Регресс попадёт в `main` без проверки |

Пункты 1–4 — не «долг на будущее», а блокеры выката. Пункты 3 можно закрыть переносом хранилища в БД.

---

**Навигация:** [AGENTS.md](../AGENTS.md) · [security](AGENTS-security.md) · [workflow](AGENTS-workflow.md) · [pitfall'ы](AGENTS-pitfalls.md)