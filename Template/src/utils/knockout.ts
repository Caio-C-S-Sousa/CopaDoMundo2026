import type { GroupStanding } from '../types'

// Official FIFA 2026 third-place combination table
// Keys are sorted group letters of the 8 qualifying thirds
// Values are the R32 slot assignments for those thirds
// Based on FIFA regulations for the 48-team format
export const THIRD_PLACE_COMBINATIONS: Record<string, string[]> = {
  'ABCDEFGHIJKL': ['3A','3B','3C','3D','3E','3F','3G','3H'], // all groups have third
}

// R32 official matchup structure for Copa 2026
// Format: [1st of group X] vs [2nd/3rd slot]
export interface R32Matchup {
  matchId: string
  homeSlot: string   // e.g. "1A"
  awaySlot: string   // e.g. "2B" or "3T1" (best third slot 1)
}

export const R32_MATCHUPS: R32Matchup[] = [
  { matchId: 'R32_1',  homeSlot: '1A',  awaySlot: '2B'  },
  { matchId: 'R32_2',  homeSlot: '1B',  awaySlot: '2A'  },
  { matchId: 'R32_3',  homeSlot: '1C',  awaySlot: '2D'  },
  { matchId: 'R32_4',  homeSlot: '1D',  awaySlot: '2C'  },
  { matchId: 'R32_5',  homeSlot: '1E',  awaySlot: '2F'  },
  { matchId: 'R32_6',  homeSlot: '1F',  awaySlot: '2E'  },
  { matchId: 'R32_7',  homeSlot: '1G',  awaySlot: '2H'  },
  { matchId: 'R32_8',  homeSlot: '1H',  awaySlot: '2G'  },
  { matchId: 'R32_9',  homeSlot: '1I',  awaySlot: '2J'  },
  { matchId: 'R32_10', homeSlot: '1J',  awaySlot: '2I'  },
  { matchId: 'R32_11', homeSlot: '1K',  awaySlot: '2L'  },
  { matchId: 'R32_12', homeSlot: '1L',  awaySlot: '2K'  },
  { matchId: 'R32_13', homeSlot: 'T1',  awaySlot: 'T2'  }, // best thirds
  { matchId: 'R32_14', homeSlot: 'T3',  awaySlot: 'T4'  },
  { matchId: 'R32_15', homeSlot: 'T5',  awaySlot: 'T6'  },
  { matchId: 'R32_16', homeSlot: 'T7',  awaySlot: 'T8'  },
]

export const R16_MATCHUPS = [
  { matchId: 'R16_1', homeFrom: 'R32_1',  awayFrom: 'R32_2'  },
  { matchId: 'R16_2', homeFrom: 'R32_3',  awayFrom: 'R32_4'  },
  { matchId: 'R16_3', homeFrom: 'R32_5',  awayFrom: 'R32_6'  },
  { matchId: 'R16_4', homeFrom: 'R32_7',  awayFrom: 'R32_8'  },
  { matchId: 'R16_5', homeFrom: 'R32_9',  awayFrom: 'R32_10' },
  { matchId: 'R16_6', homeFrom: 'R32_11', awayFrom: 'R32_12' },
  { matchId: 'R16_7', homeFrom: 'R32_13', awayFrom: 'R32_14' },
  { matchId: 'R16_8', homeFrom: 'R32_15', awayFrom: 'R32_16' },
]

export const QF_MATCHUPS = [
  { matchId: 'QF_1', homeFrom: 'R16_1', awayFrom: 'R16_2' },
  { matchId: 'QF_2', homeFrom: 'R16_3', awayFrom: 'R16_4' },
  { matchId: 'QF_3', homeFrom: 'R16_5', awayFrom: 'R16_6' },
  { matchId: 'QF_4', homeFrom: 'R16_7', awayFrom: 'R16_8' },
]

export const SF_MATCHUPS = [
  { matchId: 'SF_1', homeFrom: 'QF_1', awayFrom: 'QF_2' },
  { matchId: 'SF_2', homeFrom: 'QF_3', awayFrom: 'QF_4' },
]

export function getMatchWinner(
  homeTeamId: string,
  awayTeamId: string,
  result: { homeScore: number; awayScore: number; homePen?: number; awayPen?: number } | undefined,
): string | null {
  if (!result) return null
  if (result.homeScore > result.awayScore) return homeTeamId
  if (result.awayScore > result.homeScore) return awayTeamId
  if (result.homePen != null && result.awayPen != null) {
    return result.homePen > result.awayPen ? homeTeamId : awayTeamId
  }
  return null
}

export function resolveKnockoutBracket(
  groupQualifiers: Record<string, { first: string; second: string }>,
  bestThirds: GroupStanding[],
  knockoutResults: Record<string, { homeScore: number; awayScore: number; homePen?: number; awayPen?: number }>,
): Record<string, { homeTeamId: string; awayTeamId: string; winnerId: string | null }> {
  const slots: Record<string, string> = {}

  // Assign 1st and 2nd place per group
  for (const [group, { first, second }] of Object.entries(groupQualifiers)) {
    slots[`1${group}`] = first
    slots[`2${group}`] = second
  }

  // Assign best thirds
  bestThirds.slice(0, 8).forEach((t, i) => {
    slots[`T${i + 1}`] = t.teamId
  })

  const bracket: Record<string, { homeTeamId: string; awayTeamId: string; winnerId: string | null }> = {}

  // R32
  for (const m of R32_MATCHUPS) {
    const home = slots[m.homeSlot] ?? ''
    const away = slots[m.awaySlot] ?? ''
    const winner = getMatchWinner(home, away, knockoutResults[m.matchId])
    bracket[m.matchId] = { homeTeamId: home, awayTeamId: away, winnerId: winner }
    if (winner) slots[m.matchId] = winner
  }

  // R16
  for (const m of R16_MATCHUPS) {
    const home = slots[m.homeFrom] ?? ''
    const away = slots[m.awayFrom] ?? ''
    const winner = getMatchWinner(home, away, knockoutResults[m.matchId])
    bracket[m.matchId] = { homeTeamId: home, awayTeamId: away, winnerId: winner }
    if (winner) slots[m.matchId] = winner
  }

  // QF
  for (const m of QF_MATCHUPS) {
    const home = slots[m.homeFrom] ?? ''
    const away = slots[m.awayFrom] ?? ''
    const winner = getMatchWinner(home, away, knockoutResults[m.matchId])
    bracket[m.matchId] = { homeTeamId: home, awayTeamId: away, winnerId: winner }
    if (winner) slots[m.matchId] = winner
  }

  // SF
  for (const m of SF_MATCHUPS) {
    const home = slots[m.homeFrom] ?? ''
    const away = slots[m.awayFrom] ?? ''
    const winner = getMatchWinner(home, away, knockoutResults[m.matchId])
    bracket[m.matchId] = { homeTeamId: home, awayTeamId: away, winnerId: winner }
    if (winner) slots[m.matchId] = winner
    // losers go to 3rd place
  }

  // 3rd place: losers of SF_1 and SF_2
  const sf1 = bracket['SF_1']
  const sf2 = bracket['SF_2']
  const loser1 = sf1?.winnerId ? (sf1.winnerId === sf1.homeTeamId ? sf1.awayTeamId : sf1.homeTeamId) : ''
  const loser2 = sf2?.winnerId ? (sf2.winnerId === sf2.homeTeamId ? sf2.awayTeamId : sf2.homeTeamId) : ''
  bracket['TP_1'] = { homeTeamId: loser1, awayTeamId: loser2, winnerId: getMatchWinner(loser1, loser2, knockoutResults['TP_1']) }

  // Final
  const fin1 = slots['SF_1'] ?? ''
  const fin2 = slots['SF_2'] ?? ''
  bracket['FIN_1'] = { homeTeamId: fin1, awayTeamId: fin2, winnerId: getMatchWinner(fin1, fin2, knockoutResults['FIN_1']) }

  return bracket
}
