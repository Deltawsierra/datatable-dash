---
title: 35 new themes with advanced animations
---
# 35 New Themes with Advanced Animations

## What & Why
Add 35 new immersive themes across 5 new categories (Nature, Sports, Holidays, Aesthetic, Tech/Gaming), each with unique CSS animations, proper light/dark mode CSS variable blocks, and animated effects. Brings the total theme count from 14 to 49.

## Done looks like
- Theme picker modal shows all 49 themes organized into expanded categories: Classic, Seasonal, Nature, Sports, Holidays, Aesthetic, Special, Tech/Gaming
- Every new theme has correct foreground/background contrast in both light mode AND dark mode
- Each applicable theme has a unique animated effect (rising bubbles, lightning flash, aurora waves, falling hearts, confetti, digital rain, steam, fog, etc.)
- Switching between light and dark mode while on any new theme produces visibly distinct and readable results
- All effects are pointer-events:none and non-distracting (subtle ambient motion)

## Out of scope
- MagicUI UI component integrations (header text effects, card hover enhancements, shimmer buttons) — that is a separate task
- Modifying the home page, data table, or sidebar beyond what the theme system already touches

## Tasks

1. **Extend ColorSchemeDefinition and add all 35 new scheme objects** — Add the following themes to `COLOR_SCHEMES` with all required fields (`key`, `name`, `emoji`, `category`, `forceDark`, gradient colors, sidebar colors, `backgroundEffect`, `cardStyle`, `scanlines`, `glowColor`, etc.):
   - **Nature (8)**: Sakura (distinct heavy petal fall + deeper pink/purple palette from Spring), Aurora Borealis (aurora ribbon bands, dark sky), Underwater (rising bubbles, ocean teal), Deep Sea (bioluminescent glowing orbs, near-black navy), Lava/Magma (ember particles rising, lava-crack card borders), Storm/Thunderstorm (diagonal rain + lightning flash overlay), Fog/Mist (drifting fog layers, muted grays), Volcano (ember particles, distinct dark red vs Lava)
   - **Sports (8)**: Soccer Pitch (turf texture overlay, white line grid), American Football (field hash marks, end zone gradient), Basketball Court (warm hardwood flat bg, orange accents), Baseball Diamond (earthy red clay/grass tones), Hockey Rink (ice white/light blue, clean red/blue lines), Golf Course (rich green fairway, cream/gold accents), Tennis Court (clay red or hard court blue surface), NASCAR Racing (checkered flag diagonal pattern, speed-line particles)
   - **Holidays (5)**: Christmas (deep red/green, heavy snowfall heavier than Winter, gold star glow), New Year's (black/gold, multicolor confetti burst), Valentine's Day (rose/burgundy, floating hearts), St. Patrick's Day (kelly green, shamrock particles), Olympics (white/gold, floating ring shapes)
   - **Aesthetic (5)**: Vaporwave/Synthwave (hot pink/purple, animated perspective grid floor, neon glow), Lo-Fi/Chill (warm amber, diagonal rain-on-glass effect), Coffee Shop (espresso brown/cream, steam wisps rising), Blueprint (navy bg, white technical grid pattern), Sepia/Vintage (warm amber/sepia, film-grain texture overlay)
   - **Tech/Gaming (9)**: Matrix/Digital Rain (black bg, green character columns raining down), Circuit Board (PCB green on black, trace-pulse light animation), Neural Network (dark bg, animated node-edge dot graph), Terminal Amber (black bg, amber/orange phosphor terminal glow — distinct from Retro Arcade), Data Flow (dark navy, horizontal streaming dots animation), Dungeon/Fantasy RPG (stone gray/dark brown, animated torch flicker), Galaxy Rose (deep space purple + soft pink petals drifting), Stained Glass (jewel tones — ruby, sapphire, emerald — geometric pattern overlay), Watercolor (soft pastel wash, bleed-border card treatment)

2. **Add new CSS keyframe animations** — Add all required `@keyframes` blocks to `globals.css` for the new effects:
   - `aurora-wave`: horizontal shifting gradient bands (transform + opacity) for Aurora Borealis
   - `bubble-rise`: vertical float upward with slight horizontal sway for Underwater/Deep Sea bubbles
   - `orb-pulse-drift`: slow pulsing opacity + slow upward drift for Deep Sea bioluminescent orbs
   - `ember-rise`: fast upward drift with fade for Lava/Volcano embers
   - `lightning-flash`: brief opacity-flash overlay for Storm theme
   - `rain-streak`: fast diagonal downward movement for Storm/Lo-Fi rain
   - `heart-float`: upward drift with gentle rotation for Valentine's Day
   - `shamrock-fall`: downward spin/fall for St. Patrick's Day
   - `confetti-fall`: multicolor random downward + spin for New Year's/Christmas
   - `fog-drift`: slow horizontal movement for Fog layers
   - `steam-rise`: slow upward wavy movement for Coffee Shop
   - `data-packet`: fast left-to-right horizontal slide for Data Flow
   - `torch-flicker`: scale + opacity flicker on a flame shape for Dungeon
   - `vaporwave-grid-scroll`: perspective grid lines scrolling toward viewer
   - `matrix-col-fall`: column-based text characters falling vertically for Matrix
   - `circuit-trace-pulse`: light pulse traveling along a horizontal line for Circuit Board
   - `checkered-scroll`: diagonal movement of checkered pattern for NASCAR
   - `meteor-streak`: diagonal fast streak with fade tail for Space/Galaxy Rose

3. **Add new effect React components in ThemeEffectsLayer** — Implement a new React component for each new animation type:
   - `AuroraEffect` — fixed overlay of 4-6 animated gradient bands sweeping horizontally
   - `BubblesEffect` — ~40 bubble particles rising upward with random sizes/delays
   - `OrbsEffect` (Deep Sea) — 20 slow-drifting glowing orbs with pulse animation
   - `EmbersEffect` — ~60 tiny ember particles floating upward (used by Lava and Volcano)
   - `LightningEffect` — periodic full-screen white flash overlay (every 4-8s randomly) + constant diagonal rain streaks
   - `RainEffect` — diagonal rain streaks only (Lo-Fi)
   - `FogEffect` — 3 layered semi-transparent fog strips drifting across the screen
   - `HeartsEffect` — ~30 heart SVG shapes floating upward
   - `ShamrocksEffect` — ~25 shamrock/clover shapes spinning and falling
   - `ConfettiEffect` — ~80 small colored rectangles/squares falling and rotating
   - `SteamEffect` — 5-8 wavy upward steam wisps
   - `DataPacketsEffect` — rows of small dots streaming left to right at different speeds/heights
   - `TorchEffect` — 2-3 animated flame shapes positioned at corners
   - `VaporwaveGridEffect` — CSS-perspective grid scrolling toward the viewer
   - `MatrixRainEffect` — JS-driven canvas or CSS columns of characters raining down
   - `CircuitPulseEffect` — animated light dots traveling along circuit trace lines
   - `CheckeredEffect` — diagonal checkered pattern overlay with scroll animation
   - `MeteorStreakEffect` — 15-20 diagonal meteor streaks crossing the screen

4. **Add per-scheme CSS variable blocks** — In `globals.css`, add both the light-mode and dark-mode variable blocks for every one of the 35 new themes, covering: `--background`, `--foreground`, `--foreground-muted`, `--card-bg`, `--card-border`, `--content-bg`, `--border-color`, `--table-header-bg`, `--table-row-hover`, `--sidebar-text`, `--sidebar-text-muted`, `--sidebar-border`, `--sidebar-hover`. Ensure that dark mode is always visibly darker than light mode with appropriate text contrast ratios.

5. **Update the theme picker modal categories** — Expand the category sidebar from 3 categories to 8: Classic, Seasonal, Nature, Sports, Holidays, Aesthetic, Special, Tech/Gaming. Update the `ThemeCategory` type, `CATEGORY_LABELS`, `CATEGORY_EMOJIS`, and the category filter logic in `DashboardHeader.tsx`. The sidebar should still show All + all new categories with counts.

## Relevant files
- `components/ThemeProvider.tsx`
- `components/ThemeEffectsLayer.tsx`
- `components/DashboardHeader.tsx`
- `app/globals.css`