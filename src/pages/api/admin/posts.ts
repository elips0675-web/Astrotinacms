import type { APIRoute } from 'astro';
import { readAll, upsert, remove } from '../../../lib/content';

export const prerender = false;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });

const fail = (message: string, status: number) => json({ error: message }, status);

async function body(request: Request): Promise<Record<string, unknown> | null> {
  try {
    return (await request.json()) as Record<string, unknown>;
  } catch {
    return null;
  }
}

export const GET: APIRoute = async () => {
  const items = await readAll();
  return json(items);
};

export const POST: APIRoute = async ({ request }) => {
  const payload = await body(request);
  if (!payload) return fail('Некорректный JSON', 400);
  if (typeof payload.title === 'string' && payload.title.trim() === '') {
    return fail('Заголовок обязателен', 400);
  }
  try {
    const created = await upsert(payload);
    return json(created, 201);
  } catch (error) {
    return fail(error instanceof Error ? error.message : String(error), 500);
  }
};

export const PUT: APIRoute = async ({ request }) => {
  const payload = await body(request);
  if (!payload) return fail('Некорректный JSON', 400);
  if (payload.id == null) return fail('Не передан id', 400);
  try {
    const updated = await upsert(payload);
    return json(updated);
  } catch (error) {
    return fail(error instanceof Error ? error.message : String(error), 500);
  }
};

export const DELETE: APIRoute = async ({ url }) => {
  const raw = url.searchParams.get('id');
  // Number(null) === 0, поэтому отсутствие параметра проверяем ДО приведения к числу.
  if (raw === null || raw.trim() === '') return fail('Не передан id', 400);
  const id = Number(raw);
  if (!Number.isFinite(id)) return fail('Не передан id', 400);
  const ok = await remove(id);
  return ok ? json({ ok: true }) : fail('Запись не найдена', 404);
};