// ── Persistent Comments via Vercel Blob (/api/comments) ──
// Migrated from Netlify Blobs. Storage: Vercel Blob (store: portfolio-comments).
//
// Storage shape: ONE JSON array, written to a UNIQUE pathname every time
// (`addRandomSuffix: true`). The newest version is discovered via list() +
// uploadedAt ordering. This avoids stale reads from the Blob CDN, which caches
// by pathname (a fixed pathname serves the previous body until the edge TTL
// expires, so read-after-delete would silently return the deleted comment).
const { put, list, del } = require('@vercel/blob');

const PREFIX = 'comments/list';
const MAX = 200;
const KEEP_VERSIONS = 3;
const RATE_WINDOW_MS = 20000;

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });

const newestFirst = (a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime();

async function readList() {
  const { blobs } = await list({ prefix: PREFIX, limit: 1000 });
  if (!blobs.length) return [];
  const newest = [...blobs].sort(newestFirst)[0];
  const res = await fetch(newest.url, { cache: 'no-store' });
  if (!res.ok) return [];
  try {
    const parsed = await res.json();
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeList(next) {
  await put(PREFIX, JSON.stringify(next), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: true,
    cacheControlMaxAge: 60,
  });

  // Prune superseded versions so the store does not grow without bound.
  try {
    const { blobs } = await list({ prefix: PREFIX, limit: 1000 });
    const stale = [...blobs].sort(newestFirst).slice(KEEP_VERSIONS);
    if (stale.length) await del(stale.map((b) => b.url));
  } catch {
    /* pruning is best-effort; never fail the request over it */
  }
}

module.exports = async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const list_ = await readList();
      res.setHeader('Cache-Control', 'no-store');
      return res.status(200).json(list_);
    }

    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});

      const name = String(body?.name ?? '').trim().slice(0, 60);
      const text = String(body?.text ?? '').trim().slice(0, 500);
      if (!name || !text) return res.status(400).json({ error: 'name and text required' });

      const now = Date.now();
      const recent = await readList();

      // Rate limit ringan: 1 komentar per 20 detik per nama (cegah spam)
      const last = recent.find((c) => c.name === name && now - c.ts < RATE_WINDOW_MS);
      if (last) return res.status(429).json({ error: 'terlalu cepat, tunggu sebentar' });

      const entry = { name, text, ts: now };
      const next = [entry, ...recent].slice(0, MAX);
      await writeList(next);
      res.setHeader('Cache-Control', 'no-store');
      return res.status(201).json(next);
    }

    // Moderasi: butuh header x-admin-key == env COMMENT_ADMIN_KEY
    if (req.method === 'DELETE') {
      const key = process.env.COMMENT_ADMIN_KEY;
      if (!key || req.headers['x-admin-key'] !== key) {
        return res.status(401).json({ error: 'unauthorized' });
      }
      const name = req.query?.name;
      const all = await readList();
      const next = name ? all.filter((c) => c.name !== name) : [];
      await writeList(next);
      return res.status(200).json({ ok: true, removed: all.length - next.length, remaining: next.length });
    }

    res.setHeader('Allow', 'GET, POST, DELETE');
    return res.status(405).json({ error: 'method not allowed' });
  } catch (err) {
    return res.status(500).json({
      error: 'internal error',
      ...(process.env.NODE_ENV !== 'production' ? { detail: String(err?.message || err) } : {}),
    });
  }
};