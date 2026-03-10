import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Deal } from '@/lib/types'

const priorityConfig: Record<
  Deal['priority'],
  { label: string; className: string }
> = {
  high: { label: 'High', className: 'bg-red-100 text-red-700 border-red-200 hover:bg-red-100' },
  medium: { label: 'Medium', className: 'bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-100' },
  low: { label: 'Low', className: 'bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-100' },
}

function formatEuro(amount: number): string {
  return amount.toLocaleString('fr-FR') + ' €'
}

function formatDate(date: Date | null): string {
  if (!date) return '—'
  return date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

interface DealCardProps {
  deal: Deal
}

export function DealCard({ deal }: DealCardProps) {
  const priority = priorityConfig[deal.priority] ?? priorityConfig.medium

  return (
    <Card className="border border-gray-200 bg-white shadow-sm">
      <CardContent className="p-3 space-y-2">
        <p className="text-sm font-medium text-gray-900 leading-tight">
          {deal.taskName}
        </p>

        <p className="text-base font-bold text-gray-800">
          {formatEuro(deal.amount)}
        </p>

        <div className="flex items-center justify-between">
          <Badge variant="outline" className={`text-xs ${priority.className}`}>
            {priority.label}
          </Badge>
          <span className="text-xs text-gray-400">{formatDate(deal.dueDate)}</span>
        </div>
      </CardContent>
    </Card>
  )
}
