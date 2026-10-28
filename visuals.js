/* Interactive "See it" visuals for the MTEL Math 63 study kit. No libraries. Nothing here touches the DOM until a visual is mounted. */
var MTEL = (window.MTEL = window.MTEL || {objectives:[],questions:[],cards:[],plan:[],links:[],openResponse:[]});
MTEL.visuals = MTEL.visuals || [];
(function(){
var PI = Math.PI;

/* ---------- number and text helpers ---------- */
function num(x, d){ d = d == null ? 2 : d; var s = (+x).toFixed(d); if (s.indexOf('.') >= 0) s = s.replace(/0+$/, '').replace(/\.$/, ''); return s === '-0' ? '0' : neg(s); }
function sgn(x, d){ return (x < 0 ? ' − ' : ' + ') + num(Math.abs(x), d); }
function neg(s){ return s.charAt(0) === '-' ? '−' + s.slice(1) : s; }
function gcd(a, b){ return b ? gcd(b, a % b) : Math.abs(a); }
function piStr(n, d){ if (n === 0) return '0'; var g = gcd(n, d); n /= g; d /= g; var s = n < 0 ? '−' : ''; n = Math.abs(n); return s + (n === 1 ? '' : n) + 'π' + (d === 1 ? '' : '/' + d); }
function shift(h){ return h === 0 ? 'x' : (h > 0 ? 'x − ' + num(h) : 'x + ' + num(-h)); }
function cx(re, im, d){ d = d || 3; if (Math.abs(re) < Math.pow(10, -d) / 2) re = 0; if (Math.abs(im) < Math.pow(10, -d) / 2) im = 0; return num(re, d || 3) + (im < 0 ? ' − ' : ' + ') + num(Math.abs(im), d || 3) + 'i'; }

/* Abramowitz-Stegun 7.1.26, max error about 1.5e-7 */
function erf(x){
  var s = x < 0 ? -1 : 1; x = Math.abs(x);
  var t = 1 / (1 + 0.3275911 * x);
  var y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
  return s * y;
}
function Phi(z){ return 0.5 * (1 + erf(z / Math.SQRT2)); }

/* exact sin and cos strings for angles that are multiples of 30 or 45 degrees; null otherwise */
function exactTrig(deg){
  var t = ((deg % 360) + 360) % 360;
  if (t % 30 !== 0 && t % 45 !== 0) return null;
  var T = {0: ['0', '1'], 30: ['1/2', '√3/2'], 45: ['√2/2', '√2/2'], 60: ['√3/2', '1/2'], 90: ['1', '0']};
  var g = t <= 180 ? t : t - 180, sr = g > 90 ? 180 - g : g, b = t > 180 ? 360 - t : t, cr = b > 90 ? 180 - b : b;
  var s = T[sr][0], c = T[cr][1];
  return [(t > 180 && s !== '0' ? '−' : '') + s, (b > 90 && c !== '0' ? '−' : '') + c];
}

/* ---------- canvas plot helper ---------- */
var live = [], wired = false;
function css(n){ return getComputedStyle(document.documentElement).getPropertyValue(n).trim() || '#888'; }
function colors(){ return {ink: css('--ink'), muted: css('--muted'), grid: css('--line'), accent: css('--accent'), hi: css('--mark'), good: css('--good'), bad: css('--bad'), bg: css('--bg'), aink: css('--accent-ink')}; }
function wire(){
  if (wired) return; wired = true;
  var f = function(){ live = live.filter(function(v){ return document.contains(v.cv); }); live.forEach(function(v){ v.redraw(); }); };
  window.addEventListener('resize', f);
  try { var mq = window.matchMedia('(prefers-color-scheme: dark)'); if (mq.addEventListener) mq.addEventListener('change', f); else if (mq.addListener) mq.addListener(f); } catch (e) {}
  try { new MutationObserver(f).observe(document.documentElement, {attributes: true, attributeFilter: ['data-theme']}); } catch (e) {}
}
var STEPS = [1, 2, 5, 10, 20, 50, 100];
function stepFor(span, pix){ for (var i = 0; i < STEPS.length; i++) if (STEPS[i] * pix / span >= 26) return STEPS[i]; return 100; }
function ints(a, b, s){ var r = []; for (var v = Math.ceil(a / s) * s; v <= b + 1e-9; v += s) r.push([v, String(v === 0 ? 0 : v).replace('-', '−')]); return r; }

function mkView(g, px, py, pw, ph, x0, x1, y0, y1, eq){
  if (eq) { /* equal scale on both axes; the given y range (if any) must also fit */
    var xc = (x0 + x1) / 2, yc = (y0 + y1) / 2, sc = pw / (x1 - x0);
    if (y1 > y0) sc = Math.min(sc, ph / (y1 - y0));
    x0 = xc - pw / sc / 2; x1 = xc + pw / sc / 2; y0 = yc - ph / sc / 2; y1 = yc + ph / sc / 2;
  }
  var c = g.ctx, C = g.c, V = {x0: x0, x1: x1, y0: y0, y1: y1, px: px, py: py, pw: pw, ph: ph};
  var st = function(col, w, dash){ c.strokeStyle = col; c.lineWidth = w || 1.5; c.setLineDash(dash || []); };
  V.X = function(x){ return px + (x - x0) / (x1 - x0) * pw; };
  V.Y = function(y){ return py + ph - (y - y0) / (y1 - y0) * ph; };
  V.clip = function(fn){ c.save(); c.beginPath(); c.rect(px, py, pw, ph); c.clip(); fn(); c.restore(); };
  V.axes = function(o){
    o = o || {};
    var xt = o.xt || ints(x0, x1, stepFor(x1 - x0, pw)), yt = o.yt || ints(y0, y1, stepFor(y1 - y0, ph));
    var hasX = y0 <= 0 && y1 >= 0, hasY = x0 <= 0 && x1 >= 0;
    st(C.grid, 1); c.beginPath();
    if (!o.nox) xt.forEach(function(t){ var X = V.X(t[0]); c.moveTo(X, py); c.lineTo(X, py + ph); });
    if (!o.noy) yt.forEach(function(t){ var Y = V.Y(t[0]); c.moveTo(px, Y); c.lineTo(px + pw, Y); });
    c.stroke();
    st(C.muted, 1.5); c.beginPath();
    if (hasX) { c.moveTo(px, V.Y(0)); c.lineTo(px + pw, V.Y(0)); }
    if (hasY) { c.moveTo(V.X(0), py); c.lineTo(V.X(0), py + ph); }
    c.stroke();
    c.fillStyle = C.muted; c.font = '11px "JetBrains Mono",ui-monospace,monospace';
    var ay = hasX ? V.Y(0) : py + ph, ax = hasY ? V.X(0) : px, placed = [];
    var lab = function(t, x, y, al){
      var w = c.measureText(t).width; if (al === 'center') x = Math.min(Math.max(x, px + w / 2 + 1), px + pw - w / 2 - 1);
      var l = al === 'center' ? x - w / 2 : al === 'right' ? x - w : x, r = l + w, top = y - 10, bot = y + 3;
      for (var i = 0; i < placed.length; i++) { var q = placed[i]; if (l < q.r + 3 && r > q.l - 3 && top < q.b && bot > q.t) return; }
      placed.push({l: l, r: r, t: top, b: bot}); c.textAlign = al; c.fillText(t, x, y);
    };
    var ly = o.edge ? py + ph - 4 : (ay + 12 > py + ph - 1 ? ay - 5 : ay + 12), lx = Math.min(Math.max(ax - 4, px + 26), px + pw - 2);
    if (hasX && hasY && !o.nox && !o.noy) lab('0', ax - 4, ay + 12, 'right');
    if (!o.nox) xt.forEach(function(t){ if (t[0] === 0 && hasX && hasY) return; lab(t[1], Math.min(Math.max(V.X(t[0]), px + 8), px + pw - 8), ly, 'center'); });
    if (!o.noy) yt.forEach(function(t){ if (t[0] === 0) return; lab(t[1], lx, V.Y(t[0]) + 4, 'right'); });
    if (!o.nolab) { lab(o.xl || 'x', px + pw - 3, Math.max(py + 11, Math.min(ay - 5, py + ph - 14)), 'right'); lab(o.yl || 'y', Math.min(Math.max(ax + 5, px + 3), px + pw - 10), py + 11, 'left'); }
  };
  V.fn = function(f, col, w, dash){
    V.clip(function(){
      st(col, w, dash); c.beginPath();
      var pen = false, lastY = 0, n = Math.ceil(pw * 1.5);
      for (var i = 0; i <= n; i++) {
        var x = x0 + (x1 - x0) * i / n, y = f(x);
        if (!isFinite(y)) { pen = false; continue; }
        var Y = V.Y(y);
        if (pen && Math.abs(Y - lastY) > ph * 1.5) pen = false;
        if (pen) c.lineTo(V.X(x), Y); else c.moveTo(V.X(x), Y);
        pen = true; lastY = Y;
      }
      c.stroke();
    });
  };
  V.param = function(fx, fy, t0, t1, n, col, w, dash){
    V.clip(function(){
      st(col, w, dash); c.beginPath();
      for (var i = 0; i <= n; i++) { var t = t0 + (t1 - t0) * i / n; if (i) c.lineTo(V.X(fx(t)), V.Y(fy(t))); else c.moveTo(V.X(fx(t)), V.Y(fy(t))); }
      c.stroke();
    });
  };
  V.seg = function(xa, ya, xb, yb, col, w, dash){ st(col, w, dash); c.beginPath(); c.moveTo(V.X(xa), V.Y(ya)); c.lineTo(V.X(xb), V.Y(yb)); c.stroke(); };
  V.dot = function(x, y, col, r){ c.fillStyle = col; c.beginPath(); c.arc(V.X(x), V.Y(y), r || 4, 0, 2 * PI); c.fill(); };
  V.txt = function(s, x, y, col, al, dx, dy){ c.fillStyle = col; c.textAlign = al || 'left'; c.font = '12px "JetBrains Mono",ui-monospace,monospace'; c.fillText(s, V.X(x) + (dx || 0), V.Y(y) + (dy || 0)); };
  V.poly = function(pts, fill, alpha, stroke){
    V.clip(function(){
      c.beginPath(); pts.forEach(function(p, i){ if (i) c.lineTo(V.X(p[0]), V.Y(p[1])); else c.moveTo(V.X(p[0]), V.Y(p[1])); }); c.closePath();
      if (fill) { c.globalAlpha = alpha == null ? 0.25 : alpha; c.fillStyle = fill; c.fill(); c.globalAlpha = 1; }
      if (stroke) { st(stroke, 1.5); c.stroke(); }
    });
  };
  V.circle = function(x, y, r, col, w, dash){ st(col, w, dash); c.beginPath(); c.arc(V.X(x), V.Y(y), r * (V.X(1) - V.X(0)), 0, 2 * PI); c.stroke(); };
  V.arc = function(x, y, r, a0, a1, col, w){ st(col, w); c.beginPath(); c.arc(V.X(x), V.Y(y), r * (V.X(1) - V.X(0)), -a0, -a1, a1 > a0); c.stroke(); };
  return V;
}

/* ctl items: {k, t:'range'|'select'|'check', l, min, max, step, val, o:[options], f:(value)=>text}
   draw(g, S) paints and returns the readout text. opt.fix(S, set, key, prev) can adjust linked controls. */
function viz(el, id, label, ctl, draw, opt){
  opt = opt || {};
  var S = {}, by = {}, h = '<canvas role="img" aria-label="' + label + '"></canvas><div class="vctl">';
  ctl.forEach(function(c){
    var fid = id + '-' + c.k; S[c.k] = c.val; by[c.k] = c;
    if (c.t === 'select') h += '<div><label for="' + fid + '">' + c.l + '</label><select id="' + fid + '">' + c.o.map(function(o, i){ return '<option value="' + i + '"' + (i === c.val ? ' selected' : '') + '>' + o + '</option>'; }).join('') + '</select></div>';
    else if (c.t === 'check') h += '<div><label for="' + fid + '"><input type="checkbox" id="' + fid + '"' + (c.val ? ' checked' : '') + '> ' + c.l + '</label></div>';
    else h += '<div><label for="' + fid + '">' + c.l + ' <span class="vv" id="' + fid + '-v"></span></label><input type="range" id="' + fid + '" min="' + c.min + '" max="' + c.max + '" step="' + c.step + '" value="' + c.val + '"></div>';
  });
  h += '</div><div class="vro" role="status" aria-live="polite"></div>';
  el.innerHTML = h;
  var cv = el.querySelector('canvas'), ro = el.querySelector('.vro');
  var q = function(k){ return el.querySelector('[id="' + id + '-' + k + '"]'); };
  function set(k, v){ S[k] = v; var t = q(k); if (by[k].t === 'check') t.checked = v; else t.value = v; }
  var api = {max: function(k, m){ q(k).max = m; if (S[k] > m) set(k, m); }};
  if (opt.fix && opt.init) opt.fix(S, set, null, null, api);
  function redraw(){
    var w = Math.max(200, Math.min(640, Math.floor(el.clientWidth || 320))), ht = opt.hfn ? opt.hfn(w) : Math.max(220, Math.round(0.65 * w)), d = window.devicePixelRatio || 1;
    cv.width = Math.round(w * d); cv.height = Math.round(ht * d); cv.style.height = ht + 'px';
    var ctx = cv.getContext('2d'); ctx.setTransform(d, 0, 0, d, 0, 0); ctx.clearRect(0, 0, w, ht);
    var g = {ctx: ctx, w: w, h: ht, c: colors()};
    g.view = function(){ var a = [g].concat([].slice.call(arguments)); return mkView.apply(null, a); };
    ctl.forEach(function(c){ if (c.t === 'range') { var s = q(c.k + '-v'); if (s) s.textContent = c.f ? c.f(S[c.k]) : num(S[c.k]); } });
    ro.textContent = draw(g, S);
  }
  function onev(e){
    var t = e.target, k = t.id && t.id.indexOf(id + '-') === 0 ? t.id.slice(id.length + 1) : null, c = k && by[k];
    if (!c) return;
    var prev = S[k];
    S[k] = c.t === 'select' ? +t.value : c.t === 'check' ? t.checked : parseFloat(t.value);
    if (opt.fix) opt.fix(S, set, k, prev, api);
    redraw();
  }
  el.addEventListener('input', onev); el.addEventListener('change', onev);
  live.push({cv: cv, redraw: redraw}); wire();
  redraw();
}
var R = function(k, l, min, max, step, val, f){ return {t: 'range', k: k, l: l, min: min, max: max, step: step, val: val, f: f}; };
var SEL = function(k, l, o, val){ return {t: 'select', k: k, l: l, o: o, val: val || 0}; };
var CHK = function(k, l, val){ return {t: 'check', k: k, l: l, val: !!val}; };

/* ---------- the visuals ---------- */
var V = MTEL.visuals;

/* 1. transformations */
var PARENT = [['x²', function(x){ return x * x; }], ['|x|', Math.abs], ['√x', Math.sqrt], ['x³', function(x){ return x * x * x; }], ['1/x', function(x){ return 1 / x; }]];
V.push({id: 'v-transform', objs: ['0004', '0005'], title: 'Transform a parent function',
  caption: 'Pick a parent function, then slide a, h and k. Watch the key point move and the graph stretch, flip and shift.',
  mount: function(el){
    viz(el, 'v-transform', 'Graph of a parent function (dashed) and its transformation y = a f(x - h) + k (solid)', [
      SEL('f', 'Parent function f(x)', PARENT.map(function(p){ return p[0]; })),
      R('a', 'a (stretch, flip)', -3, 3, 0.5, 1), R('h', 'h (right)', -5, 5, 1, 0), R('k', 'k (up)', -5, 5, 1, 0)
    ], function(g, S){
      var f = PARENT[S.f][1], C = g.c, W = g.view(4, 4, g.w - 8, g.h - 8, -10, 10, 0, 0, true);
      W.axes();
      W.fn(f, C.muted, 1.5, [5, 4]);
      W.fn(function(x){ return S.a * f(x - S.h) + S.k; }, C.accent, 2.5);
      var kp = S.f === 4 ? [1, 1] : [0, 0], np = [S.h + kp[0], S.a * kp[1] + S.k];
      W.dot(kp[0], kp[1], C.muted, 4); W.dot(np[0], np[1], C.bad, 5);
      return 'y = ' + num(S.a) + '·f(' + shift(S.h) + ')' + (S.k === 0 ? '' : sgn(S.k)) + '   where f(x) = ' + PARENT[S.f][0] +
        '\nkey point (' + kp[0] + ', ' + kp[1] + ') moves to (' + num(np[0]) + ', ' + num(np[1]) + ')' + (S.a < 0 ? '\na < 0: reflected over the x-axis' : '') + (S.a === 0 ? '\na = 0: the graph is the flat line y = k' : '');
    });
  }});

/* 2. lines */
V.push({id: 'v-line', objs: ['0005'], title: 'Slope and intercept',
  caption: 'Slide m and b. The triangle shows rise over run for one step to the right.',
  mount: function(el){
    viz(el, 'v-line', 'Graph of the line y = mx + b with a slope triangle from x = 0 to x = 1', [
      R('m', 'm (slope)', -4, 4, 0.25, 1), R('b', 'b (y-intercept)', -6, 6, 0.5, 1)
    ], function(g, S){
      var C = g.c, W = g.view(4, 4, g.w - 8, g.h - 8, -10, 10, 0, 0, true);
      W.axes();
      W.poly([[0, S.b], [1, S.b], [1, S.b + S.m]], C.accent, 0.25, C.accent);
      W.fn(function(x){ return S.m * x + S.b; }, C.accent, 2.5);
      W.txt('run 1', 0.5, S.b, C.ink, 'center', 0, S.m >= 0 ? 14 : -6);
      W.txt('rise ' + num(S.m), 1, S.b + S.m / 2, C.ink, 'left', 6, 4);
      W.dot(0, S.b, C.bad, 4.5);
      var xi = S.m !== 0 ? -S.b / S.m : null;
      if (xi !== null) W.dot(xi, 0, C.good, 4.5);
      return 'y = ' + (S.m === 0 ? '' : num(S.m) + 'x') + (S.m === 0 ? num(S.b) : (S.b === 0 ? '' : sgn(S.b))) + '\nslope ' + num(S.m) + ', y-intercept ' + num(S.b) +
        '\nx-intercept: ' + (xi !== null ? num(xi) : (S.b === 0 ? 'every x (the line is the x-axis)' : 'none'));
    });
  }});

/* 3. quadratics */
V.push({id: 'v-quadratic', objs: ['0003', '0005'], title: 'Quadratic: vertex, axis and roots',
  caption: 'Slide a, b and c. The discriminant tells you how many times the parabola meets the x-axis.',
  mount: function(el){
    viz(el, 'v-quadratic', 'Graph of the parabola y = ax^2 + bx + c with its vertex, axis of symmetry and x-intercepts', [
      R('a', 'a', -3, 3, 0.5, 1), R('b', 'b', -6, 6, 0.5, 0), R('c', 'c', -6, 6, 0.5, -2)
    ], function(g, S){
      var C = g.c, a = S.a, b = S.b, c = S.c, W = g.view(4, 4, g.w - 8, g.h - 8, -10, 10, 0, 0, true);
      var hx = -b / (2 * a), ky = c - b * b / (4 * a), D = b * b - 4 * a * c;
      W.axes();
      W.seg(hx, W.y0, hx, W.y1, C.muted, 1.5, [5, 4]);
      W.fn(function(x){ return a * x * x + b * x + c; }, C.accent, 2.5);
      W.dot(hx, ky, C.bad, 5);
      var txt;
      if (D > 0) { var s = Math.sqrt(D), r1 = (-b - s) / (2 * a), r2 = (-b + s) / (2 * a); W.dot(r1, 0, C.good, 5); W.dot(r2, 0, C.good, 5); txt = '2 real roots: x = ' + num(Math.min(r1, r2), 3) + ' and x = ' + num(Math.max(r1, r2), 3); }
      else if (D === 0) { W.dot(hx, 0, C.good, 5); txt = '1 repeated root: x = ' + num(hx, 3); }
      else txt = '2 complex roots (no x-intercepts): x = ' + num(hx, 3) + ' ± ' + num(Math.sqrt(-D) / (2 * Math.abs(a)), 3) + 'i';
      return 'y = ' + num(a) + 'x²' + (b === 0 ? '' : sgn(b) + 'x') + (c === 0 ? '' : sgn(c)) + '\ndiscriminant b² − 4ac = ' + num(D) + '  →  ' + txt +
        '\nvertex (' + num(hx, 3) + ', ' + num(ky, 3) + '), axis x = ' + num(hx, 3) + ', opens ' + (a > 0 ? 'up' : 'down');
    }, {fix: function(S, set, k, prev){ if (k === 'a' && S.a === 0) set('a', prev > 0 ? -0.5 : 0.5); }});
  }});

/* 4. exponential and logarithm */
V.push({id: 'v-explog', objs: ['0006'], title: 'Exponential and logarithm are inverses',
  caption: 'Slide the base b. The two curves mirror each other across y = x. Is b above or below 1?',
  mount: function(el){
    viz(el, 'v-explog', 'Graphs of y = b^x, y = log base b of x, and the line y = x', [
      R('b', 'base b', 0.2, 4, 0.1, 2)
    ], function(g, S){
      var C = g.c, b = S.b, W = g.view(4, 4, g.w - 8, g.h - 8, -6, 6, 0, 0, true);
      W.axes();
      W.seg(W.x0, 0, W.x1, 0, C.bad, 1.2, [4, 4]); W.seg(0, W.y0, 0, W.y1, C.bad, 1.2, [4, 4]);
      W.fn(function(x){ return x; }, C.muted, 1.5, [5, 4]);
      W.fn(function(x){ return Math.pow(b, x); }, C.accent, 2.5);
      W.fn(function(x){ return Math.log(x) / Math.log(b); }, C.ink, 2.5);
      W.dot(0, 1, C.accent, 5); W.dot(1, 0, C.ink, 5);
      W.txt('(0, 1)', 0, 1, C.accent, 'right', -8, 16); W.txt('(1, 0)', 1, 0, C.ink, 'left', 8, 28);
      W.txt('y = 0', W.x1, 0, C.bad, 'right', -4, -16); W.txt('x = 0', 0, W.y1, C.bad, 'right', -6, 28);
      return 'y = ' + num(b, 1) + '^x (blue) and y = log_' + num(b, 1) + '(x) (black)\n' + (b > 1 ? 'b > 1: growth. Both curves rise.' : 'b < 1: decay. Both curves fall.') +
        '\ny = b^x passes through (0, 1); y = log_b(x) passes through (1, 0)\nasymptotes: y = 0 (for b^x) and x = 0 (for log)';
    }, {fix: function(S, set, k, prev){ if (Math.abs(S.b - 1) < 1e-9) set('b', prev < 1 ? 1.1 : 0.9); }});
  }});

/* 5. polynomials */
V.push({id: 'v-poly', objs: ['0007'], title: 'Polynomial roots and multiplicity',
  caption: 'Move the three roots and change their multiplicities. Odd multiplicity crosses the axis, even multiplicity touches it.',
  mount: function(el){
    viz(el, 'v-poly', 'Graph of a polynomial built from three roots with chosen multiplicities, vertical scale compressed', [
      R('r1', 'root 1', -4, 4, 0.5, -3), SEL('m1', 'multiplicity 1', ['1', '2', '3'], 0),
      R('r2', 'root 2', -4, 4, 0.5, 0), SEL('m2', 'multiplicity 2', ['1', '2', '3'], 1),
      R('r3', 'root 3', -4, 4, 0.5, 2.5), SEL('m3', 'multiplicity 3', ['1', '2', '3'], 0),
      CHK('neg', 'Leading coefficient is negative', false)
    ], function(g, S){
      var C = g.c, W = g.view(4, 4, g.w - 8, g.h - 8, -5, 5, -3.2, 3.2, false);
      var rs = [[S.r1, S.m1 + 1], [S.r2, S.m2 + 1], [S.r3, S.m3 + 1]], grp = {}, sign = S.neg ? -1 : 1, d = 0;
      rs.forEach(function(r){ grp[r[0]] = (grp[r[0]] || 0) + r[1]; d += r[1]; });
      var keys = Object.keys(grp).map(Number).sort(function(a, b){ return a - b; });
      var scale = Math.pow(3, d);
      W.axes({noy: true});
      W.fn(function(x){ var p = sign; rs.forEach(function(r){ p *= Math.pow(x - r[0], r[1]); }); return p / scale; }, C.accent, 2.5);
      keys.forEach(function(r){ W.dot(r, 0, grp[r] % 2 ? C.accent : C.bad, 5); });
      W.txt('vertical scale compressed', -4.9, -3.2, C.muted, 'left', 0, -22);
      var right = sign > 0 ? '+∞' : '−∞', left = (sign * (d % 2 === 0 ? 1 : -1)) > 0 ? '+∞' : '−∞';
      return 'degree ' + d + ', leading coefficient ' + (sign > 0 ? 'positive' : 'negative') + '\nas x → −∞, y → ' + left + ';  as x → +∞, y → ' + right + '\n' +
        keys.map(function(r){ return 'x = ' + num(r) + ' (multiplicity ' + grp[r] + '): ' + (grp[r] % 2 ? 'crosses' : 'touches'); }).join('\n');
    });
  }});

/* 6. unit circle */
V.push({id: 'v-unitcircle', objs: ['0008'], title: 'The unit circle draws the sine wave',
  caption: 'Slide the angle. The vertical leg is sin, the horizontal leg is cos, and the sine curve traces the height.',
  mount: function(el){
    viz(el, 'v-unitcircle', 'A point on the unit circle at angle theta, and the sine curve traced up to theta', [
      R('t', 'angle θ (degrees)', 0, 360, 5, 45, function(v){ return v + '°'; })
    ], function(g, S){
      var C = g.c, th = S.t, rad = th * PI / 180, cs = Math.cos(rad), sn = Math.sin(rad);
      var stack = g.w < 480, L, R2;
      if (stack) {
        var ph1 = Math.round(g.h * 0.58), sq = Math.min(ph1, g.w - 8);
        L = g.view(Math.round((g.w - sq) / 2), 4, sq, sq, -1.45, 1.45, -1.45, 1.45, true);
        R2 = g.view(4, ph1 + 16, g.w - 8, g.h - ph1 - 20, 0, 2 * Math.PI + 0.15, -1.4, 1.4, false);
      } else {
        var lw = Math.round(g.w * 0.42);
        L = g.view(2, 4, lw, g.h - 8, -1.45, 1.45, -1.45, 1.45, true);
        R2 = g.view(lw + 18, 4, g.w - lw - 22, g.h - 8, 0, 2 * Math.PI + 0.15, -1.4, 1.4, false);
      }
      L.axes({xt: [[-1, '−1'], [1, '1']], yt: [[-1, '−1'], [1, '1']], nolab: true});
      L.circle(0, 0, 1, C.muted, 1.5, [4, 3]);
      L.seg(0, 0, cs, 0, C.accent, 3.5); L.seg(cs, 0, cs, sn, C.bad, 3.5); L.seg(0, 0, cs, sn, C.ink, 1.5);
      if (th > 0) L.arc(0, 0, 0.22, 0, rad, C.ink, 1.5);
      L.dot(cs, sn, C.ink, 5);
      R2.axes({xt: [[PI / 2, 'π/2'], [PI, 'π'], [3 * PI / 2, '3π/2'], [2 * PI, '2π']], yt: [[-1, '−1'], [1, '1']], nolab: true});
      R2.fn(Math.sin, C.grid, 2);
      R2.param(function(t){ return t; }, Math.sin, 0, rad, Math.max(2, Math.round(th * 2)), C.bad, 2.5);
      R2.dot(rad, sn, C.bad, 5);
      if (!stack) { var cc = g.ctx; cc.strokeStyle = C.bad; cc.lineWidth = 1; cc.setLineDash([3, 3]); cc.beginPath(); cc.moveTo(L.X(cs), L.Y(sn)); cc.lineTo(R2.X(rad), R2.Y(sn)); cc.stroke(); cc.setLineDash([]); }
      var ex = exactTrig(th);
      var rs = th % 15 === 0 ? piStr(th / 15, 12) : num(rad, 3) + ' rad';
      return 'θ = ' + th + '° = ' + rs + '\nsin θ = ' + (ex ? ex[0] : num(sn, 3)) + (ex ? '   (' + num(sn, 3) + ')' : '') + '\ncos θ = ' + (ex ? ex[1] : num(cs, 3)) + (ex ? '   (' + num(cs, 3) + ')' : '');
    }, {hfn: function(w){ return w < 480 ? Math.round(w * 1.1) : Math.max(220, Math.round(0.65 * w)); }});
  }});

/* 7. sinusoid */
V.push({id: 'v-sinusoid', objs: ['0008'], title: 'Amplitude, period, phase shift, midline',
  caption: 'Slide each constant in y = A sin(B(x − C)) + D and see which feature of the wave it controls.',
  mount: function(el){
    viz(el, 'v-sinusoid', 'Graph of y = A sin(B(x - C)) + D with its midline dashed', [
      R('A', 'A (amplitude)', -3, 3, 0.5, 2), R('B', 'B (frequency)', 0.5, 4, 0.5, 1),
      R('C', 'C (shift right)', -12, 12, 1, 0, function(v){ return piStr(v, 12); }), R('D', 'D (midline)', -3, 3, 0.5, 0)
    ], function(g, S){
      var C = g.c, A = S.A, B = S.B, Cs = S.C * PI / 12, D = S.D;
      var xt = []; for (var k = -2; k <= 2; k++) xt.push([k * PI, k === 0 ? '0' : piStr(k, 1)]);
      var W = g.view(4, 4, g.w - 8, g.h - 8, -2 * PI - 0.3, 2 * PI + 0.3, -6.5, 6.5, false);
      W.axes({xt: xt, edge: true});
      W.seg(W.x0, D, W.x1, D, C.muted, 1.5, [5, 4]);
      W.fn(function(x){ return A * Math.sin(B * (x - Cs)) + D; }, C.accent, 2.5);
      var kk = Math.round(2 * B);
      return 'y = ' + num(A) + ' sin(' + num(B) + '(x ' + (Cs < 0 ? '+ ' + piStr(-S.C, 12) : '− ' + piStr(S.C, 12)) + '))' + (D === 0 ? '' : sgn(D)) +
        '\namplitude |A| = ' + num(Math.abs(A)) + (A < 0 ? '  (A < 0 flips the wave)' : '') + '\nperiod 2π/B = ' + piStr(4, kk) + ' ≈ ' + num(2 * PI / B, 3) +
        '\nphase shift C = ' + piStr(S.C, 12) + (S.C > 0 ? ' (right)' : S.C < 0 ? ' (left)' : '') + '\nmidline y = ' + num(D);
    });
  }});

/* 8. complex numbers */
V.push({id: 'v-complex', objs: ['0002'], title: 'Powers of a complex number',
  caption: 'Slide the modulus r, the angle θ and the power n. Each power multiplies the modulus and adds the angle.',
  mount: function(el){
    var sup = ['', '', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸'];
    viz(el, 'v-complex', 'The complex plane showing z and its powers z squared up to z to the n, with the unit circle dashed', [
      R('r', 'modulus r', 0.5, 1.5, 0.05, 1.1), R('t', 'angle θ (degrees)', 0, 360, 5, 40, function(v){ return v + '°'; }), R('n', 'power n', 1, 8, 1, 4)
    ], function(g, S){
      var C = g.c, r = S.r, th = S.t * PI / 180, n = S.n;
      var Rg = Math.max(1.5, r, Math.pow(r, n)) * 1.15;
      var W = g.view(4, 4, g.w - 8, g.h - 8, -Rg, Rg, -Rg, Rg, true);
      W.axes({xl: 'Re', yl: 'Im'});
      W.circle(0, 0, 1, C.muted, 1.5, [4, 3]);
      if (n > 1) W.param(function(t){ return Math.pow(r, t) * Math.cos(t * th); }, function(t){ return Math.pow(r, t) * Math.sin(t * th); }, 1, n, 200, C.muted, 1);
      for (var k = 1; k <= n; k++) {
        var rk = Math.pow(r, k), xk = rk * Math.cos(k * th), yk = rk * Math.sin(k * th);
        W.dot(xk, yk, k === 1 ? C.accent : (k === n ? C.bad : C.ink), k === 1 || k === n ? 5 : 3.5);
        W.txt('z' + sup[k], xk, yk, C.ink, 'left', 6, -6);
      }
      var rn = Math.pow(r, n), an = ((n * S.t) % 360);
      return 'z = ' + cx(r * Math.cos(th), r * Math.sin(th), 2) + ' = ' + num(r) + '(cos ' + S.t + '° + i sin ' + S.t + '°)\nz^' + n + ' = ' + num(rn, 3) + '(cos ' + an + '° + i sin ' + an + '°) = ' + cx(rn * Math.cos(n * th), rn * Math.sin(n * th), 2) +
        '\nDe Moivre: modulus r^n, angle nθ';
    });
  }});

/* 9. inscribed angle */
V.push({id: 'v-inscribed', objs: ['0010'], title: 'Inscribed angle and central angle',
  caption: 'Change the arc AB, then slide the point P along the other arc. The inscribed angle never changes.',
  mount: function(el){
    viz(el, 'v-inscribed', 'A circle with arc AB, central angle AOB, and inscribed angle APB with P on the other arc', [
      R('m', 'arc AB (degrees)', 20, 340, 5, 100, function(v){ return v + '°'; }), R('p', 'position of P (percent of the other arc)', 5, 95, 1, 40, function(v){ return v + '%'; })
    ], function(g, S){
      var C = g.c, m = S.m, d2r = PI / 180;
      var W = g.view(4, 4, g.w - 8, g.h - 8, -1.35, 1.35, -1.35, 1.35, true);
      var aA = (90 - m / 2) * d2r, aB = (90 + m / 2) * d2r, aP = (90 + m / 2 + (S.p / 100) * (360 - m)) * d2r;
      var A = [Math.cos(aA), Math.sin(aA)], B = [Math.cos(aB), Math.sin(aB)], P = [Math.cos(aP), Math.sin(aP)];
      W.circle(0, 0, 1, C.muted, 1.5);
      W.param(function(t){ return Math.cos(t); }, function(t){ return Math.sin(t); }, aA, aB, 80, C.hi, 9);
      W.param(function(t){ return Math.cos(t); }, function(t){ return Math.sin(t); }, aA, aB, 80, C.bad, 3.5);
      W.seg(0, 0, A[0], A[1], C.bad, 1.8); W.seg(0, 0, B[0], B[1], C.bad, 1.8);
      W.seg(P[0], P[1], A[0], A[1], C.accent, 1.8); W.seg(P[0], P[1], B[0], B[1], C.accent, 1.8);
      var ang = function(O, U, Wp){ var u = [U[0] - O[0], U[1] - O[1]], w = [Wp[0] - O[0], Wp[1] - O[1]]; return Math.acos(Math.max(-1, Math.min(1, (u[0] * w[0] + u[1] * w[1]) / (Math.hypot(u[0], u[1]) * Math.hypot(w[0], w[1]))))) / d2r; };
      var insc = ang(P, A, B);
      W.dot(0, 0, C.ink, 3.5); W.dot(A[0], A[1], C.ink, 4.5); W.dot(B[0], B[1], C.ink, 4.5); W.dot(P[0], P[1], C.accent, 5);
      W.txt('O', 0, 0, C.ink, 'left', 6, 14); W.txt('A', A[0], A[1], C.ink, 'center', A[0] >= 0 ? 12 : -12, -6); W.txt('B', B[0], B[1], C.ink, 'center', B[0] >= 0 ? 12 : -12, -6);
      W.txt('P', P[0], P[1], C.accent, 'center', P[0] >= 0 ? 12 : -12, P[1] >= 0 ? -6 : 14);
      return 'arc AB = ' + m + '°\ncentral angle AOB = arc AB = ' + m + '° (red)\ninscribed angle APB = ' + num(insc, 1) + '° measured; arc/2 = ' + num(m / 2, 1) + '° (blue)';
    });
  }});

/* 10. scale factor */
V.push({id: 'v-scale', objs: ['0011'], title: 'Scale factor: length, area, volume',
  caption: 'Slide the scale factor k. Length grows by k, area by k², volume by k³.',
  mount: function(el){
    viz(el, 'v-scale', 'A unit square beside a k by k square, and three bars for length, area and volume scaled by k', [
      R('k', 'scale factor k', 0.5, 3, 0.25, 2)
    ], function(g, S){
      var C = g.c, k = S.k, c = g.ctx, lw = g.w * 0.55, base = g.h - 24;
      var u = Math.min((lw - 24) / (1 + k), (base - 16) / Math.max(1, k));
      var x1 = 8, x2 = 8 + u + 10;
      c.lineWidth = 2; c.setLineDash([]);
      c.fillStyle = C.accent; c.globalAlpha = 0.15; c.fillRect(x1, base - u, u, u); c.fillRect(x2, base - k * u, k * u, k * u); c.globalAlpha = 1;
      c.strokeStyle = C.accent; c.strokeRect(x1, base - u, u, u); c.strokeRect(x2, base - k * u, k * u, k * u);
      c.fillStyle = C.ink; c.font = '12px "JetBrains Mono",ui-monospace,monospace'; c.textAlign = 'center';
      c.fillText('side 1', x1 + u / 2, base + 14); c.fillText('side ' + num(k), x2 + k * u / 2, base + 14);
      var vals = [k, k * k, k * k * k], names = ['length', 'area', 'volume'], mx = Math.max(1, vals[2]), bx = lw + 16, bw = (g.w - bx - 12) / 3 - 6, bh = base - 28;
      c.strokeStyle = C.muted; c.lineWidth = 1.5; c.beginPath(); c.moveTo(bx - 4, base); c.lineTo(g.w - 6, base); c.stroke();
      vals.forEach(function(v, i){
        var hh = Math.max(2, v / mx * bh), x = bx + i * (bw + 6);
        c.fillStyle = [C.accent, C.ink, C.bad][i]; c.fillRect(x, base - hh, bw, hh);
        c.fillStyle = C.ink; c.textAlign = 'center'; c.fillText(num(v), x + bw / 2, base - hh - 4); c.fillStyle = C.muted; c.font = '10px "JetBrains Mono",ui-monospace,monospace'; c.fillText(names[i], x + bw / 2, base + 14); c.font = '12px "JetBrains Mono",ui-monospace,monospace';
      });
      return 'scale factor k = ' + num(k) + '\nlength × k = ' + num(k) + '\narea × k² = ' + num(k * k) + '\nvolume × k³ = ' + num(k * k * k) + '   (bars scaled to the largest)';
    });
  }});

/* 11. conics */
V.push({id: 'v-conics', objs: ['0012'], title: 'Ellipse and hyperbola',
  caption: 'Choose a conic and slide a and b. The foci move as the shape changes.',
  mount: function(el){
    viz(el, 'v-conics', 'Graph of an ellipse or a hyperbola centered at the origin with its foci', [
      SEL('c', 'Conic', ['Ellipse', 'Hyperbola']), R('a', 'a', 1, 5, 0.5, 3), R('b', 'b', 1, 5, 0.5, 2)
    ], function(g, S){
      var C = g.c, a = S.a, b = S.b, W = g.view(4, 4, g.w - 8, g.h - 8, -8, 8, 0, 0, true), t, f1, f2, cc;
      W.axes();
      if (S.c === 0) {
        cc = Math.sqrt(Math.abs(a * a - b * b));
        W.param(function(t){ return a * Math.cos(t); }, function(t){ return b * Math.sin(t); }, 0, 2 * PI, 160, C.accent, 2.5);
        f1 = a >= b ? [cc, 0] : [0, cc]; f2 = [-f1[0], -f1[1]];
        t = 'x²/' + num(a * a) + ' + y²/' + num(b * b) + ' = 1\nc² = |a² − b²| = ' + num(Math.abs(a * a - b * b)) + ', c = ' + num(cc, 3) + '\nfoci ' + (cc === 0 ? 'at the center (a circle)' : (a >= b ? '(±' + num(cc, 3) + ', 0)' : '(0, ±' + num(cc, 3) + ')')) + ' on the ' + (a >= b ? 'x' : 'y') + '-axis (major axis)';
      } else {
        cc = Math.sqrt(a * a + b * b);
        W.fn(function(x){ return (b / a) * x; }, C.muted, 1.2, [5, 4]); W.fn(function(x){ return -(b / a) * x; }, C.muted, 1.2, [5, 4]);
        W.param(function(t){ return a * Math.cosh(t); }, function(t){ return b * Math.sinh(t); }, -3, 3, 160, C.accent, 2.5);
        W.param(function(t){ return -a * Math.cosh(t); }, function(t){ return b * Math.sinh(t); }, -3, 3, 160, C.accent, 2.5);
        f1 = [cc, 0]; f2 = [-cc, 0];
        t = 'x²/' + num(a * a) + ' − y²/' + num(b * b) + ' = 1\nc² = a² + b² = ' + num(a * a + b * b) + ', c = ' + num(cc, 3) + '\nfoci (±' + num(cc, 3) + ', 0); asymptotes y = ±' + num(b / a, 3) + 'x';
      }
      W.dot(f1[0], f1[1], C.bad, 5); W.dot(f2[0], f2[1], C.bad, 5);
      return t;
    });
  }});

/* 12. normal distribution */
V.push({id: 'v-normal', objs: ['0013'], title: 'Area under the normal curve',
  caption: 'Slide z1 and z2. The shaded area is the probability that Z falls between them.',
  mount: function(el){
    viz(el, 'v-normal', 'The standard normal curve with the area between z1 and z2 shaded', [
      R('z1', 'z1', -3.5, 3.5, 0.1, -1), R('z2', 'z2', -3.5, 3.5, 0.1, 1)
    ], function(g, S){
      var C = g.c, pdf = function(z){ return Math.exp(-z * z / 2) / Math.sqrt(2 * PI); };
      var W = g.view(4, 4, g.w - 8, g.h - 8, -4, 4, -0.04, 0.45, false);
      var pts = [[S.z1, 0]]; for (var i = 0; i <= 60; i++) { var z = S.z1 + (S.z2 - S.z1) * i / 60; pts.push([z, pdf(z)]); } pts.push([S.z2, 0]);
      W.axes({noy: true, xt: ints(-3, 3, 1), nolab: true});
      W.poly(pts, C.accent, 0.3);
      W.fn(pdf, C.ink, 2.5);
      W.seg(S.z1, 0, S.z1, pdf(S.z1), C.accent, 1.5); W.seg(S.z2, 0, S.z2, pdf(S.z2), C.accent, 1.5);
      var p = Phi(S.z2) - Phi(S.z1);
      return 'P(' + num(S.z1, 1) + ' < Z < ' + num(S.z2, 1) + ') = ' + p.toFixed(4) + '  (' + (p * 100).toFixed(2) + '%)\nStandard normal: mean 0, standard deviation 1';
    }, {fix: function(S, set, k){ if (k === 'z1' && S.z1 > S.z2) set('z2', S.z1); if (k === 'z2' && S.z2 < S.z1) set('z1', S.z2); }});
  }});

/* 13. regression */
var REG = null;
function regData(){
  if (REG) return REG;
  var s = 12345, rnd = function(){ s |= 0; s = s + 0x6D2B79F5 | 0; var t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  var gauss = function(){ return Math.sqrt(-2 * Math.log(1 - rnd())) * Math.cos(2 * PI * rnd()); };
  var std = function(a){ var m = a.reduce(function(p, q){ return p + q; }, 0) / a.length, v = Math.sqrt(a.reduce(function(p, q){ return p + (q - m) * (q - m); }, 0) / a.length); return a.map(function(q){ return (q - m) / v; }); };
  var x = [], e = []; for (var i = 0; i < 30; i++) { x.push(gauss()); e.push(gauss()); }
  REG = {x: std(x), e: std(e)};
  return REG;
}
V.push({id: 'v-regression', objs: ['0014'], title: 'Correlation and the least-squares line',
  caption: 'Slide the target r to see the cloud tighten or loosen. Then add an outlier and watch the line and r change.',
  mount: function(el){
    viz(el, 'v-regression', 'Scatter plot of 30 points with the least-squares line', [
      R('r', 'target r', -0.95, 0.95, 0.05, 0.8), CHK('o', 'Add an outlier', false)
    ], function(g, S){
      var C = g.c, D = regData(), r = S.r, k = Math.sqrt(1 - r * r), xs = D.x.slice(), ys = D.x.map(function(x, i){ return r * x + k * D.e[i]; });
      if (S.o) { xs.push(2.8); ys.push(r >= 0 ? -2.8 : 2.8); }
      var n = xs.length, mx = 0, my = 0; for (var i = 0; i < n; i++) { mx += xs[i] / n; my += ys[i] / n; }
      var sxx = 0, syy = 0, sxy = 0; for (i = 0; i < n; i++) { sxx += (xs[i] - mx) * (xs[i] - mx); syy += (ys[i] - my) * (ys[i] - my); sxy += (xs[i] - mx) * (ys[i] - my); }
      var b = sxy / sxx, a = my - b * mx, rr = sxy / Math.sqrt(sxx * syy);
      var W = g.view(4, 4, g.w - 8, g.h - 8, -3.5, 3.5, 0, 0, true);
      W.axes();
      W.fn(function(x){ return a + b * x; }, C.accent, 2.5);
      for (i = 0; i < n; i++) W.dot(xs[i], ys[i], S.o && i === n - 1 ? C.bad : C.ink, S.o && i === n - 1 ? 6 : 3.5);
      return 'n = ' + n + ' points (standardized units)\nr = ' + num(rr, 3) + '   (target ' + num(r) + ')\nŷ = ' + num(a, 3) + (b < 0 ? ' − ' : ' + ') + num(Math.abs(b), 3) + 'x';
    });
  }});

/* 14. tangent line and secant */
var TF = [['x²/2', function(x){ return x * x / 2; }, function(x){ return x; }], ['sin x', Math.sin, Math.cos], ['x³/6 − x', function(x){ return x * x * x / 6 - x; }, function(x){ return x * x / 2 - 1; }]];
V.push({id: 'v-tangent', objs: ['0015'], title: 'Secant lines approach the tangent',
  caption: 'Shrink h. The slope of the secant gets closer to the derivative f′(a).',
  mount: function(el){
    viz(el, 'v-tangent', 'A curve with the secant line through x = a and x = a + h and the tangent line at x = a', [
      SEL('f', 'Function f(x)', TF.map(function(t){ return t[0]; })), R('a', 'a', -3, 3, 0.1, 1), R('h', 'h', 0.05, 3, 0.05, 1.5)
    ], function(g, S){
      var C = g.c, f = TF[S.f][1], df = TF[S.f][2], a = S.a, h = S.h, fa = f(a), fb = f(a + h);
      var sec = (fb - fa) / h, der = df(a), W = g.view(4, 4, g.w - 8, g.h - 8, -4.5, 4.5, 0, 0, true);
      W.axes();
      W.fn(f, C.ink, 2.5);
      W.fn(function(x){ return fa + sec * (x - a); }, C.bad, 1.8, [6, 4]);
      W.fn(function(x){ return fa + der * (x - a); }, C.accent, 2.2);
      W.dot(a, fa, C.accent, 5); W.dot(a + h, fb, C.bad, 5);
      return 'f(x) = ' + TF[S.f][0] + ', a = ' + num(a, 1) + ', h = ' + num(h) + '\nsecant slope (f(a+h) − f(a))/h = ' + num(sec, 4) + '  (red dashed)\nf′(a) = ' + num(der, 4) + '  (blue, tangent)\n|difference| = ' + num(Math.abs(sec - der), 4) + '  → 0 as h → 0';
    });
  }});

/* 15. Riemann sums */
var RF = [
  {n: 'x² on [0, 2]', f: function(x){ return x * x; }, lo: 0, hi: 2, ex: 8 / 3, es: '8/3', v: [-0.3, 2.3, -0.5, 4.5]},
  {n: '√x on [0, 4]', f: Math.sqrt, lo: 0, hi: 4, ex: 16 / 3, es: '16/3', v: [-0.5, 4.5, -0.4, 2.5]},
  {n: 'sin x + 1 on [0, π]', f: function(x){ return Math.sin(x) + 1; }, lo: 0, hi: PI, ex: PI + 2, es: 'π + 2', v: [-0.3, 3.5, -0.3, 2.3]}
];
V.push({id: 'v-riemann', objs: ['0016'], title: 'Riemann sums approach the integral',
  caption: 'Add more rectangles and try each method. The approximation closes in on the exact area.',
  mount: function(el){
    viz(el, 'v-riemann', 'A curve with rectangles or trapezoids approximating the area under it', [
      SEL('f', 'Function', RF.map(function(t){ return t.n; })), R('n', 'subintervals n', 1, 40, 1, 6, function(v){ return String(v); }),
      SEL('m', 'Method', ['Left', 'Right', 'Midpoint', 'Trapezoid'], 0)
    ], function(g, S){
      var C = g.c, F = RF[S.f], n = S.n, dx = (F.hi - F.lo) / n, sum = 0;
      var W = g.view(4, 4, g.w - 8, g.h - 8, F.v[0], F.v[1], F.v[2], F.v[3], false);
      W.axes();
      for (var i = 0; i < n; i++) {
        var xa = F.lo + i * dx, xb = xa + dx, fa = F.f(xa), fb = F.f(xb), fm = F.f((xa + xb) / 2), p;
        if (S.m === 3) { sum += dx * (fa + fb) / 2; p = [[xa, 0], [xa, fa], [xb, fb], [xb, 0]]; }
        else { var hh = S.m === 0 ? fa : S.m === 1 ? fb : fm; sum += dx * hh; p = [[xa, 0], [xa, hh], [xb, hh], [xb, 0]]; }
        W.poly(p, C.accent, 0.22, C.accent);
      }
      W.fn(F.f, C.ink, 2.5);
      var err = sum - F.ex;
      return F.n + ', n = ' + n + ', ' + ['left', 'right', 'midpoint', 'trapezoid'][S.m] + ' sum\napproximation = ' + num(sum, 4) + '\nexact area = ' + F.es + ' ≈ ' + num(F.ex, 4) + '\nerror = ' + (err >= 0 ? '+' : '−') + num(Math.abs(err), 4) + ' (' + (err >= 0 ? 'over' : 'under') + 'estimate)';
    });
  }});


/* 16. Euclid's algorithm as squares */
V.push({id: 'v-euclid', objs: ['0001'], title: 'Euclid’s algorithm with squares',
  caption: 'Tile the rectangle with the biggest squares that fit, again and again. The last square size is the gcd.',
  mount: function(el){
    viz(el, 'v-euclid', 'An a by b rectangle tiled by the largest possible squares, each size in a different color', [
      R('a', 'width a', 10, 60, 1, 48), R('b', 'height b', 10, 60, 1, 30)
    ], function(g, S){
      var C = g.c, c = g.ctx, a = S.a, b = S.b, u = Math.min((g.w - 8) / a, (g.h - 8) / b);
      var ox0 = (g.w - a * u) / 2, oy0 = (g.h - b * u) / 2, cols = [C.accent, C.bad, C.good, C.ink, C.muted, C.hi];
      var w = a, h = b, ox = 0, oy = 0, step = 0, lines = [], last = 0;
      c.font = '12px "JetBrains Mono",ui-monospace,monospace'; c.textAlign = 'center';
      while (w > 0 && h > 0) {
        var big = Math.max(w, h), sm = Math.min(w, h), qn = Math.floor(big / sm);
        lines.push(big + ' = ' + qn + '·' + sm + ' + ' + (big - qn * sm));
        for (var i = 0; i < qn; i++) {
          var x = w >= h ? ox + i * sm : ox, y = w >= h ? oy : oy + i * sm;
          c.globalAlpha = 0.3; c.fillStyle = cols[step % cols.length]; c.fillRect(ox0 + x * u, oy0 + y * u, sm * u, sm * u); c.globalAlpha = 1;
          c.strokeStyle = cols[step % cols.length]; c.lineWidth = 2; c.setLineDash([]); c.strokeRect(ox0 + x * u, oy0 + y * u, sm * u, sm * u);
          if (sm * u >= 18) { c.fillStyle = C.ink; c.fillText(sm, ox0 + (x + sm / 2) * u, oy0 + (y + sm / 2) * u + 4); }
        }
        if (w >= h) { ox += qn * sm; w -= qn * sm; } else { oy += qn * sm; h -= qn * sm; }
        last = sm; step++;
      }
      return a + ' × ' + b + ' rectangle\n' + lines.join('\n') + '\ngcd(' + a + ', ' + b + ') = ' + last + '  (the last square size)';
    });
  }});

/* 17. linear ruler and log ruler */
V.push({id: 'v-logscale', objs: ['0009'], title: 'Linear ruler and log ruler',
  caption: 'Slide the exponent. Each +1 on the log scale is ×10 in the value.',
  mount: function(el){
    var sup = '⁰¹²³⁴⁵⁶⁷⁸⁹';
    var pw10 = function(k){ return '10' + String(k).split('').map(function(d){ return sup[+d]; }).join(''); };
    viz(el, 'v-logscale', 'A linear ruler from 0 to 10 to the 12th and a log ruler from 10 to the 0 to 10 to the 12th, with the value 10 to the e marked on both', [
      R('e', 'exponent e', 0, 12, 0.5, 3, function(v){ return num(v, 1); })
    ], function(g, S){
      var C = g.c, c = g.ctx, e = S.e, x0 = 14, W = g.w - 28, bh = 20;
      c.font = '11px "JetBrains Mono",ui-monospace,monospace';
      var ruler = function(y, name, ticks, mf){
        c.fillStyle = C.ink; c.textAlign = 'left'; c.fillText(name, x0, y - bh / 2 - 18);
        c.lineWidth = 1.5; c.setLineDash([]); c.strokeStyle = C.muted; c.strokeRect(x0, y - bh / 2, W, bh);
        var last = -99; c.textAlign = 'center';
        ticks.forEach(function(t){
          var x = x0 + t[0] * W; c.strokeStyle = C.muted; c.beginPath(); c.moveTo(x, y - bh / 2); c.lineTo(x, y + bh / 2); c.stroke();
          if (!t[1]) return;
          var w = c.measureText(t[1]).width, l = Math.max(2, Math.min(x - w / 2, g.w - 2 - w));
          if (l > last + 4) { c.fillStyle = C.muted; c.fillText(t[1], l + w / 2, y + bh / 2 + 14); last = l + w; }
        });
        var xm = x0 + mf * W; c.fillStyle = C.bad; c.beginPath(); c.moveTo(xm, y - bh / 2); c.lineTo(xm - 6, y - bh / 2 - 10); c.lineTo(xm + 6, y - bh / 2 - 10); c.closePath(); c.fill();
        c.strokeStyle = C.bad; c.lineWidth = 2.5; c.beginPath(); c.moveTo(xm, y - bh / 2); c.lineTo(xm, y + bh / 2); c.stroke();
      };
      var lin = [], lg = [], k;
      for (k = 0; k <= 10; k++) lin.push([k / 10, k === 0 ? '0' : k === 5 ? '5×' + pw10(11) : k === 10 ? pw10(12) : '']);
      for (k = 0; k <= 12; k++) lg.push([k / 12, k % 2 === 0 ? pw10(k) : '']);
      ruler(g.h * 0.3, 'linear ruler: 0 to ' + pw10(12), lin, Math.pow(10, e) / 1e12);
      ruler(g.h * 0.74, 'log ruler: ' + pw10(0) + ' to ' + pw10(12), lg, e / 12);
      var v = Math.pow(10, e), kk = Math.floor(e + 1e-9);
      var vt = e <= 6 ? v.toLocaleString('en-US', {maximumFractionDigits: 2}) : num(Math.pow(10, e - kk), 3) + ' × 10^' + kk;
      return 'value = 10^' + num(e, 1) + ' = ' + vt + '\nlog₁₀(value) = ' + num(e, 1) + '\nas a sound: ' + num(10 * e, 0) + ' dB (intensity ratio 10^' + num(e, 1) + ')';
    });
  }});

/* 18. Pascal's triangle */
V.push({id: 'v-pascal', objs: ['0017'], title: 'Pascal’s triangle and C(n, r)',
  caption: 'Pick n and r. Each entry is the sum of the two entries above it.',
  mount: function(el){
    var fact = function(m){ return m <= 1 ? 1 : m * fact(m - 1); };
    viz(el, 'v-pascal', 'Pascal’s triangle up to row n with the entry C(n, r) and its two parents highlighted', [
      R('n', 'row n', 0, 10, 1, 5), R('r', 'position r', 0, 10, 1, 2)
    ], function(g, S){
      var C = g.c, c = g.ctx, n = S.n, r = Math.min(S.r, n), rows = [[1]], i, j;
      for (i = 1; i <= n; i++) { var row = [1]; for (j = 1; j < i; j++) row.push(rows[i - 1][j - 1] + rows[i - 1][j]); row.push(1); rows.push(row); }
      var cw = Math.min((g.w - 8) / (n + 1), 56), rh = Math.min((g.h - 8) / (n + 1), 30), top = (g.h - (n + 1) * rh) / 2;
      var X = function(ri, cj){ return g.w / 2 + (cj - ri / 2) * cw; }, Y = function(ri){ return top + ri * rh + rh / 2; };
      var box = function(ri, cj, fill, alpha, stroke){
        c.globalAlpha = alpha; c.fillStyle = fill; c.fillRect(X(ri, cj) - cw / 2 + 1, Y(ri) - rh / 2 + 1, cw - 2, rh - 2); c.globalAlpha = 1;
        c.strokeStyle = stroke; c.lineWidth = 2; c.setLineDash([]); c.strokeRect(X(ri, cj) - cw / 2 + 1, Y(ri) - rh / 2 + 1, cw - 2, rh - 2);
      };
      var par = [[n - 1, r - 1], [n - 1, r]].filter(function(p){ return n >= 1 && p[1] >= 0 && p[1] <= n - 1; });
      par.forEach(function(p){ box(p[0], p[1], C.bad, 0.3, C.bad); });
      box(n, r, C.hi, 1, C.accent);
      c.font = (cw >= 34 ? 13 : 11) + 'px "JetBrains Mono",ui-monospace,monospace'; c.textAlign = 'center'; c.fillStyle = C.ink;
      for (i = 0; i <= n; i++) for (j = 0; j <= i; j++) c.fillText(rows[i][j], X(i, j), Y(i) + 4);
      var val = rows[n][r];
      var t = 'C(' + n + ', ' + r + ') = ' + n + '!/(' + r + '!·' + (n - r) + '!) = ' + fact(n) + '/(' + fact(r) + '·' + fact(n - r) + ') = ' + val;
      if (n >= 1 && r > 0 && r < n) t += '\n= C(' + (n - 1) + ', ' + (r - 1) + ') + C(' + (n - 1) + ', ' + r + ') = ' + rows[n - 1][r - 1] + ' + ' + rows[n - 1][r];
      return t;
    }, {init: true, fix: function(S, set, k, prev, api){ api.max('r', S.n); }});
  }});

/* pure helpers, exposed so they can be checked in node */
MTEL.visualsMath = {erf: erf, Phi: Phi, exactTrig: exactTrig, piStr: piStr, num: num};
})();
