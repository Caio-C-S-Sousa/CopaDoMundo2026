import { Link } from 'react-router-dom'
import { Trophy, Calendar, BarChart2, Users, Play, Zap } from 'lucide-react'
import { useSimulation } from '../contexts/SimulationContext'
import { GROUPS } from '../data/teams'
import { groupMatches } from '../data/matches'
import GroupStandingsTable from '../components/standings/GroupStandingsTable'
import MatchCard from '../components/matches/MatchCard'

const quickLinks = [
  { to: '/partidas', icon: <Calendar className="w-5 h-5" />, label: 'Partidas', color: 'bg-blue-500' },
  { to: '/classificacao', icon: <BarChart2 className="w-5 h-5" />, label: 'Classificação', color: 'bg-green-500' },
  { to: '/mata-mata', icon: <Trophy className="w-5 h-5" />, label: 'Mata-mata', color: 'bg-purple-500' },
  { to: '/simulador', icon: <Play className="w-5 h-5" />, label: 'Simulador', color: 'bg-gold-500' },
  { to: '/selecoes', icon: <Users className="w-5 h-5" />, label: 'Seleções', color: 'bg-red-500' },
  { to: '/estatisticas', icon: <Zap className="w-5 h-5" />, label: 'Estatísticas', color: 'bg-orange-500' },
]

export default function Home() {
  const { groupStandings, state } = useSimulation()
  const nextMatches = groupMatches.slice(0, 6)

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6 space-y-10">
      {/* Hero Banner */}
      <section className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-12 px-6 md:py-20 md:px-12">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-300 border border-gold-500/30 rounded-full px-3 py-1 text-sm font-medium mb-4">
            <Trophy className="w-4 h-4" />
            Copa do Mundo FIFA 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            O mundo inteiro <br />em campo
          </h1>
          <p className="text-primary-200 text-lg mb-6 max-w-lg">
            48 seleções. 12 grupos. 104 partidas. EUA, México e Canadá. Acompanhe tudo aqui.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/simulador" className="btn-gold">Simular Copa</Link>
            <Link to="/partidas" className="btn-secondary bg-white/10 border-white/20 text-white hover:bg-white/20">Ver Partidas</Link>
          </div>
        </div>
        {/* Decorative */}
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 text-[200px] leading-none flex items-center justify-end pr-8 select-none pointer-events-none">⚽</div>
      </section>

      {/* Quick links */}
      <section>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {quickLinks.map(({ to, icon, label, color }) => (
            <Link key={to} to={to} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className={`${color} text-white p-2.5 rounded-xl`}>{icon}</div>
              <span className="text-xs font-medium text-gray-700">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Next matches */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="section-title">Próximas Partidas</h2>
            <p className="section-subtitle">Fase de grupos — 11 de junho de 2026</p>
          </div>
          <Link to="/partidas" className="btn-secondary text-xs">Ver todas</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nextMatches.map(m => (
            <MatchCard key={m.id} match={m} homeScore={state.groupResults[m.id]?.homeScore ?? null} awayScore={state.groupResults[m.id]?.awayScore ?? null} />
          ))}
        </div>
      </section>

      {/* Group standings preview */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="section-title">Classificação dos Grupos</h2>
            <p className="section-subtitle">Use o simulador para preencher os resultados</p>
          </div>
          <Link to="/classificacao" className="btn-secondary text-xs">Ver completa</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {GROUPS.slice(0, 6).map(g => (
            <GroupStandingsTable key={g} group={g} standings={groupStandings[g] ?? []} />
          ))}
        </div>
      </section>

      {/* Simulator CTA */}
      <section className="rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 text-white p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold mb-1">Simule a sua Copa!</h2>
            <p className="text-gold-100 text-sm">Defina os resultados, gere o chaveamento e descubra seu campeão projetado.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link to="/simulador" className="bg-white text-gold-600 font-semibold px-5 py-2.5 rounded-lg hover:bg-gold-50 transition-colors">
              Abrir Simulador
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
