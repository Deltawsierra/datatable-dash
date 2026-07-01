type CompactTheme = {
  gS: string; gM: string; gE: string;
  dgS: string; dgM: string; dgE: string;
  sS: string; sE: string;
  dsS: string; dsE: string;
  p: string; sa: string;
  cs: string; sc: boolean; be: string;
  gc?: string; fo?: string; fh?: boolean; fsb?: boolean;
};

const THEME_LOOKUP: Record<string, CompactTheme> = {
  // ── CLASSIC ──
  'ocean-blue':     { gS:'#3b82f6', gM:'#6366f1', gE:'#8b5cf6', dgS:'#1e3a8a', dgM:'#4338ca', dgE:'#6d28d9', sS:'#1e293b', sE:'#0f172a', dsS:'#020617', dsE:'#0f172a', p:'#3b82f6', sa:'rgba(59,130,246,0.3)', cs:'default', sc:false, be:'none' },
  'forest':         { gS:'#059669', gM:'#047857', gE:'#065f46', dgS:'#065f46', dgM:'#047857', dgE:'#022c22', sS:'#064e3b', sE:'#022c22', dsS:'#022c22', dsE:'#011a12', p:'#059669', sa:'rgba(5,150,105,0.3)', cs:'default', sc:false, be:'none' },
  'sunset':         { gS:'#f97316', gM:'#ef4444', gE:'#dc2626', dgS:'#7c2d12', dgM:'#991b1b', dgE:'#7f1d1d', sS:'#7c2d12', sE:'#431407', dsS:'#431407', dsE:'#1c0a03', p:'#f97316', sa:'rgba(249,115,22,0.3)', cs:'default', sc:false, be:'none' },
  'midnight':       { gS:'#1e1b4b', gM:'#312e81', gE:'#4c1d95', dgS:'#0f0d27', dgM:'#1e1b4b', dgE:'#2e1065', sS:'#1e1b4b', sE:'#0f0e27', dsS:'#0f0d27', dsE:'#05040f', p:'#6366f1', sa:'rgba(99,102,241,0.3)', cs:'default', sc:false, be:'none' },
  'rose-gold':      { gS:'#f4a58c', gM:'#e8836b', gE:'#d9a066', dgS:'#7a3320', dgM:'#9a4a30', dgE:'#5c3410', sS:'#7a3320', sE:'#3d1a10', dsS:'#3d1a10', dsE:'#1c0c06', p:'#e8836b', sa:'rgba(232,131,107,0.3)', cs:'default', sc:false, be:'none' },
  'minimalist':     { gS:'#f5f5f4', gM:'#e7e5e4', gE:'#d6d3d1', dgS:'#292524', dgM:'#1c1917', dgE:'#0c0a09', sS:'#f5f5f4', sE:'#e7e5e4', dsS:'#1c1917', dsE:'#0c0a09', p:'#44403c', sa:'rgba(68,64,60,0.15)', cs:'flat', sc:false, be:'none', fh:true, fsb:true },
  'blueprint':      { gS:'#1e3a8a', gM:'#1d4ed8', gE:'#1e40af', dgS:'#0f1d45', dgM:'#0f2770', dgE:'#0f1f55', sS:'#1e3a8a', sE:'#0f1d45', dsS:'#0a1030', dsE:'#060a18', p:'#2563eb', sa:'rgba(147,197,253,0.25)', cs:'flat', sc:false, be:'none' },
  'coffee':         { gS:'#6b4226', gM:'#8b5e3c', gE:'#4a2c1a', dgS:'#3d2010', dgM:'#4a2c1a', dgE:'#231208', sS:'#3d2010', sE:'#231208', dsS:'#1a0e06', dsE:'#0e0702', p:'#d97706', sa:'rgba(217,119,6,0.3)', cs:'flat', sc:false, be:'steam', fh:true },
  'watercolor':     { gS:'#a5b4fc', gM:'#fbcfe8', gE:'#bfdbfe', dgS:'#3730a3', dgM:'#9d174d', dgE:'#1e40af', sS:'#3730a3', sE:'#1e3a8a', dsS:'#1e1b4b', dsE:'#0f0d27', p:'#818cf8', sa:'rgba(129,140,248,0.3)', cs:'glass', sc:false, be:'none' },
  'retro-arcade':   { gS:'#1a1030', gM:'#6d28d9', gE:'#db2777', dgS:'#000000', dgM:'#050505', dgE:'#0a0a0a', sS:'#0a0a0a', sE:'#000000', dsS:'#000000', dsE:'#000000', p:'#00cc34', sa:'rgba(0,255,65,0.2)', cs:'neon', sc:true, be:'pixels', gc:'#00ff41', fo:"'Press Start 2P', monospace" },

  // ── SEASONAL ──
  'winter':         { gS:'#60a5fa', gM:'#93c5fd', gE:'#bfdbfe', dgS:'#1e3a5f', dgM:'#1d4ed8', dgE:'#1e40af', sS:'#1e3a5f', sE:'#0c1f3a', dsS:'#0c1f3a', dsE:'#060e1c', p:'#60a5fa', sa:'rgba(96,165,250,0.3)', cs:'glass', sc:false, be:'snow' },
  'spring':         { gS:'#ec4899', gM:'#f472b6', gE:'#34d399', dgS:'#831843', dgM:'#9d174d', dgE:'#065f46', sS:'#831843', sE:'#3d0b1f', dsS:'#3d0b1f', dsE:'#1c0510', p:'#ec4899', sa:'rgba(236,72,153,0.3)', cs:'default', sc:false, be:'petals' },
  'summer':         { gS:'#0891b2', gM:'#0ea5e9', gE:'#38bdf8', dgS:'#164e63', dgM:'#0c4a6e', dgE:'#083344', sS:'#164e63', sE:'#083344', dsS:'#083344', dsE:'#031a22', p:'#f59e0b', sa:'rgba(245,158,11,0.3)', cs:'default', sc:false, be:'waves' },
  'autumn':         { gS:'#b45309', gM:'#c2410c', gE:'#7c2d12', dgS:'#78350f', dgM:'#92400e', dgE:'#431407', sS:'#78350f', sE:'#3c1a07', dsS:'#3c1a07', dsE:'#1c0c03', p:'#d97706', sa:'rgba(217,119,6,0.3)', cs:'default', sc:false, be:'leaves' },

  // ── NATURE ──
  'sakura':         { gS:'#be185d', gM:'#9d174d', gE:'#831843', dgS:'#831843', dgM:'#701535', dgE:'#4c0519', sS:'#831843', sE:'#4c0519', dsS:'#4c0519', dsE:'#260210', p:'#f472b6', sa:'rgba(244,114,182,0.3)', cs:'glass', sc:false, be:'sakura-petals' },
  'aurora':         { gS:'#0f172a', gM:'#134e4a', gE:'#0d9488', dgS:'#011a14', dgM:'#022c22', dgE:'#031a10', sS:'#022c22', sE:'#011a14', dsS:'#010e0b', dsE:'#010e0b', p:'#34d399', sa:'rgba(52,211,153,0.25)', cs:'glass', sc:false, be:'aurora', gc:'#34d399' },
  'underwater':     { gS:'#0284c7', gM:'#0369a1', gE:'#075985', dgS:'#0c4a6e', dgM:'#075985', dgE:'#0a3555', sS:'#0c4a6e', sE:'#0a2d4a', dsS:'#052030', dsE:'#021520', p:'#22d3ee', sa:'rgba(34,211,238,0.3)', cs:'glass', sc:false, be:'bubbles' },
  'storm':          { gS:'#64748b', gM:'#475569', gE:'#334155', dgS:'#0f0f1a', dgM:'#1f2937', dgE:'#111827', sS:'#1c1c2e', sE:'#0f0f1a', dsS:'#08080f', dsE:'#08080f', p:'#60a5fa', sa:'rgba(96,165,250,0.25)', cs:'flat', sc:false, be:'lightning-rain' },
  'volcano':        { gS:'#0c0a09', gM:'#7c2d12', gE:'#dc2626', dgS:'#0d0000', dgM:'#280505', dgE:'#0d0500', sS:'#1a0000', sE:'#0d0000', dsS:'#080000', dsE:'#080000', p:'#ef4444', sa:'rgba(239,68,68,0.3)', cs:'sharp', sc:false, be:'embers', gc:'#ff2200' },
  'space':          { gS:'#6366f1', gM:'#7c3aed', gE:'#a855f7', dgS:'#050516', dgM:'#0a0f2e', dgE:'#071830', sS:'#0a0a2e', sE:'#050516', dsS:'#030310', dsE:'#010108', p:'#7c3aed', sa:'rgba(124,58,237,0.3)', cs:'glass', sc:false, be:'stars' },
  'cyberpunk':      { gS:'#7c3aed', gM:'#db2777', gE:'#06b6d4', dgS:'#050505', dgM:'#0f0020', dgE:'#080808', sS:'#0a0a1a', sE:'#050510', dsS:'#050508', dsE:'#020205', p:'#00fff5', sa:'rgba(0,255,245,0.2)', cs:'neon', sc:true, be:'none', gc:'#00fff5' },

  // ── SPORTS ──
  'soccer':         { gS:'#22c55e', gM:'#16a34a', gE:'#15803d', dgS:'#14532d', dgM:'#166534', dgE:'#052e16', sS:'#14532d', sE:'#052e16', dsS:'#052e16', dsE:'#021a0e', p:'#22c55e', sa:'rgba(34,197,94,0.3)', cs:'flat', sc:false, be:'field-lines', fh:true },
  'football':       { gS:'#65a30d', gM:'#4d7c0f', gE:'#3f6212', dgS:'#365314', dgM:'#3f6212', dgE:'#1a2e05', sS:'#365314', sE:'#1a2e05', dsS:'#1a2e05', dsE:'#0d1a02', p:'#f59e0b', sa:'rgba(245,158,11,0.3)', cs:'flat', sc:false, be:'field-lines' },
  'basketball':     { gS:'#a16207', gM:'#b45309', gE:'#92400e', dgS:'#78350f', dgM:'#92400e', dgE:'#431407', sS:'#78350f', sE:'#431407', dsS:'#3c1a07', dsE:'#1c0c03', p:'#f97316', sa:'rgba(249,115,22,0.3)', cs:'flat', sc:false, be:'none', fh:true, fsb:true },
  'baseball':       { gS:'#92400e', gM:'#a16207', gE:'#78350f', dgS:'#78350f', dgM:'#92400e', dgE:'#451a03', sS:'#78350f', sE:'#451a03', dsS:'#3c1a07', dsE:'#1c0c03', p:'#d97706', sa:'rgba(217,119,6,0.3)', cs:'default', sc:false, be:'none' },
  'hockey':         { gS:'#93c5fd', gM:'#60a5fa', gE:'#3b82f6', dgS:'#1e3a8a', dgM:'#1e40af', dgE:'#1d4ed8', sS:'#1e3a8a', sE:'#1e40af', dsS:'#0c1f5a', dsE:'#060e2e', p:'#3b82f6', sa:'rgba(59,130,246,0.3)', cs:'flat', sc:false, be:'none' },
  'tennis':         { gS:'#b45309', gM:'#c2410c', gE:'#a16207', dgS:'#78350f', dgM:'#92400e', dgE:'#451a03', sS:'#78350f', sE:'#451a03', dsS:'#3c1a07', dsE:'#1c0c03', p:'#fcd34d', sa:'rgba(252,211,77,0.3)', cs:'flat', sc:false, be:'none' },

  // ── HOLIDAY ──
  'christmas':      { gS:'#7f1d1d', gM:'#166534', gE:'#991b1b', dgS:'#7f1d1d', dgM:'#052e16', dgE:'#7f1d1d', sS:'#7f1d1d', sE:'#052e16', dsS:'#3d0b0b', dsE:'#021a0e', p:'#fcd34d', sa:'rgba(252,211,77,0.3)', cs:'default', sc:false, be:'confetti', gc:'#fcd34d' },
  'new-years':      { gS:'#1e1b4b', gM:'#4c1d95', gE:'#b45309', dgS:'#050500', dgM:'#0f0d00', dgE:'#050500', sS:'#0a0a0a', sE:'#050500', dsS:'#030300', dsE:'#030300', p:'#fbbf24', sa:'rgba(251,191,36,0.25)', cs:'neon', sc:false, be:'confetti', gc:'#fbbf24' },
  'valentines':     { gS:'#e11d48', gM:'#be123c', gE:'#9f1239', dgS:'#881337', dgM:'#9f1239', dgE:'#4c0519', sS:'#881337', sE:'#4c0519', dsS:'#4c0519', dsE:'#200210', p:'#f43f5e', sa:'rgba(244,63,94,0.3)', cs:'default', sc:false, be:'hearts' },
  'st-patricks':    { gS:'#16a34a', gM:'#15803d', gE:'#ca8a04', dgS:'#14532d', dgM:'#166534', dgE:'#78350f', sS:'#14532d', sE:'#052e16', dsS:'#052e16', dsE:'#021a0e', p:'#16a34a', sa:'rgba(22,163,74,0.3)', cs:'default', sc:false, be:'shamrocks' },
  'halloween':      { gS:'#7c3aed', gM:'#c2410c', gE:'#f97316', dgS:'#0d0500', dgM:'#2a0900', dgE:'#0d0010', sS:'#1a0a00', sE:'#0d0500', dsS:'#0d0500', dsE:'#060200', p:'#f97316', sa:'rgba(249,115,22,0.3)', cs:'sharp', sc:false, be:'bats' },
};

export function getThemeScript(): string {
  const lookup = JSON.stringify(THEME_LOOKUP);
  return `(function(){try{
var T=${lookup};
var m=localStorage.getItem('colorMode')||'light';
var sk=localStorage.getItem('colorScheme')||'ocean-blue';
if(m!=='light'&&m!=='dark')m='light';
var rk=T[sk]?sk:'ocean-blue';
var t=T[rk];
var dk=m==='dark';
var r=document.documentElement;
var hS=dk?t.dgS:t.gS,hM=dk?t.dgM:t.gM,hE=dk?t.dgE:t.gE;
var sbS=dk?t.dsS:t.sS,sbE=dk?t.dsE:t.sE;
if(t.fh){r.style.setProperty('--header-bg',hS);}
else{r.style.setProperty('--header-bg','linear-gradient(135deg,'+hS+' 0%,'+hM+' 50%,'+hE+' 100%)');}
if(t.fsb){r.style.setProperty('--sidebar-bg',sbS);}
else{r.style.setProperty('--sidebar-bg','linear-gradient(180deg,'+sbS+' 0%,'+sbE+' 100%)');}
r.style.setProperty('--primary',t.p);
r.style.setProperty('--primary-hover',t.p);
r.style.setProperty('--sidebar-active',t.sa);
r.style.setProperty('--glow-color',t.gc||'transparent');
r.style.setProperty('--theme-font',t.fo||'inherit');
r.setAttribute('data-card-style',t.cs);
r.setAttribute('data-scanlines',t.sc?'true':'false');
r.setAttribute('data-effect',t.be);
r.setAttribute('data-scheme',rk);
r.classList.add(m);
}catch(e){}})();`;
}
