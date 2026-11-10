import type { Match } from '../types'

// 104 matches: 48 group stage + 16 R32 + 8 R16 + 4 QF + 2 SF + 1 3rd + 1 Final
// Groups: each group has 6 matches (4 teams = 6 combinations)
// 12 groups × 6 = 72 group matches
// But Copa 2026 has 48 teams, 12 groups of 4 = 72 group matches
// + 32 knockout matches = 104 total

export const groupMatches: Match[] = [
  // ===== GROUP A =====
  { id: 'A1', homeTeamId: 'usa', awayTeamId: 'uru', date: '2026-06-11', time: '20:00', stadiumId: 'metlife', phase: 'group', group: 'A', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 1 },
  { id: 'A2', homeTeamId: 'mex', awayTeamId: 'pan', date: '2026-06-11', time: '17:00', stadiumId: 'azteca', phase: 'group', group: 'A', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 2 },
  { id: 'A3', homeTeamId: 'usa', awayTeamId: 'pan', date: '2026-06-15', time: '17:00', stadiumId: 'nrg', phase: 'group', group: 'A', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 3 },
  { id: 'A4', homeTeamId: 'mex', awayTeamId: 'uru', date: '2026-06-15', time: '20:00', stadiumId: 'atandt', phase: 'group', group: 'A', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 4 },
  { id: 'A5', homeTeamId: 'uru', awayTeamId: 'pan', date: '2026-06-19', time: '17:00', stadiumId: 'lincoln', phase: 'group', group: 'A', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 5 },
  { id: 'A6', homeTeamId: 'usa', awayTeamId: 'mex', date: '2026-06-19', time: '20:00', stadiumId: 'metlife', phase: 'group', group: 'A', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 6 },

  // ===== GROUP B =====
  { id: 'B1', homeTeamId: 'esp', awayTeamId: 'srb', date: '2026-06-12', time: '17:00', stadiumId: 'miami', phase: 'group', group: 'B', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 7 },
  { id: 'B2', homeTeamId: 'bra', awayTeamId: 'mar', date: '2026-06-12', time: '20:00', stadiumId: 'sofi', phase: 'group', group: 'B', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 8 },
  { id: 'B3', homeTeamId: 'esp', awayTeamId: 'mar', date: '2026-06-16', time: '20:00', stadiumId: 'atandt', phase: 'group', group: 'B', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 9 },
  { id: 'B4', homeTeamId: 'bra', awayTeamId: 'srb', date: '2026-06-16', time: '17:00', stadiumId: 'boston', phase: 'group', group: 'B', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 10 },
  { id: 'B5', homeTeamId: 'srb', awayTeamId: 'mar', date: '2026-06-20', time: '17:00', stadiumId: 'levi', phase: 'group', group: 'B', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 11 },
  { id: 'B6', homeTeamId: 'esp', awayTeamId: 'bra', date: '2026-06-20', time: '20:00', stadiumId: 'metlife', phase: 'group', group: 'B', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 12 },

  // ===== GROUP C =====
  { id: 'C1', homeTeamId: 'arg', awayTeamId: 'sen', date: '2026-06-12', time: '14:00', stadiumId: 'lincoln', phase: 'group', group: 'C', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 13 },
  { id: 'C2', homeTeamId: 'ger', awayTeamId: 'jpn', date: '2026-06-12', time: '11:00', stadiumId: 'bofastad', phase: 'group', group: 'C', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 14 },
  { id: 'C3', homeTeamId: 'arg', awayTeamId: 'jpn', date: '2026-06-16', time: '14:00', stadiumId: 'nrg', phase: 'group', group: 'C', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 15 },
  { id: 'C4', homeTeamId: 'ger', awayTeamId: 'sen', date: '2026-06-16', time: '11:00', stadiumId: 'seattle', phase: 'group', group: 'C', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 16 },
  { id: 'C5', homeTeamId: 'jpn', awayTeamId: 'sen', date: '2026-06-20', time: '14:00', stadiumId: 'miami', phase: 'group', group: 'C', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 17 },
  { id: 'C6', homeTeamId: 'arg', awayTeamId: 'ger', date: '2026-06-20', time: '11:00', stadiumId: 'sofi', phase: 'group', group: 'C', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 18 },

  // ===== GROUP D =====
  { id: 'D1', homeTeamId: 'fra', awayTeamId: 'alb', date: '2026-06-13', time: '17:00', stadiumId: 'atandt', phase: 'group', group: 'D', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 19 },
  { id: 'D2', homeTeamId: 'por', awayTeamId: 'cmr', date: '2026-06-13', time: '20:00', stadiumId: 'boston', phase: 'group', group: 'D', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 20 },
  { id: 'D3', homeTeamId: 'fra', awayTeamId: 'cmr', date: '2026-06-17', time: '17:00', stadiumId: 'levi', phase: 'group', group: 'D', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 21 },
  { id: 'D4', homeTeamId: 'por', awayTeamId: 'alb', date: '2026-06-17', time: '20:00', stadiumId: 'lincoln', phase: 'group', group: 'D', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 22 },
  { id: 'D5', homeTeamId: 'alb', awayTeamId: 'cmr', date: '2026-06-21', time: '17:00', stadiumId: 'nrg', phase: 'group', group: 'D', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 23 },
  { id: 'D6', homeTeamId: 'fra', awayTeamId: 'por', date: '2026-06-21', time: '20:00', stadiumId: 'metlife', phase: 'group', group: 'D', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 24 },

  // ===== GROUP E =====
  { id: 'E1', homeTeamId: 'eng', awayTeamId: 'nga', date: '2026-06-13', time: '14:00', stadiumId: 'sofi', phase: 'group', group: 'E', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 25 },
  { id: 'E2', homeTeamId: 'ned', awayTeamId: 'col', date: '2026-06-13', time: '11:00', stadiumId: 'seattle', phase: 'group', group: 'E', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 26 },
  { id: 'E3', homeTeamId: 'eng', awayTeamId: 'col', date: '2026-06-17', time: '14:00', stadiumId: 'miami', phase: 'group', group: 'E', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 27 },
  { id: 'E4', homeTeamId: 'ned', awayTeamId: 'nga', date: '2026-06-17', time: '11:00', stadiumId: 'bofastad', phase: 'group', group: 'E', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 28 },
  { id: 'E5', homeTeamId: 'col', awayTeamId: 'nga', date: '2026-06-21', time: '14:00', stadiumId: 'atandt', phase: 'group', group: 'E', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 29 },
  { id: 'E6', homeTeamId: 'eng', awayTeamId: 'ned', date: '2026-06-21', time: '11:00', stadiumId: 'boston', phase: 'group', group: 'E', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 30 },

  // ===== GROUP F =====
  { id: 'F1', homeTeamId: 'bel', awayTeamId: 'aut', date: '2026-06-14', time: '17:00', stadiumId: 'nrg', phase: 'group', group: 'F', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 31 },
  { id: 'F2', homeTeamId: 'aus', awayTeamId: 'ksa', date: '2026-06-14', time: '20:00', stadiumId: 'guadalajara', phase: 'group', group: 'F', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 32 },
  { id: 'F3', homeTeamId: 'bel', awayTeamId: 'ksa', date: '2026-06-18', time: '17:00', stadiumId: 'seattle', phase: 'group', group: 'F', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 33 },
  { id: 'F4', homeTeamId: 'aus', awayTeamId: 'aut', date: '2026-06-18', time: '20:00', stadiumId: 'lincoln', phase: 'group', group: 'F', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 34 },
  { id: 'F5', homeTeamId: 'aut', awayTeamId: 'ksa', date: '2026-06-22', time: '17:00', stadiumId: 'bofastad', phase: 'group', group: 'F', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 35 },
  { id: 'F6', homeTeamId: 'bel', awayTeamId: 'aus', date: '2026-06-22', time: '20:00', stadiumId: 'sofi', phase: 'group', group: 'F', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 36 },

  // ===== GROUP G =====
  { id: 'G1', homeTeamId: 'cro', awayTeamId: 'tun', date: '2026-06-14', time: '14:00', stadiumId: 'miami', phase: 'group', group: 'G', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 37 },
  { id: 'G2', homeTeamId: 'ecu', awayTeamId: 'irn', date: '2026-06-14', time: '11:00', stadiumId: 'boston', phase: 'group', group: 'G', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 38 },
  { id: 'G3', homeTeamId: 'cro', awayTeamId: 'irn', date: '2026-06-18', time: '14:00', stadiumId: 'atandt', phase: 'group', group: 'G', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 39 },
  { id: 'G4', homeTeamId: 'ecu', awayTeamId: 'tun', date: '2026-06-18', time: '11:00', stadiumId: 'guadalajara', phase: 'group', group: 'G', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 40 },
  { id: 'G5', homeTeamId: 'irn', awayTeamId: 'tun', date: '2026-06-22', time: '14:00', stadiumId: 'nrg', phase: 'group', group: 'G', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 41 },
  { id: 'G6', homeTeamId: 'cro', awayTeamId: 'ecu', date: '2026-06-22', time: '11:00', stadiumId: 'levi', phase: 'group', group: 'G', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 42 },

  // ===== GROUP H =====
  { id: 'H1', homeTeamId: 'sui', awayTeamId: 'nzl', date: '2026-06-15', time: '14:00', stadiumId: 'monterrey', phase: 'group', group: 'H', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 43 },
  { id: 'H2', homeTeamId: 'chi', awayTeamId: 'cmr2', date: '2026-06-15', time: '11:00', stadiumId: 'bmo', phase: 'group', group: 'H', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 44 },
  { id: 'H3', homeTeamId: 'sui', awayTeamId: 'cmr2', date: '2026-06-19', time: '14:00', stadiumId: 'seattle', phase: 'group', group: 'H', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 45 },
  { id: 'H4', homeTeamId: 'chi', awayTeamId: 'nzl', date: '2026-06-19', time: '11:00', stadiumId: 'bc_place', phase: 'group', group: 'H', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 46 },
  { id: 'H5', homeTeamId: 'nzl', awayTeamId: 'cmr2', date: '2026-06-23', time: '14:00', stadiumId: 'guadalajara', phase: 'group', group: 'H', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 47 },
  { id: 'H6', homeTeamId: 'sui', awayTeamId: 'chi', date: '2026-06-23', time: '11:00', stadiumId: 'monterrey', phase: 'group', group: 'H', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 48 },

  // ===== GROUP I =====
  { id: 'I1', homeTeamId: 'ita', awayTeamId: 'gui', date: '2026-06-15', time: '20:00', stadiumId: 'lincoln', phase: 'group', group: 'I', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 49 },
  { id: 'I2', homeTeamId: 'kor', awayTeamId: 'per', date: '2026-06-15', time: '17:00', stadiumId: 'sofi', phase: 'group', group: 'I', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 50 },
  { id: 'I3', homeTeamId: 'ita', awayTeamId: 'per', date: '2026-06-19', time: '20:00', stadiumId: 'boston', phase: 'group', group: 'I', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 51 },
  { id: 'I4', homeTeamId: 'kor', awayTeamId: 'gui', date: '2026-06-19', time: '17:00', stadiumId: 'miami', phase: 'group', group: 'I', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 52 },
  { id: 'I5', homeTeamId: 'per', awayTeamId: 'gui', date: '2026-06-23', time: '20:00', stadiumId: 'atandt', phase: 'group', group: 'I', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 53 },
  { id: 'I6', homeTeamId: 'ita', awayTeamId: 'kor', date: '2026-06-23', time: '17:00', stadiumId: 'nrg', phase: 'group', group: 'I', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 54 },

  // ===== GROUP J =====
  { id: 'J1', homeTeamId: 'den', awayTeamId: 'can', date: '2026-06-16', time: '14:00', stadiumId: 'bmo', phase: 'group', group: 'J', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 55 },
  { id: 'J2', homeTeamId: 'ven', awayTeamId: 'alg', date: '2026-06-16', time: '11:00', stadiumId: 'seattle', phase: 'group', group: 'J', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 56 },
  { id: 'J3', homeTeamId: 'den', awayTeamId: 'alg', date: '2026-06-20', time: '14:00', stadiumId: 'bc_place', phase: 'group', group: 'J', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 57 },
  { id: 'J4', homeTeamId: 'ven', awayTeamId: 'can', date: '2026-06-20', time: '11:00', stadiumId: 'boston', phase: 'group', group: 'J', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 58 },
  { id: 'J5', homeTeamId: 'alg', awayTeamId: 'can', date: '2026-06-24', time: '14:00', stadiumId: 'lincoln', phase: 'group', group: 'J', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 59 },
  { id: 'J6', homeTeamId: 'den', awayTeamId: 'ven', date: '2026-06-24', time: '11:00', stadiumId: 'sofi', phase: 'group', group: 'J', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 60 },

  // ===== GROUP K =====
  { id: 'K1', homeTeamId: 'tur', awayTeamId: 'cod', date: '2026-06-16', time: '20:00', stadiumId: 'nrg', phase: 'group', group: 'K', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 61 },
  { id: 'K2', homeTeamId: 'par', awayTeamId: 'irq', date: '2026-06-16', time: '17:00', stadiumId: 'guadalajara', phase: 'group', group: 'K', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 62 },
  { id: 'K3', homeTeamId: 'tur', awayTeamId: 'irq', date: '2026-06-20', time: '20:00', stadiumId: 'miami', phase: 'group', group: 'K', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 63 },
  { id: 'K4', homeTeamId: 'par', awayTeamId: 'cod', date: '2026-06-20', time: '17:00', stadiumId: 'atandt', phase: 'group', group: 'K', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 64 },
  { id: 'K5', homeTeamId: 'irq', awayTeamId: 'cod', date: '2026-06-24', time: '20:00', stadiumId: 'seattle', phase: 'group', group: 'K', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 65 },
  { id: 'K6', homeTeamId: 'tur', awayTeamId: 'par', date: '2026-06-24', time: '17:00', stadiumId: 'monterrey', phase: 'group', group: 'K', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 66 },

  // ===== GROUP L =====
  { id: 'L1', homeTeamId: 'sco', awayTeamId: 'egy', date: '2026-06-17', time: '14:00', stadiumId: 'boston', phase: 'group', group: 'L', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 67 },
  { id: 'L2', homeTeamId: 'bol', awayTeamId: 'uzb', date: '2026-06-17', time: '11:00', stadiumId: 'bmo', phase: 'group', group: 'L', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 68 },
  { id: 'L3', homeTeamId: 'sco', awayTeamId: 'uzb', date: '2026-06-21', time: '14:00', stadiumId: 'guadalajara', phase: 'group', group: 'L', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 69 },
  { id: 'L4', homeTeamId: 'bol', awayTeamId: 'egy', date: '2026-06-21', time: '11:00', stadiumId: 'bc_place', phase: 'group', group: 'L', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 70 },
  { id: 'L5', homeTeamId: 'uzb', awayTeamId: 'egy', date: '2026-06-25', time: '14:00', stadiumId: 'monterrey', phase: 'group', group: 'L', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 71 },
  { id: 'L6', homeTeamId: 'sco', awayTeamId: 'bol', date: '2026-06-25', time: '11:00', stadiumId: 'levi', phase: 'group', group: 'L', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 72 },
]

// Knockout matches — teams filled by simulator
export const knockoutMatchTemplate: Match[] = [
  // Round of 32 (16 matches)
  { id: 'R32_1',  homeTeamId: '', awayTeamId: '', date: '2026-06-29', time: '17:00', stadiumId: 'metlife',    phase: 'round_of_32', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 73 },
  { id: 'R32_2',  homeTeamId: '', awayTeamId: '', date: '2026-06-29', time: '20:00', stadiumId: 'atandt',     phase: 'round_of_32', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 74 },
  { id: 'R32_3',  homeTeamId: '', awayTeamId: '', date: '2026-06-30', time: '17:00', stadiumId: 'sofi',       phase: 'round_of_32', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 75 },
  { id: 'R32_4',  homeTeamId: '', awayTeamId: '', date: '2026-06-30', time: '20:00', stadiumId: 'lincoln',    phase: 'round_of_32', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 76 },
  { id: 'R32_5',  homeTeamId: '', awayTeamId: '', date: '2026-07-01', time: '17:00', stadiumId: 'nrg',        phase: 'round_of_32', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 77 },
  { id: 'R32_6',  homeTeamId: '', awayTeamId: '', date: '2026-07-01', time: '20:00', stadiumId: 'bofastad',   phase: 'round_of_32', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 78 },
  { id: 'R32_7',  homeTeamId: '', awayTeamId: '', date: '2026-07-02', time: '17:00', stadiumId: 'seattle',    phase: 'round_of_32', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 79 },
  { id: 'R32_8',  homeTeamId: '', awayTeamId: '', date: '2026-07-02', time: '20:00', stadiumId: 'miami',      phase: 'round_of_32', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 80 },
  { id: 'R32_9',  homeTeamId: '', awayTeamId: '', date: '2026-07-03', time: '17:00', stadiumId: 'azteca',     phase: 'round_of_32', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 81 },
  { id: 'R32_10', homeTeamId: '', awayTeamId: '', date: '2026-07-03', time: '20:00', stadiumId: 'guadalajara',phase: 'round_of_32', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 82 },
  { id: 'R32_11', homeTeamId: '', awayTeamId: '', date: '2026-07-04', time: '17:00', stadiumId: 'monterrey',  phase: 'round_of_32', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 83 },
  { id: 'R32_12', homeTeamId: '', awayTeamId: '', date: '2026-07-04', time: '20:00', stadiumId: 'bmo',        phase: 'round_of_32', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 84 },
  { id: 'R32_13', homeTeamId: '', awayTeamId: '', date: '2026-07-05', time: '17:00', stadiumId: 'bc_place',   phase: 'round_of_32', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 85 },
  { id: 'R32_14', homeTeamId: '', awayTeamId: '', date: '2026-07-05', time: '20:00', stadiumId: 'boston',     phase: 'round_of_32', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 86 },
  { id: 'R32_15', homeTeamId: '', awayTeamId: '', date: '2026-07-06', time: '17:00', stadiumId: 'levi',       phase: 'round_of_32', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 87 },
  { id: 'R32_16', homeTeamId: '', awayTeamId: '', date: '2026-07-06', time: '20:00', stadiumId: 'arrowhead',  phase: 'round_of_32', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 88 },

  // Round of 16 (8 matches)
  { id: 'R16_1', homeTeamId: '', awayTeamId: '', date: '2026-07-10', time: '20:00', stadiumId: 'metlife',  phase: 'round_of_16', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 89 },
  { id: 'R16_2', homeTeamId: '', awayTeamId: '', date: '2026-07-11', time: '20:00', stadiumId: 'atandt',   phase: 'round_of_16', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 90 },
  { id: 'R16_3', homeTeamId: '', awayTeamId: '', date: '2026-07-12', time: '20:00', stadiumId: 'sofi',     phase: 'round_of_16', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 91 },
  { id: 'R16_4', homeTeamId: '', awayTeamId: '', date: '2026-07-13', time: '20:00', stadiumId: 'nrg',      phase: 'round_of_16', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 92 },
  { id: 'R16_5', homeTeamId: '', awayTeamId: '', date: '2026-07-14', time: '20:00', stadiumId: 'lincoln',  phase: 'round_of_16', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 93 },
  { id: 'R16_6', homeTeamId: '', awayTeamId: '', date: '2026-07-15', time: '20:00', stadiumId: 'seattle',  phase: 'round_of_16', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 94 },
  { id: 'R16_7', homeTeamId: '', awayTeamId: '', date: '2026-07-16', time: '20:00', stadiumId: 'miami',    phase: 'round_of_16', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 95 },
  { id: 'R16_8', homeTeamId: '', awayTeamId: '', date: '2026-07-17', time: '20:00', stadiumId: 'boston',   phase: 'round_of_16', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 96 },

  // Quarterfinals (4 matches)
  { id: 'QF_1', homeTeamId: '', awayTeamId: '', date: '2026-07-21', time: '20:00', stadiumId: 'metlife',  phase: 'quarterfinal', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 97 },
  { id: 'QF_2', homeTeamId: '', awayTeamId: '', date: '2026-07-22', time: '20:00', stadiumId: 'atandt',   phase: 'quarterfinal', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 98 },
  { id: 'QF_3', homeTeamId: '', awayTeamId: '', date: '2026-07-23', time: '20:00', stadiumId: 'sofi',     phase: 'quarterfinal', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 99 },
  { id: 'QF_4', homeTeamId: '', awayTeamId: '', date: '2026-07-24', time: '20:00', stadiumId: 'nrg',      phase: 'quarterfinal', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 100 },

  // Semifinals (2 matches)
  { id: 'SF_1', homeTeamId: '', awayTeamId: '', date: '2026-07-28', time: '20:00', stadiumId: 'metlife', phase: 'semifinal', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 101 },
  { id: 'SF_2', homeTeamId: '', awayTeamId: '', date: '2026-07-29', time: '20:00', stadiumId: 'atandt',  phase: 'semifinal', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 102 },

  // Third place
  { id: 'TP_1', homeTeamId: '', awayTeamId: '', date: '2026-08-01', time: '17:00', stadiumId: 'atandt',  phase: 'third_place', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 103 },

  // Final
  { id: 'FIN_1', homeTeamId: '', awayTeamId: '', date: '2026-08-02', time: '20:00', stadiumId: 'metlife', phase: 'final', status: 'scheduled', homeScore: null, awayScore: null, matchNumber: 104 },
]

export const allMatches: Match[] = [...groupMatches, ...knockoutMatchTemplate]

export function getMatchById(id: string): Match | undefined {
  return allMatches.find(m => m.id === id)
}

export function getMatchesByGroup(group: string): Match[] {
  return groupMatches.filter(m => m.group === group)
}

export function getMatchesByTeam(teamId: string): Match[] {
  return allMatches.filter(m => m.homeTeamId === teamId || m.awayTeamId === teamId)
}
