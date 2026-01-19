# Design Guidelines: RDM Lighthouse

Developed by the Genworth Data Governance team.

## Design Approach

**Selected Framework:** Ant Design System  
**Rationale:** This is a utility-focused, data-intensive admin dashboard where efficiency, consistency, and information density are paramount. Ant Design's enterprise-grade components provide the optimal foundation for rapid development and professional presentation of complex data.

**Design Principles:**
- Clarity over decoration
- Information efficiency
- Professional consistency
- Scannable hierarchy

---

## Typography

**Font System:** System font stack (Ant Design default)
- Headings: 16px (page titles), 14px (section headers)
- Body: 14px (standard text, table content)
- Labels: 12px (form labels, metadata)
- Weight: Regular (400) for body, Medium (500) for emphasis

---

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, and 8
- Component spacing: `p-4`, `gap-4`
- Section margins: `mb-6`, `mt-8`
- Tight spacing: `p-2`, `gap-2` (within cards/components)

**Grid Structure:**
- Sidebar: Fixed 280px width
- Main content: `flex-1` with max-width container
- Responsive breakpoint: Stack sidebar at `md` and below

---

## Component Specifications

### Left Sidebar
- Background: Ant Design's layout sidebar default (light neutral)
- Width: 280px fixed desktop, full-width drawer on mobile
- Padding: `p-4`
- Logo/branding area at top (60px height) with `mb-6`
- Navigation menu using `<Menu>` component, mode="inline"
- Table list items with clean text labels (no icons initially)

### Main Content Area
- Container: `max-w-7xl mx-auto p-6`
- Page header: Table name as h1 with `mb-6`
- Table wrapper: Ant Design `<Card>` component with minimal padding
- Table: `<Table>` component with default pagination, bordered style

### Data Table Configuration
- Row height: Default Ant Design (comfortable density)
- Pagination: Bottom placement, show total count
- Column headers: Medium weight, neutral gray background
- Hover states: Ant Design default row highlighting
- Empty state: Centered message with illustration placeholder

### Header (Optional Top Bar)
- Height: 64px
- Contains: App title, user avatar (right-aligned)
- Background: White with bottom border
- Padding: `px-6`

---

## Navigation Structure

**Sidebar Menu Items:**
- States
- Countries  
- Departments

Display as vertical list with clean text labels. Active state uses Ant Design's default highlight (subtle background tint).

---

## Responsive Behavior

**Desktop (≥768px):**
- Fixed sidebar visible
- Full data table with all columns

**Mobile (<768px):**
- Sidebar collapses to hamburger menu (drawer)
- Table scrolls horizontally or stacks priority columns
- Reduced padding: `p-4` instead of `p-6`

---

## Data Display Patterns

**Loading States:** Ant Design skeleton screens for table rows  
**Error States:** Alert component with message, retry action  
**Empty States:** Center-aligned text with subtle gray helper text

---

## Visual Restraint

- No hero images (this is an internal tool)
- Minimal animations (only loading spinners, drawer transitions)
- No gradient backgrounds or decorative elements
- Focus on data readability and functional clarity

---

This foundation creates a clean, professional dashboard optimized for data viewing and navigation efficiency. The design leverages Ant Design's battle-tested patterns while maintaining flexibility for future feature additions.