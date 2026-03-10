'use client'

import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { parseCSV, CsvParseError } from '@/lib/csv-parser'
import { Deal } from '@/lib/types'
import { Upload } from 'lucide-react'

interface CsvUploadProps {
  onDealsLoaded: (deals: Deal[]) => void
}

export function CsvUpload({ onDealsLoaded }: CsvUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  async function handleFile(file: File) {
    setError(null)
    if (!file.name.endsWith('.csv')) {
      setError('Veuillez sélectionner un fichier .csv')
      return
    }
    try {
      const deals = await parseCSV(file)
      onDealsLoaded(deals)
    } catch (err) {
      if (err instanceof CsvParseError) {
        setError(err.message)
      } else {
        setError('Une erreur inattendue est survenue.')
      }
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) handleFile(file)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md space-y-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">CRM Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Importez votre export CSV pour visualiser votre pipeline
          </p>
        </div>

        <div
          role="button"
          tabIndex={0}
          onClick={() => inputRef.current?.click()}
          onKeyDown={(e) => e.key === 'Enter' && inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`flex cursor-pointer flex-col items-center gap-3 rounded-xl border-2 border-dashed p-12 transition-colors
            ${isDragging
              ? 'border-blue-400 bg-blue-50'
              : 'border-gray-300 bg-white hover:border-blue-400 hover:bg-blue-50'
            }`}
        >
          <Upload className="h-10 w-10 text-gray-400" />
          <div className="text-center">
            <p className="font-medium text-gray-700">
              Glissez votre fichier ici
            </p>
            <p className="text-sm text-gray-500">ou cliquez pour parcourir</p>
          </div>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">
            .csv uniquement
          </span>
        </div>

        <input
          ref={inputRef}
          type="file"
          accept=".csv"
          className="hidden"
          onChange={handleChange}
        />

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <Button
          onClick={() => inputRef.current?.click()}
          className="w-full"
        >
          Sélectionner un fichier CSV
        </Button>
      </div>
    </div>
  )
}
