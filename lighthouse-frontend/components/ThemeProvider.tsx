'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';

export type ColorMode = 'light' | 'dark';

export type ColorScheme =
  /* Classic */
  | 'ocean-blue' | 'forest' | 'sunset' | 'midnight' | 'rose-gold' | 'minimalist'
  | 'blueprint' | 'coffee' | 'watercolor' | 'retro-arcade'
  /* Seasonal */
  | 'winter' | 'spring' | 'summer' | 'autumn'
  /* Nature */
  | 'sakura' | 'aurora' | 'underwater' | 'storm' | 'volcano'
  | 'space' | 'cyberpunk'
  /* Sports */
  | 'soccer' | 'football' | 'basketball' | 'baseball' | 'hockey' | 'tennis'
  /* Holiday */
  | 'christmas' | 'new-years' | 'valentines' | 'st-patricks'
  | 'halloween';

export type ThemeCategory = 'classic' | 'seasonal' | 'nature' | 'sports' | 'holiday';

export type BackgroundEffect =
  | 'none' | 'snow' | 'stars' | 'leaves' | 'petals' | 'bats' | 'waves' | 'pixels'
  | 'sakura-petals' | 'aurora' | 'bubbles' | 'embers' | 'lightning-rain'
  | 'field-lines' | 'hearts' | 'shamrocks' | 'confetti' | 'steam';

export type CardStyle = 'default' | 'glass' | 'neon' | 'flat' | 'sharp';

export interface ColorSchemeDefinition {
  key: ColorScheme;
  name: string;
  emoji: string;
  category: ThemeCategory;
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
  flatSidebar?: boolean;
}

export const COLOR_SCHEMES: ColorSchemeDefinition[] = [
  // ── CLASSIC ──────────────────────────────────────────
  {
    key: 'ocean-blue', name: 'Ocean Blue', emoji: '🌊', category: 'classic',
    gradientStart: '#3b82f6', gradientMid: '#6366f1', gradientEnd: '#8b5cf6',
    darkGradientStart: '#1e3a8a', darkGradientMid: '#4338ca', darkGradientEnd: '#6d28d9',
    primaryAccent: '#3b82f6',
    sidebarStart: '#1e293b', sidebarEnd: '#0f172a',
    darkSidebarStart: '#020617', darkSidebarEnd: '#0f172a',
    sidebarActive: 'rgba(59,130,246,0.3)',
    backgroundEffect: 'none', cardStyle: 'default', scanlines: false,
  },
  {
    key: 'forest', name: 'Forest', emoji: '🌲', category: 'classic',
    gradientStart: '#059669', gradientMid: '#047857', gradientEnd: '#065f46',
    darkGradientStart: '#065f46', darkGradientMid: '#047857', darkGradientEnd: '#022c22',
    primaryAccent: '#059669',
    sidebarStart: '#064e3b', sidebarEnd: '#022c22',
    darkSidebarStart: '#022c22', darkSidebarEnd: '#011a12',
    sidebarActive: 'rgba(5,150,105,0.3)',
    backgroundEffect: 'none', cardStyle: 'default', scanlines: false,
  },
  {
    key: 'sunset', name: 'Sunset', emoji: '🌅', category: 'classic',
    gradientStart: '#f97316', gradientMid: '#ef4444', gradientEnd: '#dc2626',
    darkGradientStart: '#7c2d12', darkGradientMid: '#991b1b', darkGradientEnd: '#7f1d1d',
    primaryAccent: '#f97316',
    sidebarStart: '#7c2d12', sidebarEnd: '#431407',
    darkSidebarStart: '#431407', darkSidebarEnd: '#1c0a03',
    sidebarActive: 'rgba(249,115,22,0.3)',
    backgroundEffect: 'none', cardStyle: 'default', scanlines: false,
  },
  {
    key: 'midnight', name: 'Midnight', emoji: '🌙', category: 'classic',
    gradientStart: '#1e1b4b', gradientMid: '#312e81', gradientEnd: '#4c1d95',
    darkGradientStart: '#0f0d27', darkGradientMid: '#1e1b4b', darkGradientEnd: '#2e1065',
    primaryAccent: '#6366f1',
    sidebarStart: '#1e1b4b', sidebarEnd: '#0f0e27',
    darkSidebarStart: '#0f0d27', darkSidebarEnd: '#05040f',
    sidebarActive: 'rgba(99,102,241,0.3)',
    backgroundEffect: 'none', cardStyle: 'default', scanlines: false,
  },
  {
    key: 'rose-gold', name: 'Rose Gold', emoji: '🌹', category: 'classic',
    gradientStart: '#f4a58c', gradientMid: '#e8836b', gradientEnd: '#d9a066',
    darkGradientStart: '#7a3320', darkGradientMid: '#9a4a30', darkGradientEnd: '#5c3410',
    primaryAccent: '#e8836b',
    sidebarStart: '#7a3320', sidebarEnd: '#3d1a10',
    darkSidebarStart: '#3d1a10', darkSidebarEnd: '#1c0c06',
    sidebarActive: 'rgba(232,131,107,0.3)',
    backgroundEffect: 'none', cardStyle: 'default', scanlines: false,
  },
  {
    key: 'minimalist', name: 'Minimalist', emoji: '⬜', category: 'classic',
    gradientStart: '#f5f5f4', gradientMid: '#e7e5e4', gradientEnd: '#d6d3d1',
    darkGradientStart: '#292524', darkGradientMid: '#1c1917', darkGradientEnd: '#0c0a09',
    primaryAccent: '#44403c',
    sidebarStart: '#f5f5f4', sidebarEnd: '#e7e5e4',
    darkSidebarStart: '#1c1917', darkSidebarEnd: '#0c0a09',
    sidebarActive: 'rgba(68,64,60,0.15)',
    backgroundEffect: 'none', cardStyle: 'flat', scanlines: false, flatHeader: true, flatSidebar: true,
  },
  {
    key: 'blueprint', name: 'Blueprint', emoji: '📐', category: 'classic',
    gradientStart: '#1e3a8a', gradientMid: '#1d4ed8', gradientEnd: '#1e40af',
    darkGradientStart: '#0f1d45', darkGradientMid: '#0f2770', darkGradientEnd: '#0f1f55',
    primaryAccent: '#2563eb',
    sidebarStart: '#1e3a8a', sidebarEnd: '#0f1d45',
    darkSidebarStart: '#0a1030', darkSidebarEnd: '#060a18',
    sidebarActive: 'rgba(147,197,253,0.25)',
    backgroundEffect: 'none', cardStyle: 'flat', scanlines: false,
  },
  {
    key: 'coffee', name: 'Coffee Shop', emoji: '☕', category: 'classic',
    gradientStart: '#6b4226', gradientMid: '#8b5e3c', gradientEnd: '#4a2c1a',
    darkGradientStart: '#3d2010', darkGradientMid: '#4a2c1a', darkGradientEnd: '#231208',
    primaryAccent: '#d97706',
    sidebarStart: '#3d2010', sidebarEnd: '#231208',
    darkSidebarStart: '#1a0e06', darkSidebarEnd: '#0e0702',
    sidebarActive: 'rgba(217,119,6,0.3)',
    backgroundEffect: 'steam', cardStyle: 'flat', scanlines: false, flatHeader: true,
  },
  {
    key: 'watercolor', name: 'Watercolor', emoji: '🎨', category: 'classic',
    gradientStart: '#a5b4fc', gradientMid: '#fbcfe8', gradientEnd: '#bfdbfe',
    darkGradientStart: '#3730a3', darkGradientMid: '#9d174d', darkGradientEnd: '#1e40af',
    primaryAccent: '#818cf8',
    sidebarStart: '#3730a3', sidebarEnd: '#1e3a8a',
    darkSidebarStart: '#1e1b4b', darkSidebarEnd: '#0f0d27',
    sidebarActive: 'rgba(129,140,248,0.3)',
    backgroundEffect: 'none', cardStyle: 'glass', scanlines: false,
  },
  {
    key: 'retro-arcade', name: 'Retro Arcade', emoji: '🕹️', category: 'classic',
    gradientStart: '#1a1030', gradientMid: '#6d28d9', gradientEnd: '#db2777',
    darkGradientStart: '#000000', darkGradientMid: '#050505', darkGradientEnd: '#0a0a0a',
    primaryAccent: '#00cc34',
    sidebarStart: '#0a0a0a', sidebarEnd: '#000000',
    darkSidebarStart: '#000000', darkSidebarEnd: '#000000',
    sidebarActive: 'rgba(0,255,65,0.2)',
    backgroundEffect: 'pixels', cardStyle: 'neon', scanlines: true,
    glowColor: '#00ff41', fontOverride: "'Press Start 2P', monospace",
  },

  // ── SEASONAL ─────────────────────────────────────────
  {
    key: 'winter', name: 'Winter', emoji: '❄️', category: 'seasonal',
    gradientStart: '#60a5fa', gradientMid: '#93c5fd', gradientEnd: '#bfdbfe',
    darkGradientStart: '#1e3a5f', darkGradientMid: '#1d4ed8', darkGradientEnd: '#1e40af',
    primaryAccent: '#60a5fa',
    sidebarStart: '#1e3a5f', sidebarEnd: '#0c1f3a',
    darkSidebarStart: '#0c1f3a', darkSidebarEnd: '#060e1c',
    sidebarActive: 'rgba(96,165,250,0.3)',
    backgroundEffect: 'snow', cardStyle: 'glass', scanlines: false,
  },
  {
    key: 'spring', name: 'Spring', emoji: '🌸', category: 'seasonal',
    gradientStart: '#ec4899', gradientMid: '#f472b6', gradientEnd: '#34d399',
    darkGradientStart: '#831843', darkGradientMid: '#9d174d', darkGradientEnd: '#065f46',
    primaryAccent: '#ec4899',
    sidebarStart: '#831843', sidebarEnd: '#3d0b1f',
    darkSidebarStart: '#3d0b1f', darkSidebarEnd: '#1c0510',
    sidebarActive: 'rgba(236,72,153,0.3)',
    backgroundEffect: 'petals', cardStyle: 'default', scanlines: false,
  },
  {
    key: 'summer', name: 'Summer', emoji: '☀️', category: 'seasonal',
    gradientStart: '#0891b2', gradientMid: '#0ea5e9', gradientEnd: '#38bdf8',
    darkGradientStart: '#164e63', darkGradientMid: '#0c4a6e', darkGradientEnd: '#083344',
    primaryAccent: '#f59e0b',
    sidebarStart: '#164e63', sidebarEnd: '#083344',
    darkSidebarStart: '#083344', darkSidebarEnd: '#031a22',
    sidebarActive: 'rgba(245,158,11,0.3)',
    backgroundEffect: 'waves', cardStyle: 'default', scanlines: false,
  },
  {
    key: 'autumn', name: 'Autumn', emoji: '🍂', category: 'seasonal',
    gradientStart: '#b45309', gradientMid: '#c2410c', gradientEnd: '#7c2d12',
    darkGradientStart: '#78350f', darkGradientMid: '#92400e', darkGradientEnd: '#431407',
    primaryAccent: '#d97706',
    sidebarStart: '#78350f', sidebarEnd: '#3c1a07',
    darkSidebarStart: '#3c1a07', darkSidebarEnd: '#1c0c03',
    sidebarActive: 'rgba(217,119,6,0.3)',
    backgroundEffect: 'leaves', cardStyle: 'default', scanlines: false,
  },

  // ── NATURE ───────────────────────────────────────────
  {
    key: 'sakura', name: 'Sakura', emoji: '🌺', category: 'nature',
    gradientStart: '#be185d', gradientMid: '#9d174d', gradientEnd: '#831843',
    darkGradientStart: '#831843', darkGradientMid: '#701535', darkGradientEnd: '#4c0519',
    primaryAccent: '#f472b6',
    sidebarStart: '#831843', sidebarEnd: '#4c0519',
    darkSidebarStart: '#4c0519', darkSidebarEnd: '#260210',
    sidebarActive: 'rgba(244,114,182,0.3)',
    backgroundEffect: 'sakura-petals', cardStyle: 'glass', scanlines: false,
  },
  {
    key: 'aurora', name: 'Aurora Borealis', emoji: '🌌', category: 'nature',
    gradientStart: '#0f172a', gradientMid: '#134e4a', gradientEnd: '#0d9488',
    darkGradientStart: '#011a14', darkGradientMid: '#022c22', darkGradientEnd: '#031a10',
    primaryAccent: '#34d399',
    sidebarStart: '#022c22', sidebarEnd: '#011a14',
    darkSidebarStart: '#010e0b', darkSidebarEnd: '#010e0b',
    sidebarActive: 'rgba(52,211,153,0.25)',
    backgroundEffect: 'aurora', cardStyle: 'glass', scanlines: false, glowColor: '#34d399',
  },
  {
    key: 'underwater', name: 'Underwater', emoji: '🐠', category: 'nature',
    gradientStart: '#0284c7', gradientMid: '#0369a1', gradientEnd: '#075985',
    darkGradientStart: '#0c4a6e', darkGradientMid: '#075985', darkGradientEnd: '#0a3555',
    primaryAccent: '#22d3ee',
    sidebarStart: '#0c4a6e', sidebarEnd: '#0a2d4a',
    darkSidebarStart: '#052030', darkSidebarEnd: '#021520',
    sidebarActive: 'rgba(34,211,238,0.3)',
    backgroundEffect: 'bubbles', cardStyle: 'glass', scanlines: false,
  },
  {
    key: 'storm', name: 'Storm', emoji: '⛈️', category: 'nature',
    gradientStart: '#64748b', gradientMid: '#475569', gradientEnd: '#334155',
    darkGradientStart: '#0f0f1a', darkGradientMid: '#1f2937', darkGradientEnd: '#111827',
    primaryAccent: '#60a5fa',
    sidebarStart: '#1c1c2e', sidebarEnd: '#0f0f1a',
    darkSidebarStart: '#08080f', darkSidebarEnd: '#08080f',
    sidebarActive: 'rgba(96,165,250,0.25)',
    backgroundEffect: 'lightning-rain', cardStyle: 'flat', scanlines: false,
  },
  {
    key: 'volcano', name: 'Volcano', emoji: '🔥', category: 'nature',
    gradientStart: '#0c0a09', gradientMid: '#7c2d12', gradientEnd: '#dc2626',
    darkGradientStart: '#0d0000', darkGradientMid: '#280505', darkGradientEnd: '#0d0500',
    primaryAccent: '#ef4444',
    sidebarStart: '#1a0000', sidebarEnd: '#0d0000',
    darkSidebarStart: '#080000', darkSidebarEnd: '#080000',
    sidebarActive: 'rgba(239,68,68,0.3)',
    backgroundEffect: 'embers', cardStyle: 'sharp', scanlines: false, glowColor: '#ff2200',
  },
  {
    key: 'space', name: 'Space', emoji: '🚀', category: 'nature',
    gradientStart: '#6366f1', gradientMid: '#7c3aed', gradientEnd: '#a855f7',
    darkGradientStart: '#050516', darkGradientMid: '#0a0f2e', darkGradientEnd: '#071830',
    primaryAccent: '#7c3aed',
    sidebarStart: '#0a0a2e', sidebarEnd: '#050516',
    darkSidebarStart: '#030310', darkSidebarEnd: '#010108',
    sidebarActive: 'rgba(124,58,237,0.3)',
    backgroundEffect: 'stars', cardStyle: 'glass', scanlines: false,
  },
  {
    key: 'cyberpunk', name: 'Cyberpunk', emoji: '🤖', category: 'nature',
    gradientStart: '#7c3aed', gradientMid: '#db2777', gradientEnd: '#06b6d4',
    darkGradientStart: '#050505', darkGradientMid: '#0f0020', darkGradientEnd: '#080808',
    primaryAccent: '#00fff5',
    sidebarStart: '#0a0a1a', sidebarEnd: '#050510',
    darkSidebarStart: '#050508', darkSidebarEnd: '#020205',
    sidebarActive: 'rgba(0,255,245,0.2)',
    backgroundEffect: 'none', cardStyle: 'neon', scanlines: true, glowColor: '#00fff5',
  },

  // ── SPORTS ───────────────────────────────────────────
  {
    key: 'soccer', name: 'Soccer Pitch', emoji: '⚽', category: 'sports',
    gradientStart: '#22c55e', gradientMid: '#16a34a', gradientEnd: '#15803d',
    darkGradientStart: '#14532d', darkGradientMid: '#166534', darkGradientEnd: '#052e16',
    primaryAccent: '#22c55e',
    sidebarStart: '#14532d', sidebarEnd: '#052e16',
    darkSidebarStart: '#052e16', darkSidebarEnd: '#021a0e',
    sidebarActive: 'rgba(34,197,94,0.3)',
    backgroundEffect: 'field-lines', cardStyle: 'flat', scanlines: false, flatHeader: true,
  },
  {
    key: 'football', name: 'Football Field', emoji: '🏈', category: 'sports',
    gradientStart: '#65a30d', gradientMid: '#4d7c0f', gradientEnd: '#3f6212',
    darkGradientStart: '#365314', darkGradientMid: '#3f6212', darkGradientEnd: '#1a2e05',
    primaryAccent: '#f59e0b',
    sidebarStart: '#365314', sidebarEnd: '#1a2e05',
    darkSidebarStart: '#1a2e05', darkSidebarEnd: '#0d1a02',
    sidebarActive: 'rgba(245,158,11,0.3)',
    backgroundEffect: 'field-lines', cardStyle: 'flat', scanlines: false,
  },
  {
    key: 'basketball', name: 'Basketball Court', emoji: '🏀', category: 'sports',
    gradientStart: '#a16207', gradientMid: '#b45309', gradientEnd: '#92400e',
    darkGradientStart: '#78350f', darkGradientMid: '#92400e', darkGradientEnd: '#431407',
    primaryAccent: '#f97316',
    sidebarStart: '#78350f', sidebarEnd: '#431407',
    darkSidebarStart: '#3c1a07', darkSidebarEnd: '#1c0c03',
    sidebarActive: 'rgba(249,115,22,0.3)',
    backgroundEffect: 'none', cardStyle: 'flat', scanlines: false, flatHeader: true, flatSidebar: true,
  },
  {
    key: 'baseball', name: 'Baseball Diamond', emoji: '⚾', category: 'sports',
    gradientStart: '#92400e', gradientMid: '#a16207', gradientEnd: '#78350f',
    darkGradientStart: '#78350f', darkGradientMid: '#92400e', darkGradientEnd: '#451a03',
    primaryAccent: '#d97706',
    sidebarStart: '#78350f', sidebarEnd: '#451a03',
    darkSidebarStart: '#3c1a07', darkSidebarEnd: '#1c0c03',
    sidebarActive: 'rgba(217,119,6,0.3)',
    backgroundEffect: 'none', cardStyle: 'default', scanlines: false,
  },
  {
    key: 'hockey', name: 'Hockey Rink', emoji: '🏒', category: 'sports',
    gradientStart: '#93c5fd', gradientMid: '#60a5fa', gradientEnd: '#3b82f6',
    darkGradientStart: '#1e3a8a', darkGradientMid: '#1e40af', darkGradientEnd: '#1d4ed8',
    primaryAccent: '#3b82f6',
    sidebarStart: '#1e3a8a', sidebarEnd: '#1e40af',
    darkSidebarStart: '#0c1f5a', darkSidebarEnd: '#060e2e',
    sidebarActive: 'rgba(59,130,246,0.3)',
    backgroundEffect: 'none', cardStyle: 'flat', scanlines: false,
  },
  {
    key: 'tennis', name: 'Tennis Court', emoji: '🎾', category: 'sports',
    gradientStart: '#b45309', gradientMid: '#c2410c', gradientEnd: '#a16207',
    darkGradientStart: '#78350f', darkGradientMid: '#92400e', darkGradientEnd: '#451a03',
    primaryAccent: '#fcd34d',
    sidebarStart: '#78350f', sidebarEnd: '#451a03',
    darkSidebarStart: '#3c1a07', darkSidebarEnd: '#1c0c03',
    sidebarActive: 'rgba(252,211,77,0.3)',
    backgroundEffect: 'none', cardStyle: 'flat', scanlines: false,
  },

  // ── HOLIDAY ──────────────────────────────────────────
  {
    key: 'christmas', name: 'Christmas', emoji: '🎄', category: 'holiday',
    gradientStart: '#7f1d1d', gradientMid: '#166534', gradientEnd: '#991b1b',
    darkGradientStart: '#7f1d1d', darkGradientMid: '#052e16', darkGradientEnd: '#7f1d1d',
    primaryAccent: '#fcd34d',
    sidebarStart: '#7f1d1d', sidebarEnd: '#052e16',
    darkSidebarStart: '#3d0b0b', darkSidebarEnd: '#021a0e',
    sidebarActive: 'rgba(252,211,77,0.3)',
    backgroundEffect: 'confetti', cardStyle: 'default', scanlines: false, glowColor: '#fcd34d',
  },
  {
    key: 'new-years', name: "New Year's", emoji: '🎆', category: 'holiday',
    gradientStart: '#1e1b4b', gradientMid: '#4c1d95', gradientEnd: '#b45309',
    darkGradientStart: '#050500', darkGradientMid: '#0f0d00', darkGradientEnd: '#050500',
    primaryAccent: '#fbbf24',
    sidebarStart: '#0a0a0a', sidebarEnd: '#050500',
    darkSidebarStart: '#030300', darkSidebarEnd: '#030300',
    sidebarActive: 'rgba(251,191,36,0.25)',
    backgroundEffect: 'confetti', cardStyle: 'neon', scanlines: false, glowColor: '#fbbf24',
  },
  {
    key: 'valentines', name: "Valentine's Day", emoji: '💕', category: 'holiday',
    gradientStart: '#e11d48', gradientMid: '#be123c', gradientEnd: '#9f1239',
    darkGradientStart: '#881337', darkGradientMid: '#9f1239', darkGradientEnd: '#4c0519',
    primaryAccent: '#f43f5e',
    sidebarStart: '#881337', sidebarEnd: '#4c0519',
    darkSidebarStart: '#4c0519', darkSidebarEnd: '#200210',
    sidebarActive: 'rgba(244,63,94,0.3)',
    backgroundEffect: 'hearts', cardStyle: 'default', scanlines: false,
  },
  {
    key: 'st-patricks', name: "St. Patrick's Day", emoji: '🍀', category: 'holiday',
    gradientStart: '#16a34a', gradientMid: '#15803d', gradientEnd: '#ca8a04',
    darkGradientStart: '#14532d', darkGradientMid: '#166534', darkGradientEnd: '#78350f',
    primaryAccent: '#16a34a',
    sidebarStart: '#14532d', sidebarEnd: '#052e16',
    darkSidebarStart: '#052e16', darkSidebarEnd: '#021a0e',
    sidebarActive: 'rgba(22,163,74,0.3)',
    backgroundEffect: 'shamrocks', cardStyle: 'default', scanlines: false,
  },
  {
    key: 'halloween', name: 'Halloween', emoji: '🎃', category: 'holiday',
    gradientStart: '#7c3aed', gradientMid: '#c2410c', gradientEnd: '#f97316',
    darkGradientStart: '#0d0500', darkGradientMid: '#2a0900', darkGradientEnd: '#0d0010',
    primaryAccent: '#f97316',
    sidebarStart: '#1a0a00', sidebarEnd: '#0d0500',
    darkSidebarStart: '#0d0500', darkSidebarEnd: '#060200',
    sidebarActive: 'rgba(249,115,22,0.3)',
    backgroundEffect: 'bats', cardStyle: 'sharp', scanlines: false,
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
  const headerMid   = isDark ? scheme.darkGradientMid   : scheme.gradientMid;
  const headerEnd   = isDark ? scheme.darkGradientEnd   : scheme.gradientEnd;
  const sidebarStart = isDark ? scheme.darkSidebarStart : scheme.sidebarStart;
  const sidebarEnd   = isDark ? scheme.darkSidebarEnd   : scheme.sidebarEnd;

  if (scheme.flatHeader) {
    root.style.setProperty('--header-bg', isDark ? scheme.darkGradientStart : scheme.gradientStart);
  } else {
    root.style.setProperty('--header-bg', `linear-gradient(135deg, ${headerStart} 0%, ${headerMid} 50%, ${headerEnd} 100%)`);
  }

  root.style.setProperty('--primary',       scheme.primaryAccent);
  root.style.setProperty('--primary-hover', scheme.primaryAccent);
  if (scheme.flatSidebar) {
    root.style.setProperty('--sidebar-bg', sidebarStart);
  } else {
    root.style.setProperty('--sidebar-bg', `linear-gradient(180deg, ${sidebarStart} 0%, ${sidebarEnd} 100%)`);
  }
  root.style.setProperty('--sidebar-active', scheme.sidebarActive);
  root.style.setProperty('--glow-color',    scheme.glowColor ?? 'transparent');
  root.style.setProperty('--theme-font',    scheme.fontOverride ?? 'inherit');

  root.setAttribute('data-card-style',  scheme.cardStyle);
  root.setAttribute('data-scanlines',   scheme.scanlines ? 'true' : 'false');
  root.setAttribute('data-effect',      scheme.backgroundEffect);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorMode, setColorMode]          = useState<ColorMode>('light');
  const [colorScheme, setColorSchemeState] = useState<ColorScheme>('ocean-blue');
  const [mounted, setMounted]              = useState(false);

  useEffect(() => {
    const savedMode   = localStorage.getItem('colorMode')   as ColorMode | null;
    const savedScheme = localStorage.getItem('colorScheme') as ColorScheme | null;
    const mode   = savedMode   && (savedMode === 'light' || savedMode === 'dark') ? savedMode : 'light';
    const scheme = savedScheme && COLOR_SCHEMES.find(s => s.key === savedScheme) ? savedScheme as ColorScheme : 'ocean-blue';
    setColorMode(mode);
    setColorSchemeState(scheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(colorMode);
    document.documentElement.setAttribute('data-scheme', colorScheme);
    localStorage.setItem('colorMode', colorMode);
    const scheme = COLOR_SCHEMES.find(s => s.key === colorScheme) ?? COLOR_SCHEMES[0];
    applySchemeVars(scheme, colorMode);
  }, [colorMode, colorScheme, mounted]);

  const toggleColorMode = () => setColorMode(prev => prev === 'light' ? 'dark' : 'light');

  const setColorScheme = (scheme: ColorScheme) => {
    setColorSchemeState(scheme);
    localStorage.setItem('colorScheme', scheme);
  };

  const currentScheme = COLOR_SCHEMES.find(s => s.key === colorScheme) ?? COLOR_SCHEMES[0];
  // Defer dark algorithm until after client mount to prevent SSR/client CSS hash mismatch
  const useDarkAlgorithm = mounted && colorMode === 'dark';

  const antdThemeConfig = {
    algorithm: useDarkAlgorithm ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
    token: { colorPrimary: currentScheme.primaryAccent, borderRadius: 8 },
  };

  return (
    <ThemeContext.Provider value={{ colorMode, colorScheme, toggleColorMode, setColorScheme, currentScheme }}>
      <ConfigProvider theme={antdThemeConfig}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
}
