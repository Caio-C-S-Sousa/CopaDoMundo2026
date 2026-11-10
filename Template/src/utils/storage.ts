import type { SimulationState, FavoritesState, BolaoEntry } from '../types'

const KEYS = {
  simulation: 'copa2026:simulation',
  favorites: 'copa2026:favorites',
  bolao: 'copa2026:bolao',
} as const

export function saveSimulation(state: SimulationState): void {
  localStorage.setItem(KEYS.simulation, JSON.stringify({ ...state, savedAt: new Date().toISOString() }))
}

export function loadSimulation(): SimulationState | null {
  try {
    const raw = localStorage.getItem(KEYS.simulation)
    return raw ? (JSON.parse(raw) as SimulationState) : null
  } catch {
    return null
  }
}

export function clearSimulation(): void {
  localStorage.removeItem(KEYS.simulation)
}

export function saveFavorites(state: FavoritesState): void {
  localStorage.setItem(KEYS.favorites, JSON.stringify(state))
}

export function loadFavorites(): FavoritesState {
  try {
    const raw = localStorage.getItem(KEYS.favorites)
    return raw ? (JSON.parse(raw) as FavoritesState) : { teams: [], matches: [] }
  } catch {
    return { teams: [], matches: [] }
  }
}

export function saveBolao(entries: BolaoEntry[]): void {
  localStorage.setItem(KEYS.bolao, JSON.stringify(entries))
}

export function loadBolao(): BolaoEntry[] {
  try {
    const raw = localStorage.getItem(KEYS.bolao)
    return raw ? (JSON.parse(raw) as BolaoEntry[]) : []
  } catch {
    return []
  }
}
