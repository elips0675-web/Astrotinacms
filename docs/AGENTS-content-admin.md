# Контент и админка

> Golden Rule: **правка в панели должна быть видна на сайте без пересборки.**
> Форма без бэкенда — не «рабочая админка», даже если выглядит как надо.

## Слои

```
src/pages/admin/**        UI админки (серверный Astro + <script>)
      │  fetch('/api/admin/*')
      ▼
src/pages/api/admin/*.ts   CRUD + валидация
      │
      ▼
src/lib/content.ts         readAll / readPublished / upsert / remove / toPublicNews
      │
      ▼
src/content/posts.json     ДАННЫЕ (в репозитории, не артефакт)
      │
      ▼
src/pages/all-news.astro   prerender = false → читает хранилище
src/pages/news/[id].astro  prerender = false → читает хранилище
```

## Почему `hybrid`, а не `static`

При `output: 'static'` страница читает контент **при сборке**. Админка пишет в рантайме. Изменения не могут попасть в пререндеренный HTML — это не баг, а свойство статической генерации.

`output: 'hybrid'` + `@astrojs/node`: страницы пререндерятся по умолчанию; контентные помечены `export const prerender = false` и читают файл на каждый запрос.

**Маркетинговые страницы остались статикой.** Границу не расширять без причины.

## Модель `ContentItem`

```ts
interface ContentItem {
  id: number;
  title: string;
  status: 'publish' | 'draft';
  author: string;
  date: string;        // '2026-10-03' из админки ИЛИ '15 июня 2024' из сида
  type: 'post' | 'page';
  excerpt: string;     // карточка в списке + meta description
  content: string;     // полный текст на /news/[id]
  category: string;
  tags: string;
  image: string;
  visible: boolean;    // показывать на публичном сайте
}
```

**`visible` — ключевое поле.** 14 сидированных новостей имеют `visible: true`, 5 демо-записей админки — `visible: false`. Без него демо-английские посты попали бы на `/all-news` и изменили вид сайта.

**`upsert` по умолчанию ставит `visible: true`** — публикация из админки сразу появляется на сайте. Это осознанное поведение, не побочный эффект.

## Публичный DTO

```ts
interface PublicNews {
  id: number;
  title: string;
  date: string;        // уже отформатировано
  description: string; // = excerpt
  image: string;
  body?: string;       // = content || excerpt
}
```

`toPublicNews()` делает маппинг. Страницы **не знают** про `ContentItem` — только про `PublicNews`.

**Инвариант:** у сидированных новостей `content === description`, поэтому `body` равен `description` и вид не меняется. При добавлении поля проверять этот инвариант.

## `formatDate`

Дата может быть двух форматов. Нормализация на границе рендера:

```ts
formatDate('2026-10-03') → '3 октября 2026'
formatDate('15 июня 2024') → '15 июня 2024'  // как есть
```

Миграция данных **не** нужна. Если добавишь новый источник дат — держи здесь единственную точку приведения.

## API `/api/admin/posts`

| Метод | Поведение | Ошибки |
|-------|-----------|--------|
| `GET` | все записи | — |
| `POST` | создать | 400 пустой заголовок / битый JSON; 201 создан |
| `PUT` | обновить по `id` | 400 без `id` / битый JSON; 404 если не найдено внутри `upsert` |
| `DELETE?id=` | удалить | 400 нет/пустой `id`; 404 не найдено |

**Правила валидации:**

1. Отсутствие параметра проверять **до** `Number()` — `Number(null) === 0` (pitfall 5).
2. Ошибка записи (read-only FS) → 500 с **внятным сообщением**, не стеком.
3. Клиент обязан проверять `res.ok` **до** показа «Сохранено».

## Что уже работает

| Раздел | Состояние |
|--------|-----------|
| `/admin/content` (список, поиск, удаление) | ✅ хранилище |
| `/admin/content/new` (создание) | ✅ хранилище |
| `/admin/content/new/[id]` (правка) | ✅ хранилище + предзаполнение |
| `/admin` (дашборд) | ❌ `MOCK_POSTS` — показывает 5 записей вместо 19 |
| `/admin/services` | ❌ `MOCK_SERVICES`, формы не сохраняют |
| `/admin/printing-services` | ❌ `MOCK_PRINTING` |
| `/admin/events` | ❌ `MOCK_EVENTS` |
| `/admin/media` | ❌ `MOCK_MEDIA` |
| `/admin/support` | ❌ `MOCK_CHAT_USERS` |

**Проверка «переехал ли раздел»:**

```bash
grep -rn "MOCK_" src/pages/admin/
```

Пусто = все разделы на хранилище.

## Заметки по реализации

- Хранилище читается **через `fs`**, а не `import`. Импорт JSON проходит через кэш Vite, и правка из админки не была бы видна без рестарта.
- Запись **атомарная**: `tmp` + `fs.rename`. Падение посреди записи не оставляет битый JSON.
- `resolveContentDir()` — `NLB_CONTENT_DIR` → `<cwd>/src/content` → `../../src/content` от модуля (pitfall 22).
- `ContentEditor.astro`: `excerpt` берётся из поля «Краткое описание», с откатом на «Meta description», затем на тело. Не из тела напрямую — иначе карточка в ленте получит весь текст.
- Тосты — с `role="status"` и `aria-live="polite"`, с текстом ошибки при неудаче.

## Ошибка, которую уже нельзя повторить

`ContentItem.content` сохранялся, но не доходил до рендера — страница брала только `excerpt`. Путь **запись → чтение → рендер** проверять целиком (pitfall 10).

---

**Навигация:** [AGENTS.md](../AGENTS.md) · [pitfall'ы](AGENTS-pitfalls.md) · [портирование](AGENTS-porting.md) · [production](AGENTS-production.md)