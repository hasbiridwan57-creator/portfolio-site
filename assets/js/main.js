/* Project data — web apps + n8n workflow cards
   (positions + connections exported from the live instance at build time).
   No phone screenshots, no Telegram chat mockups. */

const projects = [
  {
    key: "finance-dashboard",
    kind: "web",
    pinned: true,
    title: "Wealth & Portfolio Risk Management Terminal",
    live: "https://finance-dashboard-hasbi.vercel.app",
    shot: "assets/img/finance-hero.png",
    tech: ["Next.js App Router", "Supabase", "TypeScript", "Tailwind CSS", "Recharts", "16 Quant Engine"],
    problem: "Terminal kuantitatif dan manajemen risiko portofolio kelas institusi untuk tracking net worth, simulasi stress-test pasar, portofolio drift rebalancing, runway likuiditas, arus kas multi-aset, dan jurnal eksekusi trading.",
    features: [
      "<b>16 Quantitative Engines</b> — Rasio likuiditas runway (4 tier), debt-to-asset, savings rate, passive income coverage, HHI konsentrasi, CAPM Alpha, Sharpe Ratio, hingga engine pajak & fee broker Indonesia (IDX/Kripto/Emas).",
      "<b>Stress Test Engine</b> — Simulasi kejatuhan pasar (Market Crash -30%, Crypto Winter -40%, Stagflation) terhadap net worth & portofolio.",
      "<b>Rebalancing & Top-Up Engine</b> — Hitung portfolio drift terhadap alokasi target dan rekomendasi alokasi fresh cash secara presisi.",
      "<b>Interactive Smart Money Trading Journal</b> — CRUD eksekusi trading dengan auto-calculate directional PnL (LONG/SHORT), Win Rate, Profit Factor, Expectancy, dan Max Drawdown.",
      "<b>Multi-Asset & Live Feed</b> — Tracking saham IDX, kripto, reksa dana, obligasi ritel, dan emas fisik dengan auto-fetch harga live COMEX & Yahoo Finance.",
      "<b>Export IPS Report (PDF)</b> — Cetak laporan eksekutif sekali klik dengan print stylesheet khusus."
    ],
    tests: [
      "5 gerbang verifikasi lulus (tsc, quant tests, engine proof, lint, build) — 0 error, 0 warning",
      "16 fungsi engine terverifikasi dengan pembuktian matematika eksak",
      "Deploy sukses ke Vercel production"
    ],
    status: "Live · Vercel"
  },
  {
    key: "veritaris",
    kind: "web",
    pinned: true,
    title: "Veritaris — Academic Assistant & Statistical Engine",
    live: "https://veritaris.vercel.app",
    shot: "assets/img/veritaris-hero.png",
    tech: ["Next.js 15 (App Router)", "TypeScript", "Supabase", "Tailwind CSS", "TemanQRIS API", "Telegram Bot"],
    problem: "Platform asisten akademik all-in-one untuk mahasiswa dan peneliti: verifikasi rujukan massal, deteksi pola kemiripan teks, asistensi draf BAB 4 skripsi, serta komputasi statistik murni dari data mentah presisi tinggi.",
    features: [
      "<b>Engine Statistik Presisi Tinggi</b> — Mengolah data mentah langsung tanpa estimasi kasar (K1–K6, korelasi Pearson/Spearman, regresi linier, uji reliabilitas Cronbach Alpha, dan validitas butir).",
      "<b>Verifikasi Rujukan & Sitasi Massal</b> — Pengecekan daftar pustaka otomatis terhadap basis data ilmiah publik (OpenAlex, Crossref) serta validasi DOI tanpa scraping.",
      "<b>Pembayaran QRIS Dinamis & Webhook Otomatis</b> — Sistem langganan freemium dengan kuota harian dan upgrade akun Pro instan via QRIS dinamis TemanQRIS serta webhook verifikasi.",
      "<b>Proteksi Multi-Layer</b> — Proteksi kuota perangkat (device fingerprinting & server-side RPC) untuk mencegah eksploitasi, serta integrasi Telegram bot otomatis."
    ],
    tests: [
      "91/91 pengujian komputasi statistik lulus (toleransi presisi 1e-4, 0 fail)",
      "37/37 UI flow tests & adversarial audit lolos",
      "Sistem kuota server-side RPC & autentikasi Supabase terverifikasi",
      "Production build bersih dan live di Vercel"
    ],
    status: "Live · Vercel Production"
  },
  {
    key: "eo-dash",
    kind: "web",
    pinned: true,
    title: "EO-Dash — Event Organizer Command Center",
    live: "https://dashboardeo.netlify.app",
    shot: "assets/img/eo-dash-hero.png",
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS v4", "Zustand", "Framer Motion", "PWA"],
    problem: "Platform operasional command center untuk Event Organizer profesional. Mendukung 4 jenis event: Konser Musik, Wedding, Corporate Conference, dan Festival. Client-side PWA dengan kalkulasi finansial integer Rupiah strict, rundown cue sheet Hari-H, manajemen vendor/sponsor, dan laporan likuidasi/LPJ siap cetak.",
    features: [
      "<b>Multi-event workspace</b> — 4 template siap pakai (Konser, Wedding, Corporate, Festival) dengan metrik dashboard adaptif: BEP & Profit Margin untuk event komersial, Sisa Pagu Budget & RSVP untuk non-komersial.",
      "<b>Rundown & Cue Sheet Hari-H</b> — Timeline menit-ke-menit dengan PIC, lokasi panggung, instruksi teknis audio/lighting, dan status live tracking.",
      "<b>Vendor & Sponsorship Tracker</b> — Fee payable, kontak WA, rekening bank, catatan rider teknis, status pembayaran, dan sponsor deliverables tracking.",
      "<b>Laporan Likuidasi / LPJ</b> — Rekapitulasi keuangan pasca-event dengan print CSS siap cetak untuk pertanggungjawaban ke klien atau sponsor."
    ],
    tests: [
      "6/6 unit test Vitest pass (calc engine + data integrity)",
      "Build production PWA bersih (8 precache entries, 0 error)",
      "Integer-only Rupiah — zero floating-point di seluruh domain finansial",
      "Zero emoji — full Lucide vector icon untuk profesionalisme UI"
    ],
    status: "Live · Netlify"
  },
  {
    key: "debtsettler",
    kind: "web",
    pinned: true,
    title: "DebtSettler — Split Bill & Settlement PWA",
    live: "https://debtsettler.netlify.app",
    shot: "assets/img/debtsettler-hero.png",
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS v4", "Zustand", "Recharts", "PeerJS", "PWA"],
    problem: "Aplikasi split bill client-side untuk grup: catat pengeluaran tiap orang, hitung saldo utang, dan susun rencana pelunasan minimum. Semua perhitungan finansial integer Rupiah strict (zero floating-point), sinkron peer-to-peer tanpa server, dan share trip lewat link base64.",
    features: [
      "<b>3 Mode Split</b> — Rata, Persen, atau Nominal custom per orang. Mode Nominal memungkinkan input porsi individual + bagi rata sisa ke yang kosong.",
      "<b>Settlement Engine</b> — Algoritma minimizes transfer: cycle debt A→B→C→A direduksi jadi transfer langsung. Zero-sum invariant terjaga.",
      "<b>Analisis Pengeluaran</b> — Pie chart per kategori (Makan, Transport, Penginapan, Tiket, Belanja) dan bar chart Dibayar vs Porsi per orang via Recharts.",
      "<b>P2P Sync & Share Link</b> — Real-time sync antar device lewat PeerJS dengan validasi Zod ketat. Trip juga bisa di-share sebagai snapshot base64 URL hash."
    ],
    tests: [
      "16 test files / 108 assertions pass (Vitest)",
      "Zero-sum invariant: 50 random expenses (total saldo positif = negatif)",
      "Split ganjil utuh: Rp100.000/3 = 33.334 + 33.333 + 33.333, zero remainder loss",
      "Integer-only Rupiah di seluruh domain engine — zero floating-point"
    ],
    status: "Live · Netlify"
  },
  {
    key: "talx",
    kind: "web",
    pinned: true,
    title: "TALX — Skill & Time Exchange Platform",
    live: "https://talx-eta.vercel.app",
    shot: "assets/img/talx-hero.png",
    tech: ["Next.js 16", "Prisma + PostgreSQL", "Auth.js v5", "Pusher", "Supabase", "Tailwind CSS"],
    problem: "Platform pertukaran skill antar-mahasiswa dengan ledger token bertenaga escrow. Komaunya realtime, daftar komunitas per fakultas, dan dark mode. Live sekarang — bisa didaftar langsung.",
    features: [
      "<b>Escrow ledger</b> — token di-<i>hold</i> saat deal, di-<i>release</i> otomatis saat sesi selesai, dikembalikan utuh kalau dibatalkan. Satu gerbang transaksi saja, tidak bisa di-bypass.",
      "<b>Chat komunitas realtime</b> — Pusher private channel per komunitas, otomatisasi otorisasi member-only, indikator koneksi Live di UI.",
      "<b>Keamanan hardening</b> — rate limiting sliding window, guard <code>requireUser</code> terpusat, anti open-redirect, DTO privasi (guest lihat nama pendek saja).",
      "<b>8 komunitas seeded</b> — per fakultas, isi chat publik bisa dibaca tanpa login."
    ],
    tests: [
      "25/25 halaman privat terverifikasi redirect ke login",
      "11/11 tes keamanan komunitas (guest, non-member, idempotent join)",
      "Realtime E2E terbukti: subscribe → kirim → event diterima (686ms latency)",
      "0 kebocoran email di HTML guest"
    ],
    status: "Live · bisa dicoba langsung"
  },
  {
    key: "habit-planner",
    kind: "web",
    pinned: true,
    title: "Habit & Weekly Planner",
    live: "https://habit-planner-327.netlify.app",
    shot: "assets/img/habit-hero.png",
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS v4", "Zustand", "Recharts", "dnd-kit"],
    problem: "Aplikasi web interaktif versi digital dari template Google Sheets 'Habit Builder' dan 'Weekly To-Do'. Dibangun dengan fokus pada kualitas UI/UX Swiss minimalis, animasi halus, dan kalkulasi statistik murni.",
    features: [
      "<b>Habit Builder (/habits)</b> — Grid centang tanggal bulanan dengan pembagian Week 1-5, daily summary persentase, area chart progress harian, dan donut count-up.",
      "<b>Weekly To-Do (/weekly)</b> — 7 kartu harian dengan donut persentase, task item dengan coret strikethrough, drag-reorder, dan navigasi minggu.",
      "<b>State persistence</b> — Zustand middleware persist ke localStorage + seed data demo otomatis saat pertama kali dibuka.",
      "<b>Swiss minimalist styling</b> — Palet monokrom bersih, dark mode toggle, dan fully responsive untuk mobile 375px."
    ],
    tests: [
      "100% pure function stats terverifikasi unit test (Vitest 2/2 pass)",
      "Type-check ketat tanpa error (TypeScript strict)",
      "Build production bersih tanpa warning/error rolldown"
    ],
    status: "Live · Netlify"
  },

  
  
  {
    key: "intake",
    title: "Ticket Intake — Telegram → Notion",
    tech: ["n8n", "Telegram Bot API", "Notion API", "JavaScript"],
    nodes: ["Telegram", "n8n", "Notion"],
    problem: "Booth duty at GKM Odyssey meant typing every sale into a spreadsheet by hand — codes mistyped, counts entered twice, numbers that only agreed at midnight. This bot is my rebuild of that process: a Telegram message in, a validated Notion row out.",
    flow: [
      "Telegram trigger — message arrives as <code>KODE, QTY, JENIS</code>",
      "Parse &amp; validate — codes, quantities, ticket tiers; auto-generate the next code when none is given",
      "Split batch — a pasted list of rows becomes one item per ticket",
      "Pre-write gate — query Notion for existing codes before writing anything",
      "Write to Notion — only codes that passed the gate",
      "Post-write cleanup — re-query, archive race-condition duplicates (deterministic keeper)",
      "Reply — per-line confirmation or one summary message"
    ],
    notes: [
      "<code>TIX-30</code>, <code>TIX-030</code> and <code>tix0030</code> are one identity — canonical normalisation",
      "Parser logic verified by 70+ assertions in a plain Node harness, outside n8n"
    ],
    status: "Personal project / self-initiated"
  },
  {
    key: "hub",
    title: "Finance Operations Hub",
    tech: ["n8n", "Excel", "JavaScript", "Telegram"],
    nodes: ["Excel", "n8n", "Report"],
    problem: "The concert workbook, generalised to an ordinary finance team — five sheets that describe money in and money out, in the formats accountants actually type.",
    flow: [
      "Read 5 sheets — Invoices_AP, Expense_Reimbursement, Bank_Statement, Internal_CashBook, Daily_Transactions",
      "Parse IDR amounts — <code>Rp1.000.000</code>, <code>(500.000)</code> as negative, <code>1.000.000,50</code>",
      "Parse Indonesian-style dates",
      "Bank reconciliation via bucket indexing — O(n+m) instead of nested scans",
      "Flag overdue invoices, claims needing approval, unrecorded charges",
      "Send one summary to Telegram"
    ],
    status: "Personal project / self-initiated"
  }
];

const flow = [
  { label: "Telegram Input", kind: "trigger" },
  { label: "Parse & Validate" },
  { label: "Split Batch" },
  { label: "Query Notion", kind: "guard" },
  { label: "Filter Available", kind: "guard" },
  { label: "Write to Notion" },
  { label: "Re-query", kind: "guard" },
  { label: "Archive Duplicates", kind: "guard" },
  { label: "Notify Operator" }
];

const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Draw the actual n8n canvas: same node positions, same connections. */
function renderWorkflowGraph(slot, key) {
  const data = (typeof N8N_WORKFLOWS !== "undefined") && N8N_WORKFLOWS[key];
  if (!data || !data.nodes || !data.nodes.length) return;

  // Grid layout: 4 columns, rapi dan tidak tumpang tindih
  const COLS = 4, CELL_W = 210, CELL_H = 92, PAD = 26;
  const rows = Math.ceil(data.nodes.length / COLS);
  const viewW = COLS * CELL_W + PAD;
  const viewH = rows * CELL_H + PAD;
  const pos = {};
  data.nodes.forEach((n, i) => {
    const r = Math.floor(i / COLS), c = i % COLS;
    pos[n.n] = {
      cx: PAD / 2 + c * CELL_W + CELL_W / 2,
      cy: PAD / 2 + r * CELL_H + CELL_H / 2
    };
  });
  const sortedNames = data.nodes.map(n => n.n);

  const wrap = document.createElement("figure");
  wrap.className = "n8n-graph";
  wrap.innerHTML = `
    <figcaption class="n8n-graph-head">
      <span class="n8n-dot" aria-hidden="true"></span>
      <span>n8n canvas — export dari workflow asli</span>
      <b>${data.nodes.length} nodes · ${data.edges.length} connections</b>
    </figcaption>
    <div class="n8n-graph-box">
      <svg class="n8n-svg" viewBox="0 0 ${viewW} ${viewH}" preserveAspectRatio="xMidYMid meet"
           role="img" aria-label="Diagram alur workflow ${data.name}">
        <g class="n8n-edges"></g>
        <g class="n8n-nodes"></g>
      </svg>
    </div>`;
  slot.appendChild(wrap);

  const SVGNS = "http://www.w3.org/2000/svg";
  const gEdges = wrap.querySelector(".n8n-edges");
  const gNodes = wrap.querySelector(".n8n-nodes");

  const NODE_W = 180, NODE_H = 40;

  for (const [src, tgt] of data.edges) {
    const s = pos[src], t = pos[tgt];
    if (!s || !t) continue;
    const mx = (s.cx + t.cx) / 2;
    const p = document.createElementNS(SVGNS, "path");
    p.setAttribute("d", `M ${s.cx} ${s.cy} C ${mx} ${s.cy}, ${mx} ${t.cy}, ${t.cx} ${t.cy}`);
    p.setAttribute("class", "n8n-edge");
    gEdges.appendChild(p);
  }

  data.nodes.forEach(n => {
    const p = pos[n.n];
    const g = document.createElementNS(SVGNS, "g");
    g.setAttribute("class", "n8n-node");
    g.setAttribute("transform", `translate(${p.cx} ${p.cy})`);

    const rect = document.createElementNS(SVGNS, "rect");
    rect.setAttribute("x", -(NODE_W / 2)); rect.setAttribute("y", -(NODE_H / 2));
    rect.setAttribute("width", NODE_W); rect.setAttribute("height", NODE_H);
    rect.setAttribute("rx", "9");
    rect.setAttribute("class", "n8n-node-rect");

    const label = n.n.length > 23 ? n.n.slice(0, 22) + "…" : n.n;
    const text = document.createElementNS(SVGNS, "text");
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("y", "4");
    text.setAttribute("class", "n8n-node-txt");
    text.textContent = label;
    const title = document.createElementNS(SVGNS, "title");
    title.textContent = n.n;

    g.append(rect, text, title);
    gNodes.appendChild(g);
  });
}

/* Node & logo app: brand asli (Simple Icons, CC0) + Reply pakai glyph sendiri. */
const NODE_COLOR = {
  Telegram: "#38bdf8",
  n8n: "#22c55e",
  Notion: "#a78bfa",
  Excel: "#34d399",
  Report: "#fbbf24",
  Reply: "#38bdf8",
};

const ICON = {
  Telegram: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
  Notion: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z",
  n8n: "M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632",
  Excel: "M11.318 12.545H7.91v-1.909h3.41v1.91zM14.728 0v6h6l-6-6zm1.363 10.636h-3.41v1.91h3.41v-1.91zm0 3.273h-3.41v1.91h3.41v-1.91zM20.727 6.5v15.864c0 .904-.732 1.636-1.636 1.636H4.909a1.636 1.636 0 0 1-1.636-1.636V1.636C3.273.732 4.005 0 4.909 0h9.318v6.5h6.5zm-3.273 2.773H6.545v7.909h10.91v-7.91zm-6.136 4.636H7.91v1.91h3.41v-1.91z",
  Report: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm2 4h6v2H7V7zm0 4h10v2H7v-2zm0 4h8v2H7v-2z",
  Reply: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
};

function workflowStripHTML(nodes, animated) {
  const chain = [...(nodes || []), "Reply"];
  const W = 240;
  const step = W / chain.length;
  const lines = chain.slice(0, -1)
    .map((_, i) => {
      const x1 = step / 2 + i * step, x2 = step / 2 + (i + 1) * step;
      const cls = animated ? "wf-dash" : "wf-dash-static";
      return `<line x1="${x1}" y1="40" x2="${x2}" y2="40" stroke="#22c55e"
        stroke-width="1.5" stroke-dasharray="5 5" class="${cls}"
        style="animation-delay:${0.25 + i * 0.35}s"/>`;
    })
    .join("");
  const dots = chain.map((label, i) => {
    const color = NODE_COLOR[label] || "#94a3b8";
    const x = step / 2 + i * step;
    const delay = 0.15 + i * 0.35;
    const path = ICON[label] || "";
    return `<g class="wf-node${animated ? " wf-pop" : ""}" style="animation-delay:${delay}s">
      <circle cx="${x}" cy="38" r="16" fill="${color}" opacity=".18"/>
      <circle cx="${x}" cy="38" r="12.5" fill="${color}"/>
      ${path ? `<path d="${path}" fill="#0b1020" transform="translate(${x - 9} 29) scale(.75)"/>` : ""}
      <text x="${x}" y="68" text-anchor="middle" class="wf-label">${label}</text>
    </g>`;
  }).join("");
  return `<figure class="wf-strip${animated ? " is-animated" : ""}" role="img" aria-label="Workflow: ${chain.join(" ke ")}">
    <div class="wf-grid"></div>
    <svg viewBox="0 0 ${W} 80" preserveAspectRatio="xMidYMid meet" class="wf-svg">
      ${lines}${dots}
    </svg>
  </figure>`;
}

function renderProjects() {
  const container = document.getElementById("project-list");
  if (!container) return;

  // Modal logic
  const backdrop = document.createElement("div");
  backdrop.className = "project-modal-backdrop";
  backdrop.innerHTML = `
    <div class="project-modal" data-lenis-prevent>
      <button class="project-modal-close" aria-label="Close">×</button>
      <div class="modal-content"></div>
    </div>
  `;
  document.body.appendChild(backdrop);
  const modalContent = backdrop.querySelector(".modal-content");
  backdrop.querySelector(".project-modal-close").onclick = () => backdrop.classList.remove("is-open");

  // Initial load: pinned dulu, lalu sisanya tetap urutan array
  const ordered = [...projects].sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
  const txVars = [
    "--tx-a:rgba(34,197,94,.55);--tx-b:rgba(56,189,248,.85)",
    "--tx-a:rgba(167,139,250,.55);--tx-b:rgba(56,189,248,.85)",
    "--tx-a:rgba(251,191,36,.5);--tx-b:rgba(251,113,133,.8)",
  ];
  container.innerHTML = ordered.map((p, idx) => `
    <article class="card reveal" style="transition-delay: ${idx * 0.15}s;${txVars[idx % txVars.length]}" data-key="${p.key}">
      <svg class="tx-border" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <rect class="tx-base" x="0.7" y="0.7" width="98.6" height="98.6" rx="5.5" ry="4.5" />
        <rect class="tx-flow" x="0.7" y="0.7" width="98.6" height="98.6" rx="5.5" ry="4.5" />
        <rect class="tx-packet" x="0.7" y="0.7" width="98.6" height="98.6" rx="5.5" ry="4.5" />
      </svg>
      ${p.kind === "web"
        ? `<div class="web-shot"><img src="${p.shot}" alt="Screenshot ${p.title}"></div>`
        : workflowStripHTML(p.nodes, false)}
      <div class="card-top">
        <h3>${p.title}</h3>
        <span class="card-tag">${p.kind === "web" ? "Live web app" : "Personal project"}</span>
      </div>
      <div class="meta">${p.tech.slice(0, 3).map(t => `<span class="badge">${t}</span>`).join("")}
        ${p.tech.length > 3 ? `<span class="badge">+${p.tech.length - 3} more</span>` : ""}
      </div>
      <button class="card-toggle">${p.kind === "web" ? "Details & live link" : "Details"}</button>
    </article>
  `).join("");

  // Animasi transisi layout: setiap card punya stagger delay sendiri
  container.querySelectorAll(".card").forEach((card, idx) => {
    card.style.animation = `page-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${idx * 0.12}s both`;
  });

  // Attach click: seluruh kartu bisa diklik, bukan cuma tombol "Details"
  container.querySelectorAll(".card").forEach(card => {
    card.style.cursor = "pointer";
    card.addEventListener("click", (e) => {
      const p = projects.find(proj => proj.key === card.getAttribute("data-key"));
      if (!p) return;
      e.preventDefault();
      modalContent.innerHTML = `
        <h2 style="margin-bottom:1.5rem;">${p.title}</h2>
        ${p.problem ? `<p style="font-size:0.95rem;line-height:1.6;color:#cbd5e1;margin-bottom:1.5rem;">${p.problem}</p>` : ""}
        ${p.kind === "web"
          ? `<a href="${p.live}" target="_blank" rel="noopener noreferrer"
               style="display:inline-flex;align-items:center;gap:0.5rem;background:var(--accent,#22c55e);color:#06120c;
                      font-weight:700;padding:0.7rem 1.4rem;border-radius:99px;text-decoration:none;margin-bottom:1.5rem;
                      box-shadow:0 0 24px rgba(34,197,94,.35);">
               ↗ Buka live (${p.live.replace("https://","")})
             </a>
             <div class="web-shot" style="margin-bottom:1.5rem;">
               <img src="${p.shot}" alt="Screenshot ${p.title}" style="width:100%;border-radius:10px;">
             </div>
             ${p.features ? `<div class="card-flow" style="margin-bottom:1.5rem;">
               <span class="flow-label" aria-hidden="true">fitur</span>
               <ul style="margin:0;padding-left:1.5rem;display:grid;gap:0.6rem;">
                 ${p.features.map(f => `<li style="font-size:0.9rem;line-height:1.55;color:#cbd5e1;">${f}</li>`).join("")}
               </ul>
             </div>` : ""}
             ${p.tests ? `<div class="card-notes" style="background:rgba(34,197,94,0.1);padding:1rem;border-radius:8px;margin-bottom:1.5rem;">
               <span class="flow-label" aria-hidden="true">terverifikasi</span>
               <ul style="margin:0.5rem 0 0;padding-left:1.5rem;display:grid;gap:0.4rem;">
                 ${p.tests.map(t => `<li style="font-size:0.85rem;color:#86efac;">${t}</li>`).join("")}
               </ul>
             </div>` : ""}`
          : `${workflowStripHTML(p.nodes, true)}
             <div class="card-flow">
               <ol style="margin-bottom:1.5rem;padding-left:1.5rem;">${p.flow.map(s => `<li style="margin-bottom:0.5rem;">${s}</li>`).join("")}</ol>
             </div>
             ${p.notes ? `<div class="card-notes" style="background:rgba(34,197,94,0.1);padding:1rem;border-radius:8px;margin-bottom:1.5rem;">${p.notes.map(n => `<p>${n}</p>`).join("")}</div>` : ""}
             <div class="n8n-graph-slot" style="margin-top:1.5rem;"></div>`}
      `;
      backdrop.classList.add("is-open");
      const graphSlot = modalContent.querySelector(".n8n-graph-slot");
      if (graphSlot) renderWorkflowGraph(graphSlot, p.key);
    });
  });
}

function renderFlow() {
  const el = document.getElementById("flow-viz");
  if (!el) return;
  el.innerHTML = flow.map((n, i) => {
    const cls = n.kind ? ` node-${n.kind}` : "";
    const node = `<span class="node${cls}" style="animation-delay:${i * 55}ms">${n.label}</span>`;
    return i < flow.length - 1 ? node + `<span class="arrow" aria-hidden="true">&rarr;</span>` : node;
  }).join("");
}

/* Milky-way starfield: twinkle + slow drift. DPR-aware, pauses when hidden.
   Under reduced motion: one static frame, no loop. */
function initStars() {
  const canvas = document.getElementById("stars");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let stars = [], w = 0, h = 0;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const COUNT = 150;

  function resize() {
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    stars = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.3 + 0.3,
      base: Math.random() * 0.45 + 0.18,
      amp: Math.random() * 0.3 + 0.08,
      tw: Math.random() * 1.6 + 0.4,
      phase: Math.random() * Math.PI * 2,
      v: Math.random() * 0.1 + 0.02
    }));
  }

  // Starfield animation (Milky Way drift) — sama seperti preloader
  let rt = null;
  function draw() {
    ctx.clearRect(0, 0, w, h);
    const time = performance.now() * 0.0005;
    for (const s of stars) {
      s.x -= s.v * 1.5;                     // drift ke kiri, pelan
      if (s.x < -2) s.x = w + 2;
      ctx.globalAlpha = Math.max(0.05, s.base + Math.sin(s.phase + time) * s.amp);
      ctx.fillStyle = s.green ? "#22C55E" : "#E2E8F0";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    raf = requestAnimationFrame(draw);
  }

  resize();
  let raf = requestAnimationFrame(draw);
  window.addEventListener("resize", () => {
    clearTimeout(rt);
    rt = setTimeout(resize, 150);
  });
}

/* Profile node-orbit: the photo is the hub of a small automation diagram.
   Hub→node edges with travelling particles, a ring of connected nodes.
   Hover raises energy. Activates only when the photo loads;
   reduced motion gets one static frame. */
function initOrbit() {
  const wrap = document.getElementById("profile-wrap");
  const img = document.getElementById("profile-photo");
  const canvas = document.getElementById("orbit");
  if (!wrap || !img || !canvas) return;

  function activate() {
    if (img.classList.contains("is-missing")) return;
    canvas.style.opacity = "1";
    build();
  }
  img.addEventListener("load", activate);
  if (img.complete && img.naturalWidth > 0) activate();

  function build() {
    const ctx = canvas.getContext("2d");
    let nodes = [], raf = null, t = 0, energy = 0.35, w = 0, h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const N = 11;

    function size() {
      const r = wrap.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = Array.from({ length: N }, (_, i) => ({
        a: (i / N) * Math.PI * 2 + Math.random() * 0.35,
        rx: w * 0.46, ry: h * 0.44,
        wob: Math.random() * 0.5 + 0.5,
        ws: Math.random() * 0.6 + 0.3,
        phase: Math.random() * Math.PI * 2,
        r: Math.random() * 2.4 + 2,
        accent: i % 4 === 0
      }));
    }

    function pos(n, time) {
      const a = n.a + Math.sin(time * 0.11 * n.ws + n.phase) * 0.06;
      const rx = n.rx * (1 + Math.sin(time * 0.07 * n.ws + n.phase) * 0.04 * n.wob);
      const ry = n.ry * (1 + Math.cos(time * 0.09 * n.ws + n.phase) * 0.05 * n.wob);
      return { x: w / 2 + Math.cos(a) * rx, y: h / 2 + Math.sin(a) * ry };
    }

    function draw() {
      t += 0.016;
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      const pts = nodes.map(n => pos(n, t));

      for (let i = 0; i < nodes.length; i++) {
        const b = pts[i];
        const pairs = [[{ x: cx, y: cy }, b, true], [b, pts[(i + 1) % nodes.length], false]];
        for (const [a, c, isHub] of pairs) {
          ctx.strokeStyle = isHub ? hubGrad : spokeGrad;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(c.x, c.y);
          ctx.stroke();

          if (isHub) {
            const k = (t * 0.25 + (i % 5) / 5) % 1;
            const px = a.x + (c.x - a.x) * k;
            const py = a.y + (c.y - a.y) * k;
            ctx.globalAlpha = 0.5 * energy + 0.15;
            ctx.fillStyle = "#22C55E";
            ctx.beginPath();
            ctx.arc(px, py, 1.6, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
          }
        }
      }

      pts.forEach((p, i) => {
        const n = nodes[i];
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = n.accent ? "#22C55E" : "#CBD5E1";
        ctx.beginPath();
        ctx.arc(p.x, p.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        if (n.accent) {
          ctx.globalAlpha = 0.25 + Math.sin(t * 2 + i) * 0.12;
          ctx.strokeStyle = "#22C55E";
          ctx.beginPath();
          ctx.arc(p.x, p.y, n.r + 4 + Math.sin(t * 2 + i) * 2, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      });

      raf = requestAnimationFrame(draw);
    }

    function start() { if (!raf) raf = requestAnimationFrame(draw); }
    function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }

    let hubGrad, spokeGrad;
    function grads() {
      hubGrad = ctx.createLinearGradient(w/2, h/2, w*0.9, h*0.9);
      hubGrad.addColorStop(0, "rgba(34,197,94,0.38)");
      hubGrad.addColorStop(1, "rgba(148,163,184,0.19)");
      spokeGrad = ctx.createLinearGradient(0, 0, w, h);
      spokeGrad.addColorStop(0, "rgba(34,197,94,0.12)");
      spokeGrad.addColorStop(1, "rgba(148,163,184,0.08)");
    }
    grads();

    /* Pause saat orbit di luar viewport — menggambar yang tak terlihat = murni buang CPU */
    let inView = true;
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([e]) => {
        inView = e.isIntersecting;
        inView ? start() : stop();
      }, { rootMargin: "120px" }).observe(wrap);
    }

    size();
    wrap.addEventListener("mouseenter", () => { energy = 1; });
    wrap.addEventListener("mouseleave", () => { energy = 0.35; });

    if (REDUCED) { draw(); stop(); return; }
    start();
    window.addEventListener("resize", () => { size(); grads(); });
    document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());
  }
}

/* Scroll reveal — GSAP ScrollTrigger staggered slide-in (Eka standard).
   Tiap grup kartu masuk berurutan (stagger 0.1s), trigger saat 20% terlihat,
   easing power2.out ≈ cubic-bezier(0.4, 0, 0.2, 1). Fallback ke CSS kalau
   GSAP gagal dimuat, dan hormati prefers-reduced-motion. */
function initReveal() {
  const targets = [...document.querySelectorAll(
    ".card, .stat, .guard, .callout, .badge, .btn, .skill-list li, .section-head, .meta, .n8n-graph, .cert-frame, [class*='reveal']"
  )];
  if (!targets.length) return;

  const show = () => targets.forEach(t => { t.style.opacity = 1; t.style.transform = "none"; });

  if (REDUCED || typeof gsap === "undefined") { show(); return; }

  gsap.registerPlugin(ScrollTrigger);

  // Set state awal DI SINI (bukan di CSS), lalu animasikan ke visible
  targets.forEach(t => { t.style.opacity = 0; t.style.transform = "translateY(20px)"; });

  // Kelompokkan per parent supaya stagger hanya antar-saudara dalam grid yang sama
  const groups = new Map();
  targets.forEach(t => {
    const p = t.parentElement;
    if (!groups.has(p)) groups.set(p, []);
    groups.get(p).push(t);
  });

  groups.forEach(list => {
    const tween = gsap.fromTo(list,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1,
        paused: true,
      }
    );
    ScrollTrigger.create({
      trigger: list[0],
      start: "top 95%",
      end: "bottom 5%",
      onEnter: () => tween.play(),
      onLeaveBack: () => tween.reverse(),
    });
  });
}

/* Active nav link */
function initNav() {
  const links = [...document.querySelectorAll(".nav-link")];
  const sections = links.map(l => document.querySelector(l.getAttribute("href"))).filter(Boolean);
  if (!sections.length || !("IntersectionObserver" in window)) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(l => l.classList.toggle("is-active", l.getAttribute("href") === `#${e.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach(s => io.observe(s));
}

/* CV button stays hidden until assets/cv.pdf actually exists — no link to a 404 */
function initCv() {
  const btn = document.getElementById("cv-btn");
  if (!btn) return;
  fetch(btn.getAttribute("href"), { method: "HEAD" })
    .then(r => { if (r.ok) btn.hidden = false; })
    .catch(() => {});
}

/* Form komentar ditangani assets/js/comments.js (Netlify Blobs via /api/comments) */

document.getElementById("year").textContent = new Date().getFullYear();

renderProjects();
renderFlow();
initStars();
initOrbit();
initReveal();
initNav();
initCv();
// initComments(); // Pindah ke comments.js
initIntro();

// ── Typewriter bio & button blinking after load ──
(() => {
  const el = document.getElementById("typed-bio");
  const btn = document.querySelector(".hero-text-side .btn-outline");
  const text = "Sebagai mahasiswa Manajemen dengan konsentrasi Keuangan di Universitas Negeri Malang, saya fokus membangun sistem otomasi yang mengubah proses operasional manual menjadi alur kerja yang terstruktur dan efisien.";

  if (REDUCED) {
    if (el) { el.textContent = text; el.classList.add("typing-done"); }
    if (btn) btn.classList.add("blinking");
    return;
  }

  function start() {
    if (btn) btn.classList.add("blinking");
    if (!el) return;
    
    let i = 0;
    let isDeleting = false;

    function loop() {
      el.textContent = text.substring(0, i);

      if (!isDeleting && i < text.length) {
        i++;
        setTimeout(loop, 30);
      } else if (isDeleting && i > 0) {
        i--;
        setTimeout(loop, 20);
      } else if (!isDeleting && i === text.length) {
        el.classList.add("typing-done");
        setTimeout(() => {
          isDeleting = true;
          el.classList.remove("typing-done");
          loop();
        }, 4000);
      } else if (isDeleting && i === 0) {
        isDeleting = false;
        setTimeout(loop, 800);
      }
    }
    loop();
  }

  if (document.body.classList.contains("is-loaded")) {
    start();
  } else {
    const obs = new MutationObserver(() => {
      if (document.body.classList.contains("is-loaded")) {
        obs.disconnect();
        start();
      }
    });
    obs.observe(document.body, { attributes: true, attributeFilter: ["class"] });
  }
})();

// ── Tab filter ──
document.querySelectorAll('.pf-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.pf-tab').forEach(t => { t.classList.remove('btn-primary', 'active'); t.classList.add('btn-ghost'); });
    tab.classList.add('btn-primary', 'active');
    tab.classList.remove('btn-ghost');
    document.querySelectorAll('.pf-pane').forEach(p => p.style.display = 'none');
    document.getElementById('pane-' + tab.dataset.target).style.display = 'block';
  });
});


/* ── Preloader lightning + audio + scroll reveal ── */

function initIntro() {
  const overlay = document.getElementById("intro-overlay");
  if (!overlay) return;
  if (REDUCED) { overlay.classList.add("is-hidden"); document.body.classList.add("is-loaded"); return; }

  // ── Petir WebGL DIMATIKAN sesuai permintaan (efek lain tetap) ──
  const fx = window.IntroFX || {};
  const lightning = null;

  // ── Teks partikel: "Welcome To My Portofolio Website" terbang dari tepi layar menyatu ──
  const pCanvas = document.getElementById("intro-particles");
  if (fx.particleText && pCanvas) {
    fx.particleText(pCanvas, [
      { text: "Welcome To My", size: 68, color: [248, 250, 252] },
      { text: "Portofolio Website", size: 78, color: [34, 197, 94], gap: 10 },
    ], {
   sampleStep: 5,
   maxParticles: 5500,
   holdMs: 4500,    // teks bertahan lebih lama (4.5 detik)
   fadeMs: 1200,
 }).start();
 }

  // ── Dense Milky Way: layered star bands + slow galactic drift + occasional shooting star ──
  const canvas = document.getElementById("intro-stars");
  let stop = false, raf = null;
  if (canvas) {
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w, h, layers;

    function resize() {
      w = overlay.clientWidth; h = overlay.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // 3 layers: far (many, tiny, slow) -> near (fewer, bigger, faster)
      layers = [
        { n: 620, sMin: .7, sMax: 1.5, v: .07, tw: .9 },
        { n: 340, sMin: 1.2, sMax: 2.3, v: .18, tw: 1.2 },
        { n: 90, sMin: 2.2, sMax: 3.6, v: .38, tw: 1.6 }
      ].map(L => ({ ...L, stars: Array.from({ length: L.n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        r: L.sMin + Math.random() * (L.sMax - L.sMin),
        v: L.v * (.6 + Math.random() * .8),
        p: Math.random() * Math.PI * 2,
        green: Math.random() < .12
      })) }));
    }
    resize();
    window.addEventListener("resize", resize);

    // Milky Way band: soft diagonal glow
    function drawNebula(t) {
      const pulse = .55 + .45 * Math.sin(t * .0007);
      let g = ctx.createRadialGradient(w * .78, h * .22, 0, w * .78, h * .22, Math.max(w, h) * .62);
      g.addColorStop(0, `rgba(34,197,94,${.22 * pulse})`);
      g.addColorStop(.4, "rgba(34,197,94,0.06)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      g = ctx.createRadialGradient(w * .18, h * .82, 0, w * .18, h * .82, Math.max(w, h) * .58);
      g.addColorStop(0, `rgba(129,90,220,${.20 * pulse})`);
      g.addColorStop(.45, "rgba(129,90,220,0.05)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    }

    function drawBand(t) {
      const g = ctx.createLinearGradient(0, h * .1, w, h * .9);
      g.addColorStop(0, "rgba(34,197,94,0)");
      g.addColorStop(.35, "rgba(90,120,200,0.16)");
      g.addColorStop(.55, "rgba(34,197,94,0.18)");
      g.addColorStop(.8, "rgba(140,100,220,0.14)");
      g.addColorStop(1, "rgba(34,197,94,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    }

    let shooting = null, nextShoot = 1800 + Math.random() * 2200;
    function drawShooting(t, dt) {
      if (!shooting && t > nextShoot) {
        shooting = { x: Math.random() * w * .8 + w * .1, y: Math.random() * h * .3, vx: 6 + Math.random() * 4, vy: 2 + Math.random() * 1.5, life: 1 };
        nextShoot = t + 2200 + Math.random() * 3000;
      }
      if (shooting) {
        shooting.x += shooting.vx; shooting.y += shooting.vy; shooting.life -= dt * .0022;
        if (shooting.life <= 0) shooting = null;
        else {
          ctx.save();
          ctx.strokeStyle = `rgba(226,232,240,${shooting.life * .9})`;
          ctx.lineWidth = 1.4;
          ctx.shadowColor = "#E2E8F0"; ctx.shadowBlur = 6;
          ctx.beginPath();
          ctx.moveTo(shooting.x, shooting.y);
          ctx.lineTo(shooting.x - shooting.vx * 9, shooting.y - shooting.vy * 9);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    let last = performance.now();
    (function loop(now) {
      if (stop) return;
      const t = now, dt = now - last; last = now;
      ctx.fillStyle = "#060A12";
      ctx.fillRect(0, 0, w, h);
      drawNebula(t);
      drawBand(t);
      for (const L of layers) {
        for (const s of L.stars) {
          s.x -= s.v * dt * .09; s.p += dt * .001 * L.tw;
          if (s.x < -2) { s.x = w + 2; s.y = Math.random() * h; }
          const tw = .55 + .45 * Math.sin(s.p);
          ctx.fillStyle = s.green
            ? `rgba(74,222,128,${.7 * tw + .3})`
            : `rgba(237,242,247,${.7 * tw + .3})`;
          if (s.r > 2.2) { ctx.shadowColor = s.green ? "#22C55E" : "#E2E8F0"; ctx.shadowBlur = 6; }
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, 6.29);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
      drawShooting(t, dt);
      raf = requestAnimationFrame(loop);
    })(last);
  }

  // ── Progress 0→100 dalam 7 detik, lalu lift ──
  const DURATION = 7000, T0 = performance.now();
  (function tick() {
    const p = Math.min(1, (performance.now() - T0) / DURATION);
    const eased = 1 - Math.pow(1 - p, 2); // decelerate
    const pct = Math.round(eased * 100);
    const pctEl = document.getElementById("intro-pct");
    const barEl = document.getElementById("intro-bar-fill");
    if (pctEl) pctEl.textContent = pct;
    if (barEl) barEl.style.width = pct + "%";
    if (p < 1) requestAnimationFrame(tick);
    else {
      stop = true;
      if (raf) cancelAnimationFrame(raf);
      if (lightning) lightning.stop();     // WebGL context dilepas, bukan terus render di belakang
      overlay.classList.add("is-hidden");
      document.body.classList.add("is-loaded");
      /* Keluarkan preloader (dan canvas bintangnya) dari render tree setelah fade,
         bukan cuma transparan — 1280x577 canvas transparan tetap menempati layer. */
      setTimeout(() => { overlay.style.display = "none"; }, 900);
    }
  })();
}


/* ── Smooth scroll (Lenis) — satu instance, dipakai semua anchor link ── */
const LENIS_EASING = t => Math.min(1, 1.001 - Math.pow(2, -10 * t));
const NAV_OFFSET = -90;

function initSmoothScroll() {
  if (REDUCED || typeof Lenis === "undefined") return;

  const lenis = new Lenis({
    duration: 1.15,
    easing: LENIS_EASING,
    smoothWheel: true,
    wheelMultiplier: 0.9,
  });
  window.lenis = lenis;                     // aksesibel dari mana pun

  /* Lenis raf() harus dipanggil tiap frame — ia yang menganimasikan scrollTo, dan
     biayanya nyaris nol (beberapa operasi aritmetika, tanpa paint). Jangan digerbangi. */
  (function raf(time) { lenis.raf(time); requestAnimationFrame(raf); })();
  document.documentElement.classList.add("lenis", "lenis-smooth");

  // Semua anchor internal → scrollTo lewat Lenis, bukan native jump.
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { duration: 1.2, easing: LENIS_EASING, offset: NAV_OFFSET });
      history.replaceState(null, "", id);
      playSectionEnter(target);
    });
  });
}
initSmoothScroll();


/* ── Animasi pindah section (dipanggil tiap klik nav) ──────────────────
   Anak langsung section masuk bertingkat dengan delay makin besar.
   Reflow dipaksa sekali supaya animasi restart walau section yang sama
   diklik dua kali berturut-turut. */
function playSectionEnter(section) {
  if (REDUCED || !section) return;
  const startSel = ".section-head, .stats, .card, .about-copy, .contact-card, .comment-card";
  let start = section.querySelector(startSel);
  if (!start && section.firstElementChild) start = section.firstElementChild;
  if (!start) return;
  const kids = [...section.children];
  const firstIdx = Math.max(0, kids.indexOf(start));

  section.classList.remove("section-enter");
  void section.offsetWidth;                 // paksa restart animasi
  kids.forEach((k, i) => {
    // elemen sebelum titik masuk tidak ikut — lain kali tidak ada lagi
    k.style.setProperty("--stagger", Math.max(0, i - firstIdx) * 100 + "ms");
  });
  section.classList.add("section-enter");

  // Lepas kelas setelah selesai supaya 'reveal' observer kembali jadi satu-satunya pengendali
  clearTimeout(section._enterT);
  section._enterT = setTimeout(() => section.classList.remove("section-enter"), 2200);
}

/* ── Card Entrance Animations (ScrollTrigger) ────────────────────────── */
function initCardEntrance() {
  if (typeof gsap === "undefined" || REDUCED) return;
  gsap.registerPlugin(ScrollTrigger);

  const selector = 'article, .card, section article, .project-card';
  
  // Animate existing & future cards
  ScrollTrigger.batch(selector, {
    onEnter: batch => {
      gsap.fromTo(batch, {
        opacity: 0,
        scale: 0.85,
        y: 60,
        z: -300,
        rotationX: 12,
        transformPerspective: 1200
      }, {
        opacity: 1,
        scale: 1,
        y: 0,
        z: 0,
        rotationX: 0,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(1.2)",
        overwrite: true
      });
    },
    start: "top 88%",
    once: false
  });
}
window.addEventListener("DOMContentLoaded", initCardEntrance);

/* Mask effect untuk morph */
/* (Removed) */

