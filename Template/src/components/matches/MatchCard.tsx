import { Link } from 'react-router-dom'
import { MapPin, Heart } from 'lucide-react'
import type { Match } from '../../types'
import { getTeamById } from '../../data/teams'
import { getStadiumById } from '../../data/stadiums'
import { formatDateShort, phaseName } from '../../utils/format'
import { useFavorites } from '../../contexts/FavoritesContext'

interface Props {
  match: Match
  homeScore?: number | null
  awayScore?: number | null
}

export default function MatchCard({ match, homeScore, awayScore }: Props) {
  const home = getTeamById(match.homeTeamId)
  const away = getTeamById(match.awayTeamId)
  const stadium = getStadiumById(match.stadiumId)
  const { isMatchFavorite, toggleMatch } = useFavorites()

  const h = homeScore ?? match.homeScore
  const a = awayScore ?? match.awayScore
  const hasScore = h !== null && a !== null

  const statusClasses = {
    scheduled: 'badge-scheduled',
    live: 'badge-live',
    finished: 'badge-finished',
  }
  const statusLabels = { scheduled: 'Agendada', live: 'Ao Vivo', finished: 'Encerrada' }

  if (!home || !away) return null

  return (
    <div className="card-hover group relative">
      <Link to={`/partidas/${match.id}`} className="block p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className={statusClasses[match.status]}>{statusLabels[match.status]}</span>
            {match.group && <span className="badge bg-primary-100 text-primary-700">Grupo {match.group}</span>}
            {match.phase !== 'group' && <span className="badge bg-purple-100 text-purple-700">{phaseName(match.phase)}</span>}
          </div>
          <span className="text-xs text-gray-400">{formatDateShort(match.date)} · {match.time}</span>
        </div>

        {/* Teams & Score */}
        <div className="flex items-center justify-between gap-2">
          {/* Home */}
          <div className="flex flex-col items-center gap-1 flex-1 min-w-0">
            <span className="text-3xl">{home.flag}</span>
            <span className="text-sm font-semibold text-gray-800 text-center leading-tight">{home.shortName}</span>
          </div>

          {/* Score */}
          <div className="flex items-center gap-2 px-3">
            {hasScore ? (
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900 w-6 text-center">{h}</span>
                <span className="text-gray-400 font-light">×</span>
                <span className="text-2xl font-bold text-gray-900 w-6 text-center">{a}</span>
              </div>
            ) : (
              <div className="text-gray-400 text-sm font-medium">vs</div>
            )}
          </div>

          {/* Away */}
          <div className="flex flex-col items-center gap-1 flex-1 min-w-0">
            <span className="text-3xl">{away.flag}</span>
            <span className="text-sm font-semibold text-gray-800 text-center leading-tight">{away.shortName}</span>
          </div>
        </div>

        {/* Footer */}
        {stadium && (
          <div className="mt-3 flex items-center gap-1 text-xs text-gray-400">
            <MapPin className="w-3 h-3 shrink-0" />
            <span className="truncate">{stadium.name}, {stadium.city}</span>
          </div>
        )}
      </Link>

      {/* Favorite button */}
      <button
        onClick={e => { e.preventDefault(); toggleMatch(match.id) }}
        className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Favoritar partida"
      >
        <Heart className={`w-4 h-4 ${isMatchFavorite(match.id) ? 'fill-red-500 text-red-500' : 'text-gray-300'}`} />
      </button>
    </div>
  )
}
