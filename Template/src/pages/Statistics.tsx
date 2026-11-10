import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { useSimulation } from '../contexts/SimulationContext'
import { GROUPS, getTeamById } from '../data/teams'
import { groupMatches } from '../data/matches'

const COLORS = ['#1d4ed8', '#16a34a', '#d97706', '#dc2626', '#7c3aed', '#0891b2']

export default function Statistics() {
  const { state, groupStandings } = useSimulation()

  // Compute stats from simulation
  let totalGoals = 0
  let matchesPlayed = 0
  const teamGoals: Record<string, number> = {}
  const teamWins: Record<string, number> = {}

  for (const match of groupMatches) {
    const r = state.groupResults[match.id]
    if (!r) continue
    matchesPlayed++
    totalGoals += r.homeScore + r.awayScore
    teamGoals[match.homeTeamId] = (teamGoals[match.homeTeamId] ?? 0) + r.homeScore
    teamGoals[match.awayTeamId] = (teamGoals[match.awayTeamId] ?? 0) + r.awayScore
    if (r.homeScore > r.awayScore) teamWins[match.homeTeamId] = (teamWins[match.homeTeamId] ?? 0) + 1
    else if (r.awayScore > r.homeScore) teamWins[match.awayTeamId] = (teamWins[match.awayTeamId] ?? 0) + 1
  }

  const topScorers = Object.entries(teamGoals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([id, goals]) => ({ name: getTeamById(id)?.shortName ?? id, goals }))

  const goalsPerGroup = GROUPS.map(g => {
    const matches = groupMatches.filter(m => m.group === g)
    const goals = matches.reduce((acc, m) => {
      const r = state.groupResults[m.id]
      return acc + (r ? r.homeScore + r.awayScore : 0)
    }, 0)
    return { group: `Grupo ${g}`, goals }
  })

  const confederationData = ['UEFA', 'CONMEBOL', 'CONCACAF', 'CAF', 'AFC', 'OFC'].map(conf => ({
    name: conf,
    value: Object.values(groupStandings).flat().filter(s => {
      const t = getTeamById(s.teamId)
      return t?.confederation === conf
    }).reduce((acc, s) => acc + s.points, 0),
  })).filter(d => d.value > 0)

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="section-title">Estatísticas</h1>
        <p className="section-subtitle">Dashboard com dados calculados a partir do simulador</p>
      </div>

      {matchesPlayed === 0 && (
        <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-700">
          ⚠️ Preencha os resultados no <a href="/simulador" className="underline">simulador</a> para visualizar as estatísticas.
        </div>
      )}

      {/* KPI cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total de Gols', value: totalGoals, sub: `${matchesPlayed} partidas` },
          { label: 'Média por Jogo', value: matchesPlayed > 0 ? (totalGoals / matchesPlayed).toFixed(2) : '—', sub: 'gols/partida' },
          { label: 'Mais Vitórias', value: Object.entries(teamWins).sort((a, b) => b[1] - a[1])[0]?.[1] ?? 0, sub: getTeamById(Object.entries(teamWins).sort((a, b) => b[1] - a[1])[0]?.[0] ?? '')?.shortName ?? '—' },
          { label: 'Mais Gols', value: topScorers[0]?.goals ?? 0, sub: topScorers[0]?.name ?? '—' },
        ].map(card => (
          <div key={card.label} className="card p-4">
            <div className="text-xs text-gray-500 mb-1">{card.label}</div>
            <div className="text-3xl font-black text-primary-700">{card.value}</div>
            <div className="text-xs text-gray-400 mt-0.5">{card.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Goals by team */}
        <div className="card p-4">
          <h2 className="font-bold text-gray-800 mb-4">Gols por Seleção (Top 10)</h2>
          {topScorers.length > 0 ? (
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={topScorers} layout="vertical" margin={{ left: 10 }}>
                <XAxis type="number" tick={{ fontSize: 11 }} />
                <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} width={80} />
                <Tooltip />
                <Bar dataKey="goals" fill="#1d4ed8" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : <div className="h-[260px] flex items-center justify-center text-sm text-gray-400">Sem dados</div>}
        </div>

        {/* Goals by group */}
        <div className="card p-4">
          <h2 className="font-bold text-gray-800 mb-4">Gols por Grupo</h2>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={goalsPerGroup}>
              <XAxis dataKey="group" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="goals" fill="#16a34a" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Confederation points */}
      {confederationData.length > 0 && (
        <div className="card p-4">
          <h2 className="font-bold text-gray-800 mb-4">Pontos por Confederação</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={confederationData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
                  {confederationData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  )
}
