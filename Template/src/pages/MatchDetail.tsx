import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Clock, Heart } from 'lucide-react'
import { getMatchById } from '../data/matches'
import { getTeamById } from '../data/teams'
import { getStadiumById } from '../data/stadiums'
import { useFavorites } from '../contexts/FavoritesContext'
import { useSimulation } from '../contexts/SimulationContext'
import EmptyState from '../components/ui/EmptyState'
import { formatDate, phaseName } from '../utils/format'

export default function MatchDetail() {
  const { id } = useParams<{ id: string }>()
  const match = id ? getMatchById(id) : undefined
  const { isMatchFavorite, toggleMatch } = useFavorites()
  const { state } = useSimulation()

  if (!match) {
    return (
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <EmptyState title="Partida não encontrada" action={<Link to="/partidas" className="btn-primary">Voltar às Partidas</Link>} />
      </div>
    )
  }

  const home = getTeamById(match.homeTeamId)
  const away = getTeamById(match.awayTeamId)
  const stadium = getStadiumById(match.stadiumId)
  const result = state.groupResults[match.id]
  const h = result?.homeScore ?? match.homeScore
  const a = result?.awayScore ?? match.awayScore

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <Link to="/partidas" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-4 h-4" /> Voltar às Partidas
      </Link>

      {/* Match header */}
      <div className="card p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className={`badge ${match.status === 'live' ? 'badge-live' : match.status === 'finished' ? 'badge-finished' : 'badge-scheduled'}`}>
              {match.status === 'live' ? 'Ao Vivo' : match.status === 'finished' ? 'Encerrada' : 'Agendada'}
            </span>
            <span className="badge bg-purple-100 text-purple-700">{phaseName(match.phase)}</span>
            {match.group && <span className="badge bg-primary-100 text-primary-700">Grupo {match.group}</span>}
          </div>
          <button onClick={() => toggleMatch(match.id)} className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
            <Heart className={`w-5 h-5 ${isMatchFavorite(match.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
          </button>
        </div>

        {/* Teams & Score */}
        <div className="flex items-center justify-between gap-4 py-6">
          <div className="flex flex-col items-center gap-2 flex-1">
            <span className="text-6xl">{home?.flag ?? '?'}</span>
            <div className="text-center">
              <div className="font-bold text-gray-900">{home?.name ?? 'TBD'}</div>
              <div className="text-xs text-gray-500">{home?.confederation}</div>
            </div>
          </div>
          <div className="text-center px-4">
            {h !== null && a !== null ? (
              <div className="flex items-center gap-4">
                <span className="text-5xl font-black text-gray-900">{h}</span>
                <span className="text-2xl text-gray-300">×</span>
                <span className="text-5xl font-black text-gray-900">{a}</span>
              </div>
            ) : (
              <div>
                <div className="text-2xl font-bold text-gray-400">vs</div>
                <div className="text-sm text-gray-500 mt-1">{match.time}</div>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center gap-2 flex-1">
            <span className="text-6xl">{away?.flag ?? '?'}</span>
            <div className="text-center">
              <div className="font-bold text-gray-900">{away?.name ?? 'TBD'}</div>
              <div className="text-xs text-gray-500">{away?.confederation}</div>
            </div>
          </div>
        </div>

        {/* Meta */}
        <div className="border-t border-gray-100 pt-4 flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-gray-400" />
            {formatDate(match.date)} · {match.time}
          </div>
          {stadium && (
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-gray-400" />
              {stadium.name}, {stadium.city}
            </div>
          )}
        </div>
      </div>

      {/* Placeholder sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card p-6">
          <h3 className="font-bold text-gray-800 mb-3">Estatísticas da Partida</h3>
          <p className="text-sm text-gray-400">Disponível após o início da partida</p>
        </div>
        <div className="card p-6">
          <h3 className="font-bold text-gray-800 mb-3">Escalações</h3>
          <p className="text-sm text-gray-400">Disponível 1h antes da partida</p>
        </div>
      </div>
    </div>
  )
}
