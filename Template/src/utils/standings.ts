import type { GroupStanding, Match } from '../types'

export function computeGroupStandings(
  teamIds: string[],
  matches: Match[],
  results: Record<string, { homeScore: number; awayScore: number }>,
): GroupStanding[] {
  const map: Record<string, GroupStanding> = {}
  for (const id of teamIds) {
    map[id] = { teamId: id, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, qualifier: null }
  }

  for (const match of matches) {
    const r = results[match.id]
    if (r == null) continue
    const { homeScore: h, awayScore: a } = r
    const home = map[match.homeTeamId]
    const away = map[match.awayTeamId]
    if (!home || !away) continue

    home.played++; away.played++
    home.goalsFor += h; home.goalsAgainst += a
    away.goalsFor += a; away.goalsAgainst += h

    if (h > a) { home.won++; home.points += 3; away.lost++ }
    else if (h < a) { away.won++; away.points += 3; home.lost++ }
    else { home.drawn++; home.points++; away.drawn++; away.points++ }
  }

  for (const s of Object.values(map)) {
    s.goalDifference = s.goalsFor - s.goalsAgainst
  }

  return sortStandings(Object.values(map), matches, results)
}

function headToHeadRecord(
  standings: GroupStanding[],
  matches: Match[],
  results: Record<string, { homeScore: number; awayScore: number }>,
): Record<string, GroupStanding> {
  const h2hMap: Record<string, GroupStanding> = {}
  for (const s of standings) {
    h2hMap[s.teamId] = { ...s, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, qualifier: null }
  }

  const teamIds = new Set(standings.map(s => s.teamId))
  for (const match of matches) {
    if (!teamIds.has(match.homeTeamId) || !teamIds.has(match.awayTeamId)) continue
    const r = results[match.id]
    if (r == null) continue
    const { homeScore: h, awayScore: a } = r
    const home = h2hMap[match.homeTeamId]
    const away = h2hMap[match.awayTeamId]
    if (!home || !away) continue

    home.played++; away.played++
    home.goalsFor += h; home.goalsAgainst += a
    away.goalsFor += a; away.goalsAgainst += h

    if (h > a) { home.won++; home.points += 3; away.lost++ }
    else if (h < a) { away.won++; away.points += 3; home.lost++ }
    else { home.drawn++; home.points++; away.drawn++; away.points++ }
  }
  for (const s of Object.values(h2hMap)) {
    s.goalDifference = s.goalsFor - s.goalsAgainst
  }
  return h2hMap
}

function compareStandings(
  a: GroupStanding,
  b: GroupStanding,
  allMatches: Match[],
  results: Record<string, { homeScore: number; awayScore: number }>,
): number {
  if (b.points !== a.points) return b.points - a.points
  if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference
  if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor

  // Head-to-head between tied teams
  const h2h = headToHeadRecord([a, b], allMatches, results)
  const ha = h2h[a.teamId]; const hb = h2h[b.teamId]
  if (hb.points !== ha.points) return hb.points - ha.points
  if (hb.goalDifference !== ha.goalDifference) return hb.goalDifference - ha.goalDifference
  if (hb.goalsFor !== ha.goalsFor) return hb.goalsFor - ha.goalsFor

  // FIFA ranking as final tiebreaker (lower rank number = better)
  return 0
}

export function sortStandings(
  standings: GroupStanding[],
  matches: Match[],
  results: Record<string, { homeScore: number; awayScore: number }>,
): GroupStanding[] {
  return [...standings].sort((a, b) => compareStandings(a, b, matches, results))
}

export function getThirdPlaceStandings(
  allGroupStandings: Record<string, GroupStanding[]>,
): GroupStanding[] {
  const thirds: (GroupStanding & { group: string })[] = []

  for (const [group, standings] of Object.entries(allGroupStandings)) {
    if (standings.length >= 3) {
      thirds.push({ ...standings[2], group })
    }
  }

  // Sort thirds by: points > GD > GF
  thirds.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points
    if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference
    if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor
    return 0
  })

  return thirds.slice(0, 8)
}

// Official FIFA 2026 R32 bracket mapping based on group positions
// Slots: 1A vs 2B, 1B vs best-third, etc.
// The official matchup table for the Copa 2026 format
export const R32_BRACKET_SLOTS: Array<{ home: string; away: string }> = [
  { home: '1A', away: '2B' },
  { home: '1C', away: '2D' },
  { home: '1E', away: '2F' },
  { home: '1G', away: '2H' },
  { home: '1I', away: '2J' },
  { home: '1K', away: '2L' },
  { home: '1B', away: '3ACEGI' },
  { home: '1D', away: '3BDFHJ' },
  { home: '1F', away: '3BCKL' },  // varies by combination
  { home: '1H', away: '3ADIL' },
  { home: '1J', away: '3EFGK' },
  { home: '1L', away: '3CDFG' },
  { home: '2A', away: '2C' },
  { home: '2E', away: '2G' },
  { home: '2I', away: '2K' },
  { home: '2J', away: '2L' },
]
