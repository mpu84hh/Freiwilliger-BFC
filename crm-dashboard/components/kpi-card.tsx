import { Card, CardContent } from '@/components/ui/card'

interface KpiCardProps {
  label: string
  value: string
  sublabel?: string
}

export function KpiCard({ label, value, sublabel }: KpiCardProps) {
  return (
    <Card className="bg-white">
      <CardContent className="p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
          {label}
        </p>
        <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
        {sublabel && (
          <p className="mt-1 text-xs text-gray-400">{sublabel}</p>
        )}
      </CardContent>
    </Card>
  )
}
