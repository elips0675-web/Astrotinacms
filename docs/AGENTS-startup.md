# Запуск и локальная разработка

## Лаунчеры (оба обязаны работать)

| Файл | Что делает |
|------|-----------|
| `запуск-панели.bat` | `astro dev --port 4321 --host localhost` |
| `сборка-панели.bat` | `astro build` + `astro preview --port 4321 --host localhost` |

**Пути в батниках — только относительные** (`%~dp0`). Хардкод `D:\...` ломал запуск.

Dev-путь ломался отдельно от build (pitfall 1), поэтому проверять **оба**.

## Установка

```bash
npm install --no-audit --no-fund --legacy-peer-deps --ignore-scripts
```

Флаги **обязательны** на этой машине: без `--legacy-peer-deps` конфликт peer-зависимостей, без `--ignore-scripts` падает node-gyp (`better-sqlite3` в дереве).

## Ручной запуск

```bash
# dev с HMR
node node_modules/astro/astro.js dev --port 4321 --host localhost

# build
node node_modules/astro/astro.js build

# preview
node node_modules/astro/astro.js preview --port 4321 --host localhost
```

## Порты

| Порт | Что |
|------|-----|
| **4321** | Сайт **и** админка, один origin |
| 3306 | MySQL — **не используется**, хранилище на JSON |

Несоответствие порта = `ERR_CONNECTION_REFUSED`. Порт занят = `EADDRINUSE`.

## Убить процесс на порту

```powershell
Get-NetTCPConnection -LocalPort 4321 -State Listen | Select-Object -ExpandProperty OwningProcess
Stop-Process -Id <PID> -Force
```

**Делать после любой правки `astro.config.mjs`** (pitfall 17).

## Проверки

```bash
node C:/Users/PC/AppData/Local/Temp/opencode/smoke.mjs       # 69 маршрутов
node C:/Users/PC/AppData/Local/Temp/opencode/audit-http.mjs  # битые ссылки
node C:/Users/PC/AppData/Local/Temp/opencode/compare-src.mjs # паритет с исходником
node C:/Users/PC/AppData/Local/Temp/opencode/test-loop.mjs   # замкнутый цикл админка→сайт
node C:/Users/PC/AppData/Local/Temp/opencode/test-api.mjs    # валидация API
```

Сборку с кодом возврата — через `node C:/Users/PC/AppData/Local/Temp/opencode/run-build.cjs`.

> Скрипты лежат в `%TEMP%`, **не в репозитории**. Это сознательно: перед появлением тестового фреймворка не плодить вторую тестовую систему. При переходе на Vitest/Playwright (этап 3) перенести проверки туда.

## Quirks PowerShell (экономит время)

| Симптом | Причина | Что делать |
|---------|---------|-----------|
| `ParserError: ExpectedValueExpression` | `$var` съеден вложенным `powershell -Command` | Писать `.mjs` файл |
| `NotSpecified: ...:String` вместо вывода | Кавычки Node `-e "..."` конфликтуют с PowerShell | Файл вместо `-e` |
| «Exited with code 1» при `Complete!` | `\| Select-Object -Last N` ломает код возврата | Читать вывод целиком, код через `spawnSync` |
| `&&` не работает | PowerShell 5.1 | Разделять команды |
| `head`/`tail`/`wc` нет | Не GNU | `-First`/`-Last`/`Measure-Object` |
| Кириллица в `.ps1` ломается | PS 5.1 читает без BOM как ANSI | UTF-8 **с BOM** |

`Invoke-Expression` и подстановка `$` внутри `powershell -Command "..."` — источник ложных ошибок. Длинная логика = файл.

## Окружение

| Переменная | Назначение |
|------------|-----------|
| `NLB_CONTENT_DIR` | Переопределяет каталог хранилища. Приоритет над автоопределением |

`NLB_CONTENT_DIR` не задан = каталог определяется автоматически (`src/lib/content.ts`, pitfall 22). Нужен, когда сервер запускают не из корня проекта.

---

**Навигация:** [AGENTS.md](../AGENTS.md) · [pitfall'ы](AGENTS-pitfalls.md) · [production](AGENTS-production.md)