import type { Team } from '../types'

export const teams: Team[] = [
  // GROUP A
  { id: 'usa', name: 'Estados Unidos', shortName: 'EUA', code: 'USA', flag: '🇺🇸', group: 'A', confederation: 'CONCACAF', coach: 'Mauricio Pochettino', fifaRanking: 11, players: [] },
  { id: 'mex', name: 'México', shortName: 'México', code: 'MEX', flag: '🇲🇽', group: 'A', confederation: 'CONCACAF', coach: 'Javier Aguirre', fifaRanking: 15, players: [] },
  { id: 'uru', name: 'Uruguai', shortName: 'Uruguai', code: 'URU', flag: '🇺🇾', group: 'A', confederation: 'CONMEBOL', coach: 'Marcelo Bielsa', fifaRanking: 17, players: [] },
  { id: 'pan', name: 'Panamá', shortName: 'Panamá', code: 'PAN', flag: '🇵🇦', group: 'A', confederation: 'CONCACAF', coach: 'Thomas Christiansen', fifaRanking: 49, players: [] },

  // GROUP B
  { id: 'esp', name: 'Espanha', shortName: 'Espanha', code: 'ESP', flag: '🇪🇸', group: 'B', confederation: 'UEFA', coach: 'Luis de la Fuente', fifaRanking: 1, players: [] },
  { id: 'bra', name: 'Brasil', shortName: 'Brasil', code: 'BRA', flag: '🇧🇷', group: 'B', confederation: 'CONMEBOL', coach: 'Dorival Júnior', fifaRanking: 5, players: [] },
  { id: 'mar', name: 'Marrocos', shortName: 'Marrocos', code: 'MAR', flag: '🇲🇦', group: 'B', confederation: 'CAF', coach: 'Walid Regragui', fifaRanking: 14, players: [] },
  { id: 'srb', name: 'Sérvia', shortName: 'Sérvia', code: 'SRB', flag: '🇷🇸', group: 'B', confederation: 'UEFA', coach: 'Dragan Stojković', fifaRanking: 33, players: [] },

  // GROUP C
  { id: 'ger', name: 'Alemanha', shortName: 'Alemanha', code: 'GER', flag: '🇩🇪', group: 'C', confederation: 'UEFA', coach: 'Julian Nagelsmann', fifaRanking: 12, players: [] },
  { id: 'arg', name: 'Argentina', shortName: 'Argentina', code: 'ARG', flag: '🇦🇷', group: 'C', confederation: 'CONMEBOL', coach: 'Lionel Scaloni', fifaRanking: 2, players: [] },
  { id: 'jpn', name: 'Japão', shortName: 'Japão', code: 'JPN', flag: '🇯🇵', group: 'C', confederation: 'AFC', coach: 'Hajime Moriyasu', fifaRanking: 18, players: [] },
  { id: 'sen', name: 'Senegal', shortName: 'Senegal', code: 'SEN', flag: '🇸🇳', group: 'C', confederation: 'CAF', coach: 'Aliou Cissé', fifaRanking: 20, players: [] },

  // GROUP D
  { id: 'fra', name: 'França', shortName: 'França', code: 'FRA', flag: '🇫🇷', group: 'D', confederation: 'UEFA', coach: 'Didier Deschamps', fifaRanking: 3, players: [] },
  { id: 'por', name: 'Portugal', shortName: 'Portugal', code: 'POR', flag: '🇵🇹', group: 'D', confederation: 'UEFA', coach: 'Roberto Martínez', fifaRanking: 6, players: [] },
  { id: 'mex2', name: 'México B', shortName: 'México', code: 'CMR', flag: '🇨🇲', group: 'D', confederation: 'CAF', coach: 'Marc Brys', fifaRanking: 42, players: [] },
  { id: 'alb', name: 'Albânia', shortName: 'Albânia', code: 'ALB', flag: '🇦🇱', group: 'D', confederation: 'UEFA', coach: 'Sylvinho', fifaRanking: 65, players: [] },

  // GROUP E
  { id: 'eng', name: 'Inglaterra', shortName: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', group: 'E', confederation: 'UEFA', coach: 'Thomas Tuchel', fifaRanking: 4, players: [] },
  { id: 'col', name: 'Colômbia', shortName: 'Colômbia', code: 'COL', flag: '🇨🇴', group: 'E', confederation: 'CONMEBOL', coach: 'Néstor Lorenzo', fifaRanking: 9, players: [] },
  { id: 'ned', name: 'Países Baixos', shortName: 'Holanda', code: 'NED', flag: '🇳🇱', group: 'E', confederation: 'UEFA', coach: 'Ronald Koeman', fifaRanking: 8, players: [] },
  { id: 'ngr', name: 'Nigéria', shortName: 'Nigéria', code: 'NGA', flag: '🇳🇬', group: 'E', confederation: 'CAF', coach: 'Eric Chelle', fifaRanking: 40, players: [] },

  // GROUP F
  { id: 'bel', name: 'Bélgica', shortName: 'Bélgica', code: 'BEL', flag: '🇧🇪', group: 'F', confederation: 'UEFA', coach: 'Domenico Tedesco', fifaRanking: 7, players: [] },
  { id: 'mex3', name: 'Austrália', shortName: 'Austrália', code: 'AUS', flag: '🇦🇺', group: 'F', confederation: 'AFC', coach: 'Tony Popovic', fifaRanking: 24, players: [] },
  { id: 'ksa', name: 'Arábia Saudita', shortName: 'Arábia Saudita', code: 'KSA', flag: '🇸🇦', group: 'F', confederation: 'AFC', coach: 'Hervé Renard', fifaRanking: 55, players: [] },
  { id: 'aut', name: 'Áustria', shortName: 'Áustria', code: 'AUT', flag: '🇦🇹', group: 'F', confederation: 'UEFA', coach: 'Ralf Rangnick', fifaRanking: 25, players: [] },

  // GROUP G
  { id: 'prt', name: 'Portugal G', shortName: 'Croácia', code: 'CRO', flag: '🇭🇷', group: 'G', confederation: 'UEFA', coach: 'Zlatko Dalić', fifaRanking: 10, players: [] },
  { id: 'mex4', name: 'Equador', shortName: 'Equador', code: 'ECU', flag: '🇪🇨', group: 'G', confederation: 'CONMEBOL', coach: 'Sebastián Beccacece', fifaRanking: 35, players: [] },
  { id: 'irn', name: 'Irã', shortName: 'Irã', code: 'IRN', flag: '🇮🇷', group: 'G', confederation: 'AFC', coach: 'Amir Ghalenoei', fifaRanking: 22, players: [] },
  { id: 'tun', name: 'Tunísia', shortName: 'Tunísia', code: 'TUN', flag: '🇹🇳', group: 'G', confederation: 'CAF', coach: 'Faouzi Benzarti', fifaRanking: 30, players: [] },

  // GROUP H
  { id: 'mex5', name: 'Suíça', shortName: 'Suíça', code: 'SUI', flag: '🇨🇭', group: 'H', confederation: 'UEFA', coach: 'Murat Yakin', fifaRanking: 19, players: [] },
  { id: 'chi', name: 'Chile', shortName: 'Chile', code: 'CHI', flag: '🇨🇱', group: 'H', confederation: 'CONMEBOL', coach: 'Ricardo Gareca', fifaRanking: 28, players: [] },
  { id: 'cmr', name: 'Camarões', shortName: 'Camarões', code: 'CMR2', flag: '🇨🇲', group: 'H', confederation: 'CAF', coach: 'Marc Brys', fifaRanking: 43, players: [] },
  { id: 'nzl', name: 'Nova Zelândia', shortName: 'Nova Zelândia', code: 'NZL', flag: '🇳🇿', group: 'H', confederation: 'OFC', coach: 'Darren Bazeley', fifaRanking: 95, players: [] },

  // GROUP I
  { id: 'ita', name: 'Itália', shortName: 'Itália', code: 'ITA', flag: '🇮🇹', group: 'I', confederation: 'UEFA', coach: 'Luciano Spalletti', fifaRanking: 16, players: [] },
  { id: 'mex6', name: 'Peru', shortName: 'Peru', code: 'PER', flag: '🇵🇪', group: 'I', confederation: 'CONMEBOL', coach: 'Jorge Fossati', fifaRanking: 50, players: [] },
  { id: 'tko', name: 'Coreia do Sul', shortName: 'Coreia do Sul', code: 'KOR', flag: '🇰🇷', group: 'I', confederation: 'AFC', coach: 'Hong Myung-bo', fifaRanking: 23, players: [] },
  { id: 'gui', name: 'Guiné', shortName: 'Guiné', code: 'GUI', flag: '🇬🇳', group: 'I', confederation: 'CAF', coach: 'Kaba Diawara', fifaRanking: 76, players: [] },

  // GROUP J
  { id: 'mex7', name: 'Dinamarca', shortName: 'Dinamarca', code: 'DEN', flag: '🇩🇰', group: 'J', confederation: 'UEFA', coach: 'Kasper Hjulmand', fifaRanking: 21, players: [] },
  { id: 'ven', name: 'Venezuela', shortName: 'Venezuela', code: 'VEN', flag: '🇻🇪', group: 'J', confederation: 'CONMEBOL', coach: 'Fernando Batista', fifaRanking: 38, players: [] },
  { id: 'alg', name: 'Argélia', shortName: 'Argélia', code: 'ALG', flag: '🇩🇿', group: 'J', confederation: 'CAF', coach: 'Pepe', fifaRanking: 36, players: [] },
  { id: 'can', name: 'Canadá', shortName: 'Canadá', code: 'CAN', flag: '🇨🇦', group: 'J', confederation: 'CONCACAF', coach: 'Jesse Marsch', fifaRanking: 48, players: [] },

  // GROUP K
  { id: 'por2', name: 'Turquia', shortName: 'Turquia', code: 'TUR', flag: '🇹🇷', group: 'K', confederation: 'UEFA', coach: 'Vincenzo Montella', fifaRanking: 29, players: [] },
  { id: 'par', name: 'Paraguai', shortName: 'Paraguai', code: 'PAR', flag: '🇵🇾', group: 'K', confederation: 'CONMEBOL', coach: 'Gustavo Alfaro', fifaRanking: 61, players: [] },
  { id: 'irq', name: 'Iraque', shortName: 'Iraque', code: 'IRQ', flag: '🇮🇶', group: 'K', confederation: 'AFC', coach: 'Jesús Casas', fifaRanking: 58, players: [] },
  { id: 'cod', name: 'RD Congo', shortName: 'RD Congo', code: 'COD', flag: '🇨🇩', group: 'K', confederation: 'CAF', coach: 'Sébastien Desabre', fifaRanking: 52, players: [] },

  // GROUP L
  { id: 'mex8', name: 'Escócia', shortName: 'Escócia', code: 'SCO', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', group: 'L', confederation: 'UEFA', coach: 'Steve Clarke', fifaRanking: 27, players: [] },
  { id: 'bol', name: 'Bolívia', shortName: 'Bolívia', code: 'BOL', flag: '🇧🇴', group: 'L', confederation: 'CONMEBOL', coach: 'Óscar Villegas', fifaRanking: 85, players: [] },
  { id: 'uzb', name: 'Uzbequistão', shortName: 'Uzbequistão', code: 'UZB', flag: '🇺🇿', group: 'L', confederation: 'AFC', coach: 'Srecko Katanec', fifaRanking: 68, players: [] },
  { id: 'egy', name: 'Egito', shortName: 'Egito', code: 'EGY', flag: '🇪🇬', group: 'L', confederation: 'CAF', coach: 'Hossam Hassan', fifaRanking: 44, players: [] },
]

// Fix team IDs to be clean unique values
export const teamsFixed: Team[] = [
  { id: 'usa', name: 'Estados Unidos', shortName: 'EUA', code: 'USA', flag: '🇺🇸', group: 'A', confederation: 'CONCACAF', coach: 'Mauricio Pochettino', fifaRanking: 11, players: [] },
  { id: 'mex', name: 'México', shortName: 'México', code: 'MEX', flag: '🇲🇽', group: 'A', confederation: 'CONCACAF', coach: 'Javier Aguirre', fifaRanking: 15, players: [] },
  { id: 'uru', name: 'Uruguai', shortName: 'Uruguai', code: 'URU', flag: '🇺🇾', group: 'A', confederation: 'CONMEBOL', coach: 'Marcelo Bielsa', fifaRanking: 17, players: [] },
  { id: 'pan', name: 'Panamá', shortName: 'Panamá', code: 'PAN', flag: '🇵🇦', group: 'A', confederation: 'CONCACAF', coach: 'Thomas Christiansen', fifaRanking: 49, players: [] },
  { id: 'esp', name: 'Espanha', shortName: 'Espanha', code: 'ESP', flag: '🇪🇸', group: 'B', confederation: 'UEFA', coach: 'Luis de la Fuente', fifaRanking: 1, players: [] },
  { id: 'bra', name: 'Brasil', shortName: 'Brasil', code: 'BRA', flag: '🇧🇷', group: 'B', confederation: 'CONMEBOL', coach: 'Dorival Júnior', fifaRanking: 5, players: [] },
  { id: 'mar', name: 'Marrocos', shortName: 'Marrocos', code: 'MAR', flag: '🇲🇦', group: 'B', confederation: 'CAF', coach: 'Walid Regragui', fifaRanking: 14, players: [] },
  { id: 'srb', name: 'Sérvia', shortName: 'Sérvia', code: 'SRB', flag: '🇷🇸', group: 'B', confederation: 'UEFA', coach: 'Dragan Stojković', fifaRanking: 33, players: [] },
  { id: 'ger', name: 'Alemanha', shortName: 'Alemanha', code: 'GER', flag: '🇩🇪', group: 'C', confederation: 'UEFA', coach: 'Julian Nagelsmann', fifaRanking: 12, players: [] },
  { id: 'arg', name: 'Argentina', shortName: 'Argentina', code: 'ARG', flag: '🇦🇷', group: 'C', confederation: 'CONMEBOL', coach: 'Lionel Scaloni', fifaRanking: 2, players: [] },
  { id: 'jpn', name: 'Japão', shortName: 'Japão', code: 'JPN', flag: '🇯🇵', group: 'C', confederation: 'AFC', coach: 'Hajime Moriyasu', fifaRanking: 18, players: [] },
  { id: 'sen', name: 'Senegal', shortName: 'Senegal', code: 'SEN', flag: '🇸🇳', group: 'C', confederation: 'CAF', coach: 'Aliou Cissé', fifaRanking: 20, players: [] },
  { id: 'fra', name: 'França', shortName: 'França', code: 'FRA', flag: '🇫🇷', group: 'D', confederation: 'UEFA', coach: 'Didier Deschamps', fifaRanking: 3, players: [] },
  { id: 'por', name: 'Portugal', shortName: 'Portugal', code: 'POR', flag: '🇵🇹', group: 'D', confederation: 'UEFA', coach: 'Roberto Martínez', fifaRanking: 6, players: [] },
  { id: 'cmr', name: 'Camarões', shortName: 'Camarões', code: 'CMR', flag: '🇨🇲', group: 'D', confederation: 'CAF', coach: 'Marc Brys', fifaRanking: 42, players: [] },
  { id: 'alb', name: 'Albânia', shortName: 'Albânia', code: 'ALB', flag: '🇦🇱', group: 'D', confederation: 'UEFA', coach: 'Sylvinho', fifaRanking: 65, players: [] },
  { id: 'eng', name: 'Inglaterra', shortName: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', group: 'E', confederation: 'UEFA', coach: 'Thomas Tuchel', fifaRanking: 4, players: [] },
  { id: 'col', name: 'Colômbia', shortName: 'Colômbia', code: 'COL', flag: '🇨🇴', group: 'E', confederation: 'CONMEBOL', coach: 'Néstor Lorenzo', fifaRanking: 9, players: [] },
  { id: 'ned', name: 'Países Baixos', shortName: 'Holanda', code: 'NED', flag: '🇳🇱', group: 'E', confederation: 'UEFA', coach: 'Ronald Koeman', fifaRanking: 8, players: [] },
  { id: 'nga', name: 'Nigéria', shortName: 'Nigéria', code: 'NGA', flag: '🇳🇬', group: 'E', confederation: 'CAF', coach: 'Eric Chelle', fifaRanking: 40, players: [] },
  { id: 'bel', name: 'Bélgica', shortName: 'Bélgica', code: 'BEL', flag: '🇧🇪', group: 'F', confederation: 'UEFA', coach: 'Domenico Tedesco', fifaRanking: 7, players: [] },
  { id: 'aus', name: 'Austrália', shortName: 'Austrália', code: 'AUS', flag: '🇦🇺', group: 'F', confederation: 'AFC', coach: 'Tony Popovic', fifaRanking: 24, players: [] },
  { id: 'ksa', name: 'Arábia Saudita', shortName: 'Ar. Saudita', code: 'KSA', flag: '🇸🇦', group: 'F', confederation: 'AFC', coach: 'Hervé Renard', fifaRanking: 55, players: [] },
  { id: 'aut', name: 'Áustria', shortName: 'Áustria', code: 'AUT', flag: '🇦🇹', group: 'F', confederation: 'UEFA', coach: 'Ralf Rangnick', fifaRanking: 25, players: [] },
  { id: 'cro', name: 'Croácia', shortName: 'Croácia', code: 'CRO', flag: '🇭🇷', group: 'G', confederation: 'UEFA', coach: 'Zlatko Dalić', fifaRanking: 10, players: [] },
  { id: 'ecu', name: 'Equador', shortName: 'Equador', code: 'ECU', flag: '🇪🇨', group: 'G', confederation: 'CONMEBOL', coach: 'Sebastián Beccacece', fifaRanking: 35, players: [] },
  { id: 'irn', name: 'Irã', shortName: 'Irã', code: 'IRN', flag: '🇮🇷', group: 'G', confederation: 'AFC', coach: 'Amir Ghalenoei', fifaRanking: 22, players: [] },
  { id: 'tun', name: 'Tunísia', shortName: 'Tunísia', code: 'TUN', flag: '🇹🇳', group: 'G', confederation: 'CAF', coach: 'Faouzi Benzarti', fifaRanking: 30, players: [] },
  { id: 'sui', name: 'Suíça', shortName: 'Suíça', code: 'SUI', flag: '🇨🇭', group: 'H', confederation: 'UEFA', coach: 'Murat Yakin', fifaRanking: 19, players: [] },
  { id: 'chi', name: 'Chile', shortName: 'Chile', code: 'CHI', flag: '🇨🇱', group: 'H', confederation: 'CONMEBOL', coach: 'Ricardo Gareca', fifaRanking: 28, players: [] },
  { id: 'cmr2', name: 'Costa Rica', shortName: 'Costa Rica', code: 'CRC', flag: '🇨🇷', group: 'H', confederation: 'CONCACAF', coach: 'Gustavo Alfaro', fifaRanking: 43, players: [] },
  { id: 'nzl', name: 'Nova Zelândia', shortName: 'Nova Zelândia', code: 'NZL', flag: '🇳🇿', group: 'H', confederation: 'OFC', coach: 'Darren Bazeley', fifaRanking: 95, players: [] },
  { id: 'ita', name: 'Itália', shortName: 'Itália', code: 'ITA', flag: '🇮🇹', group: 'I', confederation: 'UEFA', coach: 'Luciano Spalletti', fifaRanking: 16, players: [] },
  { id: 'per', name: 'Peru', shortName: 'Peru', code: 'PER', flag: '🇵🇪', group: 'I', confederation: 'CONMEBOL', coach: 'Jorge Fossati', fifaRanking: 50, players: [] },
  { id: 'kor', name: 'Coreia do Sul', shortName: 'Coreia do Sul', code: 'KOR', flag: '🇰🇷', group: 'I', confederation: 'AFC', coach: 'Hong Myung-bo', fifaRanking: 23, players: [] },
  { id: 'gui', name: 'Guiné', shortName: 'Guiné', code: 'GUI', flag: '🇬🇳', group: 'I', confederation: 'CAF', coach: 'Kaba Diawara', fifaRanking: 76, players: [] },
  { id: 'den', name: 'Dinamarca', shortName: 'Dinamarca', code: 'DEN', flag: '🇩🇰', group: 'J', confederation: 'UEFA', coach: 'Kasper Hjulmand', fifaRanking: 21, players: [] },
  { id: 'ven', name: 'Venezuela', shortName: 'Venezuela', code: 'VEN', flag: '🇻🇪', group: 'J', confederation: 'CONMEBOL', coach: 'Fernando Batista', fifaRanking: 38, players: [] },
  { id: 'alg', name: 'Argélia', shortName: 'Argélia', code: 'ALG', flag: '🇩🇿', group: 'J', confederation: 'CAF', coach: 'Pepe', fifaRanking: 36, players: [] },
  { id: 'can', name: 'Canadá', shortName: 'Canadá', code: 'CAN', flag: '🇨🇦', group: 'J', confederation: 'CONCACAF', coach: 'Jesse Marsch', fifaRanking: 48, players: [] },
  { id: 'tur', name: 'Turquia', shortName: 'Turquia', code: 'TUR', flag: '🇹🇷', group: 'K', confederation: 'UEFA', coach: 'Vincenzo Montella', fifaRanking: 29, players: [] },
  { id: 'par', name: 'Paraguai', shortName: 'Paraguai', code: 'PAR', flag: '🇵🇾', group: 'K', confederation: 'CONMEBOL', coach: 'Gustavo Alfaro', fifaRanking: 61, players: [] },
  { id: 'irq', name: 'Iraque', shortName: 'Iraque', code: 'IRQ', flag: '🇮🇶', group: 'K', confederation: 'AFC', coach: 'Jesús Casas', fifaRanking: 58, players: [] },
  { id: 'cod', name: 'RD Congo', shortName: 'RD Congo', code: 'COD', flag: '🇨🇩', group: 'K', confederation: 'CAF', coach: 'Sébastien Desabre', fifaRanking: 52, players: [] },
  { id: 'sco', name: 'Escócia', shortName: 'Escócia', code: 'SCO', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', group: 'L', confederation: 'UEFA', coach: 'Steve Clarke', fifaRanking: 27, players: [] },
  { id: 'bol', name: 'Bolívia', shortName: 'Bolívia', code: 'BOL', flag: '🇧🇴', group: 'L', confederation: 'CONMEBOL', coach: 'Óscar Villegas', fifaRanking: 85, players: [] },
  { id: 'uzb', name: 'Uzbequistão', shortName: 'Uzbequistão', code: 'UZB', flag: '🇺🇿', group: 'L', confederation: 'AFC', coach: 'Srecko Katanec', fifaRanking: 68, players: [] },
  { id: 'egy', name: 'Egito', shortName: 'Egito', code: 'EGY', flag: '🇪🇬', group: 'L', confederation: 'CAF', coach: 'Hossam Hassan', fifaRanking: 44, players: [] },
]

export const GROUPS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'] as const

export function getTeamById(id: string): Team | undefined {
  return teamsFixed.find(t => t.id === id)
}

export function getTeamsByGroup(group: string): Team[] {
  return teamsFixed.filter(t => t.group === group)
}
