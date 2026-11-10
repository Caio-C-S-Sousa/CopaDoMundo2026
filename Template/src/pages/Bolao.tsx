import { useState, useEffect } from 'react'
import { Plus, Trophy, Trash2 } from 'lucide-react'
import { saveBolao, loadBolao } from '../utils/storage'
import { groupMatches } from '../data/matches'
import { getTeamById } from '../data/teams'
import type { BolaoEntry } from '../types'


export default function Bolao() {
  const [entries, setEntries] = useState<BolaoEntry[]>([])
  const [name, setName] = useState('')
  const [step, setStep] = useState<'list' | 'predict'>('list')
  const [predictions, setPredictions] = useState<Record<string, { homeScore: number; awayScore: number }>>({})

  useEffect(() => { setEntries(loadBolao()) }, [])
  useEffect(() => { saveBolao(entries) }, [entries])

  const handleAdd = () => {
    if (!name.trim()) return
    const entry: BolaoEntry = {
      id: Date.now().toString(),
      participantName: name.trim(),
      predictions: { ...predictions },
      points: 0,
      createdAt: new Date().toISOString(),
    }
    setEntries(prev => [...prev, entry])
    setName('')
    setPredictions({})
    setStep('list')
  }

  const handleDelete = (id: string) => setEntries(prev => prev.filter(e => e.id !== id))

  // For points, use empty results (no real results yet)
  const ranked = [...entries].sort((a, b) => b.points - a.points)

  if (step === 'predict') {
    return (
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="section-title">Bolão — Fazer Palpites</h1>
          <div className="mt-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome do participante</label>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Seu nome" className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
        </div>
        <div className="space-y-2 mb-6 max-h-[60vh] overflow-y-auto pr-1">
          {groupMatches.slice(0, 20).map(m => {
            const home = getTeamById(m.homeTeamId)
            const away = getTeamById(m.awayTeamId)
            const pred = predictions[m.id]
            return (
              <div key={m.id} className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-3 text-sm">
                <span>{home?.flag}</span>
                <span className="font-medium flex-1">{home?.shortName}</span>
                <input type="number" min="0" max="99" value={pred?.homeScore ?? ''} onChange={e => setPredictions(p => ({ ...p, [m.id]: { homeScore: parseInt(e.target.value) || 0, awayScore: p[m.id]?.awayScore ?? 0 } }))} className="w-10 h-8 text-center border rounded font-bold" placeholder="-" />
                <span className="text-gray-400">×</span>
                <input type="number" min="0" max="99" value={pred?.awayScore ?? ''} onChange={e => setPredictions(p => ({ ...p, [m.id]: { homeScore: p[m.id]?.homeScore ?? 0, awayScore: parseInt(e.target.value) || 0 } }))} className="w-10 h-8 text-center border rounded font-bold" placeholder="-" />
                <span className="font-medium flex-1 text-right">{away?.shortName}</span>
                <span>{away?.flag}</span>
              </div>
            )
          })}
        </div>
        <div className="flex gap-3">
          <button onClick={handleAdd} className="btn-primary" disabled={!name.trim()}>Salvar Palpites</button>
          <button onClick={() => setStep('list')} className="btn-secondary">Cancelar</button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="section-title">Bolão da Copa</h1>
          <p className="section-subtitle">Faça palpites e acompanhe o ranking local</p>
        </div>
        <button onClick={() => setStep('predict')} className="btn-primary gap-1.5">
          <Plus className="w-4 h-4" /> Participar
        </button>
      </div>

      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-700">
        💡 Acerto exato = 3 pontos · Acerto de resultado (vitória/empate/derrota) = 1 ponto
      </div>

      {ranked.length === 0 ? (
        <div className="card p-8 text-center">
          <Trophy className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">Nenhum participante ainda. Seja o primeiro!</p>
        </div>
      ) : (
        <div className="card overflow-hidden">
          <div className="bg-primary-800 px-4 py-2.5 text-white font-bold text-sm">Ranking</div>
          <div className="divide-y divide-gray-50">
            {ranked.map((entry, i) => (
              <div key={entry.id} className="flex items-center gap-3 px-4 py-3">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${i === 0 ? 'bg-gold-400 text-white' : i === 1 ? 'bg-gray-300 text-white' : i === 2 ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-600'}`}>{i + 1}</span>
                <span className="flex-1 font-medium text-gray-900">{entry.participantName}</span>
                <span className="font-bold text-primary-700">{entry.points} pts</span>
                <span className="text-xs text-gray-400">{Object.keys(entry.predictions).length} palpites</span>
                <button onClick={() => handleDelete(entry.id)} className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
