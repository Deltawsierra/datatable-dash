# RDM Lighthouse - Reference Data Management Dashboard

## Overview

RDM Lighthouse is a Next.js 16+ dashboard application for viewing and managing reference data tables. Built for the Genworth Data Governance team, it provides an enterprise-grade interface for browsing reference data. The application emphasizes desktop optimization, fast load times, and a professional data-focused user experience using Ant Design components with MagicUI animations. It connects to a Python FastAPI backend that queries Databricks for live data, with graceful fallback to mock data when the backend is unavailable.

## User Preferences

Preferred communication style: Simple, everyday language.

## Repository Structure

The project root mirrors the real `lighthouse-rdm` repository layout:

```
lighthouse-rdm/
├── api/                        # Python FastAPI backend
│   ├── v1/
│   │   ├── middleware/
│   │   │   ├── __init__.py
│   │   │   ├── get_connection.py
│   │   │   └── get_token.py
│   │   └── routes/
│   │       ├── __init__.py
│   │       ├── tables.py
│   │       └── user.py
│   ├── __init__.py
│   ├── .gitignore
│   ├── env_template.md
│   ├── main.py
│   ├── README.md
│   └── requirements.txt
├── docs/                       # Project documentation
├── lighthouse-frontend/        # Next.js frontend application
│   ├── app/                    # Next.js App Router pages & layouts
│   ├── components/             # React components
│   ├── lib/                    # Utilities and API helpers
│   ├── scripts/                # Build/utility scripts
│   ├── server/
│   │   └── index.ts            # Dev server launcher (Next.js + FastAPI)
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.mjs
│   ├── tailwind.config.ts
│   └── ...
├── app.yaml                    # Databricks Apps deployment config
├── pyproject.toml              # Replit Python environment config
└── replit.md                   # This file
```

**Replit-specific files** (`pyproject.toml`, `uv.lock`, `.replit`) stay at root and are not part of the real repo.

## System Architecture

### Frontend Framework
- **Next.js 16+ with App Router**: Uses the modern App Router pattern with route groups for dashboard organization
- **Location**: `lighthouse-frontend/` subdirectory
- **Route Structure**: 
  - `/` - Home landing page with personalized greeting and stats
  - `/tables/[slug]` - Dynamic routing for data tables
- **Rationale**: App Router provides better layouts, server components support, and simplified routing over Pages Router

### Python Backend (FastAPI)
- **Location**: `api/` directory (at repo root)
- **Framework**: FastAPI with uvicorn ASGI server
- **Port**: 8000 (runs alongside Next.js on port 5000)
- **Endpoints**:
  - `GET /v1/health` — Health check
  - `GET /v1/tables/list` — List all tables in Databricks schema
  - `GET /v1/tables/{table_name}` — Fetch table data with limit/offset pagination
  - `GET /v1/tables/{table_name}/info` — Table metadata (columns + row count)
  - `GET /v1/user/info` — Current user info via Databricks SCIM API
- **Data Source**: Databricks SQL via `databricks-sql-connector`
- **Auth**: Token-based (env var in DEV mode, `x-forwarded-access-token` header in production)
- **Structure**:
  - `api/main.py` — FastAPI app setup
  - `api/v1/routes/tables.py` — Table endpoints
  - `api/v1/routes/user.py` — User info endpoint
  - `api/v1/middleware/get_token.py` — Token extraction logic
  - `api/v1/middleware/get_connection.py` — Databricks connection factory

### UI Component Strategy
- **Ant Design 6.x**: Primary component library for tables, cards, menus, and layout primitives
- **MagicUI Components**: Custom animated components (NumberTicker, BorderBeam) for visual polish
- **Tailwind CSS**: Utility-first styling for custom layouts and spacing

### Layout Architecture
- **Dashboard Shell Pattern**: Fixed sidebar (280px collapsible) + sticky header (64px) + scrollable content area
- **Theme System**: 49 themes across 8 categories with CSS variables, localStorage persistence, and immersive visual effects
  - Classic (6): Ocean Blue, Forest, Sunset, Midnight, Rose Gold, Minimalist
  - Seasonal (4): Winter (snow), Spring (petals), Summer (waves), Autumn (leaves)
  - Nature (8): Sakura (heavy petals), Aurora Borealis (aurora bands), Underwater (bubbles), Deep Sea (bioluminescent orbs), Lava (embers), Storm (lightning+rain), Fog (drifting layers), Volcano (embers)
  - Sports (8): Soccer Pitch, Football Field, Basketball Court, Baseball Diamond, Hockey Rink, Golf Course, Tennis Court, NASCAR (checkered)
  - Holiday (5): Christmas (confetti+gold), New Year's (confetti+neon), Valentine's Day (hearts), St. Patrick's Day (shamrocks), Olympics (rings)
  - Aesthetic (6): Vaporwave (grid+neon), Lo-Fi (rain), Coffee Shop (steam), Blueprint (grid), Sepia/Vintage, Watercolor
  - Special (4): Cyberpunk (neon+scanlines), Space (stars), Halloween (bats), Retro Arcade (pixels+scanlines+Press Start 2P)
  - Tech/Gaming (8): Matrix (canvas rain), Circuit Board (pulse), Neural Network (data packets), Terminal (amber phosphor), Data Flow (streaming), Dungeon RPG (torch flicker), Galaxy Rose (meteor streaks), Stained Glass
- **ThemeEffectsLayer**: Fixed overlay component (`lighthouse-frontend/components/ThemeEffectsLayer.tsx`) that renders CSS-animated particles/effects. Uses `pointer-events: none` so it never blocks interaction. Matrix rain uses canvas + requestAnimationFrame.
- **ThemeCategory**: 8 categories — classic, seasonal, nature, sports, holiday, aesthetic, special, tech
- **BackgroundEffect**: 28 effect values covering all themes
- **Gradient Styling**: Header and sidebar use CSS gradients for visual hierarchy; Minimalist and Cyberpunk use flat/solid colors

### State Management
- **Local Component State**: React useState for UI state (sidebar collapse, theme toggle)
- **Context API**: ThemeProvider wraps dashboard for theme access
- **No Redux/Zustand**: Simple data display app doesn't require complex state management

### Data Layer
- **API Proxy**: Next.js API route (`lighthouse-frontend/app/api/proxy/[...path]/route.ts`) proxies frontend requests to the FastAPI backend, avoiding CORS issues
- **API Service**: `lighthouse-frontend/lib/api.ts` provides typed fetch functions that call through the proxy (`/api/proxy/v1/...`)
- **Table Registry**: `lighthouse-frontend/lib/tableRegistry.ts` contains mock data used as fallback when API is unavailable
- **Graceful Fallback**: Table pages try the API first, then fall back to mock data
- **Generic DataTable Component**: Type-safe table wrapper supporting any data shape

### Build & Development
- **Dev Server**: `lighthouse-frontend/server/index.ts` spawns both Next.js (port 5000) and FastAPI (port 8000) as child processes
  - Next.js spawns with cwd = `lighthouse-frontend/` (inherits from workflow `cd lighthouse-frontend`)
  - FastAPI spawns with cwd = repo root (so `api.main:app` resolves correctly)
- **Workflow Command**: `cd lighthouse-frontend && npx tsx server/index.ts`
- **Databricks Apps Deployment**: `app.yaml` runs `npm --prefix ./lighthouse-frontend run start`
- **TypeScript**: Strict mode enabled with path aliases (`@/*`)

## Environment Variables

### Required for Databricks Connection
- `VERSION` — Set to "DEV" for local development (uses env token)
- `DATABRICKS_ACCESS_TOKEN` — Databricks personal access token
- `SERVER_HOSTNAME` — Databricks SQL warehouse hostname
- `HTTP_PATH` — Databricks SQL warehouse HTTP path
- `CATALOG` — Databricks catalog name
- `SCHEMA` — Databricks schema name

### Frontend Configuration
- `NEXT_PUBLIC_API_BASE_URL` — Backend URL (default: http://localhost:8000)

## External Dependencies

### Core Dependencies
- **next**: React framework with App Router
- **antd + @ant-design/icons + @ant-design/cssinjs**: UI component library and styling
- **react + react-dom**: React 18.3.x

### Animation & Styling
- **framer-motion**: Powers NumberTicker spring animations
- **tailwindcss + autoprefixer + postcss**: Utility CSS framework
- **clsx + tailwind-merge**: Class name utilities

### Icons
- **lucide-react**: Icon library for dashboard stats and Home page
- **@ant-design/icons**: Ant Design's icon set for navigation

### Python Backend
- **fastapi**: Web framework
- **uvicorn**: ASGI server
- **databricks-sql-connector**: Databricks SQL connectivity
- **python-dotenv**: Environment variable loading
- **pydantic**: Data validation
- **requests**: HTTP client for SCIM user info API

### Development Tools
- **typescript**: Type checking
- **tsx**: TypeScript execution for dev server and build scripts
- **@types/node, @types/react, @types/react-dom**: Type definitions
