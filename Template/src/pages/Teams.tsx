import { useState, useMemo } from 'react'
import { teamsFixed, GROUPS } from '../data/teams'
import TeamCard from '../components/teams/TeamCard'
import SearchBar from '../components/ui/SearchBar'
import EmptyState from '../components/ui/EmptyState'
import type { Confederation } from '../types'

const confederations: Confederation[] = ['UEFA', 'CONMEBOL', 'CONCACAF', 'CAF', 'AFC', 'OFC']

export default function Teams() {
  const [search, setSearch] = useState('')
  const [group, setGroup] = useState('all')
  const [confederation, setConfederation] = useState('all')

  const filtered = useMemo(() => {
    return teamsFixed.filter(t => {
      if (group !== 'all' && t.group !== group) return false
      if (confederation !== 'all' && t.confederation !== confederation) return false
      if (search) {
        const q = search.toLowerCase()
        return t.name.toLowerCase().includes(q) || t.shortName.toLowerCase().includes(q) || t.code.toLowerCase().includes(q)
      }
      return true
    })
  }, [search, group, confederation])

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="section-title">Seleções</h1>
        <p className="section-subtitle">48 seleções participantes da Copa do Mundo 2026</p>
      </div>

      {/* Filters */}
      <div className="card p-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <SearchBar value={search} onChange={setSearch} placeholder="Buscar seleção..." />
          <select value={group} onChange={e => setGroup(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="all">Todos os grupos</option>
            {GROUPS.map(g => <option key={g} value={g}>Grupo {g}</option>)}
          </select>
          <select value={confederation} onChange={e => setConfederation(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="all">Todas as confederações</option>
            {confederations.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState title="Nenhuma seleção encontrada" description="Tente ajustar os filtros." action={<button className="btn-secondary" onClick={() => { setSearch(''); setGroup('all'); setConfederation('all') }}>Limpar filtros</button>} />
      ) : (
        <div>
          <p className="text-sm text-gray-500 mb-4">{filtered.length} seleções encontradas</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map(t => <TeamCard key={t.id} team={t} />)}
          </div>
        </div>
      )}
    </div>
  )
}
