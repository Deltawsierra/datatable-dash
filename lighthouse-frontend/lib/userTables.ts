'use client';

// Lightweight client-side store for per-user "favorites" (pinned tables) and
// "recently viewed" tables. Persisted in localStorage — no backend required.
// Shared across components via useSyncExternalStore so the sidebar, table page,
// and home page stay in sync (including across browser tabs).

import { useSyncExternalStore, useCallback } from 'react';

const FAV_KEY = 'lighthouse:favorites';
const RECENT_KEY = 'lighthouse:recent';
const RECENT_MAX = 8;

export interface UserTablesState {
  favorites: string[];
  recent: string[];
}

const EMPTY: UserTablesState = { favorites: [], recent: [] };

let cache: UserTablesState = EMPTY;
let hydrated = false;
let storageBound = false;
const listeners = new Set<() => void>();

function readKey(key: string): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

function refresh(): void {
  cache = { favorites: readKey(FAV_KEY), recent: readKey(RECENT_KEY) };
}

function emit(): void {
  refresh();
  listeners.forEach((l) => l());
}

function getSnapshot(): UserTablesState {
  if (!hydrated && typeof window !== 'undefined') {
    refresh();
    hydrated = true;
  }
  return cache;
}

function getServerSnapshot(): UserTablesState {
  return EMPTY;
}

function subscribe(cb: () => void): () => void {
  listeners.add(cb);
  if (!storageBound && typeof window !== 'undefined') {
    window.addEventListener('storage', emit);
    storageBound = true;
  }
  return () => {
    listeners.delete(cb);
  };
}

export function toggleFavorite(name: string): void {
  if (typeof window === 'undefined' || !name) return;
  const set = new Set(cache.favorites);
  if (set.has(name)) set.delete(name);
  else set.add(name);
  window.localStorage.setItem(FAV_KEY, JSON.stringify([...set]));
  emit();
}

export function recordVisit(name: string): void {
  if (typeof window === 'undefined' || !name) return;
  const next = [name, ...cache.recent.filter((n) => n !== name)].slice(0, RECENT_MAX);
  window.localStorage.setItem(RECENT_KEY, JSON.stringify(next));
  emit();
}

export function useUserTables() {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isFavorite = useCallback(
    (name: string) => state.favorites.includes(name),
    [state.favorites],
  );
  return {
    favorites: state.favorites,
    recent: state.recent,
    isFavorite,
    toggleFavorite,
    recordVisit,
  };
}
