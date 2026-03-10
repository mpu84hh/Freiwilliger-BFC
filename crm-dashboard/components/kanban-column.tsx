import { Deal } from '@/lib/types'
import { DealCard } from './deal-card'

function formatEuro(amount: number): string {
  return amount.toLocaleString('fr-FR') + ' €'
}

interface KanbanColumnProps {
  label: string
  deals: Deal[]
}

export function KanbanColumn({ label, deals }: KanbanColumnProps) {
  const total = deals.reduce((acc, d) => acc + d.amount, 0)

  return (
    <div className="flex w-72 flex-shrink-0 flex-col rounded-xl bg-gray-50 border border-gray-200">
      <div className="px-4 py-3 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-700 text-sm">{label}</h3>
          <span className="text-xs bg-gray-200 text-gray-600 rounded-full px-2 py-0.5">
            {deals.length}
          </span>
        </div>
        <p className="mt-0.5 text-base font-bold text-gray-900">
          {formatEuro(total)}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-2 max-h-[calc(100vh-280px)]">
        {deals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
        {deals.length === 0 && (
          <p className="text-center text-xs text-gray-400 py-6">Aucun deal</p>
        )}
      </div>
    </div>
  )
}
