---
title: MagicUI component integrations
---
# MagicUI Component Integrations

## What & Why
Upgrade the overall UI polish by implementing MagicUI-inspired effects and animations across the app — header text, stat counters, table cards, buttons, and theme-specific enhancements. These are implemented directly in CSS/JS (not as npm packages) using the same patterns as MagicUI's open-source component code.

## Done looks like
- The app header title has a subtle animated shimmer/shiny sweep effect (animated-shiny-text style) on classic themes, and aurora/neon effects on dark themes
- Data table card has a Magic Card style hover effect — a soft radial glow that follows the mouse cursor
- The "Download as CSV" button has a shimmer shine sweep effect on hover
- Home page stat numbers use an enhanced NumberTicker with a blur-fade entrance animation
- The home page greeting text has a sparkle/glow entrance animation
- Cards in the dashboard use a subtle BorderBeam animated ring on their active/focused state
- Space theme uses a MeteorStreaks effect (diagonal meteor lines) as an additional background layer
- Vaporwave/Synthwave theme uses an animated perspective RetroGrid floor
- Aurora Borealis theme applies an Aurora Text-style shimmer to the header title text
- Terminal Amber theme shows a typewriter/typing animation on the header title
- Data Flow theme uses animated flowing beam lines across the content area background

## Out of scope
- Adding new themes (handled by Task #3)
- Changes to the FastAPI backend
- Changes to the sidebar navigation structure

## Tasks

1. **Animated Shiny Text on header title** — In `DashboardHeader.tsx`, wrap the app title in a shiny-text component that renders a moving gradient highlight sweep across the text (CSS `background-clip: text` + animated gradient `background-position`). Apply only on non-neon, non-retro-font themes. For aurora theme apply a slow multi-color aurora gradient sweep. For dark-background themes with a glow color, keep the existing neon-glow class.

2. **Magic Card hover effect on data table card** — In `DataTable.tsx`, add a `onMouseMove` handler to the table's outer Card that tracks cursor position and applies a radial gradient "spotlight" as a CSS custom property (`--mouse-x`, `--mouse-y`). Add the corresponding CSS in `globals.css` to show this as a subtle glowing overlay inside the card border that follows the mouse.

3. **Shimmer button on CSV download** — In `DataTable.tsx`, replace the plain Ant Design Button for CSV download with a custom shimmer-styled button that has a diagonal shine sweep on hover. Implement as a styled wrapper with a `::after` pseudo-element animation.

4. **Enhanced home page stat entrance + SparkleText greeting** — In the home page component, wrap stat number cards in a `BlurFade` entrance animation (opacity 0→1 + slight translateY, staggered per card using CSS animation-delay). Add a subtle sparkle/twinkle animation to the greeting text heading using a CSS shimmer keyframe.

5. **BorderBeam on focused/active table card** — Extend the existing `border-beam` keyframe animation to render as an animated gradient border ring on the DataTable card when it is in view (always-on, slow 4s rotation). Apply to the `ant-card` wrapper using the `offset-path` technique on a pseudo-element.

6. **Theme-specific MagicUI effects** — Add the following per-theme enhanced effects in `ThemeEffectsLayer.tsx`:
   - **Space + Galaxy Rose**: `MeteorStreaksEffect` — 15-20 diagonal fast-moving white/colored lines with fading tails, each on a random angle 30-60°
   - **Vaporwave/Synthwave**: `RetroGridEffect` — CSS perspective-transform grid floor with animated scroll (same visual as MagicUI's Retro Grid background, with neon grid lines)
   - **Aurora Borealis**: use `AuroraEffect` from Task #3 but also wrap the header title text in an Aurora Text-style animated gradient-text class
   - **Terminal Amber + Circuit Board**: enhanced flickering/scanline overlay with slight screen-curvature vignette CSS
   - **Data Flow**: `AnimatedBeamEffect` — multiple animated dashed horizontal beams/lines moving across the content area background at different speeds, colors matching the theme's primary

7. **Animated theme toggle button** — In `DashboardHeader.tsx` user menu, replace the plain sun/moon icon with a smooth animated transition between sun and moon SVGs using CSS clip-path morphing (inspired by MagicUI's Animated Theme Toggler). The icon should smoothly morph/rotate on toggle rather than instantly swapping.

## Relevant files
- `components/DashboardHeader.tsx`
- `components/DataTable.tsx`
- `components/ThemeEffectsLayer.tsx`
- `app/(dashboard)/page.tsx`
- `app/globals.css`