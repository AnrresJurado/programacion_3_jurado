import { useState } from 'react'

interface Unit {
  id: number
  placa: string
  categoria: string
  flete: number
  activa: boolean
}

const UNIDADES: Unit[] = [
  { id: 1, placa: 'PBX-1024 (Mack)', categoria: 'Pesado', flete: 450.00, activa: true },
  { id: 2, placa: 'PBA-3092 (Hino)', categoria: 'Refrigerado', flete: 620.00, activa: true },
  { id: 3, placa: 'GSU-8812 (Chevrolet)', categoria: 'Liviano', flete: 180.00, activa: false },
  { id: 4, placa: 'PCH-4410 (MACK)', categoria: 'Pesado', flete: 500.00, activa: true },
  { id: 5, placa: 'MAZ-9921 (Hino Thermo)', categoria: 'Refrigerado', flete: 580.00, activa: false },
]

export default function LabTwTable_mp() {
  const [search, setSearch] = useState('')

  const filtered = UNIDADES.filter(p =>
    p.placa.toLowerCase().includes(search.toLowerCase()) ||
    p.categoria.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h2 className="text-xl font-extrabold mb-1">LAB: Tabla de Flota (_mp)</h2>
      <p className="text-white/60 mb-4 text-sm">Tabla responsiva de unidades con filtro dinámico.</p>

      <input
        className="mb-4 h-10 w-full max-w-xs rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-blue-500/40"
        placeholder="Buscar placa o categoría..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="min-w-full text-sm">
          <thead className="bg-white/5 text-white/70">
            <tr>
              {['#', 'Placa / Unidad', 'Categoría', 'Flete Base', 'Estado'].map(h => (
                <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(p => (
              <tr key={p.id} className="border-t border-white/10 hover:bg-white/5 transition">
                <td className="px-4 py-3 text-white/50">{p.id}</td>
                <td className="px-4 py-3 font-semibold">🚛 {p.placa}</td>
                <td className="px-4 py-3 text-white/70">{p.categoria}</td>
                <td className="px-4 py-3 font-semibold">${p.flete.toFixed(2)}</td>
                <td className="px-4 py-3">
                  <span className={`inline-block rounded-full border px-3 py-0.5 text-xs font-semibold ${
                    p.activa
                      ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                      : 'border-white/10 bg-white/5 text-white/50'
                  }`}>
                    {p.activa ? 'Operativo' : 'Inactivo'}
                  </span>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-white/40">
                  Sin unidades encontradas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  )
}