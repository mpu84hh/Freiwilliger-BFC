import { Deal } from './types'

const sum = (deals: Deal[]) => deals.reduce((acc, d) => acc + d.amount, 0)

export function getCASigne(deals: Deal[]): number {
  return sum(deals.filter((d) => d.status === 'gagné - en cours'))
}

export function getCANegociation(deals: Deal[]): number {
  return sum(deals.filter((d) => d.status === 'négociation'))
}

export function getCARelancer(deals: Deal[]): number {
  return sum(deals.filter((d) => d.status === 'à relancer'))
}

export function getValeurMoyenne(deals: Deal[]): number {
  if (deals.length === 0) return 0
  return Math.round(sum(deals) / deals.length)
}

export function getNbDealsActifs(deals: Deal[]): number {
  return deals.length
}

export function getCATotalPipeline(deals: Deal[]): number {
  return sum(deals)
}
