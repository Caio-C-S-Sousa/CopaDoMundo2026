import { useState } from 'react'
import { MapPin, Users } from 'lucide-react'
import { stadiums } from '../data/stadiums'

type Country = 'all' | 'USA' | 'Mexico' | 'Canada'

const countryLabels: Record<Country, string> = { all: 'Todos', USA: 'Estados Unidos 🇺🇸', Mexico: 'México 🇲🇽', Canada: 'Canadá 🇨🇦' }

export default function Stadiums() {
  const [country, setCountry] = useState<Country>('all')

  const filtered = stadiums.filter(s => country === 'all' || s.country === country)

  const grouped = {
    USA: filtered.filter(s => s.country === 'USA'),
    Mexico: filtered.filter(s => s.country === 'Mexico'),
    Canada: filtered.filter(s => s.country === 'Canada'),
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="section-title">Estádios e Cidades-Sede</h1>
        <p className="section-subtitle">16 estádios em 3 países</p>
      </div>

      {/* Filter */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 pb-1">
        {(['all', 'USA', 'Mexico', 'Canada'] as Country[]).map(c => (
          <button key={c} onClick={() => setCountry(c)} className={`px-4 py-2 rounded-full text-sm font-medium shrink-0 transition-colors ${country === c ? 'bg-primary-700 text-white' : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50'}`}>
            {countryLabels[c]}
          </button>
        ))}
      </div>

      {Object.entries(grouped).map(([countryKey, stads]) => {
        if (stads.length === 0) return null
        const labels: Record<string, string> = { USA: '🇺🇸 Estados Unidos', Mexico: '🇲🇽 México', Canada: '🇨🇦 Canadá' }
        return (
          <section key={countryKey} className="mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4">{labels[countryKey]}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stads.map(s => (
                <div key={s.id} className="card p-4 hover:shadow-md transition-shadow">
                  {/* Image placeholder */}
                  <div className="w-full h-32 bg-gradient-to-br from-primary-800 to-primary-600 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-white/40 text-5xl">🏟️</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{s.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {s.city}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Users className="w-3.5 h-3.5" />
                    {s.capacity.toLocaleString('pt-BR')} lugares
                  </div>
                </div>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
