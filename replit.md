# RDM Dashboard - Reference Data Management

## Overview
A Next.js App Router dashboard for viewing and managing reference data tables. Built with Ant Design components, MagicUI animated effects, and Tailwind CSS.

## Tech Stack
- **Framework**: Next.js 16+ (App Router)
- **UI Library**: Ant Design 6.x
- **Animations**: MagicUI (NumberTicker, BorderBeam, DotPattern)
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Project Structure
```
app/                           # Next.js App Router
  layout.tsx                   # Root layout with Ant Design provider
  globals.css                  # Global styles + animations
  (dashboard)/                 # Dashboard route group
    layout.tsx                 # Dashboard layout (sidebar + header)
    page.tsx                   # Overview page with animated stats
    tables/[slug]/             # Dynamic table routes
      page.tsx                 # Table page component
      not-found.tsx            # 404 for invalid tables

components/                    # Reusable React components
  DashboardSidebar.tsx         # Left navigation sidebar (280px)
  DashboardHeader.tsx          # Top header bar with toggle
  DataTable.tsx                # Generic data table component
  magicui/                     # MagicUI animated components
    NumberTicker.tsx           # Animated number counter
    BorderBeam.tsx             # Animated border beam effect
    DotPattern.tsx             # SVG dot pattern background

lib/                           # Utility modules
  types.ts                     # TypeScript interfaces
  mockData.ts                  # Mock data for tables
  columns.tsx                  # Table column definitions
  utils.ts                     # Utility functions (cn)
```

## Routes
- `/` - Dashboard Overview with animated statistics cards
- `/tables/states` - US States data table
- `/tables/countries` - Countries data table
- `/tables/departments` - Departments data table

## Features
- **Animated Statistics**: Overview page with NumberTicker animations
- **Border Beam Effects**: Gradient animated borders on stat cards
- **Collapsible Sidebar**: 280px sidebar with collapse to 80px
- **Responsive Design**: Grid layouts adapt to screen size
- **Type-Safe Tables**: Generic DataTable component with TypeScript

## Running the App
The app runs on port 5000 using `npm run dev`.

## Future API Integration
The mock data in `lib/mockData.ts` is structured to be easily replaced with real API calls. The `getTableData()` and `getColumns()` functions can be updated to fetch from Azure Databricks backend.

## Recent Changes
- Added MagicUI components (NumberTicker, BorderBeam, DotPattern)
- Created Dashboard Overview page with animated statistics
- Added Overview navigation item to sidebar
- Implemented gradient text effects and card styling
