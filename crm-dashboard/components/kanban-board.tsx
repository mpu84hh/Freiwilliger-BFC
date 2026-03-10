import { Deal, KANBAN_COLUMNS } from '@/lib/types'
import { KanbanColumn } from './kanban-column'

interface KanbanBoardProps {
  deals: Deal[]
}

export function KanbanBoard({ deals }: KanbanBoardProps) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {KANBAN_COLUMNS.map((col) => {
        const columnDeals = deals.filter((d) => d.status === col.status)
        return (
          <KanbanColumn
            key={col.status}
            label={col.label}
            deals={columnDeals}
          />
        )
      })}
    </div>
  )
}
