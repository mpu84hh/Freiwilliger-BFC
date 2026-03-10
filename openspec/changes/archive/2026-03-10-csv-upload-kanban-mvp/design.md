## Context

The CRM dashboard is a Next.js 15 App Router application. There is no existing functionality — this design covers the full MVP implementation: CSV ingestion, data modelling, KPI computation, and Kanban rendering. All processing happens client-side in the browser (no server-side API calls for MVP). The target user is a solo salesperson working on desktop.

## Goals / Non-Goals

**Goals:**
- Client-side CSV parsing with typed data model (`Deal`)
- 5-column Kanban board rendering deal cards with name, amount, priority, and due date
- Column totals computed and displayed in column headers
- 6 KPI cards displayed above the Kanban board
- Clean separation between data layer (`lib/`) and UI layer (`components/`) to prepare for V2 database migration

**Non-Goals:**
- Drag-and-drop between columns (foundation with dnd-kit is laid but persistence is V2)
- Authentication or multi-user support
- Real-time data updates
- Mobile-optimized layout (desktop-first, readable on mobile)

## Decisions

### 1. Client-side parsing only (no API route)
PapaParse runs entirely in the browser. CSV data is stored in React state (`useState`) and passed down as props. No server round-trip means zero latency after upload and no infrastructure needed.

**Alternative considered**: Upload to a Next.js API Route → parse server-side. Rejected for MVP because it adds complexity without benefit for solo usage.

### 2. Typed `Deal` model in `lib/types.ts`
A single shared `Deal` interface is the contract between parser, KPI engine, and UI. Column names from the CSV are mapped explicitly during parsing (not passed as raw strings), which makes the V2 migration to a database schema straightforward.

```ts
interface Deal {
  id: string
  taskName: string
  status: DealStatus
  dateCreated: Date
  dueDate: Date | null
  startDate: Date | null
  assignee: string
  priority: 'high' | 'medium' | 'low'
  tags: string[]
  content: string
  amount: number
}
```

### 3. KPI engine in `lib/kpi-engine.ts` (pure functions)
All 6 KPIs are computed by pure functions receiving `Deal[]`. This keeps KPI logic testable with Vitest and decoupled from rendering.

### 4. Status→column mapping via a constant
A `KANBAN_COLUMNS` ordered array defines the canonical column order and maps each `DealStatus` value to its display label. This makes reordering or adding columns a one-line change.

### 5. shadcn/ui for UI primitives
Cards, badges, and layout use shadcn/ui components to stay consistent with the design system constraint in CLAUDE.md. No new UI libraries are added.

## Risks / Trade-offs

- **Large CSV files** → Parsing happens synchronously on the main thread. For very large files (>10k rows), this could block the UI briefly. Mitigation: acceptable for solo MVP usage; can be moved to a Web Worker in V2.
- **CSV column name variations** → PapaParse header mapping is case-sensitive. If the user exports with slightly different column names, parsing will silently produce empty fields. Mitigation: add a validation step that checks for required columns and shows a clear error message.
- **No persistence** → Refreshing the page loses all data. Mitigation: acceptable for MVP; V2 adds database persistence.
