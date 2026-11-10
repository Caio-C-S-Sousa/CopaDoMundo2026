import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Trophy, Star, Globe } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Início', exact: true },
  { to: '/partidas', label: 'Partidas' },
  { to: '/classificacao', label: 'Classificação' },
  { to: '/mata-mata', label: 'Mata-mata' },
  { to: '/simulador', label: 'Simulador' },
  { to: '/selecoes', label: 'Seleções' },
  { to: '/estadios', label: 'Estádios' },
  { to: '/estatisticas', label: 'Estatísticas' },
  { to: '/noticias', label: 'Notícias' },
  { to: '/favoritos', label: 'Favoritos' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-primary-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-lg shrink-0" onClick={() => setMobileOpen(false)}>
            <Trophy className="w-6 h-6 text-gold-400" />
            <span className="hidden sm:inline">Copa 2026</span>
            <span className="sm:hidden">2026</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 overflow-x-auto scrollbar-hide">
            {navLinks.map(({ to, label, exact }) => (
              <NavLink
                key={to}
                to={to}
                end={exact}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive ? 'bg-primary-700 text-white' : 'text-gray-300 hover:text-white hover:bg-primary-800'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Link to="/bolao" className="hidden sm:flex items-center gap-1 px-3 py-1.5 bg-gold-500 text-white rounded-md text-sm font-medium hover:bg-gold-600 transition-colors">
              <Star className="w-4 h-4" />
              <span className="hidden md:inline">Bolão</span>
            </Link>
            <Link to="/comparador" className="hidden sm:flex items-center gap-1 px-3 py-1.5 border border-gray-600 text-gray-300 rounded-md text-sm font-medium hover:border-gray-400 hover:text-white transition-colors">
              <Globe className="w-4 h-4" />
              <span className="hidden md:inline">Comparar</span>
            </Link>
            <button
              className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-primary-800 transition-colors"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-primary-800 bg-primary-900 animate-fade-in">
          <nav className="max-w-screen-xl mx-auto px-4 py-3 grid grid-cols-2 gap-1">
            {navLinks.map(({ to, label, exact }) => (
              <NavLink
                key={to}
                to={to}
                end={exact}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    isActive ? 'bg-primary-700 text-white' : 'text-gray-300 hover:text-white hover:bg-primary-800'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link to="/bolao" onClick={() => setMobileOpen(false)} className="px-3 py-2.5 rounded-md text-sm font-medium text-gold-400 hover:bg-primary-800 transition-colors">
              🏆 Bolão
            </Link>
            <Link to="/comparador" onClick={() => setMobileOpen(false)} className="px-3 py-2.5 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-primary-800 transition-colors">
              🌐 Comparador
            </Link>
          </nav>
        </div>
      )}

      {/* Phase indicator bar */}
      <div className="bg-primary-800 border-t border-primary-700">
        <div className="max-w-screen-xl mx-auto px-4 py-1 flex items-center gap-4 overflow-x-auto scrollbar-hide text-xs text-gray-400">
          <span className="shrink-0">📅 11 Jun – 2 Ago 2026</span>
          <span className="shrink-0">🌎 EUA · México · Canadá</span>
          <span className="shrink-0">⚽ 48 seleções · 104 partidas</span>
        </div>
      </div>
    </header>
  )
}
