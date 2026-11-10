import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { getTeamById } from '../data/teams'
import { getMatchesByTeam } from '../data/matches'
import { useFavorites } from '../contexts/FavoritesContext'
import { useSimulation } from '../contexts/SimulationContext'
import MatchCard from '../components/matches/MatchCard'
import EmptyState from '../components/ui/EmptyState'
import { confederationName } from '../utils/format'

export default function TeamDetail() {
  const { id } = useParams<{ id: string }>()
  const team = id ? getTeamById(id) : undefined
  const { isTeamFavorite, toggleTeam } = useFavorites()
  const { state, groupStandings } = useSimulation()

  if (!team) {
    return (
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <EmptyState title="Seleção não encontrada" action={<Link to="/selecoes" className="btn-primary">Voltar às Seleções</Link>} />
      </div>
    )
  }

  const matches = getMatchesByTeam(team.id)
  const standing = groupStandings[team.group]?.find(s => s.teamId === team.id)

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <Link to="/selecoes" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-4 h-4" /> Voltar às Seleções
      </Link>

      {/* Header */}
      <div className="card p-6 mb-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-6xl">{team.flag}</span>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{team.name}</h1>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="badge bg-primary-100 text-primary-700">Grupo {team.group}</span>
                <span className="badge bg-gray-100 text-gray-600">{team.confederation}</span>
                <span className="badge bg-gray-100 text-gray-600">Ranking FIFA #{team.fifaRanking}</span>
              </div>
            </div>
          </div>
          <button onClick={() => toggleTeam(team.id)} className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
            <Heart className={`w-5 h-5 ${isTeamFavorite(team.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">
          <div>
            <div className="text-xs text-gray-500 mb-1">Técnico</div>
            <div className="font-medium text-gray-900 text-sm">{team.coach}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">Confederação</div>
            <div className="font-medium text-gray-900 text-sm">{confederationName(team.confederation)}</div>
          </div>
          {standing && (
            <>
              <div>
                <div className="text-xs text-gray-500 mb-1">Pontos</div>
                <div className="font-bold text-primary-700 text-lg">{standing.points}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Saldo de Gols</div>
                <div className={`font-bold text-lg ${standing.goalDifference > 0 ? 'text-green-600' : standing.goalDifference < 0 ? 'text-red-500' : 'text-gray-900'}`}>
                  {standing.goalDifference > 0 ? '+' : ''}{standing.goalDifference}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Matches */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary-600" />
          Partidas ({matches.length})
        </h2>
        {matches.length === 0 ? (
          <EmptyState title="Nenhuma partida encontrada" />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {matches.map(m => (
              <MatchCard key={m.id} match={m} homeScore={state.groupResults[m.id]?.homeScore ?? null} awayScore={state.groupResults[m.id]?.awayScore ?? null} />
            ))}
          </div>
        )}
      </section>

      <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-700">
        ⚠️ Dados demonstrativos. Elenco e estatísticas dos jogadores serão disponibilizados quando a API oficial estiver integrada.
      </div>
    </div>
  )
}
