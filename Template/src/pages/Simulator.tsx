import { useState } from 'react'
import { Save, RefreshCw, Shuffle, ChevronDown, ChevronUp } from 'lucide-react'
import { useSimulation } from '../contexts/SimulationContext'
import { GROUPS, getTeamById } from '../data/teams'
import { groupMatches } from '../data/matches'
import GroupStandingsTable from '../components/standings/GroupStandingsTable'

interface ScoreInputProps {
  matchId: string
  homeTeamId: string
  awayTeamId: string
  value: { homeScore: number; awayScore: number } | undefined
  onChange: (matchId: string, h: number, a: number) => void
}

function ScoreInput({ matchId, homeTeamId, awayTeamId, value, onChange }: ScoreInputProps) {
  const home = getTeamById(homeTeamId)
  const away = getTeamById(awayTeamId)

  const h = value?.homeScore ?? ''
  const a = value?.awayScore ?? ''

  const handleChange = (side: 'home' | 'away', raw: string) => {
    const n = parseInt(raw, 10)
    if (isNaN(n) || n < 0) return
    const newH = side === 'home' ? n : (typeof h === 'number' ? h : 0)
    const newA = side === 'away' ? n : (typeof a === 'number' ? a : 0)
    onChange(matchId, newH, newA)
  }

  return (
    <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-2.5 hover:border-primary-300 transition-colors">
      <div className="flex items-center gap-1.5 flex-1 min-w-0">
        <span className="text-lg">{home?.flag}</span>
        <span className="text-xs font-medium text-gray-700 truncate">{home?.shortName}</span>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <input
          type="number"
          min="0"
          max="99"
          value={h}
          onChange={e => handleChange('home', e.target.value)}
          className="w-10 h-8 text-center border border-gray-300 rounded font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
          placeholder="-"
        />
        <span className="text-gray-400 text-xs">×</span>
        <input
          type="number"
          min="0"
          max="99"
          value={a}
          onChange={e => handleChange('away', e.target.value)}
          className="w-10 h-8 text-center border border-gray-300 rounded font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
          placeholder="-"
        />
      </div>
      <div className="flex items-center gap-1.5 flex-1 min-w-0 justify-end">
        <span className="text-xs font-medium text-gray-700 truncate">{away?.shortName}</span>
        <span className="text-lg">{away?.flag}</span>
      </div>
    </div>
  )
}

function GroupSimulator({ group }: { group: string }) {
  const [expanded, setExpanded] = useState(true)
  const { state, setGroupResult, groupStandings } = useSimulation()
  const matches = groupMatches.filter(m => m.group === group)

  return (
    <div className="card overflow-hidden">
      <button
        onClick={() => setExpanded(v => !v)}
        className="w-full flex items-center justify-between px-4 py-3 bg-primary-800 hover:bg-primary-700 transition-colors text-white"
      >
        <span className="font-bold">Grupo {group}</span>
        {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {expanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="p-3 space-y-2 border-b md:border-b-0 md:border-r border-gray-100">
            {matches.map(m => (
              <ScoreInput
                key={m.id}
                matchId={m.id}
                homeTeamId={m.homeTeamId}
                awayTeamId={m.awayTeamId}
                value={state.groupResults[m.id]}
                onChange={setGroupResult}
              />
            ))}
          </div>
          <div className="p-3">
            <GroupStandingsTable group={group} standings={groupStandings[group] ?? []} />
          </div>
        </div>
      )}
    </div>
  )
}

export default function Simulator() {
  const { randomizeGroupResults, resetSimulation, persistSimulation, bestThirds } = useSimulation()

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="section-title">Simulador da Copa</h1>
          <p className="section-subtitle">Insira os placares para gerar classificação e chaveamento automáticos</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button onClick={randomizeGroupResults} className="btn-secondary text-xs gap-1.5">
            <Shuffle className="w-3.5 h-3.5" /> Aleatório
          </button>
          <button onClick={persistSimulation} className="btn-primary text-xs gap-1.5">
            <Save className="w-3.5 h-3.5" /> Salvar
          </button>
          <button onClick={resetSimulation} className="btn-secondary text-xs gap-1.5 text-red-600 border-red-200 hover:bg-red-50">
            <RefreshCw className="w-3.5 h-3.5" /> Reiniciar
          </button>
        </div>
      </div>

      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-700">
        💡 Preencha os placares dos grupos para gerar automaticamente a classificação e o chaveamento do mata-mata.
      </div>

      <div className="space-y-4">
        {GROUPS.map(g => <GroupSimulator key={g} group={g} />)}
      </div>

      {bestThirds.length > 0 && (
        <div className="mt-8 card p-4">
          <h2 className="font-bold text-gray-800 mb-3">Melhores Terceiros Classificados ({bestThirds.length}/8)</h2>
          <div className="flex flex-wrap gap-2">
            {bestThirds.map(s => {
              const team = getTeamById(s.teamId)
              return team ? (
                <div key={s.teamId} className="flex items-center gap-1.5 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-1.5 text-sm">
                  <span>{team.flag}</span>
                  <span className="font-medium">{team.shortName}</span>
                  <span className="text-yellow-600 text-xs">({s.points}pts)</span>
                </div>
              ) : null
            })}
          </div>
        </div>
      )}
    </div>
  )
}
