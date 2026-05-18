type CompactTheme = {
  gS: string; gM: string; gE: string;
  dgS: string; dgM: string; dgE: string;
  sS: string; sE: string;
  dsS: string; dsE: string;
  p: string; sa: string;
  cs: string; sc: boolean; be: string; fd: boolean;
  gc?: string; fo?: string; fh?: boolean; fsb?: boolean;
};

const THEME_LOOKUP: Record<string, CompactTheme> = {
  'ocean-blue':     { gS:'#3b82f6', gM:'#6366f1', gE:'#8b5cf6', dgS:'#1e3a8a', dgM:'#4338ca', dgE:'#6d28d9', sS:'#1e293b', sE:'#0f172a', dsS:'#020617', dsE:'#0f172a', p:'#3b82f6', sa:'rgba(59,130,246,0.3)', cs:'default', sc:false, be:'none', fd:false },
  'forest':         { gS:'#16a34a', gM:'#15803d', gE:'#166534', dgS:'#14532d', dgM:'#166534', dgE:'#052e16', sS:'#14532d', sE:'#052e16', dsS:'#052e16', dsE:'#021a0e', p:'#16a34a', sa:'rgba(22,163,74,0.3)', cs:'default', sc:false, be:'none', fd:false },
  'sunset':         { gS:'#f97316', gM:'#ef4444', gE:'#dc2626', dgS:'#7c2d12', dgM:'#991b1b', dgE:'#7f1d1d', sS:'#7c2d12', sE:'#431407', dsS:'#431407', dsE:'#1c0a03', p:'#f97316', sa:'rgba(249,115,22,0.3)', cs:'default', sc:false, be:'none', fd:false },
  'midnight':       { gS:'#1e1b4b', gM:'#312e81', gE:'#4c1d95', dgS:'#0f0d27', dgM:'#1e1b4b', dgE:'#2e1065', sS:'#1e1b4b', sE:'#0f0e27', dsS:'#0f0d27', dsE:'#05040f', p:'#6366f1', sa:'rgba(99,102,241,0.3)', cs:'default', sc:false, be:'none', fd:false },
  'rose-gold':      { gS:'#f43f5e', gM:'#e11d48', gE:'#be123c', dgS:'#881337', dgM:'#9f1239', dgE:'#7f1d1d', sS:'#881337', sE:'#4c0519', dsS:'#4c0519', dsE:'#200210', p:'#f43f5e', sa:'rgba(244,63,94,0.3)', cs:'default', sc:false, be:'none', fd:false },
  'minimalist':     { gS:'#f5f5f4', gM:'#e7e5e4', gE:'#d6d3d1', dgS:'#292524', dgM:'#1c1917', dgE:'#0c0a09', sS:'#f5f5f4', sE:'#e7e5e4', dsS:'#1c1917', dsE:'#0c0a09', p:'#44403c', sa:'rgba(68,64,60,0.15)', cs:'flat', sc:false, be:'none', fd:false, fh:true, fsb:true },
  'winter':         { gS:'#60a5fa', gM:'#93c5fd', gE:'#bfdbfe', dgS:'#1e3a5f', dgM:'#1d4ed8', dgE:'#1e40af', sS:'#1e3a5f', sE:'#0c1f3a', dsS:'#0c1f3a', dsE:'#060e1c', p:'#60a5fa', sa:'rgba(96,165,250,0.3)', cs:'glass', sc:false, be:'snow', fd:false },
  'spring':         { gS:'#ec4899', gM:'#f472b6', gE:'#34d399', dgS:'#831843', dgM:'#9d174d', dgE:'#065f46', sS:'#831843', sE:'#3d0b1f', dsS:'#3d0b1f', dsE:'#1c0510', p:'#ec4899', sa:'rgba(236,72,153,0.3)', cs:'default', sc:false, be:'petals', fd:false },
  'summer':         { gS:'#0891b2', gM:'#0ea5e9', gE:'#38bdf8', dgS:'#164e63', dgM:'#0c4a6e', dgE:'#083344', sS:'#164e63', sE:'#083344', dsS:'#083344', dsE:'#031a22', p:'#f59e0b', sa:'rgba(245,158,11,0.3)', cs:'default', sc:false, be:'waves', fd:false },
  'autumn':         { gS:'#b45309', gM:'#c2410c', gE:'#7c2d12', dgS:'#78350f', dgM:'#92400e', dgE:'#431407', sS:'#78350f', sE:'#3c1a07', dsS:'#3c1a07', dsE:'#1c0c03', p:'#d97706', sa:'rgba(217,119,6,0.3)', cs:'default', sc:false, be:'leaves', fd:false },
  'sakura':         { gS:'#be185d', gM:'#9d174d', gE:'#831843', dgS:'#831843', dgM:'#701535', dgE:'#4c0519', sS:'#831843', sE:'#4c0519', dsS:'#4c0519', dsE:'#260210', p:'#f472b6', sa:'rgba(244,114,182,0.3)', cs:'glass', sc:false, be:'sakura-petals', fd:false },
  'aurora':         { gS:'#022c22', gM:'#064e3b', gE:'#065f46', dgS:'#011a14', dgM:'#022c22', dgE:'#031a10', sS:'#022c22', sE:'#011a14', dsS:'#010e0b', dsE:'#010e0b', p:'#34d399', sa:'rgba(52,211,153,0.25)', cs:'glass', sc:false, be:'aurora', fd:true, gc:'#34d399' },
  'underwater':     { gS:'#0284c7', gM:'#0369a1', gE:'#075985', dgS:'#0c4a6e', dgM:'#075985', dgE:'#0a3555', sS:'#0c4a6e', sE:'#0a2d4a', dsS:'#052030', dsE:'#021520', p:'#22d3ee', sa:'rgba(34,211,238,0.3)', cs:'glass', sc:false, be:'bubbles', fd:false },
  'deep-sea':       { gS:'#020a1a', gM:'#030d24', gE:'#020818', dgS:'#010510', dgM:'#020818', dgE:'#010510', sS:'#020a1a', sE:'#010510', dsS:'#010408', dsE:'#010408', p:'#22d3ee', sa:'rgba(34,211,238,0.2)', cs:'glass', sc:false, be:'orbs', fd:true, gc:'#22d3ee' },
  'lava':           { gS:'#1c0800', gM:'#3d0a00', gE:'#1a0500', dgS:'#0e0400', dgM:'#240600', dgE:'#0e0400', sS:'#1c0800', sE:'#0e0400', dsS:'#080200', dsE:'#080200', p:'#f97316', sa:'rgba(249,115,22,0.3)', cs:'sharp', sc:false, be:'embers', fd:true, gc:'#ff4500' },
  'storm':          { gS:'#1c1c2e', gM:'#374151', gE:'#1f2937', dgS:'#0f0f1a', dgM:'#1f2937', dgE:'#111827', sS:'#1c1c2e', sE:'#0f0f1a', dsS:'#08080f', dsE:'#08080f', p:'#60a5fa', sa:'rgba(96,165,250,0.25)', cs:'flat', sc:false, be:'lightning-rain', fd:true },
  'fog':            { gS:'#9ca3af', gM:'#6b7280', gE:'#4b5563', dgS:'#374151', dgM:'#1f2937', dgE:'#111827', sS:'#374151', sE:'#1f2937', dsS:'#1f2937', dsE:'#111827', p:'#9ca3af', sa:'rgba(156,163,175,0.3)', cs:'glass', sc:false, be:'fog', fd:false },
  'volcano':        { gS:'#1a0000', gM:'#450a0a', gE:'#1c0a00', dgS:'#0d0000', dgM:'#280505', dgE:'#0d0500', sS:'#1a0000', sE:'#0d0000', dsS:'#080000', dsE:'#080000', p:'#ef4444', sa:'rgba(239,68,68,0.3)', cs:'sharp', sc:false, be:'embers', fd:true, gc:'#ff2200' },
  'soccer':         { gS:'#15803d', gM:'#16a34a', gE:'#14532d', dgS:'#14532d', dgM:'#166534', dgE:'#052e16', sS:'#14532d', sE:'#052e16', dsS:'#052e16', dsE:'#021a0e', p:'#22c55e', sa:'rgba(34,197,94,0.3)', cs:'flat', sc:false, be:'field-lines', fd:false, fh:true },
  'football':       { gS:'#166534', gM:'#15803d', gE:'#14532d', dgS:'#052e16', dgM:'#064e3b', dgE:'#022c22', sS:'#14532d', sE:'#052e16', dsS:'#052e16', dsE:'#021a0e', p:'#f59e0b', sa:'rgba(245,158,11,0.3)', cs:'flat', sc:false, be:'field-lines', fd:false },
  'basketball':     { gS:'#a16207', gM:'#b45309', gE:'#92400e', dgS:'#78350f', dgM:'#92400e', dgE:'#431407', sS:'#78350f', sE:'#431407', dsS:'#3c1a07', dsE:'#1c0c03', p:'#f97316', sa:'rgba(249,115,22,0.3)', cs:'flat', sc:false, be:'none', fd:false, fh:true, fsb:true },
  'baseball':       { gS:'#92400e', gM:'#a16207', gE:'#78350f', dgS:'#78350f', dgM:'#92400e', dgE:'#451a03', sS:'#78350f', sE:'#451a03', dsS:'#3c1a07', dsE:'#1c0c03', p:'#d97706', sa:'rgba(217,119,6,0.3)', cs:'default', sc:false, be:'none', fd:false },
  'hockey':         { gS:'#93c5fd', gM:'#60a5fa', gE:'#3b82f6', dgS:'#1e3a8a', dgM:'#1e40af', dgE:'#1d4ed8', sS:'#1e3a8a', sE:'#1e40af', dsS:'#0c1f5a', dsE:'#060e2e', p:'#3b82f6', sa:'rgba(59,130,246,0.3)', cs:'flat', sc:false, be:'none', fd:false },
  'golf':           { gS:'#166534', gM:'#14532d', gE:'#052e16', dgS:'#064e3b', dgM:'#052e16', dgE:'#022c22', sS:'#14532d', sE:'#052e16', dsS:'#052e16', dsE:'#021a0e', p:'#84cc16', sa:'rgba(132,204,22,0.3)', cs:'flat', sc:false, be:'none', fd:false, fh:true },
  'tennis':         { gS:'#b45309', gM:'#c2410c', gE:'#a16207', dgS:'#78350f', dgM:'#92400e', dgE:'#451a03', sS:'#78350f', sE:'#451a03', dsS:'#3c1a07', dsE:'#1c0c03', p:'#fcd34d', sa:'rgba(252,211,77,0.3)', cs:'flat', sc:false, be:'none', fd:false },
  'nascar':         { gS:'#0a0a0a', gM:'#1a1a1a', gE:'#0a0a0a', dgS:'#050505', dgM:'#0f0f0f', dgE:'#050505', sS:'#0a0a0a', sE:'#050505', dsS:'#020202', dsE:'#020202', p:'#fbbf24', sa:'rgba(251,191,36,0.2)', cs:'sharp', sc:false, be:'checkered', fd:true, gc:'#fbbf24' },
  'christmas':      { gS:'#dc2626', gM:'#16a34a', gE:'#b91c1c', dgS:'#7f1d1d', dgM:'#052e16', dgE:'#7f1d1d', sS:'#7f1d1d', sE:'#052e16', dsS:'#3d0b0b', dsE:'#021a0e', p:'#fcd34d', sa:'rgba(252,211,77,0.3)', cs:'default', sc:false, be:'confetti', fd:false, gc:'#fcd34d' },
  'new-years':      { gS:'#0a0a0a', gM:'#1a1500', gE:'#0a0a0a', dgS:'#050500', dgM:'#0f0d00', dgE:'#050500', sS:'#0a0a0a', sE:'#050500', dsS:'#030300', dsE:'#030300', p:'#fbbf24', sa:'rgba(251,191,36,0.25)', cs:'neon', sc:false, be:'confetti', fd:true, gc:'#fbbf24' },
  'valentines':     { gS:'#e11d48', gM:'#be123c', gE:'#9f1239', dgS:'#881337', dgM:'#9f1239', dgE:'#4c0519', sS:'#881337', sE:'#4c0519', dsS:'#4c0519', dsE:'#200210', p:'#f43f5e', sa:'rgba(244,63,94,0.3)', cs:'default', sc:false, be:'hearts', fd:false },
  'st-patricks':    { gS:'#16a34a', gM:'#15803d', gE:'#166534', dgS:'#14532d', dgM:'#166534', dgE:'#052e16', sS:'#14532d', sE:'#052e16', dsS:'#052e16', dsE:'#021a0e', p:'#4ade80', sa:'rgba(74,222,128,0.3)', cs:'default', sc:false, be:'shamrocks', fd:false },
  'olympics':       { gS:'#fbbf24', gM:'#f59e0b', gE:'#d97706', dgS:'#92400e', dgM:'#78350f', dgE:'#451a03', sS:'#92400e', sE:'#451a03', dsS:'#451a03', dsE:'#1c0c03', p:'#0284c7', sa:'rgba(2,132,199,0.3)', cs:'flat', sc:false, be:'olympic-rings', fd:false, fh:true },
  'vaporwave':      { gS:'#ec4899', gM:'#a855f7', gE:'#6366f1', dgS:'#9d174d', dgM:'#7e22ce', dgE:'#4338ca', sS:'#1a0030', sE:'#0a0018', dsS:'#0a0018', dsE:'#040008', p:'#f0abfc', sa:'rgba(240,171,252,0.2)', cs:'neon', sc:true, be:'vaporwave-grid', fd:true, gc:'#f0abfc' },
  'lofi':           { gS:'#92400e', gM:'#78350f', gE:'#6b2d1a', dgS:'#451a03', dgM:'#3c1a07', dgE:'#1c0c03', sS:'#451a03', sE:'#1c0c03', dsS:'#1c0c03', dsE:'#0e0602', p:'#fcd34d', sa:'rgba(252,211,77,0.3)', cs:'default', sc:false, be:'rain', fd:false },
  'coffee':         { gS:'#6b4226', gM:'#8b5e3c', gE:'#4a2c1a', dgS:'#3d2010', dgM:'#4a2c1a', dgE:'#231208', sS:'#3d2010', sE:'#231208', dsS:'#1a0e06', dsE:'#0e0702', p:'#d97706', sa:'rgba(217,119,6,0.3)', cs:'flat', sc:false, be:'steam', fd:false, fh:true },
  'blueprint':      { gS:'#1e3a8a', gM:'#1d4ed8', gE:'#1e40af', dgS:'#0f1d45', dgM:'#0f2770', dgE:'#0f1f55', sS:'#1e3a8a', sE:'#0f1d45', dsS:'#0a1030', dsE:'#060a18', p:'#93c5fd', sa:'rgba(147,197,253,0.25)', cs:'flat', sc:false, be:'none', fd:true },
  'sepia':          { gS:'#92400e', gM:'#78350f', gE:'#6b3a1f', dgS:'#451a03', dgM:'#3c1a07', dgE:'#231208', sS:'#451a03', sE:'#231208', dsS:'#1a0e06', dsE:'#0e0702', p:'#fbbf24', sa:'rgba(251,191,36,0.3)', cs:'flat', sc:false, be:'none', fd:false, fh:true, fsb:true },
  'watercolor':     { gS:'#a5b4fc', gM:'#fbcfe8', gE:'#bfdbfe', dgS:'#3730a3', dgM:'#9d174d', dgE:'#1e40af', sS:'#3730a3', sE:'#1e3a8a', dsS:'#1e1b4b', dsE:'#0f0d27', p:'#818cf8', sa:'rgba(129,140,248,0.3)', cs:'glass', sc:false, be:'none', fd:false },
  'cyberpunk':      { gS:'#0a0a0a', gM:'#1a0030', gE:'#0d0d0d', dgS:'#050505', dgM:'#0f0020', dgE:'#080808', sS:'#0a0a1a', sE:'#050510', dsS:'#050508', dsE:'#020205', p:'#00fff5', sa:'rgba(0,255,245,0.2)', cs:'neon', sc:true, be:'none', fd:true, gc:'#00fff5' },
  'space':          { gS:'#0a0a2e', gM:'#16213e', gE:'#0f3460', dgS:'#050516', dgM:'#0a0f2e', dgE:'#071830', sS:'#0a0a2e', sE:'#050516', dsS:'#030310', dsE:'#010108', p:'#7c3aed', sa:'rgba(124,58,237,0.3)', cs:'glass', sc:false, be:'stars', fd:true },
  'halloween':      { gS:'#1a0a00', gM:'#4a1200', gE:'#1a0020', dgS:'#0d0500', dgM:'#2a0900', dgE:'#0d0010', sS:'#1a0a00', sE:'#0d0500', dsS:'#0d0500', dsE:'#060200', p:'#f97316', sa:'rgba(249,115,22,0.3)', cs:'sharp', sc:false, be:'bats', fd:true },
  'retro-arcade':   { gS:'#000000', gM:'#0a0a0a', gE:'#111111', dgS:'#000000', dgM:'#050505', dgE:'#0a0a0a', sS:'#0a0a0a', sE:'#000000', dsS:'#000000', dsE:'#000000', p:'#00ff41', sa:'rgba(0,255,65,0.2)', cs:'neon', sc:true, be:'pixels', fd:true, gc:'#00ff41', fo:"'Press Start 2P', monospace" },
  'matrix':         { gS:'#000000', gM:'#001100', gE:'#000000', dgS:'#000000', dgM:'#000a00', dgE:'#000000', sS:'#000000', sE:'#001100', dsS:'#000000', dsE:'#000000', p:'#00ff41', sa:'rgba(0,255,65,0.2)', cs:'neon', sc:true, be:'matrix-rain', fd:true, gc:'#00ff41' },
  'circuit':        { gS:'#001a00', gM:'#003300', gE:'#001a00', dgS:'#000d00', dgM:'#001a00', dgE:'#000d00', sS:'#001a00', sE:'#000d00', dsS:'#000800', dsE:'#000800', p:'#22c55e', sa:'rgba(34,197,94,0.2)', cs:'neon', sc:false, be:'circuit-pulse', fd:true, gc:'#22c55e' },
  'neural':         { gS:'#0a0520', gM:'#1a0540', gE:'#100230', dgS:'#050210', dgM:'#0d0325', dgE:'#080118', sS:'#0a0520', sE:'#050210', dsS:'#030110', dsE:'#030110', p:'#a78bfa', sa:'rgba(167,139,250,0.25)', cs:'glass', sc:false, be:'neural-network', fd:true, gc:'#a78bfa' },
  'terminal-amber': { gS:'#0a0500', gM:'#1a0a00', gE:'#0a0500', dgS:'#050200', dgM:'#0d0500', dgE:'#050200', sS:'#0a0500', sE:'#050200', dsS:'#030100', dsE:'#030100', p:'#f59e0b', sa:'rgba(245,158,11,0.2)', cs:'neon', sc:true, be:'none', fd:true, gc:'#f59e0b', fo:"'Courier New', 'Consolas', monospace" },  'data-flow':      { gS:'#020a14', gM:'#0a1628', gE:'#040e1e', dgS:'#010508', dgM:'#050d18', dgE:'#020810', sS:'#020a14', sE:'#010508', dsS:'#010305', dsE:'#010305', p:'#38bdf8', sa:'rgba(56,189,248,0.25)', cs:'glass', sc:false, be:'animated-beams', fd:true, gc:'#38bdf8' },
  'dungeon':        { gS:'#1c1410', gM:'#2c1810', gE:'#1c1410', dgS:'#0e0a08', dgM:'#160c08', dgE:'#0e0a08', sS:'#1c1410', sE:'#0e0a08', dsS:'#080604', dsE:'#080604', p:'#f97316', sa:'rgba(249,115,22,0.25)', cs:'sharp', sc:false, be:'torch', fd:true, gc:'#f97316' },
  'galaxy-rose':    { gS:'#1a0028', gM:'#2d0a40', gE:'#160020', dgS:'#0d0014', dgM:'#180520', dgE:'#0d0014', sS:'#1a0028', sE:'#0d0014', dsS:'#07000a', dsE:'#07000a', p:'#f9a8d4', sa:'rgba(249,168,212,0.25)', cs:'glass', sc:false, be:'meteor-streaks', fd:true, gc:'#f9a8d4' },
  'stained-glass':  { gS:'#7c3aed', gM:'#dc2626', gE:'#1d4ed8', dgS:'#4c1d95', dgM:'#7f1d1d', dgE:'#1e3a8a', sS:'#1e1b4b', sE:'#0f0d27', dsS:'#0f0d27', dsE:'#05040f', p:'#a855f7', sa:'rgba(168,85,247,0.3)', cs:'default', sc:false, be:'stained-glass-overlay', fd:false },
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
r.setAttribute('data-force-dark',t.fd?'true':'false');
r.setAttribute('data-scheme',rk);
r.classList.add(m);
}catch(e){}})();`;
}
