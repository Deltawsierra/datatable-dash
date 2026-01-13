# RDM Dashboard - Reference Data Management

## Overview
A Next.js App Router dashboard for viewing and managing reference data tables. Built with Ant Design components, MagicUI animated effects, and Tailwind CSS. Desktop-focused design.

## Tech Stack
- **Framework**: Next.js 16+ (App Router)
- **UI Library**: Ant Design 6.x
- **Animations**: MagicUI (NumberTicker, BorderBeam, DotPattern)
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Project Structure
```
app/                           # Next.js App Router
  layout.tsx                   # Root layout with metadata
  globals.css                  # Global styles + theme variables
  (dashboard)/                 # Dashboard route group
    layout.tsx                 # Dashboard layout with ThemeProvider
    page.tsx                   # Overview page with animated stats
    tables/[slug]/             # Dynamic table routes
      page.tsx                 # Table page component
      not-found.tsx            # 404 for invalid tables

components/                    # React components
  DashboardSidebar.tsx         # Left navigation (280px, collapsible)
  DashboardHeader.tsx          # Top header with theme toggle
  DataTable.tsx                # Generic Ant Design Table component
  ThemeProvider.tsx            # Light/dark mode context
  magicui/                     # MagicUI animated components
    NumberTicker.tsx           # Animated number counter
    BorderBeam.tsx             # Animated border effect
    DotPattern.tsx             # SVG dot pattern

lib/                           # Utilities
  types.ts                     # TypeScript interfaces
  mockData.ts                  # Mock data for tables
  columns.tsx                  # Ant Design table column definitions
  utils.ts                     # Utility functions (cn)

server/                        # Server entry point
  index.ts                     # Spawns Next.js dev server
```

## Routes
- `/` - Dashboard Overview with animated statistics
- `/tables/states` - US States data table
- `/tables/countries` - Countries data table
- `/tables/departments` - Departments data table

## Features
- **Animated Statistics**: Overview page with NumberTicker animations
- **Border Beam Effects**: Gradient animated borders on stat cards
- **Collapsible Sidebar**: 280px sidebar with collapse to 80px
- **Light/Dark Mode**: Theme toggle in header, persists to localStorage
- **Desktop-First Design**: Optimized for desktop viewing
- **Type-Safe Tables**: Generic DataTable component with TypeScript

## Running the App
```bash
npm install
npm run dev
```
Opens on port 5000. Works with both Next.js Turbopack (dev) and Webpack (production build).

## Build for Production
```bash
npm run build
npm start
```

## Future API Integration
The mock data in `lib/mockData.ts` is structured to easily replace with real API calls. Update `getTableData()` and `getColumns()` functions to fetch from Azure Databricks backend.
