/* Intro effects — WebGL lightning + particle text.
   Hand-written, no dependencies. Two exports on window.IntroFX. */

/* ── 1. WebGL lightning ────────────────────────────────────────────────
   Fragment shader: fbm-noise bolt that snakes down the screen.
   hue 142 = #22C55E green. */
const VERT = `
attribute vec2 aPosition;
void main() { gl_Position = vec4(aPosition, 0.0, 1.0); }
`;

const FRAG = `
precision mediump float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uHue;
uniform float uXOffset;
uniform float uSpeed;
uniform float uIntensity;
uniform float uSize;
#define OCTAVE_COUNT 10

vec3 hsv2rgb(vec3 c) {
  vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
  return c.z * mix(vec3(1.0), rgb, c.y);
}
float hash11(float p) {
  p = fract(p * .1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * .1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
mat2 rotate2d(float theta) {
  float c = cos(theta), s = sin(theta);
  return mat2(c, -s, s, c);
}
float noise(vec2 p) {
  vec2 ip = floor(p), fp = fract(p);
  float a = hash12(ip);
  float b = hash12(ip + vec2(1.0, 0.0));
  float c = hash12(ip + vec2(0.0, 1.0));
  float d = hash12(ip + vec2(1.0, 1.0));
  vec2 t = smoothstep(0.0, 1.0, fp);
  return mix(mix(a, b, t.x), mix(c, d, t.x), t.y);
}
float fbm(vec2 p) {
  float value = 0.0, amplitude = 0.5;
  for (int i = 0; i < OCTAVE_COUNT; ++i) {
    value += amplitude * noise(p);
    p *= rotate2d(0.45);
    p *= 2.0;
    amplitude *= 0.5;
  }
  return value;
}
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = fragCoord / iResolution.xy;
  uv = 2.0 * uv - 1.0;
  float aspect = iResolution.x / iResolution.y;
  uv.x *= aspect;
  uv.x += uXOffset;

  // macroscopic path — gentle sine so the bolt snakes downward
  float path = sin(uv.y * 3.0 - iTime * 2.5) * 0.25
             + sin(uv.y * 5.0 + iTime * 1.5) * 0.15;

  // microscopic detail — branches and sharp lightning edges
  vec2 noiseUv = uv * uSize * 1.5;
  float n = 2.0 * fbm(noiseUv + 1.2 * iTime * uSpeed) - 1.0;

  float scl = aspect < 1.0 ? (aspect * 1.1) : 1.0;
  float center = (path + n * 0.4) * scl;
  uv.y += n * 0.2 * scl;

  float dist = abs(uv.x - center);
  vec3 baseColor = hsv2rgb(vec3(uHue / 360.0, 0.7, 0.8));
  vec3 col = baseColor * (mix(0.0, 0.07, hash11(iTime * uSpeed)) / dist) * uIntensity;
  float alpha = clamp(max(col.r, max(col.g, col.b)), 0.0, 1.0);
  fragColor = vec4(col, alpha);
}
void main() { mainImage(gl_FragColor, gl_FragCoord.xy); }
`;

function lightning(canvas, opts) {
  if (!canvas) return null;
  const o = Object.assign({ hue: 142, xOffset: 0, speed: 1.4, intensity: 1, size: 2 }, opts);

  const compile = (gl, src, type) => {
    const s = gl.createShader(type);
    if (!s) return null;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (gl.getShaderParameter(s, gl.COMPILE_STATUS)) return s;
    gl.deleteShader(s);
    return null;
  };

  const coarse = window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;
  const fps = coarse ? 30 : 45;
  const frameMs = 1000 / fps;

  const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: true });
  if (!gl) return null;

  const vs = compile(gl, VERT, gl.VERTEX_SHADER);
  const fs = compile(gl, FRAG, gl.FRAGMENT_SHADER);
  if (!vs || !fs) return null;

  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, "aPosition");
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const U = {
    res: gl.getUniformLocation(prog, "iResolution"),
    time: gl.getUniformLocation(prog, "iTime"),
    hue: gl.getUniformLocation(prog, "uHue"),
    x: gl.getUniformLocation(prog, "uXOffset"),
    speed: gl.getUniformLocation(prog, "uSpeed"),
    intensity: gl.getUniformLocation(prog, "uIntensity"),
    size: gl.getUniformLocation(prog, "uSize"),
  };

  let raf = null, last = 0;
  let visible = document.visibilityState !== "hidden";
  const t0 = performance.now();

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, coarse ? 1 : 1.5);
    const w = Math.max(1, Math.floor(canvas.clientWidth * dpr));
    const h = Math.max(1, Math.floor(canvas.clientHeight * dpr));
    if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
  }

  function frame(now) {
    raf = null;
    if (!visible) return;
    if (now - last >= frameMs) {
      last = now;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(U.res, canvas.width, canvas.height);
      gl.uniform1f(U.time, (now - t0) / 1000);
      gl.uniform1f(U.hue, o.hue);
      gl.uniform1f(U.x, o.xOffset);
      gl.uniform1f(U.speed, o.speed);
      gl.uniform1f(U.intensity, o.intensity);
      gl.uniform1f(U.size, o.size);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
    raf = requestAnimationFrame(frame);
  }

  const start = () => { if (!raf && visible) raf = requestAnimationFrame(frame); };
  const stop = () => { if (raf) { cancelAnimationFrame(raf); raf = null; } };

  const onVis = () => { visible = document.visibilityState !== "hidden"; visible ? start() : stop(); };
  document.addEventListener("visibilitychange", onVis);
  window.addEventListener("resize", resize);

  resize();
  start();

  return { stop, resize, destroy: () => { stop(); window.removeEventListener("resize", resize); document.removeEventListener("visibilitychange", onVis); } };
}

/* ── 2. Particle text ──────────────────────────────────────────────────
   Draw the text once to an offscreen canvas, sample its pixels, and let
   that many particles fly in from the edges to their pixel positions. */
class Particle {
  constructor() {
    this.pos = { x: 0, y: 0 };
    this.vel = { x: 0, y: 0 };
    this.acc = { x: 0, y: 0 };
    this.target = { x: 0, y: 0 };
    this.closeEnoughTarget = 100;
    this.maxSpeed = 1;
    this.maxForce = 0.1;
    this.particleSize = 3;
    this.isKilled = false;
    this.startColor = { r: 0, g: 0, b: 0 };
    this.targetColor = { r: 0, g: 0, b: 0 };
    this.colorWeight = 0;
    this.colorBlendRate = 0.01;
  }
  move() {
    let speed = 1;
    const dist = Math.hypot(this.pos.x - this.target.x, this.pos.y - this.target.y);
    if (dist < this.closeEnoughTarget) speed = dist / this.closeEnoughTarget;

    const toTarget = { x: this.target.x - this.pos.x, y: this.target.y - this.pos.y };
    const len = Math.hypot(toTarget.x, toTarget.y);
    if (len > 0) {
      toTarget.x = (toTarget.x / len) * this.maxSpeed * speed;
      toTarget.y = (toTarget.y / len) * this.maxSpeed * speed;
    }

    const steer = { x: toTarget.x - this.vel.x, y: toTarget.y - this.vel.y };
    const slen = Math.hypot(steer.x, steer.y);
    if (slen > 0) {
      steer.x = (steer.x / slen) * this.maxForce;
      steer.y = (steer.y / slen) * this.maxForce;
    }

    this.acc.x += steer.x; this.acc.y += steer.y;
    this.vel.x += this.acc.x; this.vel.y += this.acc.y;
    this.pos.x += this.vel.x; this.pos.y += this.vel.y;
    this.acc.x = 0; this.acc.y = 0;
  }
  draw(ctx) {
    if (this.colorWeight < 1) this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1);
    const c = { r: 0, g: 0, b: 0 };
    for (const k of ["r", "g", "b"]) c[k] = Math.round(this.startColor[k] + (this.targetColor[k] - this.startColor[k]) * this.colorWeight);
    ctx.fillStyle = `rgb(${c.r},${c.g},${c.b})`;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.particleSize / 2, 0, Math.PI * 2);
    ctx.fill();
  }
  kill(w, h) {
    if (this.isKilled) return;
    const r = this.randomPos(w / 2, h / 2, (w + h) / 2, w, h);
    this.target.x = r.x; this.target.y = r.y;
    for (const k of ["r", "g", "b"]) {
      this.startColor[k] += (this.targetColor[k] - this.startColor[k]) * this.colorWeight;
    }
    this.targetColor = { r: 0, g: 0, b: 0 };
    this.colorWeight = 0;
    this.isKilled = true;
  }
  randomPos(cx, cy, radius, w, h) {
    let x = Math.random() * w, y = Math.random() * h;
    let dx = x - cx, dy = y - cy;
    const d = Math.hypot(dx, dy);
    if (d > 0) { dx = (dx / d) * radius; dy = (dy / d) * radius; }
    return { x: cx + dx, y: cy + dy };
  }
}

/* lines: [{ text, color, size, gap }] — colors are [r,g,b] */
function particleText(canvas, lines, opts) {
  if (!canvas) return null;
  const o = Object.assign({
    sampleStep: 4, maxParticles: 5200,
    holdMs: 2600,        // berapa lama teks bertahan utuh
    fadeMs: 900,         // berapa lama scatter + cross-fade
    onFaded: null
  }, opts);

  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  const particles = [];
  let raf = null, dpr = 1, bornAt = 0, done = false;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth, h = window.innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = w + "px"; canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { w, h };
  }

  function build(w, h) {
    const off = document.createElement("canvas");
    off.width = w; off.height = h;
    const octx = off.getContext("2d", { willReadFrequently: true });
    octx.textAlign = "center";
    octx.textBaseline = "middle";

    const k = Math.min(1, w / 900);
    let y = h / 2 - (lines.length - 1) * 46 * k;
    lines.forEach((ln, i) => {
      const size = (ln.size || 64) * k;
      octx.font = `bold ${size}px 'JetBrains Mono', monospace`;
      if (ln.gradient) {
        const g = octx.createLinearGradient(w / 2 - 320 * k, 0, w / 2 + 320 * k, 0);
        ln.gradient.forEach(([stop, color]) => g.addColorStop(stop, color));
        octx.fillStyle = g;
      } else {
        octx.fillStyle = `rgb(${ln.color.join(",")})`;
      }
      octx.fillText(ln.text, w / 2, y);
      y += size + (ln.gap || 0) * k;
    });

    const data = octx.getImageData(0, 0, w, h).data;
    const step = o.sampleStep;

    // randomised sample order so particles don't arrive in reading order
    const idx = [];
    for (let p = 0; p < data.length; p += step * 4) idx.push(p);
    for (let i = idx.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [idx[i], idx[j]] = [idx[j], idx[i]];
    }

    let used = 0;
    for (const p of idx) {
      if (data[p + 3] <= 0) continue;
      if (used >= o.maxParticles) break;
      const x = (p / 4) % w;
      const yy = Math.floor(p / 4 / w);

      let pt;
      if (used < particles.length) { pt = particles[used]; pt.isKilled = false; }
      else {
        pt = new Particle();
        const r = pt.randomPos(w / 2, h / 2, (w + h) / 2, w, h);
        pt.pos.x = r.x; pt.pos.y = r.y;
        pt.maxSpeed = Math.random() * 6 + 9;
        pt.maxForce = pt.maxSpeed * 0.12;
        pt.particleSize = 3;
        pt.colorBlendRate = Math.random() * 0.0275 + 0.0025;
        particles.push(pt);
      }
      for (const kk of ["r", "g", "b"]) {
        pt.startColor[kk] += (pt.targetColor[kk] - pt.startColor[kk]) * pt.colorWeight;
      }
      pt.targetColor = { r: data[p], g: data[p + 1], b: data[p + 2] };
      pt.colorWeight = 0;
      pt.target.x = x; pt.target.y = yy;
      used++;
    }
    for (let i = used; i < particles.length; i++) particles[i].kill(w, h);
    bornAt = performance.now();
    done = false;
  }

  let last = performance.now();
  function loop(now) {
    raf = null;
    if (document.hidden) { raf = requestAnimationFrame(loop); return; }
    if (done) return;

    const w = window.innerWidth, h = window.innerHeight;
    last = now;
    ctx.clearRect(0, 0, w, h);

    // waktu, bukan hitungan frame — headless/120Hz tidak lagi memotong animasi
    const age = now - bornAt;
    const fade = Math.max(0, Math.min(1, (age - o.holdMs) / o.fadeMs));
    ctx.globalAlpha = 1 - fade;

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.move();
      p.draw(ctx);
      if (p.isKilled && (p.pos.x < 0 || p.pos.x > w || p.pos.y < 0 || p.pos.y > h)) particles.splice(i, 1);
    }

    ctx.globalAlpha = 1;
    if (fade >= 1) {
      done = true;
      if (o.onFaded) o.onFaded();
      return;                       // done — stop burning frames
    }
    raf = requestAnimationFrame(loop);
  }

  function start() {
    const { w, h } = resize();
    build(w, h);
    last = performance.now();
    if (!raf) raf = requestAnimationFrame(loop);
  }

  function onResize() {
    resize();
    build(window.innerWidth, window.innerHeight);
  }
  window.addEventListener("resize", onResize);

  return { start, stop: () => { if (raf) { cancelAnimationFrame(raf); raf = null; } }, particles, canvas };
}

window.IntroFX = { lightning, particleText };
