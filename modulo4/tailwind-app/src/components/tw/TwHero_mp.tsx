export default function TwHero_mp() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <span className="inline-block rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300 mb-4">
          TransLogix v2.0 · Tailwind v4
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Gestión Logística con<br />
          <span className="text-blue-400">monitoreo en tiempo real</span>
        </h1>
        <p className="text-white/60 text-lg max-w-xl mb-8">
          Control total de la flota pesada, asignación de rutas interprovinciales
          y seguimiento satelital de carga.
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 transition">
            Ver Unidades
          </button>
          <button className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white/80 hover:bg-white/10 transition">
            Programar Despacho
          </button>
        </div>
      </div>
    </section>
  );
}