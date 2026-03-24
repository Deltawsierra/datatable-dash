'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';

export type ColorMode = 'light' | 'dark';

export type ColorScheme = 'ocean-blue' | 'forest' | 'sunset' | 'midnight' | 'rose-gold';

export interface ColorSchemeDefinition {
  key: ColorScheme;
  name: string;
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
}

export const COLOR_SCHEMES: ColorSchemeDefinition[] = [
  {
    key: 'ocean-blue',
    name: 'Ocean Blue',
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
  },
  {
    key: 'forest',
    name: 'Forest',
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
  },
  {
    key: 'sunset',
    name: 'Sunset',
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
  },
  {
    key: 'midnight',
    name: 'Midnight',
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
  },
  {
    key: 'rose-gold',
    name: 'Rose Gold',
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

  root.style.setProperty('--header-bg', `linear-gradient(135deg, ${headerStart} 0%, ${headerMid} 50%, ${headerEnd} 100%)`);
  root.style.setProperty('--primary', scheme.primaryAccent);
  root.style.setProperty('--primary-hover', scheme.primaryAccent);
  root.style.setProperty('--sidebar-bg', `linear-gradient(180deg, ${sidebarStart} 0%, ${sidebarEnd} 100%)`);
  root.style.setProperty('--sidebar-active', scheme.sidebarActive);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorMode, setColorMode] = useState<ColorMode>('light');
  const [colorScheme, setColorSchemeState] = useState<ColorScheme>('ocean-blue');

  useEffect(() => {
    const savedMode = localStorage.getItem('colorMode') as ColorMode | null;
    const savedScheme = localStorage.getItem('colorScheme') as ColorScheme | null;
    const mode = savedMode && (savedMode === 'light' || savedMode === 'dark') ? savedMode : 'light';
    const scheme = savedScheme && COLOR_SCHEMES.find(s => s.key === savedScheme) ? savedScheme : 'ocean-blue';
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
