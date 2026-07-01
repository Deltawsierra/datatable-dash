# Fix Theme Flash on Page Load

## What & Why
When the app first loads, there is a 1-2 second flash where the page appears unstyled (white sidebar, default colors) before snapping to the user's saved theme. This happens because the ThemeProvider reads localStorage and applies CSS variables only after React mounts on the client — the server has no knowledge of the saved theme, so the initial HTML renders with defaults first.

The fix is to inject a small blocking inline `<script>` in the HTML `<head>` that runs synchronously (before React) and applies the saved theme's CSS variables immediately. This is the same technique used by Radix, shadcn, and next-themes.

## Done looks like
- Page loads directly into the correct theme with no visible flash or unstyled moment
- Sidebar, header, and content area show the right colors from the very first paint
- Behavior is the same on hard refresh, browser restart, and navigation
- All 49 existing themes continue to work correctly
- No hydration warnings in the browser console

## Out of scope
- Changing how the ThemeProvider stores or reads the theme at runtime
- Changing the Ant Design algorithm hydration guard (that stays as-is to prevent React hydration mismatches)
- Server-side theme rendering via cookies

## Tasks
1. **Build a compact theme lookup table** — Extract a minimal JSON-safe representation of all 49 themes (only the fields used by `applySchemeVars`: gradientStart/Mid/End, dark variants, primaryAccent, sidebarStart/End, dark sidebar variants, sidebarActive, flatHeader, flatSidebar, glowColor, fontOverride, cardStyle, scanlines, backgroundEffect, forceDark) from the COLOR_SCHEMES array. This lookup is embedded directly in the blocking script string.

2. **Add the blocking inline script to layout.tsx** — In the root layout's `<head>`, add a `<script dangerouslySetInnerHTML>` tag containing a self-invoking function that reads `colorMode` and `colorScheme` from localStorage, looks up the saved scheme in the compact lookup table, and applies the exact same CSS custom properties that `applySchemeVars` would set (`--header-bg`, `--sidebar-bg`, `--primary`, `--sidebar-active`, `--glow-color`, `--theme-font`, and the `data-card-style`, `data-scanlines`, `data-effect`, `data-force-dark` attributes on `document.documentElement`). The script must be wrapped in a try/catch so any localStorage access failure (e.g. private browsing) silently falls back to defaults.

3. **Verify no double-apply jank** — Confirm that once the ThemeProvider mounts and calls `applySchemeVars` from its second `useEffect`, the values it sets are identical to what the blocking script already applied (for the saved theme), so there is no second visible change. If the scheme was not found or no scheme is saved, both the script and the provider fall back to ocean-blue light, which matches the existing `:root` CSS defaults.

## Relevant files
- `lighthouse-frontend/app/layout.tsx`
- `lighthouse-frontend/components/ThemeProvider.tsx:591-646`
- `lighthouse-frontend/app/globals.css:1-42`
