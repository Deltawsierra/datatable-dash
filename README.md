# RDM Dashboard - Reference Data Management

A Next.js App Router dashboard for viewing and managing reference data tables. Built with Ant Design, MagicUI animated components, and Tailwind CSS.

## Features

- Dashboard Overview with animated statistics cards
- Three data tables: States, Countries, Departments
- Collapsible sidebar navigation
- Light/Dark mode toggle
- Responsive design

## Local Development

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:5000](http://localhost:5000)

### Alternative: Direct Next.js Command

If the default script doesn't work, you can run Next.js directly:

```bash
npx next dev -p 5000
```

Or use the default Next.js port (3000):

```bash
npx next dev
```

Then open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/                           # Next.js App Router
  layout.tsx                   # Root layout with Ant Design provider
  globals.css                  # Global styles + theme variables
  (dashboard)/                 # Dashboard route group
    layout.tsx                 # Dashboard layout (sidebar + header)
    page.tsx                   # Overview page with animated stats
    tables/[slug]/             # Dynamic table routes
      page.tsx                 # Table page component

components/                    # React components
  DashboardSidebar.tsx         # Left navigation (280px, collapsible)
  DashboardHeader.tsx          # Top header with theme toggle
  DataTable.tsx                # Generic table component
  ThemeProvider.tsx            # Light/dark mode context
  magicui/                     # MagicUI animated components
    NumberTicker.tsx           # Animated number counter
    BorderBeam.tsx             # Animated border effect
    DotPattern.tsx             # SVG dot pattern

lib/                           # Utilities
  types.ts                     # TypeScript interfaces
  mockData.ts                  # Mock data for tables
  columns.tsx                  # Table column definitions
  utils.ts                     # Utility functions
```

## Routes

- `/` - Dashboard Overview with statistics
- `/tables/states` - US States data table
- `/tables/countries` - Countries data table
- `/tables/departments` - Departments data table

## Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **UI Library**: Ant Design 6.x
- **Animations**: MagicUI components
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Building for Production

```bash
npm run build
npm start
```

## Future API Integration

The mock data in `lib/mockData.ts` is structured to easily replace with real API calls. Update `getTableData()` and `getColumns()` functions to fetch from your backend.
