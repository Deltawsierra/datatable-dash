'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';

export type ColorMode = 'light' | 'dark';

export type ColorScheme =
  | 'ocean-blue' | 'forest' | 'sunset' | 'midnight' | 'rose-gold'
  | 'winter' | 'cyberpunk' | 'space' | 'halloween' | 'autumn'
  | 'summer' | 'spring' | 'retro-arcade' | 'minimalist';

export type BackgroundEffect = 'none' | 'snow' | 'stars' | 'leaves' | 'petals' | 'bats' | 'waves' | 'pixels';
export type CardStyle = 'default' | 'glass' | 'neon' | 'flat' | 'sharp';

export interface ColorSchemeDefinition {
  key: ColorScheme;
  name: string;
  emoji: string;
  gradientStart: string;
  gradientMid: string;
  gradientEnd: string;
  primaryAccent: string;
  sidebarStart: string;
  sidebarEnd: string;
  sidebarActive: string;
  darkSidebarStart: string;
  darkSidebarEnd: string;
  darkGradientStart: string;
  darkGradientMid: string;
  darkGradientEnd: string;
  backgroundEffect: BackgroundEffect;
  cardStyle: CardStyle;
  scanlines: boolean;
  glowColor?: string;
  fontOverride?: string;
  flatHeader?: boolean;
}

export const COLOR_SCHEMES: ColorSchemeDefinition[] = [
  {
    key: 'ocean-blue',
    name: 'Ocean Blue',
    emoji: '🌊',
    gradientStart: '#3b82f6',
    gradientMid: '#6366f1',
    gradientEnd: '#8b5cf6',
    darkGradientStart: '#1e3a8a',
    darkGradientMid: '#4338ca',
    darkGradientEnd: '#6d28d9',
    primaryAccent: '#3b82f6',
    sidebarStart: '#1e293b',
    sidebarEnd: '#0f172a',
    darkSidebarStart: '#020617',
    darkSidebarEnd: '#0f172a',
    sidebarActive: 'rgba(59, 130, 246, 0.3)',
    backgroundEffect: 'none',
    cardStyle: 'default',
    scanlines: false,
  },
  {
    key: 'forest',
    name: 'Forest',
    emoji: '🌲',
    gradientStart: '#16a34a',
    gradientMid: '#15803d',
    gradientEnd: '#166534',
    darkGradientStart: '#14532d',
    darkGradientMid: '#166534',
    darkGradientEnd: '#052e16',
    primaryAccent: '#16a34a',
    sidebarStart: '#14532d',
    sidebarEnd: '#052e16',
    darkSidebarStart: '#052e16',
    darkSidebarEnd: '#021a0e',
    sidebarActive: 'rgba(22, 163, 74, 0.3)',
    backgroundEffect: 'none',
    cardStyle: 'default',
    scanlines: false,
  },
  {
    key: 'sunset',
    name: 'Sunset',
    emoji: '🌅',
    gradientStart: '#f97316',
    gradientMid: '#ef4444',
    gradientEnd: '#dc2626',
    darkGradientStart: '#7c2d12',
    darkGradientMid: '#991b1b',
    darkGradientEnd: '#7f1d1d',
    primaryAccent: '#f97316',
    sidebarStart: '#7c2d12',
    sidebarEnd: '#431407',
    darkSidebarStart: '#431407',
    darkSidebarEnd: '#1c0a03',
    sidebarActive: 'rgba(249, 115, 22, 0.3)',
    backgroundEffect: 'none',
    cardStyle: 'default',
    scanlines: false,
  },
  {
    key: 'midnight',
    name: 'Midnight',
    emoji: '🌙',
    gradientStart: '#1e1b4b',
    gradientMid: '#312e81',
    gradientEnd: '#4c1d95',
    darkGradientStart: '#0f0d27',
    darkGradientMid: '#1e1b4b',
    darkGradientEnd: '#2e1065',
    primaryAccent: '#6366f1',
    sidebarStart: '#1e1b4b',
    sidebarEnd: '#0f0e27',
    darkSidebarStart: '#0f0d27',
    darkSidebarEnd: '#05040f',
    sidebarActive: 'rgba(99, 102, 241, 0.3)',
    backgroundEffect: 'none',
    cardStyle: 'default',
    scanlines: false,
  },
  {
    key: 'rose-gold',
    name: 'Rose Gold',
    emoji: '🌹',
    gradientStart: '#f43f5e',
    gradientMid: '#e11d48',
    gradientEnd: '#be123c',
    darkGradientStart: '#881337',
    darkGradientMid: '#9f1239',
    darkGradientEnd: '#7f1d1d',
    primaryAccent: '#f43f5e',
    sidebarStart: '#881337',
    sidebarEnd: '#4c0519',
    darkSidebarStart: '#4c0519',
    darkSidebarEnd: '#200210',
    sidebarActive: 'rgba(244, 63, 94, 0.3)',
    backgroundEffect: 'none',
    cardStyle: 'default',
    scanlines: false,
  },
  {
    key: 'winter',
    name: 'Winter',
    emoji: '❄️',
    gradientStart: '#60a5fa',
    gradientMid: '#93c5fd',
    gradientEnd: '#bfdbfe',
    darkGradientStart: '#1e3a5f',
    darkGradientMid: '#1d4ed8',
    darkGradientEnd: '#1e40af',
    primaryAccent: '#60a5fa',
    sidebarStart: '#1e3a5f',
    sidebarEnd: '#0c1f3a',
    darkSidebarStart: '#0c1f3a',
    darkSidebarEnd: '#060e1c',
    sidebarActive: 'rgba(96, 165, 250, 0.3)',
    backgroundEffect: 'snow',
    cardStyle: 'glass',
    scanlines: false,
  },
  {
    key: 'cyberpunk',
    name: 'Cyberpunk',
    emoji: '🤖',
    gradientStart: '#0a0a0a',
    gradientMid: '#1a0030',
    gradientEnd: '#0d0d0d',
    darkGradientStart: '#050505',
    darkGradientMid: '#0f0020',
    darkGradientEnd: '#080808',
    primaryAccent: '#00fff5',
    sidebarStart: '#0a0a1a',
    sidebarEnd: '#050510',
    darkSidebarStart: '#050508',
    darkSidebarEnd: '#020205',
    sidebarActive: 'rgba(0, 255, 245, 0.2)',
    backgroundEffect: 'none',
    cardStyle: 'neon',
    scanlines: true,
    glowColor: '#00fff5',
  },
  {
    key: 'space',
    name: 'Space',
    emoji: '🌌',
    gradientStart: '#0a0a2e',
    gradientMid: '#16213e',
    gradientEnd: '#0f3460',
    darkGradientStart: '#050516',
    darkGradientMid: '#0a0f2e',
    darkGradientEnd: '#071830',
    primaryAccent: '#7c3aed',
    sidebarStart: '#0a0a2e',
    sidebarEnd: '#050516',
    darkSidebarStart: '#030310',
    darkSidebarEnd: '#010108',
    sidebarActive: 'rgba(124, 58, 237, 0.3)',
    backgroundEffect: 'stars',
    cardStyle: 'glass',
    scanlines: false,
  },
  {
    key: 'halloween',
    name: 'Halloween',
    emoji: '🎃',
    gradientStart: '#1a0a00',
    gradientMid: '#4a1200',
    gradientEnd: '#1a0020',
    darkGradientStart: '#0d0500',
    darkGradientMid: '#2a0900',
    darkGradientEnd: '#0d0010',
    primaryAccent: '#f97316',
    sidebarStart: '#1a0a00',
    sidebarEnd: '#0d0500',
    darkSidebarStart: '#0d0500',
    darkSidebarEnd: '#060200',
    sidebarActive: 'rgba(249, 115, 22, 0.3)',
    backgroundEffect: 'bats',
    cardStyle: 'sharp',
    scanlines: false,
  },
  {
    key: 'autumn',
    name: 'Autumn',
    emoji: '🍂',
    gradientStart: '#b45309',
    gradientMid: '#c2410c',
    gradientEnd: '#7c2d12',
    darkGradientStart: '#78350f',
    darkGradientMid: '#92400e',
    darkGradientEnd: '#431407',
    primaryAccent: '#d97706',
    sidebarStart: '#78350f',
    sidebarEnd: '#3c1a07',
    darkSidebarStart: '#3c1a07',
    darkSidebarEnd: '#1c0c03',
    sidebarActive: 'rgba(217, 119, 6, 0.3)',
    backgroundEffect: 'leaves',
    cardStyle: 'default',
    scanlines: false,
  },
  {
    key: 'summer',
    name: 'Summer',
    emoji: '☀️',
    gradientStart: '#0891b2',
    gradientMid: '#0ea5e9',
    gradientEnd: '#38bdf8',
    darkGradientStart: '#164e63',
    darkGradientMid: '#0c4a6e',
    darkGradientEnd: '#083344',
    primaryAccent: '#f59e0b',
    sidebarStart: '#164e63',
    sidebarEnd: '#083344',
    darkSidebarStart: '#083344',
    darkSidebarEnd: '#031a22',
    sidebarActive: 'rgba(245, 158, 11, 0.3)',
    backgroundEffect: 'waves',
    cardStyle: 'default',
    scanlines: false,
  },
  {
    key: 'spring',
    name: 'Spring',
    emoji: '🌸',
    gradientStart: '#ec4899',
    gradientMid: '#f472b6',
    gradientEnd: '#34d399',
    darkGradientStart: '#831843',
    darkGradientMid: '#9d174d',
    darkGradientEnd: '#065f46',
    primaryAccent: '#ec4899',
    sidebarStart: '#831843',
    sidebarEnd: '#3d0b1f',
    darkSidebarStart: '#3d0b1f',
    darkSidebarEnd: '#1c0510',
    sidebarActive: 'rgba(236, 72, 153, 0.3)',
    backgroundEffect: 'petals',
    cardStyle: 'default',
    scanlines: false,
  },
  {
    key: 'retro-arcade',
    name: 'Retro Arcade',
    emoji: '🕹️',
    gradientStart: '#000000',
    gradientMid: '#0a0a0a',
    gradientEnd: '#111111',
    darkGradientStart: '#000000',
    darkGradientMid: '#050505',
    darkGradientEnd: '#0a0a0a',
    primaryAccent: '#00ff41',
    sidebarStart: '#0a0a0a',
    sidebarEnd: '#000000',
    darkSidebarStart: '#000000',
    darkSidebarEnd: '#000000',
    sidebarActive: 'rgba(0, 255, 65, 0.2)',
    backgroundEffect: 'pixels',
    cardStyle: 'neon',
    scanlines: true,
    glowColor: '#00ff41',
    fontOverride: "'Press Start 2P', monospace",
  },
  {
    key: 'minimalist',
    name: 'Minimalist',
    emoji: '⬜',
    gradientStart: '#f5f5f4',
    gradientMid: '#e7e5e4',
    gradientEnd: '#d6d3d1',
    darkGradientStart: '#292524',
    darkGradientMid: '#1c1917',
    darkGradientEnd: '#0c0a09',
    primaryAccent: '#44403c',
    sidebarStart: '#f5f5f4',
    sidebarEnd: '#e7e5e4',
    darkSidebarStart: '#1c1917',
    darkSidebarEnd: '#0c0a09',
    sidebarActive: 'rgba(68, 64, 60, 0.15)',
    backgroundEffect: 'none',
    cardStyle: 'flat',
    scanlines: false,
    flatHeader: true,
  },
];

interface ThemeContextType {
  colorMode: ColorMode;
  colorScheme: ColorScheme;
  toggleColorMode: () => void;
  setColorScheme: (scheme: ColorScheme) => void;
  currentScheme: ColorSchemeDefinition;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
}

function applySchemeVars(scheme: ColorSchemeDefinition, mode: ColorMode) {
  const root = document.documentElement;
  const isDark = mode === 'dark';

  const headerStart = isDark ? scheme.darkGradientStart : scheme.gradientStart;
  const headerMid = isDark ? scheme.darkGradientMid : scheme.gradientMid;
  const headerEnd = isDark ? scheme.darkGradientEnd : scheme.gradientEnd;
  const sidebarStart = isDark ? scheme.darkSidebarStart : scheme.sidebarStart;
  const sidebarEnd = isDark ? scheme.darkSidebarEnd : scheme.sidebarEnd;

  if (scheme.flatHeader) {
    root.style.setProperty('--header-bg', isDark ? scheme.darkGradientStart : scheme.gradientStart);
  } else {
    root.style.setProperty('--header-bg', `linear-gradient(135deg, ${headerStart} 0%, ${headerMid} 50%, ${headerEnd} 100%)`);
  }

  root.style.setProperty('--primary', scheme.primaryAccent);
  root.style.setProperty('--primary-hover', scheme.primaryAccent);
  root.style.setProperty('--sidebar-bg', `linear-gradient(180deg, ${sidebarStart} 0%, ${sidebarEnd} 100%)`);
  root.style.setProperty('--sidebar-active', scheme.sidebarActive);
  root.style.setProperty('--glow-color', scheme.glowColor ?? 'transparent');
  root.style.setProperty('--theme-font', scheme.fontOverride ?? 'inherit');

  root.setAttribute('data-card-style', scheme.cardStyle);
  root.setAttribute('data-scanlines', scheme.scanlines ? 'true' : 'false');
  root.setAttribute('data-effect', scheme.backgroundEffect);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorMode, setColorMode] = useState<ColorMode>('light');
  const [colorScheme, setColorSchemeState] = useState<ColorScheme>('ocean-blue');

  useEffect(() => {
    const savedMode = localStorage.getItem('colorMode') as ColorMode | null;
    const savedScheme = localStorage.getItem('colorScheme') as ColorScheme | null;
    const mode = savedMode && (savedMode === 'light' || savedMode === 'dark') ? savedMode : 'light';
    const scheme = savedScheme && COLOR_SCHEMES.find(s => s.key === savedScheme) ? savedScheme as ColorScheme : 'ocean-blue';
    setColorMode(mode);
    setColorSchemeState(scheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(colorMode);
    document.documentElement.setAttribute('data-scheme', colorScheme);
    localStorage.setItem('colorMode', colorMode);
    const scheme = COLOR_SCHEMES.find(s => s.key === colorScheme) ?? COLOR_SCHEMES[0];
    applySchemeVars(scheme, colorMode);
  }, [colorMode, colorScheme]);

  const toggleColorMode = () => setColorMode(prev => prev === 'light' ? 'dark' : 'light');

  const setColorScheme = (scheme: ColorScheme) => {
    setColorSchemeState(scheme);
    localStorage.setItem('colorScheme', scheme);
  };

  const currentScheme = COLOR_SCHEMES.find(s => s.key === colorScheme) ?? COLOR_SCHEMES[0];

  const antdThemeConfig = {
    algorithm: colorMode === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
    token: { colorPrimary: currentScheme.primaryAccent, borderRadius: 8 },
  };

  return (
    <ThemeContext.Provider value={{ colorMode, colorScheme, toggleColorMode, setColorScheme, currentScheme }}>
      <ConfigProvider theme={antdThemeConfig}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
}
