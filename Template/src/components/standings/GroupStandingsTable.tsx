import type { GroupStanding } from '../../types'
import { getTeamById } from '../../data/teams'

interface Props {
  group: string
  standings: GroupStanding[]
}

export default function GroupStandingsTable({ group, standings }: Props) {
  return (
    <div className="card overflow-hidden">
      <div className="bg-primary-800 px-4 py-2.5 flex items-center justify-between">
        <span className="font-bold text-white text-sm">Grupo {group}</span>
        <span className="text-xs text-primary-300">P J V E D GF GA SG</span>
      </div>
      <div className="divide-y divide-gray-50">
        {standings.map((s, i) => {
          const team = getTeamById(s.teamId)
          if (!team) return null
          const rowClass =
            i < 2 ? 'qualifier-direct' :
            s.qualifier === 'best_third' ? 'qualifier-third' :
            'qualifier-eliminated'

          return (
            <div key={s.teamId} className={`flex items-center gap-2 px-3 py-2.5 text-sm bg-white ${rowClass}`}>
              <span className="w-4 text-center text-gray-500 font-medium text-xs">{i + 1}</span>
              <span className="text-lg leading-none w-6 text-center">{team.flag}</span>
              <span className="flex-1 font-medium text-gray-800 truncate">{team.shortName}</span>
              <div className="flex items-center gap-3 text-xs text-gray-600 font-mono">
                <span className="w-4 text-center font-bold text-gray-900">{s.points}</span>
                <span className="w-4 text-center">{s.played}</span>
                <span className="w-4 text-center">{s.won}</span>
                <span className="w-4 text-center">{s.drawn}</span>
                <span className="w-4 text-center">{s.lost}</span>
                <span className="w-4 text-center">{s.goalsFor}</span>
                <span className="w-4 text-center">{s.goalsAgainst}</span>
                <span className={`w-6 text-center ${s.goalDifference > 0 ? 'text-green-600' : s.goalDifference < 0 ? 'text-red-500' : ''}`}>
                  {s.goalDifference > 0 ? '+' : ''}{s.goalDifference}
                </span>
              </div>
            </div>
          )
        })}
      </div>
      <div className="px-3 py-2 bg-gray-50 flex gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-green-500 inline-block" /> Classificado direto</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-yellow-400 inline-block" /> Melhor 3º</span>
      </div>
    </div>
  )
}
