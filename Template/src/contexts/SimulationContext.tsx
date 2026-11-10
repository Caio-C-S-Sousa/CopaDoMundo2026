import { createContext, useContext, useReducer, useEffect, useCallback } from 'react'
import type { ReactNode } from 'react'
import type { SimulationState } from '../types'
import { saveSimulation, loadSimulation, clearSimulation } from '../utils/storage'
import { computeGroupStandings, getThirdPlaceStandings } from '../utils/standings'
import { teamsFixed, GROUPS } from '../data/teams'
import { groupMatches } from '../data/matches'
import type { GroupStanding } from '../types'

interface SimulationContextValue {
  state: SimulationState
  setGroupResult: (matchId: string, homeScore: number, awayScore: number) => void
  setKnockoutResult: (matchId: string, homeScore: number, awayScore: number, homePen?: number, awayPen?: number) => void
  randomizeGroupResults: () => void
  resetSimulation: () => void
  persistSimulation: () => void
  groupStandings: Record<string, GroupStanding[]>
  groupQualifiers: Record<string, { first: string; second: string }>
  bestThirds: GroupStanding[]
}

const SimulationContext = createContext<SimulationContextValue | null>(null)

type Action =
  | { type: 'SET_GROUP'; matchId: string; homeScore: number; awayScore: number }
  | { type: 'SET_KNOCKOUT'; matchId: string; homeScore: number; awayScore: number; homePen?: number; awayPen?: number }
  | { type: 'RESET' }
  | { type: 'RANDOMIZE_GROUPS' }
  | { type: 'LOAD'; payload: SimulationState }

function reducer(state: SimulationState, action: Action): SimulationState {
  switch (action.type) {
    case 'SET_GROUP':
      return { ...state, groupResults: { ...state.groupResults, [action.matchId]: { homeScore: action.homeScore, awayScore: action.awayScore } } }
    case 'SET_KNOCKOUT':
      return { ...state, knockoutResults: { ...state.knockoutResults, [action.matchId]: { homeScore: action.homeScore, awayScore: action.awayScore, homePen: action.homePen, awayPen: action.awayPen } } }
    case 'RESET':
      return { groupResults: {}, knockoutResults: {} }
    case 'RANDOMIZE_GROUPS': {
      const groupResults: Record<string, { homeScore: number; awayScore: number }> = {}
      for (const m of groupMatches) {
        groupResults[m.id] = { homeScore: Math.floor(Math.random() * 5), awayScore: Math.floor(Math.random() * 5) }
      }
      return { ...state, groupResults }
    }
    case 'LOAD':
      return action.payload
    default:
      return state
  }
}

const initialState: SimulationState = { groupResults: {}, knockoutResults: {} }

export function SimulationProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState, () => loadSimulation() ?? initialState)

  useEffect(() => {
    const saved = loadSimulation()
    if (saved) dispatch({ type: 'LOAD', payload: saved })
  }, [])

  const setGroupResult = useCallback((matchId: string, homeScore: number, awayScore: number) => {
    dispatch({ type: 'SET_GROUP', matchId, homeScore, awayScore })
  }, [])

  const setKnockoutResult = useCallback((matchId: string, homeScore: number, awayScore: number, homePen?: number, awayPen?: number) => {
    dispatch({ type: 'SET_KNOCKOUT', matchId, homeScore, awayScore, homePen, awayPen })
  }, [])

  const randomizeGroupResults = useCallback(() => dispatch({ type: 'RANDOMIZE_GROUPS' }), [])
  const resetSimulation = useCallback(() => { dispatch({ type: 'RESET' }); clearSimulation() }, [])
  const persistSimulation = useCallback(() => saveSimulation(state), [state])

  // Compute standings from simulation state
  const groupStandings: Record<string, GroupStanding[]> = {}
  for (const group of GROUPS) {
    const teamIds = teamsFixed.filter(t => t.group === group).map(t => t.id)
    const matches = groupMatches.filter(m => m.group === group)
    groupStandings[group] = computeGroupStandings(teamIds, matches, state.groupResults)
  }

  const groupQualifiers: Record<string, { first: string; second: string }> = {}
  for (const [group, standings] of Object.entries(groupStandings)) {
    groupQualifiers[group] = { first: standings[0]?.teamId ?? '', second: standings[1]?.teamId ?? '' }
  }

  const bestThirds = getThirdPlaceStandings(groupStandings)

  return (
    <SimulationContext.Provider value={{ state, setGroupResult, setKnockoutResult, randomizeGroupResults, resetSimulation, persistSimulation, groupStandings, groupQualifiers, bestThirds }}>
      {children}
    </SimulationContext.Provider>
  )
}

export function useSimulation(): SimulationContextValue {
  const ctx = useContext(SimulationContext)
  if (!ctx) throw new Error('useSimulation must be used inside SimulationProvider')
  return ctx
}
