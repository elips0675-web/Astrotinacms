import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.argv[2] || process.cwd()
const OUT = path.join(ROOT, 'test', 'СВОДКА.md')

const SECTIONS = [
  { n: 1, file: 'docs/AGENTS-system-prompt.md', title: 'Персона, стек, качество кода, формат ответа', when: 'обязательно перед правкой кода' },
  { n: 2, file: 'docs/AGENTS-porting.md', title: 'Правила портирования', when: 'любая правка публичной части сайта' },
  { n: 3, file: 'docs/AGENTS-pitfalls.md', title: '25 граблей из опыта', when: 'обязательно; здесь про каждый уже пойманный баг' },
  { n: 4, file: 'docs/AGENTS-content-admin.md', title: 'Контент и админка', when: 'любая правка контента, хранилища или админ-роутов' },
  { n: 5, file: 'docs/AGENTS-security.md', title: 'Security Rules и абсолютные запреты', when: 'обязательно перед любым чтением/записью' },
  { n: 6, file: 'docs/AGENTS-production.md', title: 'Production: DoD и Pre-flight Checklist', when: 'обязательно перед закрытием prod-задачи' },
  { n: 7, file: 'docs/AGENTS-workflow.md', title: 'Workflow из 5 этапов и шаблоны промтов', when: 'обязательно; рубрика «Оценка и улучшение промтов»' },
  { n: 8, file: 'docs/AGENTS-startup.md', title: 'Запуск и локальная разработка', when: 'если упал стек или поднимаешь заново' },
]

const EXCLUDED = [
  ['Что сделано.txt (корень)', 'Журнал по этапам. Уже лежит отдельным файлом в корне — сводить в один документ незачем, и он растёт каждый этап. В test/ осталась только заглушка-указатель.'],
  ['Что доделать.txt (корень)', 'Бэклог. Отдельный файл в корне — его правят чаще, чем читают сводку. В test/ осталась только заглушка-указатель.'],
  ['test/ИНВЕНТАРЬ-ТЕСТОВ.md', 'Состояние проверок меняется после каждого изменения кода; в сводке оно протухнет быстрее остального.'],
  ['консультации/ (папка)', 'Пять внешних консультаций (Анализ.txt … Анализ4.txt) и Промт.txt — мнение сторонних моделей, не правила проекта. В сводку не сведены намеренно. Разбор каждого файла, включая две принятые находки (питфолы 24 и 25), — в консультации/README.md и этапы 7–9 в «Что сделано.txt».'],
]

const KNOWN_GAPS = [
  ['Автотестов нет', 'Vitest/Playwright не установлены. Число «0 тестов» — это факт, а не пропуск снимка.'],
  ['CI нет', 'Гейтов на коммите не существует. Ничего проверяется автоматически.'],
]

function slug(text) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-')
}

function demote(md, level) {
  const lines = md.split(/\r?\n/)
  const out = []
  for (const line of lines) {
    if (/^\*\*Навигация:\*\*/.test(line.trim())) continue
    if (/^---\s*$/.test(line.trim())) continue
    const m = line.match(/^(#{1,6})\s+(.*)$/)
    if (!m) {
      out.push(line)
      continue
    }
    const hashes = m[1].length
    if (hashes === 1) continue
    const target = hashes + level
    out.push(target > 6 ? '###### ' + line.replace(/^#{1,6}\s+/, '') : '#'.repeat(target) + ' ' + line.replace(/^#{1,6}\s+/, ''))
  }
  return out.join('\n').replace(/\n{3,}/g, '\n\n').trim()
}

function relink(md) {
  return md.replace(/\]\((?:\.\.\/)?(?:docs\/)?(AGENTS-[a-z-]+\.md)\)/g, (_, f) => {
    const sec = SECTIONS.find((s) => s.file.endsWith(f))
    return sec ? `](§${sec.n})` : ']()'
  })
}

const parts = []
parts.push('# NLB Studio 7 (Astro) — сводная документация')
parts.push('')
parts.push('> **Один файл вместо 9.** Снимок 03.10.2026 для передачи моделям на аудит.')
parts.push('> Счётчики тестов на дату снимка: **0/0** — автотестов в проекте нет.')
parts.push('> Состояние проверок: скрипты в `%TEMP%\\opencode`, автотестов нет. Подробности — `ИНВЕНТАРЬ-ТЕСТОВ.md`.')
parts.push('>')
parts.push("> Содержимое исходных файлов `docs/` не редактировалось: изменены только уровни заголовков")
parts.push('> (H1 исходника стал заголовком секции, остальные опущены на 2 уровня) и ссылки на соседние')
parts.push('> файлы `docs/AGENTS-*.md` заменены на номера секций.')
parts.push('>')
parts.push('> Соответствие «секция → исходный файл» — в таблице ниже и в шапке каждой секции.')
parts.push('')
parts.push('## Оглавление')
parts.push('')
parts.push('### Правила проекта — что нарушать нельзя')
parts.push('')
parts.push('| # | Секция | КБ | Исходный файл | Когда читать |')
parts.push('|---|---|---|---|---|')
for (const s of SECTIONS) {
  const kb = (fs.statSync(path.join(ROOT, s.file)).size / 1024).toFixed(1)
  parts.push(`| ${s.n} | [${s.title}](#${s.n}-${slug(s.title)}) | ${kb} | \`${s.file}\` | ${s.when} |`)
}
const totalKb = (SECTIONS.reduce((a, s) => a + fs.statSync(path.join(ROOT, s.file)).size, 0) / 1024).toFixed(1)
parts.push('')
parts.push(`Общий объём сведённых модулей: **${totalKb} КБ**.`)
parts.push('')
parts.push('### Что НЕ в этом файле')
parts.push('')
parts.push('| Исключён из снимка | Почему |')
parts.push('|---|---|')
for (const [f, why] of EXCLUDED) parts.push(`| \`${f}\` | ${why} |`)
parts.push('')
parts.push('### Известные пробелы')
parts.push('')
parts.push('| Пробел | Комментарий |')
parts.push('|---|---|')
for (const [g, c] of KNOWN_GAPS) parts.push(`| ${g} | ${c} |`)
parts.push('')
parts.push('---')
parts.push('')

const range = `§1–§${SECTIONS.length}`
for (const s of SECTIONS) {
  const raw = fs.readFileSync(path.join(ROOT, s.file), 'utf8')
  const kb = (fs.statSync(path.join(ROOT, s.file)).size / 1024).toFixed(1)
  parts.push(`## ${s.n}. ${s.title}`)
  parts.push('')
  parts.push(`> Источник: \`${s.file}\` (${kb} КБ). Навигация: [оглавление](#оглавление) · ${range}`)
  parts.push('')
  parts.push(demote(relink(raw), 2))
  parts.push('')
  parts.push('---')
  parts.push('')
}

fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, parts.join('\n'), 'utf8')
console.log(`СВОДКА.md: ${SECTIONS.length} секций, ${totalKb} КБ -> ${OUT}`)
