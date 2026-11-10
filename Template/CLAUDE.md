# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # dev server at http://localhost:5173
npm run build     # tsc + vite build (output: dist/)
npm test          # vitest run (unit tests)
npm run test:watch
npm run preview   # serve built dist/
npm run lint
```

## Stack

React 18 · TypeScript · Vite · Tailwind CSS v3 · React Router v6 · Recharts · Lucide React · Vitest

## Architecture

```
src/
  types/index.ts          — all shared TypeScript types
  data/                   — static data (teams, matches, stadiums, news)
  utils/
    standings.ts          — group standings computation + tiebreaker logic
    knockout.ts           — knockout bracket resolution (R32→Final)
    storage.ts            — localStorage helpers (simulation, favorites, bolão)
    format.ts             — date/phase/confederation formatters
  contexts/
    SimulationContext.tsx  — global simulation state (group + knockout results)
    FavoritesContext.tsx   — favorites state persisted in localStorage
  components/
    layout/               — Header, Footer
    ui/                   — TeamFlag, SearchBar, EmptyState
    matches/              — MatchCard
    standings/            — GroupStandingsTable
    teams/                — TeamCard
  layouts/MainLayout.tsx  — Header + <Outlet> + Footer
  pages/                  — one file per route
  test/                   — vitest unit tests (standings logic)
```

## Key domain rules

- **48 teams, 12 groups (A–L), 4 teams each, 72 group matches + 32 knockout = 104 total**
- Group qualification: top 2 per group (direct) + 8 best 3rd-place teams
- Tiebreaker order: points → GD → GF → head-to-head points → H2H GD → H2H GF
- Best-thirds ranking: points → GD → GF (see `getThirdPlaceStandings` in `utils/standings.ts`)
- R32 bracket mapping: `R32_MATCHUPS` in `utils/knockout.ts`
- Knockout winners propagate automatically via `resolveKnockoutBracket`

## Data notes

- All team/match/stadium data in `src/data/` is **demonstrative** — IDs are stable, scores start as `null`
- `SimulationContext` is the source of truth for all scores; never mutate `data/matches.ts` directly
- Favorites and simulation state persist to `localStorage` (keys prefixed `copa2026:`)

## Routing

All routes are under `MainLayout` (Header + Footer). Routes: `/`, `/partidas`, `/partidas/:id`, `/classificacao`, `/mata-mata`, `/simulador`, `/selecoes`, `/selecoes/:id`, `/estadios`, `/estatisticas`, `/noticias`, `/favoritos`, `/bolao`, `/comparador`
