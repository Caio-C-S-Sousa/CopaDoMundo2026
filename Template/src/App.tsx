import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SimulationProvider } from './contexts/SimulationContext'
import { FavoritesProvider } from './contexts/FavoritesContext'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Matches from './pages/Matches'
import MatchDetail from './pages/MatchDetail'
import Standings from './pages/Standings'
import KnockoutBracket from './pages/KnockoutBracket'
import Simulator from './pages/Simulator'
import Teams from './pages/Teams'
import TeamDetail from './pages/TeamDetail'
import Stadiums from './pages/Stadiums'
import Statistics from './pages/Statistics'
import News from './pages/News'
import Favorites from './pages/Favorites'
import Bolao from './pages/Bolao'
import Comparator from './pages/Comparator'

function NotFound() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-20 text-center">
      <div className="text-8xl mb-4">⚽</div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Página não encontrada</h1>
      <p className="text-gray-500 mb-6">A página que você procura não existe.</p>
      <a href="/" className="btn-primary">Voltar ao início</a>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <SimulationProvider>
        <FavoritesProvider>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/partidas" element={<Matches />} />
              <Route path="/partidas/:id" element={<MatchDetail />} />
              <Route path="/classificacao" element={<Standings />} />
              <Route path="/mata-mata" element={<KnockoutBracket />} />
              <Route path="/simulador" element={<Simulator />} />
              <Route path="/selecoes" element={<Teams />} />
              <Route path="/selecoes/:id" element={<TeamDetail />} />
              <Route path="/estadios" element={<Stadiums />} />
              <Route path="/estatisticas" element={<Statistics />} />
              <Route path="/noticias" element={<News />} />
              <Route path="/favoritos" element={<Favorites />} />
              <Route path="/bolao" element={<Bolao />} />
              <Route path="/comparador" element={<Comparator />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </FavoritesProvider>
      </SimulationProvider>
    </BrowserRouter>
  )
}
