# RDM Lighthouse - Reference Data Management Dashboard

## Overview

RDM Lighthouse is a Next.js 16+ dashboard application for viewing and managing reference data tables. Built for the Genworth Data Governance team, it provides an enterprise-grade interface for browsing reference data. The application emphasizes desktop optimization, fast load times, and a professional data-focused user experience using Ant Design components with MagicUI animations. It connects to a Python FastAPI backend that queries Databricks for live data, with graceful fallback to mock data when the backend is unavailable.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Next.js 16+ with App Router**: Uses the modern App Router pattern with route groups for dashboard organization
- **Route Structure**: 
  - `/` - Home landing page with personalized greeting and stats
  - `/tables/[slug]` - Dynamic routing for data tables
- **Rationale**: App Router provides better layouts, server components support, and simplified routing over Pages Router

### Python Backend (FastAPI)
- **Location**: `api/` directory
- **Framework**: FastAPI with uvicorn ASGI server
- **Port**: 8000 (runs alongside Next.js on port 5000)
- **Endpoints**:
  - `GET /v1/health` — Health check
  - `GET /v1/tables/list` — List all tables in Databricks schema
  - `GET /v1/tables/{table_name}` — Fetch table data with limit/offset pagination
  - `GET /v1/tables/{table_name}/info` — Table metadata (columns + row count)
- **Data Source**: Databricks SQL via `databricks-sql-connector`
- **Auth**: Token-based (env var in DEV mode, `x-forwarded-access-token` header in production)
- **Structure**:
  - `api/main.py` — FastAPI app setup with CORS
  - `api/v1/routes/tables.py` — Table endpoints
  - `api/v1/middleware/get_token.py` — Token extraction logic
  - `api/v1/middleware/get_connection.py` — Databricks connection factory

### UI Component Strategy
- **Ant Design 6.x**: Primary component library for tables, cards, menus, and layout primitives
- **MagicUI Components**: Custom animated components (NumberTicker, BorderBeam) for visual polish
- **Tailwind CSS**: Utility-first styling for custom layouts and spacing

### Layout Architecture
- **Dashboard Shell Pattern**: Fixed sidebar (280px collapsible) + sticky header (64px) + scrollable content area
- **Theme System**: CSS variables for light/dark mode with localStorage persistence
- **Gradient Styling**: Header and sidebar use CSS gradients for visual hierarchy

### State Management
- **Local Component State**: React useState for UI state (sidebar collapse, theme toggle)
- **Context API**: ThemeProvider wraps dashboard for theme access
- **No Redux/Zustand**: Simple data display app doesn't require complex state management

### Data Layer
- **API Service**: `lib/api.ts` provides typed fetch functions for all backend endpoints
- **Table Registry**: `lib/tableRegistry.ts` contains mock data used as fallback when API is unavailable
- **Graceful Fallback**: Table pages try the API first, then fall back to mock data
- **Generic DataTable Component**: Type-safe table wrapper supporting any data shape

### Build & Development
- **Dev Server**: Custom `server/index.ts` spawns both Next.js (port 5000) and FastAPI (port 8000) as child processes
- **TypeScript**: Strict mode enabled with path aliases (`@/*`)
- **Build Script**: Uses tsx for TypeScript execution

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

### Development Tools
- **typescript**: Type checking
- **tsx**: TypeScript execution for dev server and build scripts
- **@types/node, @types/react, @types/react-dom**: Type definitions
