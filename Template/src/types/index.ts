export type Confederation = 'UEFA' | 'CONMEBOL' | 'CONCACAF' | 'CAF' | 'AFC' | 'OFC'

export type MatchStatus = 'scheduled' | 'live' | 'finished'

export type CompetitionPhase =
  | 'group'
  | 'round_of_32'
  | 'round_of_16'
  | 'quarterfinal'
  | 'semifinal'
  | 'third_place'
  | 'final'

export interface Team {
  id: string
  name: string
  shortName: string
  code: string        // 3-letter ISO code, e.g. "BRA"
  flag: string        // emoji flag
  group: string       // "A" to "L"
  confederation: Confederation
  coach: string
  fifaRanking: number
  players: Player[]
}

export interface Player {
  id: string
  name: string
  number: number
  position: 'GK' | 'DEF' | 'MID' | 'FWD'
  club: string
  age: number
  caps: number
  goals: number
  isCaptain?: boolean
  isKeyStar?: boolean
}

export interface Stadium {
  id: string
  name: string
  city: string
  country: 'USA' | 'Mexico' | 'Canada'
  capacity: number
  imageUrl?: string
  matches?: string[]  // match IDs
}

export interface Match {
  id: string
  homeTeamId: string
  awayTeamId: string
  date: string        // ISO date string
  time: string        // "HH:MM"
  stadiumId: string
  phase: CompetitionPhase
  group?: string      // only for group phase
  status: MatchStatus
  homeScore: number | null
  awayScore: number | null
  homeScoreET?: number | null   // extra time
  awayScoreET?: number | null
  homePenalties?: number | null
  awayPenalties?: number | null
  matchNumber: number
  events?: MatchEvent[]
  lineups?: {
    home: string[]    // player IDs
    away: string[]
  }
}

export interface MatchEvent {
  minute: number
  type: 'goal' | 'yellow_card' | 'red_card' | 'substitution' | 'penalty_goal' | 'own_goal'
  teamId: string
  playerId?: string
  playerName: string
  assistPlayerName?: string
}

export interface GroupStanding {
  teamId: string
  played: number
  won: number
  drawn: number
  lost: number
  goalsFor: number
  goalsAgainst: number
  goalDifference: number
  points: number
  qualifier: 'direct' | 'best_third' | 'eliminated' | null
}

export interface Group {
  id: string          // "A" to "L"
  teams: string[]     // team IDs
  standings: GroupStanding[]
}

export interface KnockoutSlot {
  matchId: string | null
  homeTeamId: string | null
  awayTeamId: string | null
  homeScore: number | null
  awayScore: number | null
  date?: string
  stadiumId?: string
  winnerId?: string | null
}

export interface KnockoutBracket {
  roundOf32: KnockoutSlot[]        // 16 matches
  roundOf16: KnockoutSlot[]        // 8 matches
  quarterfinals: KnockoutSlot[]    // 4 matches
  semifinals: KnockoutSlot[]       // 2 matches
  thirdPlace: KnockoutSlot         // 1 match
  final: KnockoutSlot              // 1 match
}

export interface SimulationState {
  groupResults: Record<string, { homeScore: number; awayScore: number }>  // matchId -> scores
  knockoutResults: Record<string, { homeScore: number; awayScore: number; homePen?: number; awayPen?: number }>
  savedAt?: string
}

export interface NewsArticle {
  id: string
  title: string
  summary: string
  content: string
  category: 'match' | 'team' | 'general' | 'curiosity'
  date: string
  imageUrl?: string
  isFictional: boolean
}

export interface BolaoEntry {
  id: string
  participantName: string
  predictions: Record<string, { homeScore: number; awayScore: number }>
  points: number
  createdAt: string
}

export interface FavoritesState {
  teams: string[]     // team IDs
  matches: string[]   // match IDs
}

export interface TournamentStats {
  totalGoals: number
  totalMatches: number
  avgGoalsPerMatch: number
  topScorers: { playerId: string; playerName: string; teamId: string; goals: number }[]
  topAssists: { playerId: string; playerName: string; teamId: string; assists: number }[]
  yellowCards: { teamId: string; count: number }[]
  redCards: { teamId: string; count: number }[]
  teamStats: TeamStats[]
}

export interface TeamStats {
  teamId: string
  played: number
  won: number
  drawn: number
  lost: number
  goalsFor: number
  goalsAgainst: number
  points: number
  phase: CompetitionPhase | 'group'
}
