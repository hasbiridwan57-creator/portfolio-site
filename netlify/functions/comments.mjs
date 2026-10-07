import { getStore } from "@netlify/blobs";

const store = () => getStore({ name: "portfolio-comments", consistency: "strong" });
const KEY = "list";
const MAX = 200;

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });

export default async (req) => {
  const s = store();

  if (req.method === "GET") {
    const list = (await s.get(KEY, { type: "json" })) || [];
    return json(list);
  }

  if (req.method === "POST") {
    let body;
    try { body = await req.json(); } catch { return json({ error: "invalid json" }, 400); }

    const name = String(body?.name ?? "").trim().slice(0, 60);
    const text = String(body?.text ?? "").trim().slice(0, 500);
    if (!name || !text) return json({ error: "name and text required" }, 400);

    const now = Date.now();
    const recent = (await s.get(KEY, { type: "json" })) || [];
    // Rate limit ringan: 1 komentar per 20 detik per nama (cegah spam)
    const last = recent.find((c) => c.name === name && now - c.ts < 20000);
    if (last) return json({ error: "terlalu cepat, tunggu sebentar" }, 429);

    const entry = { name, text, ts: now };
    const list = [entry, ...recent].slice(0, MAX);
    await s.setJSON(KEY, list);
    return json(list, 201);
  }

  // Moderasi: butuh header x-admin-key == env COMMENT_ADMIN_KEY
  if (req.method === "DELETE") {
    const key = process.env.COMMENT_ADMIN_KEY;
    if (!key || req.headers.get("x-admin-key") !== key) return json({ error: "unauthorized" }, 401);

    const url = new URL(req.url);
    const name = url.searchParams.get("name");
    const all = (await s.get(KEY, { type: "json" })) || [];
    const list = name ? all.filter((c) => c.name !== name) : [];
    await s.setJSON(KEY, list);
    return json({ ok: true, removed: all.length - list.length, remaining: list.length });
  }

  return json({ error: "method not allowed" }, 405);
};

export const config = { path: "/api/comments" };
