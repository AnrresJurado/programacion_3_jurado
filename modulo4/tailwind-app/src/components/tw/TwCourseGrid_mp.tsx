interface Unit {
  id: number;
  placa: string;
  tipo: 'Liviano' | 'Pesado' | 'Refrigerado';
  capacidad: string;
  tag?: string;
}

const UNITS: Unit[] = [
  { id: 1, placa: 'PBX-1024', tipo: 'Pesado', capacidad: '25 Ton', tag: 'Disponible' },
  { id: 2, placa: 'PBA-3092', tipo: 'Refrigerado', capacidad: '18 Ton', tag: 'En Ruta' },
  { id: 3, placa: 'GSU-8812', tipo: 'Liviano', capacidad: '5 Ton' },
  { id: 4, placa: 'PCH-4410', tipo: 'Pesado', capacidad: '30 Ton', tag: 'Disponible' },
  { id: 5, placa: 'MAZ-9921', tipo: 'Refrigerado', capacidad: '15 Ton' },
  { id: 6, placa: 'PBA-5512', tipo: 'Liviano', capacidad: '8 Ton', tag: 'En Ruta' },
];

const TIPO_STYLES: Record<Unit['tipo'], string> = {
  Liviano: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  Pesado: 'border-amber-400/30 bg-amber-400/10 text-amber-300',
  Refrigerado: 'border-blue-400/30 bg-blue-400/10 text-blue-300',
};

export default function TwCourseGrid_mp() {
  return (
    <section className="bg-slate-950 py-12">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-extrabold text-white mb-2">Flota de Unidades Disponibles (_mp)</h2>
        <p className="text-white/50 mb-8">Selecciona la unidad de carga adecuada para tu itinerario.</p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {UNITS.map((unit) => (
            <div
              key={unit.id}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition"
            >
              <div className="flex items-center justify-between">
                <span className={`rounded-full border px-3 py-0.5 text-xs font-semibold ${TIPO_STYLES[unit.tipo]}`}>
                  {unit.tipo}
                </span>
                {unit.tag && (
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-0.5 text-xs text-white/50">
                    {unit.tag}
                  </span>
                )}
              </div>
              <h3 className="font-bold text-white">Placa: {unit.placa}</h3>
              <p className="text-sm text-white/50">Capacidad: {unit.capacidad}</p>
              <button className="mt-auto self-start rounded-xl border border-white/20 px-4 py-1.5 text-sm font-semibold text-white/70 hover:bg-white/10 transition">
                Ver Ficha Técnica →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}