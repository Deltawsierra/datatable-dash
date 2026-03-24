'use client';

import { useEffect, useState, useMemo } from 'react';
import { useTheme } from './ThemeProvider';

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

function StarsEffect() {
  const particles = useParticles(110);
  return (
    <div className="theme-effect-layer" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="star"
          style={{
            left: `${p.x}%`,
            top: `${random(0, 100)}%`,
            width: p.size * 0.35,
            height: p.size * 0.35,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration * 0.6}s`,
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
          } as React.CSSProperties}
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
          } as React.CSSProperties}
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

export default function ThemeEffectsLayer() {
  const { currentScheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const effect = currentScheme.backgroundEffect;

  if (effect === 'snow') return <SnowEffect />;
  if (effect === 'stars') return <StarsEffectStable />;
  if (effect === 'leaves') return <LeavesEffect />;
  if (effect === 'petals') return <PetalsEffect />;
  if (effect === 'bats') return <BatsEffect />;
  if (effect === 'waves') return <WavesEffect />;
  if (effect === 'pixels') return <PixelsEffect />;

  return null;
}
