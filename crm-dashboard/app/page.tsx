'use client'

import { useState } from 'react'
import { Deal } from '@/lib/types'
import { CsvUpload } from '@/components/csv-upload'
import { KpiDashboard } from '@/components/kpi-dashboard'
import { KanbanBoard } from '@/components/kanban-board'
import { Button } from '@/components/ui/button'
import { Upload } from 'lucide-react'

export default function Home() {
  const [deals, setDeals] = useState<Deal[] | null>(null)

  if (deals === null) {
    return <CsvUpload onDealsLoaded={setDeals} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">CRM Dashboard</h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setDeals(null)}
            className="gap-2"
          >
            <Upload className="h-4 w-4" />
            Importer un nouveau fichier
          </Button>
        </div>
      </header>

      <main className="p-6 space-y-6">
        <KpiDashboard deals={deals} />
        <KanbanBoard deals={deals} />
      </main>
    </div>
  )
}
