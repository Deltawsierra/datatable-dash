'use client';

import { useEffect, useState, useMemo } from 'react';
import type { CSSProperties } from 'react';
import { useTheme } from '~/components/ThemeProvider';

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

interface Particle {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  drift: number;
  opacity: number;
}

function useParticles(count: number): Particle[] {
  return useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: random(0, 100),
      delay: random(0, 10),
      duration: random(6, 16),
      size: random(4, 12),
      drift: random(-3, 3),
      opacity: random(0.5, 1),
    }));
  }, [count]);
}

/* ── Existing effects ─────────────────────────────────── */

function SnowEffect() {
  const particles = useParticles(55);
  return (
    <div className="theme-effect-layer" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="snowflake"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}

function StarsEffectStable() {
  const stars = useMemo(() => {
    return Array.from({ length: 110 }, (_, i) => ({
      id: i,
      x: random(0, 100),
      y: random(0, 100),
      delay: random(0, 8),
      duration: random(2, 6),
      size: random(1.5, 4),
      opacity: random(0.4, 1),
    }));
  }, []);

  return (
    <div className="theme-effect-layer" aria-hidden="true">
      {stars.map((s) => (
        <div
          key={s.id}
          className="star"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            opacity: s.opacity,
          }}
        />
      ))}
    </div>
  );
}

function LeavesEffect() {
  const particles = useParticles(28);
  return (
    <div className="theme-effect-layer" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="leaf"
          style={{
            left: `${p.x}%`,
            width: p.size + 4,
            height: (p.size + 4) * 0.65,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
            '--drift': `${p.drift * 40}px`,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}

function PetalsEffect() {
  const particles = useParticles(28);
  return (
    <div className="theme-effect-layer" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: `${p.x}%`,
            width: p.size + 2,
            height: (p.size + 2) * 0.6,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration * 1.3}s`,
            opacity: p.opacity,
            '--drift': `${p.drift * 50}px`,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}

const BAT_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 20" fill="currentColor">
  <path d="M20 8 C14 2, 4 0, 0 6 C4 6, 6 10, 8 10 C10 10, 12 8, 14 8 C16 8, 18 12, 20 12 C22 12, 24 8, 26 8 C28 8, 30 10, 32 10 C34 10, 36 6, 40 6 C36 0, 26 2, 20 8 Z"/>
  <ellipse cx="20" cy="12" rx="3" ry="4"/>
</svg>
`;

function BatsEffect() {
  const bats = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => ({
      id: i,
      y: random(5, 80),
      delay: random(0, 15),
      duration: random(12, 22),
      size: random(18, 32),
      direction: Math.random() > 0.5 ? 1 : -1,
      opacity: random(0.5, 0.9),
    }));
  }, []);

  return (
    <div className="theme-effect-layer" aria-hidden="true">
      {bats.map((b) => (
        <div
          key={b.id}
          className={b.direction === 1 ? 'bat bat-ltr' : 'bat bat-rtl'}
          style={{
            top: `${b.y}%`,
            width: b.size,
            height: b.size * 0.5,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            opacity: b.opacity,
            color: '#6b21a8',
          }}
          dangerouslySetInnerHTML={{ __html: BAT_SVG }}
        />
      ))}
    </div>
  );
}

function WavesEffect() {
  return (
    <div className="theme-effect-layer waves-container" aria-hidden="true">
      <div className="wave wave-1" />
      <div className="wave wave-2" />
      <div className="wave wave-3" />
    </div>
  );
}

function PixelsEffect() {
  return (
    <div className="theme-effect-layer pixels-layer" aria-hidden="true" />
  );
}

function ScanlinesEffect() {
  return (
    <div className="scanlines" aria-hidden="true" />
  );
}

/* ── New: Sakura Petals (heavier + deeper pink) ──────── */
function SakuraPetalsEffect() {
  const petals = useMemo(() => Array.from({ length: 45 }, (_, i) => ({
    id: i,
    x: random(0, 100),
    delay: random(0, 12),
    duration: random(5, 10),
    size: random(6, 14),
    drift: random(-4, 4),
    opacity: random(0.55, 0.95),
    hue: Math.random() > 0.5 ? '#f9a8d4' : '#fbcfe8',
  })), []);

  return (
    <div className="theme-effect-layer" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className="sakura-petal"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size * 0.55,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
            '--drift': `${p.drift * 55}px`,
            background: p.hue,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}

/* ── New: Aurora Borealis bands ──────────────────────── */
function AuroraEffect() {
  const bands = useMemo(() => [
    { id: 0, top: '15%', color: 'rgba(52,211,153,0.22)', delay: 0,   dur: 14 },
    { id: 1, top: '28%', color: 'rgba(96,165,250,0.18)', delay: 2,   dur: 18 },
    { id: 2, top: '38%', color: 'rgba(167,139,250,0.20)', delay: 4,  dur: 12 },
    { id: 3, top: '50%', color: 'rgba(52,211,153,0.15)', delay: 6,   dur: 20 },
    { id: 4, top: '62%', color: 'rgba(34,211,238,0.18)', delay: 1,   dur: 16 },
  ], []);

  return (
    <div className="theme-effect-layer" aria-hidden="true">
      {bands.map((b) => (
        <div
          key={b.id}
          className="aurora-band"
          style={{
            top: b.top,
            background: b.color,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.dur}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── New: Bubbles (Underwater) ───────────────────────── */
function BubblesEffect() {
  const bubbles = useMemo(() => Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: random(0, 100),
    delay: random(0, 14),
    duration: random(6, 14),
    size: random(4, 18),
    opacity: random(0.2, 0.55),
    drift: random(-2, 2),
  })), []);

  return (
    <div className="theme-effect-layer" aria-hidden="true">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="bubble"
          style={{
            left: `${b.x}%`,
            width: b.size,
            height: b.size,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            opacity: b.opacity,
            '--drift': `${b.drift * 30}px`,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}

/* ── New: Embers (Lava / Volcano) ────────────────────── */
function EmbersEffect() {
  const embers = useMemo(() => Array.from({ length: 65 }, (_, i) => ({
    id: i,
    x: random(0, 100),
    delay: random(0, 8),
    duration: random(2, 6),
    size: random(2, 6),
    opacity: random(0.5, 0.9),
    drift: random(-2, 2),
    color: Math.random() > 0.5 ? '#ff4500' : '#f97316',
  })), []);

  return (
    <div className="theme-effect-layer" aria-hidden="true">
      {embers.map((e) => (
        <div
          key={e.id}
          className="ember"
          style={{
            left: `${e.x}%`,
            width: e.size,
            height: e.size,
            animationDelay: `${e.delay}s`,
            animationDuration: `${e.duration}s`,
            opacity: e.opacity,
            background: e.color,
            boxShadow: `0 0 ${e.size * 2}px ${e.color}`,
            '--drift': `${e.drift * 40}px`,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}

/* ── New: Lightning + Rain (Storm) ───────────────────── */
function LightningRainEffect() {
  const [flash, setFlash] = useState(false);
  const streaks = useMemo(() => Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: random(0, 100),
    delay: random(0, 4),
    duration: random(0.3, 0.8),
    opacity: random(0.15, 0.45),
    length: random(12, 28),
  })), []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    function scheduleFlash() {
      const wait = random(3500, 9000);
      timeout = setTimeout(() => {
        setFlash(true);
        setTimeout(() => setFlash(false), 120);
        scheduleFlash();
      }, wait);
    }
    scheduleFlash();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="theme-effect-layer" aria-hidden="true">
      {flash && <div className="lightning-flash" />}
      {streaks.map((s) => (
        <div
          key={s.id}
          className="rain-streak"
          style={{
            left: `${s.x}%`,
            height: s.length,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            opacity: s.opacity,
          }}
        />
      ))}
    </div>
  );
}

/* ── New: Field Lines (Soccer / Football) ────────────── */
function FieldLinesEffect() {
  return (
    <div className="theme-effect-layer field-lines-overlay" aria-hidden="true" />
  );
}

/* ── New: Floating Hearts (Valentine's) ──────────────── */
const HEART_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;

function HeartsEffect() {
  const hearts = useMemo(() => Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: random(0, 100),
    delay: random(0, 12),
    duration: random(7, 14),
    size: random(12, 26),
    opacity: random(0.35, 0.75),
    drift: random(-2, 2),
    color: Math.random() > 0.5 ? '#f43f5e' : '#fb7185',
  })), []);

  return (
    <div className="theme-effect-layer" aria-hidden="true">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="heart-particle"
          style={{
            left: `${h.x}%`,
            width: h.size,
            height: h.size,
            color: h.color,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            opacity: h.opacity,
            '--drift': `${h.drift * 40}px`,
          } as CSSProperties}
          dangerouslySetInnerHTML={{ __html: HEART_SVG }}
        />
      ))}
    </div>
  );
}

/* ── New: Shamrocks (St Patrick's) ───────────────────── */
const SHAMROCK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><circle cx="10" cy="10" r="7"/><circle cx="22" cy="10" r="7"/><circle cx="16" cy="20" r="7"/><rect x="14.5" y="20" width="3" height="8" rx="1.5"/></svg>`;

function ShamrocksEffect() {
  const shamrocks = useMemo(() => Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: random(0, 100),
    delay: random(0, 10),
    duration: random(6, 13),
    size: random(14, 28),
    opacity: random(0.3, 0.7),
  })), []);

  return (
    <div className="theme-effect-layer" aria-hidden="true">
      {shamrocks.map((s) => (
        <div
          key={s.id}
          className="shamrock-particle"
          style={{
            left: `${s.x}%`,
            width: s.size,
            height: s.size,
            color: '#4ade80',
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            opacity: s.opacity,
          }}
          dangerouslySetInnerHTML={{ __html: SHAMROCK_SVG }}
        />
      ))}
    </div>
  );
}

/* ── New: Confetti (Christmas / New Year's) ──────────── */
const CONFETTI_COLORS = ['#fbbf24','#f43f5e','#34d399','#60a5fa','#a78bfa','#f97316','#ffffff','#ec4899'];

function ConfettiEffect() {
  const pieces = useMemo(() => Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: random(0, 100),
    delay: random(0, 8),
    duration: random(4, 9),
    width: random(5, 11),
    height: random(4, 8),
    opacity: random(0.55, 0.9),
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    rotate: random(0, 360),
  })), []);

  return (
    <div className="theme-effect-layer" aria-hidden="true">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.x}%`,
            width: p.width,
            height: p.height,
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
            '--rotate-start': `${p.rotate}deg`,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}

/* ── New: Steam wisps (Coffee) ───────────────────────── */
function SteamEffect() {
  const wisps = useMemo(() => Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: 15 + i * 14,
    delay: i * 1.2,
    duration: random(4, 8),
    opacity: random(0.08, 0.2),
  })), []);

  return (
    <div className="theme-effect-layer" aria-hidden="true">
      {wisps.map((w) => (
        <div
          key={w.id}
          className="steam-wisp"
          style={{
            left: `${w.x}%`,
            animationDelay: `${w.delay}s`,
            animationDuration: `${w.duration}s`,
            opacity: w.opacity,
          }}
        />
      ))}
    </div>
  );
}

/* ── New: Space Meteor Streaks (white/blue for space) ── */
function SpaceMeteorEffect() {
  const meteors = useMemo(() => Array.from({ length: 16 }, (_, i) => ({
    id: i,
    x: random(0, 80),
    y: random(0, 65),
    delay: random(0, 14),
    duration: random(1.2, 3.0),
    length: random(55, 160),
    opacity: random(0.25, 0.65),
    color: (['rgba(255,255,255,0.85)', 'rgba(165,180,252,0.75)', 'rgba(147,210,255,0.80)', 'rgba(216,220,255,0.70)'] as const)[i % 4],
  })), []);

  return (
    <div className="theme-effect-layer" aria-hidden="true">
      {meteors.map((m) => (
        <div
          key={m.id}
          className="meteor-streak"
          style={{
            left: `${m.x}%`,
            top: `${m.y}%`,
            width: m.length,
            color: m.color,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
            opacity: m.opacity,
          }}
        />
      ))}
    </div>
  );
}

/* ── Main export ─────────────────────────────────────── */
export default function ThemeEffectsLayer() {
  const { currentScheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const effect = currentScheme.backgroundEffect;
  const schemeKey = currentScheme.key;

  return (
    <>
      {currentScheme.scanlines && <ScanlinesEffect />}

      {effect === 'snow'          && <SnowEffect />}
      {effect === 'stars'         && <StarsEffectStable />}
      {effect === 'leaves'        && <LeavesEffect />}
      {effect === 'petals'        && <PetalsEffect />}
      {effect === 'bats'          && <BatsEffect />}
      {effect === 'waves'         && <WavesEffect />}
      {effect === 'pixels'        && <PixelsEffect />}

      {effect === 'sakura-petals' && <SakuraPetalsEffect />}
      {effect === 'aurora'        && <AuroraEffect />}
      {effect === 'bubbles'       && <BubblesEffect />}
      {effect === 'embers'        && <EmbersEffect />}
      {effect === 'lightning-rain'&& <LightningRainEffect />}
      {effect === 'field-lines'   && <FieldLinesEffect />}
      {effect === 'hearts'        && <HeartsEffect />}
      {effect === 'shamrocks'     && <ShamrocksEffect />}
      {effect === 'confetti'      && <ConfettiEffect />}
      {effect === 'steam'         && <SteamEffect />}

      {/* Space theme gets stars + bonus white/blue meteor streaks */}
      {schemeKey === 'space' && <SpaceMeteorEffect />}
    </>
  );
}
