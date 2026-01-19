# RDM Lighthouse - Reference Data Management Dashboard

## Overview

RDM Lighthouse is a Next.js 16+ dashboard application for viewing and managing reference data tables. Built for the Genworth Data Governance team, it provides an enterprise-grade interface for browsing States, Countries, and Departments reference data. The application emphasizes desktop optimization, fast load times, and a professional data-focused user experience using Ant Design components with MagicUI animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Next.js 16+ with App Router**: Uses the modern App Router pattern with route groups for dashboard organization
- **Route Structure**: 
  - `/` - Dashboard overview with animated statistics
  - `/tables/[slug]` - Dynamic routing for data tables (states, countries, departments)
- **Rationale**: App Router provides better layouts, server components support, and simplified routing over Pages Router

### UI Component Strategy
- **Ant Design 6.x**: Primary component library for tables, cards, menus, and layout primitives
- **MagicUI Components**: Custom animated components (NumberTicker, BorderBeam) for visual polish
- **Tailwind CSS**: Utility-first styling for custom layouts and spacing
- **Rationale**: Ant Design provides enterprise-grade data components; MagicUI adds subtle animations without heavyweight dependencies

### Layout Architecture
- **Dashboard Shell Pattern**: Fixed sidebar (280px collapsible) + sticky header (64px) + scrollable content area
- **Theme System**: CSS variables for light/dark mode with localStorage persistence
- **Gradient Styling**: Header and sidebar use CSS gradients for visual hierarchy

### State Management
- **Local Component State**: React useState for UI state (sidebar collapse, theme toggle)
- **Context API**: ThemeProvider wraps dashboard for theme access
- **No Redux/Zustand**: Simple data display app doesn't require complex state management

### Data Layer
- **Table Registry Pattern**: Centralized `lib/tableRegistry.ts` contains all type definitions, column configurations, and mock data
- **Mock Data**: Currently uses hardcoded arrays - designed for easy replacement with API calls
- **Generic DataTable Component**: Type-safe table wrapper supporting any data shape with `{ id: string }` constraint

### Build & Development
- **Dev Server**: Custom `server/index.ts` spawns Next.js dev process on port 5000
- **TypeScript**: Strict mode enabled with path aliases (`@/*`)
- **Build Script**: Uses tsx for TypeScript execution

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
- **lucide-react**: Icon library for dashboard stats cards
- **@ant-design/icons**: Ant Design's icon set for navigation

### Development Tools
- **typescript**: Type checking
- **tsx**: TypeScript execution for dev server and build scripts
- **@types/node, @types/react, @types/react-dom**: Type definitions

### Future Integration Points
- **API Layer**: `lib/tableRegistry.ts` mock data designed to be replaced with fetch calls to Python backend
- **Database**: No current database; Drizzle references in package.json suggest planned database integration