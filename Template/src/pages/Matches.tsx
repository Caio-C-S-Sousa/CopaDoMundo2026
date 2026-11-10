import { useState, useMemo } from 'react'
import { Filter } from 'lucide-react'
import { groupMatches, knockoutMatchTemplate } from '../data/matches'
import { GROUPS, teamsFixed } from '../data/teams'
import { useSimulation } from '../contexts/SimulationContext'
import MatchCard from '../components/matches/MatchCard'
import SearchBar from '../components/ui/SearchBar'
import EmptyState from '../components/ui/EmptyState'
import { phaseName } from '../utils/format'
import type { CompetitionPhase, MatchStatus } from '../types'

const phases: { value: CompetitionPhase | 'all'; label: string }[] = [
  { value: 'all', label: 'Todas as fases' },
  { value: 'group', label: 'Fase de Grupos' },
  { value: 'round_of_32', label: 'Rodada de 32' },
  { value: 'round_of_16', label: 'Oitavas de Final' },
  { value: 'quarterfinal', label: 'Quartas de Final' },
  { value: 'semifinal', label: 'Semifinal' },
  { value: 'third_place', label: '3º Lugar' },
  { value: 'final', label: 'Final' },
]

const statuses: { value: MatchStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'Todos os status' },
  { value: 'scheduled', label: 'Agendadas' },
  { value: 'live', label: 'Ao Vivo' },
  { value: 'finished', label: 'Encerradas' },
]

export default function Matches() {
  const [search, setSearch] = useState('')
  const [group, setGroup] = useState<string>('all')
  const [phase, setPhase] = useState<string>('all')
  const [status, setStatus] = useState<string>('all')
  const { state } = useSimulation()

  const allMatches = [...groupMatches, ...knockoutMatchTemplate]

  const filtered = useMemo(() => {
    return allMatches.filter(m => {
      if (phase !== 'all' && m.phase !== phase) return false
      if (group !== 'all' && m.group !== group) return false
      if (status !== 'all' && m.status !== status) return false
      if (search) {
        const q = search.toLowerCase()
        const home = teamsFixed.find(t => t.id === m.homeTeamId)
        const away = teamsFixed.find(t => t.id === m.awayTeamId)
        const matches = [home?.name, home?.shortName, home?.code, away?.name, away?.shortName, away?.code].some(v => v?.toLowerCase().includes(q))
        if (!matches) return false
      }
      return true
    })
  }, [allMatches, phase, group, status, search])

  // Group by phase for display
  const byPhase = useMemo(() => {
    const map = new Map<string, typeof filtered>()
    for (const m of filtered) {
      const key = m.phase
      if (!map.has(key)) map.set(key, [])
      map.get(key)!.push(m)
    }
    return map
  }, [filtered])

  const phaseOrder: CompetitionPhase[] = ['group', 'round_of_32', 'round_of_16', 'quarterfinal', 'semifinal', 'third_place', 'final']

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="section-title">Partidas</h1>
        <p className="section-subtitle">104 partidas · 11 Jun – 2 Ago 2026</p>
      </div>

      {/* Filters */}
      <div className="card p-4 mb-6">
        <div className="flex items-center gap-2 mb-3 text-sm font-medium text-gray-700">
          <Filter className="w-4 h-4" />
          Filtros
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <SearchBar value={search} onChange={setSearch} placeholder="Buscar seleção..." />
          <select value={phase} onChange={e => setPhase(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
            {phases.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
          </select>
          <select value={group} onChange={e => setGroup(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="all">Todos os grupos</option>
            {GROUPS.map(g => <option key={g} value={g}>Grupo {g}</option>)}
          </select>
          <select value={status} onChange={e => setStatus(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
            {statuses.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState title="Nenhuma partida encontrada" description="Tente ajustar os filtros ou a busca." action={<button className="btn-secondary" onClick={() => { setSearch(''); setGroup('all'); setPhase('all'); setStatus('all') }}>Limpar filtros</button>} />
      ) : (
        <div className="space-y-8">
          {phaseOrder.map(ph => {
            const matches = byPhase.get(ph)
            if (!matches || matches.length === 0) return null
            return (
              <section key={ph}>
                <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  {phaseName(ph)}
                  <span className="text-sm font-normal text-gray-500">({matches.length} partidas)</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {matches.map(m => (
                    <MatchCard key={m.id} match={m} homeScore={state.groupResults[m.id]?.homeScore ?? null} awayScore={state.groupResults[m.id]?.awayScore ?? null} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      )}
    </div>
  )
}
