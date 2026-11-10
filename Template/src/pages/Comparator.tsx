import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { teamsFixed, getTeamById } from '../data/teams'
import { useSimulation } from '../contexts/SimulationContext'

export default function Comparator() {
  const [teamA, setTeamA] = useState('')
  const [teamB, setTeamB] = useState('')
  const { groupStandings } = useSimulation()

  const tA = teamA ? getTeamById(teamA) : undefined
  const tB = teamB ? getTeamById(teamB) : undefined

  const standA = tA ? groupStandings[tA.group]?.find(s => s.teamId === tA.id) : undefined
  const standB = tB ? groupStandings[tB.group]?.find(s => s.teamId === tB.id) : undefined

  const stats = [
    { label: 'Ranking FIFA', a: tA?.fifaRanking, b: tB?.fifaRanking, lowerIsBetter: true },
    { label: 'Pontos (Grupo)', a: standA?.points ?? 0, b: standB?.points ?? 0 },
    { label: 'Vitórias', a: standA?.won ?? 0, b: standB?.won ?? 0 },
    { label: 'Gols Marcados', a: standA?.goalsFor ?? 0, b: standB?.goalsFor ?? 0 },
    { label: 'Gols Sofridos', a: standA?.goalsAgainst ?? 0, b: standB?.goalsAgainst ?? 0, lowerIsBetter: true },
    { label: 'Saldo de Gols', a: standA?.goalDifference ?? 0, b: standB?.goalDifference ?? 0 },
  ]

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="section-title">Comparador de Seleções</h1>
        <p className="section-subtitle">Compare dois países com estatísticas do torneio</p>
      </div>

      <div className="card p-6 mb-6">
        <div className="grid grid-cols-5 gap-4 items-center">
          <div className="col-span-2">
            <label className="block text-xs text-gray-500 mb-1">Seleção A</label>
            <select value={teamA} onChange={e => setTeamA(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option value="">Selecione...</option>
              {teamsFixed.map(t => <option key={t.id} value={t.id}>{t.flag} {t.name}</option>)}
            </select>
          </div>
          <div className="flex justify-center">
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </div>
          <div className="col-span-2">
            <label className="block text-xs text-gray-500 mb-1">Seleção B</label>
            <select value={teamB} onChange={e => setTeamB(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option value="">Selecione...</option>
              {teamsFixed.map(t => <option key={t.id} value={t.id}>{t.flag} {t.name}</option>)}
            </select>
          </div>
        </div>
      </div>

      {tA && tB ? (
        <div className="card overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-primary-800 text-white p-4 text-center">
            <div className="flex flex-col items-center gap-1">
              <span className="text-5xl">{tA.flag}</span>
              <span className="font-bold">{tA.shortName}</span>
              <span className="text-xs text-primary-300">Grupo {tA.group} · #{tA.fifaRanking}</span>
            </div>
            <div className="flex items-center justify-center font-bold text-gold-400">vs</div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-5xl">{tB.flag}</span>
              <span className="font-bold">{tB.shortName}</span>
              <span className="text-xs text-primary-300">Grupo {tB.group} · #{tB.fifaRanking}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="divide-y divide-gray-50">
            {stats.map(s => {
              const aNum = typeof s.a === 'number' ? s.a : 0
              const bNum = typeof s.b === 'number' ? s.b : 0
              const aBetter = s.lowerIsBetter ? aNum < bNum : aNum > bNum
              const bBetter = s.lowerIsBetter ? bNum < aNum : bNum > aNum
              return (
                <div key={s.label} className="grid grid-cols-3 px-4 py-3 text-sm items-center">
                  <div className={`font-bold text-center text-lg ${aBetter ? 'text-green-600' : ''}`}>{s.a ?? '—'}</div>
                  <div className="text-center text-xs text-gray-500 font-medium">{s.label}</div>
                  <div className={`font-bold text-center text-lg ${bBetter ? 'text-green-600' : ''}`}>{s.b ?? '—'}</div>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <div className="text-center py-12 text-gray-400 text-sm">Selecione duas seleções para comparar</div>
      )}

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-700">
        ⚠️ Estatísticas calculadas com base nos resultados inseridos no simulador.
      </div>
    </div>
  )
}
