import Papa from 'papaparse'
import { Deal, DealStatus } from './types'

const REQUIRED_COLUMNS = [
  'Task Name',
  'Status',
  'Date Created',
  'Due Date',
  'Start Date',
  'Assignees',
  'Priority',
  'Tags',
  'Task Content',
  'Montant Deal',
]

function parseDate(value: string): Date | null {
  if (!value || value.trim() === '') return null
  const d = new Date(value.trim())
  return isNaN(d.getTime()) ? null : d
}

export class CsvParseError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'CsvParseError'
  }
}

export function parseCSV(file: File): Promise<Deal[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete(results) {
        const headers = results.meta.fields ?? []
        const missing = REQUIRED_COLUMNS.filter((col) => !headers.includes(col))

        if (missing.length > 0) {
          reject(
            new CsvParseError(
              `Colonnes manquantes dans le CSV : ${missing.join(', ')}`
            )
          )
          return
        }

        const deals: Deal[] = (results.data as Record<string, string>[]).map(
          (row, index) => ({
            id: `deal-${index}`,
            taskName: row['Task Name'] ?? '',
            status: (row['Status'] ?? 'prospect') as DealStatus,
            dateCreated: parseDate(row['Date Created']) ?? new Date(),
            dueDate: parseDate(row['Due Date']),
            startDate: parseDate(row['Start Date']),
            assignee: row['Assignees'] ?? '',
            priority: (row['Priority'] ?? 'medium') as Deal['priority'],
            tags: row['Tags']
              ? row['Tags'].split('|').map((t) => t.trim()).filter(Boolean)
              : [],
            content: row['Task Content'] ?? '',
            amount: parseInt(row['Montant Deal'] ?? '0', 10) || 0,
          })
        )

        resolve(deals)
      },
      error(err) {
        reject(new CsvParseError(`Erreur de lecture du fichier : ${err.message}`))
      },
    })
  })
}
