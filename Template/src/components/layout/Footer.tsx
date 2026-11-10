import { Link } from 'react-router-dom'
import { Trophy } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-gray-400 mt-auto">
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <Trophy className="w-5 h-5 text-gold-400" />
              Copa 2026
            </div>
            <p className="text-sm leading-relaxed">
              Portal independente dedicado à Copa do Mundo FIFA 2026. Projeto demonstrativo — não afiliado à FIFA.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Competição</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/partidas" className="hover:text-white transition-colors">Partidas</Link></li>
              <li><Link to="/classificacao" className="hover:text-white transition-colors">Classificação</Link></li>
              <li><Link to="/mata-mata" className="hover:text-white transition-colors">Mata-mata</Link></li>
              <li><Link to="/simulador" className="hover:text-white transition-colors">Simulador</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Informações</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/selecoes" className="hover:text-white transition-colors">Seleções</Link></li>
              <li><Link to="/estadios" className="hover:text-white transition-colors">Estádios</Link></li>
              <li><Link to="/estatisticas" className="hover:text-white transition-colors">Estatísticas</Link></li>
              <li><Link to="/noticias" className="hover:text-white transition-colors">Notícias</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Extras</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/favoritos" className="hover:text-white transition-colors">Favoritos</Link></li>
              <li><Link to="/bolao" className="hover:text-white transition-colors">Bolão</Link></li>
              <li><Link to="/comparador" className="hover:text-white transition-colors">Comparador</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© 2026 Copa Portal — Projeto independente e demonstrativo. Dados fictícios para fins ilustrativos.</p>
          <div className="flex items-center gap-2">
            <span>Feito com React + TypeScript + Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
