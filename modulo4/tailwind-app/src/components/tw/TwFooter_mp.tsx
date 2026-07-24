export default function TwFooter_mp() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-6">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4">
        <span className="font-extrabold text-white">🚛 TransLogix _mp</span>
        <span className="text-sm text-white/40">
          Despacho Operativo construido con Tailwind CSS v4 + React 19
        </span>
        <div className="flex gap-4">
          <a href="#" className="text-sm text-white/50 hover:text-white transition">Rutas</a>
          <a href="#" className="text-sm text-white/50 hover:text-white transition">Telemetría GPS</a>
        </div>
      </div>
    </footer>
  );
}