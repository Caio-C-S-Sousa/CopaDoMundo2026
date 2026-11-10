import { createContext, useContext, useReducer, useEffect, useCallback } from 'react'
import type { ReactNode } from 'react'
import type { FavoritesState } from '../types'
import { saveFavorites, loadFavorites } from '../utils/storage'

interface FavoritesContextValue {
  favorites: FavoritesState
  toggleTeam: (id: string) => void
  toggleMatch: (id: string) => void
  isTeamFavorite: (id: string) => boolean
  isMatchFavorite: (id: string) => boolean
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null)

type Action =
  | { type: 'TOGGLE_TEAM'; id: string }
  | { type: 'TOGGLE_MATCH'; id: string }
  | { type: 'LOAD'; payload: FavoritesState }

function reducer(state: FavoritesState, action: Action): FavoritesState {
  switch (action.type) {
    case 'TOGGLE_TEAM':
      return { ...state, teams: state.teams.includes(action.id) ? state.teams.filter(t => t !== action.id) : [...state.teams, action.id] }
    case 'TOGGLE_MATCH':
      return { ...state, matches: state.matches.includes(action.id) ? state.matches.filter(m => m !== action.id) : [...state.matches, action.id] }
    case 'LOAD':
      return action.payload
    default:
      return state
  }
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, dispatch] = useReducer(reducer, { teams: [], matches: [] }, () => loadFavorites())

  useEffect(() => { saveFavorites(favorites) }, [favorites])

  const toggleTeam = useCallback((id: string) => dispatch({ type: 'TOGGLE_TEAM', id }), [])
  const toggleMatch = useCallback((id: string) => dispatch({ type: 'TOGGLE_MATCH', id }), [])
  const isTeamFavorite = useCallback((id: string) => favorites.teams.includes(id), [favorites.teams])
  const isMatchFavorite = useCallback((id: string) => favorites.matches.includes(id), [favorites.matches])

  return (
    <FavoritesContext.Provider value={{ favorites, toggleTeam, toggleMatch, isTeamFavorite, isMatchFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites(): FavoritesContextValue {
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error('useFavorites must be used inside FavoritesProvider')
  return ctx
}
