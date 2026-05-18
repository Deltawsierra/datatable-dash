# Immersive Themes: Effects & Animations

## What & Why
Extend the existing 5-scheme theme system with 9 new themes that go beyond color changes. Each new theme has a unique background animation or particle effect, an optional font change, and a distinct card/border style — making theme switching feel like a genuine visual transformation rather than just a palette swap.

## Done looks like
- The theme modal (accessible via the avatar dropdown) shows all 14 themes grouped or listed together, each with its gradient swatch
- Selecting any of the 9 new themes immediately activates its visual effect:
  - **❄️ Winter**: Snowflakes fall continuously in the background across the full viewport
  - **🤖 Cyberpunk**: Dark background with neon cyan/magenta accents, a subtle CRT scanline overlay across the entire UI, and a neon glow on the app header title
  - **🌌 Space**: A deep navy/black background with slowly twinkling stars scattered across the viewport
  - **🎃 Halloween**: Black/orange/purple palette with small animated bats flying across the screen
  - **🍂 Autumn**: Warm orange/brown palette with falling leaves drifting down the viewport
  - **☀️ Summer**: Bright coral/teal palette with an animated wave shape at the bottom of the viewport
  - **🌸 Spring**: Soft pink/mint palette with cherry blossom petals drifting down
  - **🕹️ Retro Arcade**: Black background with bright neon primary colors, a pixel/grid texture pattern, a retro monospace font applied to the header and sidebar titles, and a scanline overlay
  - **⬜ Minimalist**: Clean off-white/warm gray, completely flat UI — no gradients on the header or sidebar (solid colors only), sharp or softly-rounded cards, no visual noise
- All effects are purely decorative overlays — they do not block clicks or interfere with the data table, search, or any interactive element
- Switching away from a theme immediately stops/removes its effect
- Both light and dark mode variants work for all 9 themes (the effect layer remains active; only colors shift)
- Theme selection and color mode persist in localStorage as before

## Out of scope
- Cursor trail effects (separate task if desired)
- Per-page effect variation (the effect is global across all dashboard pages)
- Sound effects
- Font loading for body text (only header/sidebar title font changes for Retro Arcade — keeping the data table legible)
- Animated transitions between theme switches (effects appear/disappear instantly on switch)

## Tasks

1. **Extend the theme data model** — Add new optional fields to `ColorSchemeDefinition` in `ThemeProvider.tsx`: `backgroundEffect` (enum of effect types), `glowColor` (for neon themes), `cardStyle` ('default' | 'glass' | 'neon' | 'flat' | 'sharp'), `scanlines` (boolean), and `fontOverride` (string). Add all 9 new scheme objects to the `COLOR_SCHEMES` array with their color values and the new fields populated. Update `applySchemeVars()` to set new CSS variables (`--glow-color`, `--theme-font`) and set `data-card-style` and `data-scanlines` attributes on the HTML element.

2. **Build the ThemeEffectsLayer component** — Create a new `components/ThemeEffectsLayer.tsx` that reads `currentScheme.backgroundEffect` from context and renders the appropriate animated overlay. The overlay must be `position: fixed`, full viewport, `pointer-events: none`, `z-index: 0` (behind the layout but visible). Implement each effect using React-generated DOM nodes animated entirely with CSS `@keyframes`:
   - `snow`: 40–60 small white/light-blue circles at randomised horizontal positions, falling at varied speeds and delays
   - `stars`: 80–120 tiny dots scattered at fixed positions, each pulsing opacity (twinkle) at staggered intervals
   - `leaves`: 20–30 rotated ellipses in warm orange/brown/red, falling with a gentle horizontal sway
   - `petals`: 20–30 pink ellipses/soft shapes drifting down with a slow horizontal drift
   - `bats`: 8–12 small SVG bat silhouettes flying horizontally across at different vertical positions and speeds
   - `waves`: A single fixed-height wave shape at the very bottom of the viewport, animated with a horizontal translate loop
   - `pixels`: A static diagonal dot-grid background pattern using CSS `background-image: radial-gradient` repeat — no animation needed, just texture
   - When `backgroundEffect` is `'none'`, render nothing
   
3. **Add scanlines and glow CSS** — In `globals.css`, add: a `.scanlines` CSS class using a `repeating-linear-gradient` overlay for the CRT effect; a `.neon-glow` class that applies `text-shadow` using `var(--glow-color)` in multiple layered values for the bloom look; `[data-card-style="glass"]` rules for backdrop blur + semi-transparent card backgrounds; `[data-card-style="neon"]` rules for a colored `box-shadow` using `var(--glow-color)`; `[data-card-style="flat"]` rules removing card shadows and using a flat solid border; `[data-card-style="sharp"]` rules with `border-radius: 0`. Also add all 9 new scheme CSS variable blocks for light and dark. Add the Press Start 2P font import (Google Fonts) for Retro Arcade and define a `.retro-font` class.

4. **Wire the effects layer into the dashboard layout** — Import and render `ThemeEffectsLayer` inside `app/(dashboard)/layout.tsx`, placing it as the first child inside the `ThemeProvider` wrapper so it sits behind the sidebar and content. Apply the `.neon-glow` class conditionally to the app title in `DashboardHeader.tsx` when the active scheme has `glowColor` set. Apply `.scanlines` as a fixed overlay div in `ThemeEffectsLayer` when `scanlines: true`. Apply the retro font CSS variable to the header title and sidebar title text when `fontOverride` is set.

5. **Update the theme picker modal** — In `DashboardHeader.tsx`, update the theme modal to display all 14 schemes. Add an emoji prefix to each theme name label in the list (❄️ Winter, 🤖 Cyberpunk, etc.) for quick visual scanning. The gradient swatch for flat/minimalist schemes should show a solid color block instead of a gradient. No other changes to the modal layout.

## Relevant files
- `components/ThemeProvider.tsx`
- `components/DashboardHeader.tsx`
- `app/(dashboard)/layout.tsx`
- `app/globals.css`
