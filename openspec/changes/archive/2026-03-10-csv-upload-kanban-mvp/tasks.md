## 1. Project Setup & Dependencies

- [x] 1.1 Install PapaParse and its TypeScript types (`papaparse`, `@types/papaparse`)
- [x] 1.2 Install dnd-kit packages (`@dnd-kit/core`, `@dnd-kit/sortable`, `@dnd-kit/utilities`)
- [x] 1.3 Ensure shadcn/ui `card`, `badge`, and `button` components are available (add via CLI if missing)

## 2. Data Layer

- [x] 2.1 Create `lib/types.ts` — define `DealStatus` union type, `Deal` interface, and `KANBAN_COLUMNS` ordered constant
- [x] 2.2 Create `lib/csv-parser.ts` — implement `parseCSV(file: File): Promise<Deal[]>` using PapaParse with header mapping, type coercion (amount as integer, tags as array, dates as Date), and required-column validation
- [x] 2.3 Create `lib/kpi-engine.ts` — implement pure functions for all 6 KPIs: `getCASigne`, `getCANegociation`, `getCARelancer`, `getValeurMoyenne`, `getNbDealsActifs`, `getCATotalPipeline`

## 3. CSV Upload Component

- [x] 3.1 Create `components/csv-upload.tsx` — file picker UI with drag-and-drop zone, accepts only `.csv`, calls `parseCSV` on selection
- [x] 3.2 Add error state display — show missing columns error or parse error with clear message
- [x] 3.3 Expose `onDealsLoaded: (deals: Deal[]) => void` callback prop

## 4. KPI Dashboard Component

- [x] 4.1 Create `components/kpi-card.tsx` — single KPI card with label, value, and optional sublabel
- [x] 4.2 Create `components/kpi-dashboard.tsx` — renders 6 `KpiCard` components in a responsive grid, accepts `deals: Deal[]` and computes KPIs via `kpi-engine.ts`

## 5. Kanban Board Components

- [x] 5.1 Create `components/deal-card.tsx` — renders contact name, formatted amount (e.g. `15 000 €`), priority badge, and due date; handles missing due date gracefully
- [x] 5.2 Create `components/kanban-column.tsx` — renders column header with label + total amount, and a list of `DealCard` components
- [x] 5.3 Create `components/kanban-board.tsx` — renders 5 `KanbanColumn` components in order using `KANBAN_COLUMNS`, accepts `deals: Deal[]`, groups deals by status

## 6. Main Page Orchestration

- [x] 6.1 Update `app/page.tsx` — manage `deals` state (`Deal[] | null`), render `CsvUpload` when null, render `KpiDashboard` + `KanbanBoard` when deals are loaded
- [x] 6.2 Add "Upload new file" button in dashboard view to reset state and return to upload screen

## 7. Visual Polish

- [x] 7.1 Style the upload zone — centered layout, dashed border, upload icon, hover state
- [x] 7.2 Style KPI cards — clear label/value hierarchy, consistent spacing, 6-card grid
- [x] 7.3 Style Kanban columns — fixed width, scrollable card list, column header with total prominently displayed
- [x] 7.4 Style priority badges — distinct colors for High (red), Medium (yellow), Low (grey)
