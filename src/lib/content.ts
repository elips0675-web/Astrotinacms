import { promises as fs, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { PublicNews } from '../site/pages/all-news-page';

/**
 * Каталог контента ищется, а не предполагается: в dev это <корень>/src/content
 * (процесс запущен из корня), в собранном сервере модуль лежит в dist/server,
 * и подняться на два уровня вверх даёт тот же путь. NLB_CONTENT_DIR — явный приоритет.
 */
function resolveContentDir(): string {
  const override = process.env.NLB_CONTENT_DIR;
  if (override) return path.resolve(override);

  const here = path.dirname(fileURLToPath(import.meta.url));
  const candidates = [
    path.resolve(process.cwd(), 'src/content'),
    path.resolve(here, '../../src/content'),
  ];
  return candidates.find((dir) => existsSync(dir)) ?? candidates[0];
}

const CONTENT_DIR = resolveContentDir();

export interface ContentItem {
  id: number;
  title: string;
  status: 'publish' | 'draft';
  author: string;
  date: string;
  type: 'post' | 'page';
  excerpt: string;
  content?: string;
  category?: string;
  tags?: string;
  image?: string;
  /** Показывать на публичном сайте. Демо-записи админки остаются только в панели. */
  visible?: boolean;
}

const FILE = 'posts.json';

async function ensureDir() {
  await fs.mkdir(CONTENT_DIR, { recursive: true });
}

export async function readAll(): Promise<ContentItem[]> {
  await ensureDir();
  const file = path.join(CONTENT_DIR, FILE);
  try {
    const raw = await fs.readFile(file, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

/** Опубликованные записи, видимые на публичном сайте. */
export async function readPublished(): Promise<ContentItem[]> {
  const items = await readAll();
  return items
    .filter((item) => item.visible !== false && item.status === 'publish')
    .sort((a, b) => a.id - b.id);
}

const MONTHS_GENITIVE = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

/**
 * Дата в записи может быть уже готовой строкой («15 июня 2024») — такую отдаём как есть,
 * чтобы вид /all-news не изменился. ISO-дату из админки приводим к тому же формату.
 */
export function formatDate(value: string): string {
  const iso = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim());
  if (!iso) return value;
  const [, year, month, day] = iso;
  const monthName = MONTHS_GENITIVE[Number(month) - 1];
  if (!monthName) return value;
  return `${Number(day)} ${monthName} ${year}`;
}

/** ContentItem → форма, которую ждёт публичная страница новостей. */
export function toPublicNews(items: ContentItem[]): PublicNews[] {
  return items.map((item) => ({
    id: item.id,
    title: item.title,
    date: formatDate(item.date),
    description: item.excerpt,
    image: item.image ?? '',
    body: item.content || item.excerpt,
  }));
}

export async function writeAll(items: ContentItem[]): Promise<void> {
  await ensureDir();
  const file = path.join(CONTENT_DIR, FILE);
  const tmp = file + '.tmp';
  try {
    await fs.writeFile(tmp, JSON.stringify(items, null, 2) + '\n', 'utf-8');
    await fs.rename(tmp, file);
  } catch (cause) {
    throw new Error(
      `Не удалось записать контент в ${file}. Каталог доступен на запись? Проверь NLB_CONTENT_DIR. Причина: ${String(cause)}`
    );
  }
}

export async function nextId(): Promise<number> {
  const items = await readAll();
  return items.length ? Math.max(...items.map((i) => i.id)) + 1 : 1;
}

export async function upsert(input: Partial<ContentItem>): Promise<ContentItem> {
  const items = await readAll();
  if (input.id != null) {
    const idx = items.findIndex((i) => i.id === input.id);
    if (idx !== -1) {
      const merged = { ...items[idx], ...input } as ContentItem;
      items[idx] = merged;
      await writeAll(items);
      return merged;
    }
  }
  const created: ContentItem = {
    id: input.id ?? (await nextId()),
    title: input.title ?? 'Без названия',
    status: input.status ?? 'draft',
    author: input.author ?? 'Admin',
    date: input.date ?? new Date().toISOString().slice(0, 10),
    type: input.type ?? 'post',
    excerpt: input.excerpt ?? '',
    content: input.content ?? '',
    category: input.category ?? '',
    tags: input.tags ?? '',
    image: input.image ?? '',
    visible: input.visible ?? true,
  };
  items.push(created);
  await writeAll(items);
  return created;
}

export async function remove(id: number): Promise<boolean> {
  const items = await readAll();
  const next = items.filter((i) => i.id !== id);
  if (next.length === items.length) return false;
  await writeAll(next);
  return true;
}