import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import type { Team } from '../../types'
import { useFavorites } from '../../contexts/FavoritesContext'

interface Props {
  team: Team
}

export default function TeamCard({ team }: Props) {
  const { isTeamFavorite, toggleTeam } = useFavorites()

  return (
    <div className="card-hover relative group">
      <Link to={`/selecoes/${team.id}`} className="block p-4">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{team.flag}</span>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-gray-900 truncate">{team.name}</div>
            <div className="text-xs text-gray-500 mt-0.5">
              <span>Grupo {team.group}</span>
              <span className="mx-1">·</span>
              <span>{team.confederation}</span>
            </div>
            <div className="text-xs text-gray-400 mt-0.5">Ranking FIFA: #{team.fifaRanking}</div>
          </div>
        </div>
      </Link>
      <button
        onClick={e => { e.preventDefault(); toggleTeam(team.id) }}
        className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Favoritar seleção"
      >
        <Heart className={`w-4 h-4 ${isTeamFavorite(team.id) ? 'fill-red-500 text-red-500' : 'text-gray-300'}`} />
      </button>
    </div>
  )
}
