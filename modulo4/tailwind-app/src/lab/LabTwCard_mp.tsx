interface UnitCardProps {
  placa: string
  tipo: 'Liviano' | 'Pesado' | 'Refrigerado'
  capacidad: string
  tag?: string
}

const TIPO_COLORS: Record<UnitCardProps['tipo'], string> = {
  Liviano: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  Pesado: 'border-amber-400/30 bg-amber-400/10 text-amber-300',
  Refrigerado: 'border-blue-400/30 bg-blue-400/10 text-blue-300',
}

function UnitCard({ placa, tipo, capacidad, tag }: UnitCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition">
      <div className="flex items-center justify-between">
        <span className={`inline-block rounded-full border px-3 py-0.5 text-xs font-semibold ${TIPO_COLORS[tipo]}`}>
          {tipo}
        </span>
        {tag && (
          <span className="rounded-full border border-white/20 bg-white/5 px-3 py-0.5 text-xs text-white/60">
            {tag}
          </span>
        )}
      </div>
      <h3 className="font-bold text-white">🚛 Placa: {placa}</h3>
      <p className="text-sm text-white/60">Capacidad Máxima: {capacidad}</p>
      <button className="mt-auto self-start rounded-xl border border-white/20 px-4 py-1.5 text-sm font-semibold text-white/80 hover:bg-white/10 transition">
        Ver Manifiesto →
      </button>
    </div>
  )
}

export default function LabTwCard_mp() {
  const units: UnitCardProps[] = [
    { placa: 'PBX-1024 (Mack)', tipo: 'Pesado', capacidad: '25 Ton', tag: 'Disponible' },
    { placa: 'PBA-3092 (Hino)', tipo: 'Refrigerado', capacidad: '18 Ton', tag: 'En Ruta' },
    { placa: 'GSU-8812 (Chevrolet)', tipo: 'Liviano', capacidad: '5 Ton' },
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h2 className="text-xl font-extrabold mb-1">LAB: Tarjetas de Flota (_mp)</h2>
      <p className="text-white/60 mb-6 text-sm">Tarjetas tipadas por clasificación de transporte.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
        {units.map(u => <UnitCard key={u.placa} {...u} />)}
      </div>
    </main>
  )
}