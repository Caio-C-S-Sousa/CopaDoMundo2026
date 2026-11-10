import { useState } from 'react'
import { newsArticles } from '../data/news'
import { formatDate } from '../utils/format'
import type { NewsArticle } from '../types'

const categoryLabels: Record<string, string> = {
  all: 'Todas',
  general: 'Geral',
  team: 'Seleções',
  match: 'Partidas',
  curiosity: 'Curiosidades',
}

export default function News() {
  const [category, setCategory] = useState('all')
  const [selected, setSelected] = useState<NewsArticle | null>(null)

  const filtered = category === 'all' ? newsArticles : newsArticles.filter(a => a.category === category)

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="section-title">Notícias</h1>
        <p className="section-subtitle">Informações e curiosidades sobre a Copa 2026 · Conteúdo demonstrativo</p>
      </div>

      <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-700">
        ⚠️ Conteúdo demonstrativo para fins ilustrativos. Não representa informações oficiais.
      </div>

      {/* Category filter */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 pb-1">
        {Object.entries(categoryLabels).map(([key, label]) => (
          <button key={key} onClick={() => setCategory(key)} className={`px-3 py-1.5 rounded-full text-sm font-medium shrink-0 transition-colors ${category === key ? 'bg-primary-700 text-white' : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50'}`}>
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(article => (
          <button key={article.id} onClick={() => setSelected(article)} className="card-hover text-left">
            <div className="h-32 bg-gradient-to-br from-primary-800 to-primary-600 flex items-center justify-center text-white/30 text-6xl">📰</div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="badge bg-primary-100 text-primary-700">{categoryLabels[article.category]}</span>
                <span className="text-xs text-gray-400">{formatDate(article.date)}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm leading-snug">{article.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{article.summary}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Article modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="h-40 bg-gradient-to-br from-primary-800 to-primary-600 flex items-center justify-center text-white/30 text-7xl rounded-t-2xl">📰</div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="badge bg-primary-100 text-primary-700">{categoryLabels[selected.category]}</span>
                <span className="text-xs text-gray-400">{formatDate(selected.date)}</span>
                <span className="text-xs text-amber-600 ml-auto">⚠️ Demonstrativo</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{selected.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{selected.content}</p>
              <button onClick={() => setSelected(null)} className="mt-6 btn-secondary w-full">Fechar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
