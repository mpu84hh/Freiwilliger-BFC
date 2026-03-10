## Why

The CRM dashboard needs its core MVP functionality: users must be able to import their sales pipeline data via CSV and immediately visualize it as an interactive Kanban board organized by deal status. Without these two features, the application has no value.

## What Changes

- Add a CSV file upload interface as the app entry point — users drop or select their CRM export file
- Parse CSV data client-side using PapaParse, mapping columns to typed `Deal` objects
- Render a 5-column Kanban board (`Prospect → Qualifié → Négociation → À relancer → Gagné`)
- Display deal cards with: contact name, company, deal amount (€), priority badge, and due date
- Show cumulative deal total per column in the column header
- Compute and display the 6 KPI indicators at the top of the page

## Capabilities

### New Capabilities

- `csv-upload`: Client-side CSV file ingestion — file picker UI, PapaParse parsing, column mapping to `Deal` type, validation and error handling
- `kanban-board`: 5-column Kanban view — deal cards with key fields, column totals, ordered by sales cycle stage
- `kpi-dashboard`: 6 KPI cards displayed at the top of the page, computed from parsed deal data

### Modified Capabilities

<!-- None — this is the initial implementation of the MVP features -->

## Impact

- **New files**: `lib/types.ts`, `lib/csv-parser.ts`, `lib/kpi-engine.ts`, `components/csv-upload.tsx`, `components/kanban-board.tsx`, `components/deal-card.tsx`, `components/kpi-card.tsx`
- **Modified files**: `app/page.tsx` (main orchestration), `app/layout.tsx` if needed
- **Dependencies**: PapaParse (CSV parsing), dnd-kit (Kanban drag-and-drop foundation), Tailwind CSS + shadcn/ui (UI components)
- **No breaking changes** — this is a greenfield MVP implementation
