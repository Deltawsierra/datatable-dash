# RDM Lighthouse - Reference Data Management

## Overview
Next.js App Router dashboard for viewing reference data tables. Built with Ant Design, MagicUI animations, and Tailwind CSS. Desktop-focused design optimized for fast load times.

Developed by the **Genworth Data Governance** team.

## Tech Stack
- **Framework**: Next.js 16+ (App Router)
- **UI Library**: Ant Design 6.x
- **Animations**: MagicUI (NumberTicker, BorderBeam)
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Project Structure
```
app/                           # Next.js App Router
  layout.tsx                   # Root layout with metadata
  globals.css                  # Theme variables + Ant Design overrides
  (dashboard)/                 # Dashboard route group
    layout.tsx                 # Dashboard shell with sidebar/header
    page.tsx                   # Overview page with stat cards
    tables/[slug]/             # Dynamic table routes
      page.tsx                 # Table page component
      not-found.tsx            # 404 for invalid tables

components/                    # React components
  DashboardSidebar.tsx         # Left navigation (280px, collapsible)
  DashboardHeader.tsx          # Top header with theme toggle
  DataTable.tsx                # Generic Ant Design Table wrapper
  ThemeProvider.tsx            # Light/dark mode with localStorage
  magicui/                     # Animation components
    NumberTicker.tsx           # Animated number counter
    BorderBeam.tsx             # Gradient border effect

lib/                           # Utilities
  tableRegistry.ts             # Types, columns, mock data (replace with API)
  utils.ts                     # Utility functions (cn)

server/                        # Server entry
  index.ts                     # Next.js dev launcher
```

## Routes
- `/` - Dashboard Overview with animated statistics
- `/tables/states` - US States data table
- `/tables/countries` - Countries data table
- `/tables/departments` - Departments data table

## Features
- Animated statistics with NumberTicker
- Gradient animated borders on cards
- Collapsible sidebar (280px to 80px)
- Light/dark mode with localStorage persistence
- Desktop-first responsive design

## Running the App
```bash
npm install
npm run dev
```
Opens on port 5000.

## Production Build
```bash
npm run build
npm start
```

## Python API Integration
Replace mock data in `lib/tableRegistry.ts`:
1. Update `getTableData()` to fetch from Python API
2. Update `getColumns()` if column structure changes
3. Mark with TODO comments for easy location

## File Comments
Strategic 1-5 word comments mark major code blocks:
- `// Logo and branding`
- `// Navigation menu`
- `// Sidebar toggle`
- `// Theme toggle`
- `// Stats grid`
- `// Table header`

## Deployment
Ready for GitHub/GitLab deployment. Configure:
- Environment: `PORT=5000`
- Build: `npm run build`
- Start: `npm start`
