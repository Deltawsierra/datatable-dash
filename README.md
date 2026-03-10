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










Python FastAPI Backend Setup
What was done: Your team's Python backend code was added to the project exactly as provided in the screenshots. No modifications were made to any backend files.

Files added:

api/main.py — The main FastAPI app. It creates the server and mounts all the API routes under the /v1 path.
api/v1/routes/tables.py — The four API endpoints:
GET /v1/health — Returns {"Status": "Active"} to confirm the backend is running
GET /v1/tables/list — Queries Databricks to list all tables in the configured schema
GET /v1/tables/{table_name} — Fetches actual row data from a Databricks table (with pagination)
GET /v1/tables/{table_name}/info — Gets metadata about a table (column names, types, and total row count)
api/v1/middleware/get_token.py — Handles authentication. In DEV mode, it reads the Databricks token from an environment variable. In production, it reads it from a request header.
api/v1/middleware/get_connection.py — Creates the actual connection to Databricks SQL using the token and server credentials.
api/v1/__init__.py and api/v1/routes/__init__.py and api/v1/middleware/__init__.py — Standard Python package files that wire the modules together.
2. Dev Server Updated to Run Both Frontend and Backend
File changed: server/index.ts

What it does: This is the single command that starts the entire application. Previously it only started Next.js. Now it starts two processes side by side:

Next.js on port 5000 — the frontend that users see in their browser
FastAPI on port 8000 — the Python backend that talks to Databricks
When you run npm run dev, both servers start together. If Next.js stops, the backend stops too. If you press Ctrl+C, both shut down cleanly.

The file also sets NODE_ENV=development internally (inside the code rather than as a command-line prefix), which means it works on both Windows PowerShell and Linux/Mac without any extra tools.

3. Frontend API Service Layer
File added: lib/api.ts

What it does: This is the frontend's "phone book" for talking to the backend. It defines typed functions for every API endpoint:

fetchHealth() — Checks if the backend is alive
fetchTableList() — Gets the list of all tables from Databricks
fetchTableData(tableName) — Fetches row data for a specific table
fetchTableMetadata(tableName) — Gets column info and row count for a table
isApiAvailable() — Returns true/false for whether the backend is reachable
Each function includes TypeScript type definitions that match the exact JSON structure the backend returns, so the frontend always knows what shape of data to expect.

All calls go to /api/proxy/v1/... (explained in the next section).

4. Next.js Proxy Route (The Bridge Between Frontend and Backend)
File added: app/api/proxy/[...path]/route.ts

Why it exists: The browser runs on port 5000 (Next.js), but the Python backend runs on port 8000. Normally, when a browser tries to talk to a different port, the browser blocks it for security reasons (this is called CORS). To avoid this without modifying the backend code, we created a "proxy" — a middleman that lives inside Next.js itself.

How it works:

The browser makes a request to localhost:5000/api/proxy/v1/health (same port as the frontend — no CORS issue)
The Next.js server receives it, strips off the /api/proxy part, and forwards it to localhost:8000/v1/health (the Python backend)
The Python backend responds
Next.js passes the response back to the browser
The browser never talks directly to port 8000. Everything goes through port 5000. This means the backend code stays completely untouched — no CORS middleware needed.

The proxy handles all HTTP methods (GET, POST, PUT, DELETE) and forwards authentication headers when present.

5. Table Pages Now Fetch from the API (With Graceful Fallback)
File changed: app/(dashboard)/tables/[slug]/page.tsx

What changed: Each table page (States, Countries, Departments) now tries to load data from the real backend first. Here's the flow:

When you open /tables/states, the page calls two API functions simultaneously:
fetchTableData("states") — to get the actual rows
fetchTableMetadata("states") — to get column definitions and total row count
If the API responds (Databricks is connected and authenticated): The page displays the live data with a green "Live" tag
If the API fails (no Databricks credentials, backend down, etc.): The page catches the error and falls back to the mock/sample data from tableRegistry.ts, showing a "Sample Data" tag instead
Right now, since no Databricks credentials are configured, every table page shows "Sample Data" — but the moment those credentials are added, the pages will automatically switch to showing live Databricks data without any code changes.

6. DataTable Component Updated
File changed: components/DataTable.tsx

What changed: Two new props were added:

totalRows — Shows the true total row count from Databricks (not just how many rows are displayed on the current page)
usingApi — Controls whether the "Live" or "Sample Data" tag appears next to the table title
This way, when viewing a table with 50,000 rows in Databricks but only displaying 1,000, the header shows "50,000 records" and the green "Live" tag.

7. Home Page Converted to Personalized Landing Page
File changed: app/(dashboard)/page.tsx

What it was before: A basic overview page.

What it is now: A personalized home screen with:

Time-aware greeting — "Good morning," "Good afternoon," or "Good evening" based on the time of day, plus the current date and time
Three stat cards — States, Countries, and Departments with animated number counters (the numbers tick up with a spring animation when the page loads)
API Status card — Shows a live indicator:
Green dot + "Backend connected" when the Python backend is reachable
Red dot + "Backend offline — using mock data" when it's not
The page checks this automatically by calling the /v1/health endpoint through the proxy
Reference Data card — Quick summary showing total table count and total records
8. Sidebar Renamed from "Overview" to "Home"
File changed: components/DashboardSidebar.tsx (which you've since renamed to MainSidebar.tsx)

The first menu item was changed from "Overview" to "Home" to match the new landing page concept.

Summary of the Data Flow
Browser (port 5000)
    ↓ calls /api/proxy/v1/tables/states
Next.js Proxy Route (port 5000, server-side)
    ↓ forwards to http://localhost:8000/v1/tables/states
Python FastAPI (port 8000)
    ↓ connects using Databricks token
Databricks SQL Warehouse
    ↓ returns query results
Python FastAPI → Next.js Proxy → Browser displays the data
If any step in that chain fails, the frontend catches the error and shows the local sample data instead. Nothing crashes — the user always sees a working table.
