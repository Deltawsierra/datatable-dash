# RDM Dashboard - Reference Data Management

## Overview
A Next.js App Router dashboard for viewing and managing reference data tables. Built with Ant Design components and Tailwind CSS.

## Tech Stack
- **Framework**: Next.js 16+ (App Router)
- **UI Library**: Ant Design
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Project Structure
```
app/                      # Next.js App Router pages
  layout.tsx             # Root layout with Ant Design provider
  page.tsx               # Home page (redirects to /tables/states)
  globals.css            # Global styles
  (dashboard)/           # Dashboard route group
    layout.tsx           # Dashboard layout with sidebar
    tables/[slug]/       # Dynamic table routes
      page.tsx           # Table page component
      not-found.tsx      # 404 page

components/              # Reusable React components
  DashboardSidebar.tsx   # Left navigation sidebar
  DashboardHeader.tsx    # Top header bar
  DataTable.tsx          # Generic data table component

lib/                     # Utility modules
  types.ts               # TypeScript interfaces
  mockData.ts            # Mock data for tables
  columns.tsx            # Table column definitions
```

## Available Tables
- **States**: US state data (code, name, country, population, capital)
- **Countries**: World countries data (code, name, continent, currency, etc.)
- **Departments**: Company departments (code, name, description, budget, etc.)

## Running the App
The app runs on port 5000 using `npm run dev`.

## Future API Integration
The mock data in `lib/mockData.ts` is structured to be easily replaced with real API calls. The `getTableData()` and `getColumns()` functions can be updated to fetch from your backend API.

## Recent Changes
- Migrated from Vite + Express to Next.js App Router
- Implemented Ant Design components for sidebar, header, and tables
- Added TypeScript interfaces for type safety
- Created responsive dashboard layout
