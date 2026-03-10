import { Deal } from '@/lib/types'
import {
  getCASigne,
  getCANegociation,
  getCARelancer,
  getValeurMoyenne,
  getNbDealsActifs,
  getCATotalPipeline,
} from '@/lib/kpi-engine'
import { KpiCard } from './kpi-card'

function formatEuro(amount: number): string {
  return amount.toLocaleString('fr-FR') + ' €'
}

interface KpiDashboardProps {
  deals: Deal[]
}

export function KpiDashboard({ deals }: KpiDashboardProps) {
  const kpis = [
    { label: 'CA signé', value: formatEuro(getCASigne(deals)) },
    { label: 'CA en négociation', value: formatEuro(getCANegociation(deals)) },
    { label: 'CA à relancer', value: formatEuro(getCARelancer(deals)) },
    { label: "Valeur moyenne d'un deal", value: formatEuro(getValeurMoyenne(deals)) },
    { label: 'Deals actifs', value: String(getNbDealsActifs(deals)) },
    { label: 'CA total du pipeline', value: formatEuro(getCATotalPipeline(deals)) },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {kpis.map((kpi) => (
        <KpiCard key={kpi.label} label={kpi.label} value={kpi.value} />
      ))}
    </div>
  )
}
