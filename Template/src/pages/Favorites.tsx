import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { useFavorites } from '../contexts/FavoritesContext'
import { getTeamById } from '../data/teams'
import { getMatchById } from '../data/matches'
import { useSimulation } from '../contexts/SimulationContext'
import MatchCard from '../components/matches/MatchCard'
import TeamCard from '../components/teams/TeamCard'
import EmptyState from '../components/ui/EmptyState'

export default function Favorites() {
  const { favorites } = useFavorites()
  const { state } = useSimulation()

  const favTeams = favorites.teams.map(id => getTeamById(id)).filter(Boolean) as ReturnType<typeof getTeamById>[]
  const favMatches = favorites.matches.map(id => getMatchById(id)).filter(Boolean) as ReturnType<typeof getMatchById>[]

  const hasAny = favTeams.length > 0 || favMatches.length > 0

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="section-title">Favoritos</h1>
        <p className="section-subtitle">Suas seleções e partidas favoritas</p>
      </div>

      {!hasAny && (
        <EmptyState
          icon={<Heart className="w-16 h-16" />}
          title="Nenhum favorito ainda"
          description="Adicione seleções e partidas aos favoritos clicando no ícone de coração."
          action={
            <div className="flex gap-3">
              <Link to="/selecoes" className="btn-primary">Ver Seleções</Link>
              <Link to="/partidas" className="btn-secondary">Ver Partidas</Link>
            </div>
          }
        />
      )}

      {favTeams.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Seleções Favoritas ({favTeams.length})</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {favTeams.map(t => t && <TeamCard key={t.id} team={t} />)}
          </div>
        </section>
      )}

      {favMatches.length > 0 && (
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Partidas Favoritas ({favMatches.length})</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {favMatches.map(m => m && (
              <MatchCard key={m.id} match={m} homeScore={state.groupResults[m.id]?.homeScore ?? null} awayScore={state.groupResults[m.id]?.awayScore ?? null} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
