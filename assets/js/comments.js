// ── Persistent Comments via Netlify Function + Blobs (/api/comments) ──
function initComments() {
  const form = document.getElementById("comment-form");
  const list = document.getElementById("comment-list");
  if (!form || !list) return;

  const escapeHtml = (str) =>
    String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  const fmtDate = (ts) => {
    const d = new Date(ts);
    const diff = Date.now() - ts;
    if (diff < 60000) return "Baru saja";
    if (diff < 3600000) return Math.floor(diff / 60000) + " menit lalu";
    if (diff < 86400000) return Math.floor(diff / 3600000) + " jam lalu";
    return d.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
  };

  const render = (comments) => {
    if (!comments || !comments.length) {
      list.innerHTML = `<p style="font-size:0.9rem;color:#94A3B8;">Belum ada komentar. Jadilah yang pertama!</p>`;
      return;
    }
    list.innerHTML = comments.map((c) => `
      <div style="background:rgba(15,23,42,0.4);border:1px solid rgba(255,255,255,0.08);padding:1rem;border-radius:12px;">
        <div style="display:flex;justify-content:space-between;margin-bottom:0.3rem;">
          <strong style="color:var(--color-accent);font-size:0.9rem;">${escapeHtml(c.name)}</strong>
          <span style="font-size:0.75rem;color:var(--color-muted-foreground);">${fmtDate(c.ts)}</span>
        </div>
        <p style="font-size:0.9rem;color:#CBD5E1;word-break:break-word;white-space:pre-wrap;">${escapeHtml(c.text)}</p>
      </div>
    `).join("");
  };

  async function load() {
    try {
      const res = await fetch("/api/comments");
      const data = await res.json();
      render(Array.isArray(data) ? data : []);
    } catch (e) {
      list.innerHTML = `<p style="font-size:0.9rem;color:#94A3B8;">Gagal memuat komentar.</p>`;
    }
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("comm-name").value.trim();
    const text = document.getElementById("comm-text").value.trim();
    if (!name || !text) return;

    const btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    const oldText = btn.textContent;
    btn.textContent = "Mengirim...";

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, text }),
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || "Gagal mengirim komentar.");
        return;
      }
      render(data);
      form.reset();
    } catch (err) {
      alert("Gagal mengirim komentar. Coba lagi.");
    } finally {
      btn.disabled = false;
      btn.textContent = oldText;
    }
  });

  load();
}

// Jalankan otomatis, tangani jika DOM sudah atau belum ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initComments);
} else {
  initComments();
}
