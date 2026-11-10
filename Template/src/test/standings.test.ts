import { describe, it, expect } from 'vitest'
import { computeGroupStandings, getThirdPlaceStandings } from '../utils/standings'
import type { Match } from '../types'

const teams = ['bra', 'arg', 'ger', 'fra']

const matches: Match[] = [
  { id: 'm1', homeTeamId: 'bra', awayTeamId: 'arg', date: '2026-06-11', time: '20:00', stadiumId: 'metlife', phase: 'group', group: 'A', status: 'finished', homeScore: 2, awayScore: 1, matchNumber: 1 },
  { id: 'm2', homeTeamId: 'ger', awayTeamId: 'fra', date: '2026-06-11', time: '17:00', stadiumId: 'atandt', phase: 'group', group: 'A', status: 'finished', homeScore: 1, awayScore: 1, matchNumber: 2 },
  { id: 'm3', homeTeamId: 'bra', awayTeamId: 'ger', date: '2026-06-15', time: '20:00', stadiumId: 'metlife', phase: 'group', group: 'A', status: 'finished', homeScore: 0, awayScore: 0, matchNumber: 3 },
  { id: 'm4', homeTeamId: 'arg', awayTeamId: 'fra', date: '2026-06-15', time: '17:00', stadiumId: 'atandt', phase: 'group', group: 'A', status: 'finished', homeScore: 3, awayScore: 0, matchNumber: 4 },
  { id: 'm5', homeTeamId: 'bra', awayTeamId: 'fra', date: '2026-06-19', time: '20:00', stadiumId: 'metlife', phase: 'group', group: 'A', status: 'finished', homeScore: 1, awayScore: 0, matchNumber: 5 },
  { id: 'm6', homeTeamId: 'arg', awayTeamId: 'ger', date: '2026-06-19', time: '17:00', stadiumId: 'atandt', phase: 'group', group: 'A', status: 'finished', homeScore: 1, awayScore: 2, matchNumber: 6 },
]

const results = {
  m1: { homeScore: 2, awayScore: 1 },
  m2: { homeScore: 1, awayScore: 1 },
  m3: { homeScore: 0, awayScore: 0 },
  m4: { homeScore: 3, awayScore: 0 },
  m5: { homeScore: 1, awayScore: 0 },
  m6: { homeScore: 1, awayScore: 2 },
}

describe('computeGroupStandings', () => {
  it('calculates points correctly', () => {
    const standings = computeGroupStandings(teams, matches, results)
    const bra = standings.find(s => s.teamId === 'bra')!
    expect(bra.points).toBe(7) // win(3) + draw(1) + win(3)
    expect(bra.won).toBe(2)
    expect(bra.drawn).toBe(1)
    expect(bra.lost).toBe(0)
  })

  it('sorts correctly by points', () => {
    const standings = computeGroupStandings(teams, matches, results)
    expect(standings[0].points).toBeGreaterThanOrEqual(standings[1].points)
    expect(standings[1].points).toBeGreaterThanOrEqual(standings[2].points)
  })

  it('calculates goal difference', () => {
    const standings = computeGroupStandings(teams, matches, results)
    const bra = standings.find(s => s.teamId === 'bra')!
    expect(bra.goalsFor).toBe(3)   // 2+0+1
    expect(bra.goalsAgainst).toBe(1) // 1+0+0
    expect(bra.goalDifference).toBe(2)
  })

  it('handles empty results', () => {
    const standings = computeGroupStandings(teams, matches, {})
    for (const s of standings) {
      expect(s.points).toBe(0)
      expect(s.played).toBe(0)
    }
  })
})

describe('getThirdPlaceStandings', () => {
  it('returns top 8 thirds sorted by points', () => {
    const groups: Record<string, ReturnType<typeof computeGroupStandings>> = {}
    const groupNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']
    for (const g of groupNames) {
      groups[g] = [
        { teamId: `t1${g}`, played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 5, goalsAgainst: 2, goalDifference: 3, points: 7, qualifier: null },
        { teamId: `t2${g}`, played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 3, goalsAgainst: 3, goalDifference: 0, points: 4, qualifier: null },
        { teamId: `t3${g}`, played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 1, goalsAgainst: 4, goalDifference: -3, points: 1, qualifier: null },
        { teamId: `t4${g}`, played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 1, goalsAgainst: 4, goalDifference: -3, points: 1, qualifier: null },
      ]
    }
    const thirds = getThirdPlaceStandings(groups)
    expect(thirds).toHaveLength(8)
    // All thirds have same points in this test, but we get exactly 8
    expect(thirds.every(t => t.points === 1)).toBe(true)
  })
})
