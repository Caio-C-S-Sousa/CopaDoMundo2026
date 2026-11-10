import type { CompetitionPhase } from '../types'

export function formatDate(isoDate: string): string {
  return new Date(isoDate + 'T00:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
}

export function formatDateShort(isoDate: string): string {
  return new Date(isoDate + 'T00:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })
}

export function formatDateTime(isoDate: string, time: string): string {
  return `${formatDate(isoDate)} • ${time}`
}

export function phaseName(phase: CompetitionPhase): string {
  const names: Record<CompetitionPhase, string> = {
    group: 'Fase de Grupos',
    round_of_32: 'Rodada de 32',
    round_of_16: 'Oitavas de Final',
    quarterfinal: 'Quartas de Final',
    semifinal: 'Semifinal',
    third_place: 'Disputa pelo 3º Lugar',
    final: 'Final',
  }
  return names[phase]
}

export function confederationName(code: string): string {
  const names: Record<string, string> = {
    UEFA: 'UEFA (Europa)',
    CONMEBOL: 'CONMEBOL (América do Sul)',
    CONCACAF: 'CONCACAF (América do Norte/Central)',
    CAF: 'CAF (África)',
    AFC: 'AFC (Ásia)',
    OFC: 'OFC (Oceania)',
  }
  return names[code] ?? code
}

export function positionName(pos: string): string {
  const names: Record<string, string> = {
    GK: 'Goleiro',
    DEF: 'Defensor',
    MID: 'Meio-campista',
    FWD: 'Atacante',
  }
  return names[pos] ?? pos
}
