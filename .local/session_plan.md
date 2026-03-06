# Objective
Connect the Python FastAPI backend to the Next.js frontend, and convert the Overview page to a personalized "Home" landing page. The Python backend code is provided via screenshots and must be replicated exactly. The Home page should greet the user by name and have placeholder containers for future content.

# Tasks

### T001: Set Up Python FastAPI Backend
- **Blocked By**: []
- **Details**:
  - Create the full Python backend directory structure matching the user's repo:
    ```
    api/
      __init__.py
      main.py
      v1/
        __init__.py
        middleware/
          __init__.py
          get_token.py
          get_connection.py
        routes/
          __init__.py
          tables.py
    ```
  - Copy the exact code from the screenshots into each file
  - Add CORS middleware to `main.py` so the frontend (port 5000) can call the backend (port 8000)
  - Create `requirements.txt` with the essential Python packages (fastapi, uvicorn, databricks-sql-connector, python-dotenv, pydantic)
  - Install Python and required packages using Replit's package management
  - Files: `api/main.py`, `api/__init__.py`, `api/v1/__init__.py`, `api/v1/middleware/__init__.py`, `api/v1/middleware/get_token.py`, `api/v1/middleware/get_connection.py`, `api/v1/routes/__init__.py`, `api/v1/routes/tables.py`, `requirements.txt`
  - Acceptance: Python backend files exist with exact code from screenshots

### T002: Update Dev Server to Run Both Frontend & Backend
- **Blocked By**: [T001]
- **Details**:
  - Modify `server/index.ts` to spawn both the Next.js dev process AND the FastAPI backend (uvicorn) as child processes
  - FastAPI runs on port 8000, Next.js on port 5000
  - Both processes get graceful shutdown handling
  - Files: `server/index.ts`
  - Acceptance: Running `npm run dev` starts both Next.js and FastAPI

### T003: Create Frontend API Service Layer
- **Blocked By**: [T001]
- **Details**:
  - Create `lib/api.ts` with functions that call the Python backend endpoints:
    - `fetchHealth()` → `GET /v1/health`
    - `fetchTableList()` → `GET /v1/tables/list`
    - `fetchTableData(tableName, limit?, offset?)` → `GET /v1/tables/{table_name}`
    - `fetchTableMetadata(tableName)` → `GET /v1/tables/{table_name}/info`
  - Use a configurable `API_BASE_URL` (defaults to `http://localhost:8000`)
  - Include proper error handling, TypeScript types for response shapes
  - Keep existing mock data in `tableRegistry.ts` as fallback when API is unreachable
  - Files: `lib/api.ts`
  - Acceptance: API functions are typed and handle errors gracefully

### T004: Update Table Page to Fetch from API
- **Blocked By**: [T002, T003]
- **Details**:
  - Update `app/(dashboard)/tables/[slug]/page.tsx` to call the API service for table data
  - Add loading states (already supported by DataTable component's `loading` prop)
  - Add error handling with user-friendly messages
  - Gracefully fall back to mock data if the API is unreachable (so the app still works without the backend)
  - Update `DataTable.tsx` to handle dynamic columns from the API (columns come from `/tables/{name}/info`)
  - Update sidebar table list to optionally fetch from `/v1/tables/list` endpoint
  - Files: `app/(dashboard)/tables/[slug]/page.tsx`, `components/DataTable.tsx`, `lib/tableRegistry.ts`
  - Acceptance: Table pages show loading spinner, then data from API (or fallback to mock data)

### T005: Convert Overview to Home Landing Page
- **Blocked By**: []
- **Details**:
  - Rename/redesign `app/(dashboard)/page.tsx` from "Dashboard Overview" to a "Home" landing page
  - Add personalized greeting section: "Welcome back, [User Name]" with current date/time
  - Keep the animated stats cards (they provide useful at-a-glance info)
  - Add placeholder content containers for future features (styled but with "Coming soon" or similar)
  - Update sidebar: rename "Overview" menu item to "Home"
  - User name can initially be a placeholder/config value; will be connected to backend user endpoint later
  - Files: `app/(dashboard)/page.tsx`, `components/DashboardSidebar.tsx`
  - Acceptance: Home page shows personalized greeting, stats, and placeholder containers

### T006: Environment Variables & Documentation
- **Blocked By**: [T001]
- **Details**:
  - Set up required environment variables as Replit secrets (prompt user for values they need to provide):
    - `VERSION` (set to "DEV" for development)
    - `DATABRICKS_ACCESS_TOKEN`
    - `SERVER_HOSTNAME`
    - `HTTP_PATH`
    - `CATALOG`
    - `SCHEMA`
    - `API_BASE_URL` (default http://localhost:8000)
  - Update `replit.md` with new architecture info (Python backend, API endpoints, env vars)
  - Files: `replit.md`
  - Acceptance: Documentation is updated, env vars are listed

### T007: Test & Validate
- **Blocked By**: [T004, T005, T006]
- **Details**:
  - Verify both servers start successfully
  - Test the Home page renders with greeting and containers
  - Test table pages show loading state then render data (from mock fallback if no Databricks credentials)
  - Test sidebar navigation between Home and table pages
  - Run e2e tests
  - Acceptance: All pages load without errors, navigation works, API calls are attempted with graceful fallback
