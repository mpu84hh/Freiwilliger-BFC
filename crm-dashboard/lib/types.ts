export type DealStatus =
  | 'prospect'
  | 'qualifié'
  | 'négociation'
  | 'gagné - en cours'
  | 'à relancer'

export interface Deal {
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

export interface KanbanColumn {
  status: DealStatus
  label: string
}

export const KANBAN_COLUMNS: KanbanColumn[] = [
  { status: 'prospect', label: 'Prospect' },
  { status: 'qualifié', label: 'Qualifié' },
  { status: 'négociation', label: 'Négociation' },
  { status: 'à relancer', label: 'À relancer' },
  { status: 'gagné - en cours', label: 'Gagné' },
]
