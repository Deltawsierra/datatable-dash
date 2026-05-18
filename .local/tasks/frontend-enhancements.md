# Frontend Enhancements: Table UX, Themes, CSV, Search

## What & Why
Four connected improvements to the data table and header experience:
1. Replace paginated table display with infinite vertical/horizontal scrolling so users see all data at once without clicking through pages.
2. Replace the existing light/dark toggle button with a user dropdown menu (clicking the avatar icon) that has a "Theme" option — opening a popup showing named color schemes with gradient swatches — and a "Settings" placeholder.
3. Add a "Download as CSV" button to each table page that exports the full currently-loaded dataset to the user's computer.
4. Add a client-side search bar above each table so users can filter visible rows by typing any text.

No backend changes are required. All four changes are purely frontend.

## Done looks like
- Opening any table page shows all rows in a scrollable container (no "Page 1 of N" pagination bar at the bottom).
- The table scrolls both vertically (through rows) and horizontally (through columns) without layout breaking.
- The user avatar in the top-right header opens a dropdown with "Theme" and "Settings" items.
- Clicking "Theme" opens a popup/modal listing at least 4–5 named color schemes (e.g. "Ocean Blue", "Forest", "Sunset", "Midnight", "Rose Gold"), each with a small gradient rectangle preview matching its colors.
- Selecting a theme changes the header gradient, sidebar gradient, and accent colors across the whole app, persisted in localStorage.
- The existing light/dark mode behavior is preserved and works within each color scheme (light and dark variants of each).
- A "Download Table as CSV" button appears in the table header area; clicking it immediately downloads a `.csv` file named after the table (e.g. `states.csv`) with all currently loaded rows and correct column headers.
- A search input appears above the table; typing filters the displayed rows in real time across all columns, with a "X of Y records" count updating to reflect the filtered result.

## Out of scope
- Backend-side filtering or search (all filtering happens in the browser on loaded data).
- Exporting formats other than CSV.
- A fully-implemented Settings screen (the "Settings" menu item is a placeholder for now).
- Fetching additional pages of data from Databricks on scroll (only currently-loaded rows are shown and exported).

## Tasks
1. **Scrollable table** — Remove pagination from the Ant Design Table and replace with a fixed-height scrollable container using both vertical and horizontal scroll. The table height should fill the available viewport below the header.

2. **CSV download** — Add a "Download as CSV" button to the DataTable component header area. Clicking it converts the current data array to CSV format (handling commas/quotes in values) and triggers a file download with the table name as the filename.

3. **In-table search bar** — Add a search input above the table body in the DataTable component. Filter displayed rows client-side on every keystroke, matching any column value. Update the record count display to show filtered vs. total counts.

4. **Color scheme system & theme picker** — Expand ThemeProvider to support multiple named color schemes (at minimum: Ocean Blue, Forest, Sunset, Midnight, Rose Gold), each defining their own header gradient, sidebar gradient, and primary accent color. Add CSS variable definitions for each scheme to globals.css. Replace the current light/dark toggle button in the header with a clickable user avatar dropdown containing "Theme" and "Settings" options. The "Theme" option opens a popup with a list of the named schemes, each showing a small gradient swatch preview. The selected scheme is saved to localStorage and applied on load.

## Relevant files
- `components/DataTable.tsx`
- `components/ThemeProvider.tsx`
- `components/DashboardHeader.tsx`
- `app/globals.css`
- `app/(dashboard)/tables/[slug]/page.tsx`
- `app/(dashboard)/layout.tsx`
