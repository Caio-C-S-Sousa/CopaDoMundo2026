import { useState } from 'react'
import { GROUPS, getTeamById } from '../data/teams'
import { useSimulation } from '../contexts/SimulationContext'
import GroupStandingsTable from '../components/standings/GroupStandingsTable'

export default function Standings() {
  const { groupStandings, bestThirds } = useSimulation()
  const [activeGroup, setActiveGroup] = useState<string | 'all'>('all')

  const displayGroups = activeGroup === 'all' ? [...GROUPS] : [activeGroup as typeof GROUPS[number]]

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="section-title">Classificação</h1>
        <p className="section-subtitle">12 grupos · 48 seleções · use o simulador para preencher resultados</p>
      </div>

      {/* Group tabs */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 pb-1">
        <button onClick={() => setActiveGroup('all')} className={`px-3 py-1.5 rounded-full text-sm font-medium shrink-0 transition-colors ${activeGroup === 'all' ? 'bg-primary-700 text-white' : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50'}`}>
          Todos
        </button>
        {GROUPS.map(g => (
          <button key={g} onClick={() => setActiveGroup(g)} className={`px-3 py-1.5 rounded-full text-sm font-medium shrink-0 transition-colors ${activeGroup === g ? 'bg-primary-700 text-white' : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50'}`}>
            Grupo {g}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
        {displayGroups.map(g => (
          <GroupStandingsTable key={g} group={g} standings={groupStandings[g] ?? []} />
        ))}
      </div>

      {/* Best thirds */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-1">Melhores Terceiros Colocados</h2>
        <p className="text-sm text-gray-500 mb-4">Os 8 melhores terceiros colocados se classificam para a Rodada de 32</p>
        <div className="card overflow-hidden">
          <div className="bg-yellow-50 px-4 py-2.5 border-b border-yellow-100">
            <span className="font-bold text-yellow-800 text-sm">Classificação dos Melhores Terceiros</span>
          </div>
          {bestThirds.length === 0 ? (
            <div className="p-6 text-center text-sm text-gray-400">Preencha os resultados no simulador para visualizar</div>
          ) : (
            <div className="divide-y divide-gray-50">
              {bestThirds.map((s, i) => {
                const team = getTeamById(s.teamId)
                if (!team) return null
                return (
                  <div key={s.teamId} className="flex items-center gap-2 px-3 py-2.5 text-sm bg-white qualifier-third">
                    <span className="w-4 text-center text-gray-500 font-medium text-xs">{i + 1}</span>
                    <span className="text-lg leading-none w-6 text-center">{team.flag}</span>
                    <span className="flex-1 font-medium text-gray-800 truncate">{team.shortName}</span>
                    <span className="text-xs text-gray-400 mr-2">Grupo {team.group}</span>
                    <div className="flex items-center gap-3 text-xs text-gray-600 font-mono">
                      <span className="font-bold text-gray-900">{s.points}pts</span>
                      <span>{s.goalDifference > 0 ? '+' : ''}{s.goalDifference} SG</span>
                      <span>{s.goalsFor} GF</span>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
