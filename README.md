# RDM Lighthouse - Reference Data Management

A Next.js App Router dashboard for viewing and managing reference data tables. Built with Ant Design, MagicUI animated components, and Tailwind CSS.

Developed by the **Genworth Data Governance** team.

## Features

- Dashboard Overview with animated statistics cards
- Three data tables: States, Countries, Departments
- Collapsible sidebar navigation
- Light/Dark mode toggle
- Desktop-optimized design

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

```bash
npx next dev -p 5000
```

Or use the default Next.js port (3000):

```bash
npx next dev
```

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
  tableRegistry.ts             # Types, columns, mock data
  utils.ts                     # Utility functions (cn)

server/                        # Server entry
  index.ts                     # Next.js dev launcher
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

The mock data in `lib/tableRegistry.ts` is structured to easily replace with real API calls. Update `getTableData()` and `getColumns()` functions to fetch from your Python backend.

## License

MIT License - Genworth Data Governance
