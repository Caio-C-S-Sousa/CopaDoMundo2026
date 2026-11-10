import { useSimulation } from '../contexts/SimulationContext'
import { getTeamById } from '../data/teams'
import { resolveKnockoutBracket } from '../utils/knockout'
import { R32_MATCHUPS, R16_MATCHUPS, QF_MATCHUPS, SF_MATCHUPS } from '../utils/knockout'
import { Link } from 'react-router-dom'

interface SlotProps {
  teamId: string
  score?: number | null
  isWinner?: boolean
}

function BracketSlot({ teamId, score, isWinner }: SlotProps) {
  const team = teamId ? getTeamById(teamId) : undefined
  return (
    <div className={`flex items-center gap-1.5 px-2 py-1.5 rounded text-xs border transition-colors ${
      isWinner ? 'bg-green-50 border-green-200 font-semibold' :
      teamId ? 'bg-white border-gray-200' :
      'bg-gray-50 border-gray-100 text-gray-300'
    }`}>
      <span className="text-base w-5">{team?.flag ?? '?'}</span>
      <span className="flex-1 truncate">{team?.shortName ?? 'TBD'}</span>
      {score != null && <span className="font-bold text-gray-700 ml-1">{score}</span>}
    </div>
  )
}

interface MatchSlotProps {
  matchId: string
  home: string
  away: string
  homeScore?: number | null
  awayScore?: number | null
  winnerId?: string | null
}

function BracketMatch({ matchId, home, away, homeScore, awayScore, winnerId }: MatchSlotProps) {
  return (
    <Link to={`/partidas/${matchId}`} className="block w-36 space-y-0.5 hover:opacity-80 transition-opacity">
      <BracketSlot teamId={home} score={homeScore} isWinner={winnerId === home && !!home} />
      <BracketSlot teamId={away} score={awayScore} isWinner={winnerId === away && !!away} />
    </Link>
  )
}

export default function KnockoutBracket() {
  const { groupQualifiers, bestThirds, state } = useSimulation()
  const bracket = resolveKnockoutBracket(groupQualifiers, bestThirds, state.knockoutResults)

  const champion = bracket['FIN_1']?.winnerId ? getTeamById(bracket['FIN_1'].winnerId) : undefined

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="section-title">Mata-mata</h1>
        <p className="section-subtitle">Chaveamento completo — preencha os resultados no simulador para ver as seleções classificadas</p>
      </div>

      {champion && (
        <div className="mb-6 p-4 bg-gold-50 border border-gold-300 rounded-xl flex items-center gap-3">
          <span className="text-4xl">{champion.flag}</span>
          <div>
            <div className="text-xs text-gold-600 font-medium uppercase tracking-wide">Campeão Projetado</div>
            <div className="text-xl font-bold text-gold-800">{champion.name}</div>
          </div>
          <span className="ml-auto text-4xl">🏆</span>
        </div>
      )}

      <div className="overflow-x-auto pb-6">
        <div className="min-w-[900px]">
          {/* Phase labels */}
          <div className="grid grid-cols-5 gap-2 mb-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
            <div className="text-center">Rodada de 32</div>
            <div className="text-center">Oitavas</div>
            <div className="text-center">Quartas</div>
            <div className="text-center">Semifinal</div>
            <div className="text-center">Final</div>
          </div>

          {/* Top half */}
          <div className="grid grid-cols-5 gap-2 items-start">
            {/* R32 top 8 */}
            <div className="space-y-3">
              {R32_MATCHUPS.slice(0, 8).map(m => {
                const b = bracket[m.matchId]
                return <BracketMatch key={m.matchId} matchId={m.matchId} home={b?.homeTeamId ?? ''} away={b?.awayTeamId ?? ''} winnerId={b?.winnerId} />
              })}
            </div>
            {/* R16 top 4 */}
            <div className="space-y-6 mt-3">
              {R16_MATCHUPS.slice(0, 4).map(m => {
                const b = bracket[m.matchId]
                return <BracketMatch key={m.matchId} matchId={m.matchId} home={b?.homeTeamId ?? ''} away={b?.awayTeamId ?? ''} winnerId={b?.winnerId} />
              })}
            </div>
            {/* QF top 2 */}
            <div className="space-y-16 mt-9">
              {QF_MATCHUPS.slice(0, 2).map(m => {
                const b = bracket[m.matchId]
                return <BracketMatch key={m.matchId} matchId={m.matchId} home={b?.homeTeamId ?? ''} away={b?.awayTeamId ?? ''} winnerId={b?.winnerId} />
              })}
            </div>
            {/* SF 1 */}
            <div className="mt-20">
              {(() => {
                const m = SF_MATCHUPS[0]
                const b = bracket[m.matchId]
                return <BracketMatch matchId={m.matchId} home={b?.homeTeamId ?? ''} away={b?.awayTeamId ?? ''} winnerId={b?.winnerId} />
              })()}
            </div>
            {/* Final */}
            <div className="mt-32 flex flex-col items-center gap-2">
              {(() => {
                const b = bracket['FIN_1']
                return (
                  <>
                    <div className="text-xs font-bold text-gold-600 mb-1">🏆 Final</div>
                    <BracketMatch matchId="FIN_1" home={b?.homeTeamId ?? ''} away={b?.awayTeamId ?? ''} winnerId={b?.winnerId} />
                  </>
                )
              })()}
            </div>
          </div>

          {/* Bottom half */}
          <div className="grid grid-cols-5 gap-2 items-start mt-4">
            <div className="space-y-3">
              {R32_MATCHUPS.slice(8).map(m => {
                const b = bracket[m.matchId]
                return <BracketMatch key={m.matchId} matchId={m.matchId} home={b?.homeTeamId ?? ''} away={b?.awayTeamId ?? ''} winnerId={b?.winnerId} />
              })}
            </div>
            <div className="space-y-6 mt-3">
              {R16_MATCHUPS.slice(4).map(m => {
                const b = bracket[m.matchId]
                return <BracketMatch key={m.matchId} matchId={m.matchId} home={b?.homeTeamId ?? ''} away={b?.awayTeamId ?? ''} winnerId={b?.winnerId} />
              })}
            </div>
            <div className="space-y-16 mt-9">
              {QF_MATCHUPS.slice(2).map(m => {
                const b = bracket[m.matchId]
                return <BracketMatch key={m.matchId} matchId={m.matchId} home={b?.homeTeamId ?? ''} away={b?.awayTeamId ?? ''} winnerId={b?.winnerId} />
              })}
            </div>
            <div className="mt-20">
              {(() => {
                const m = SF_MATCHUPS[1]
                const b = bracket[m.matchId]
                return <BracketMatch matchId={m.matchId} home={b?.homeTeamId ?? ''} away={b?.awayTeamId ?? ''} winnerId={b?.winnerId} />
              })()}
            </div>
            <div className="mt-16 flex flex-col items-center gap-2">
              {(() => {
                const b = bracket['TP_1']
                return (
                  <>
                    <div className="text-xs font-semibold text-gray-500 mb-1">🥉 3º Lugar</div>
                    <BracketMatch matchId="TP_1" home={b?.homeTeamId ?? ''} away={b?.awayTeamId ?? ''} winnerId={b?.winnerId} />
                  </>
                )
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
