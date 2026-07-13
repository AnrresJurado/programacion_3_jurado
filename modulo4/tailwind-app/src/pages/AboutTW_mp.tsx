export default function AboutTW_mp() {
  return (
    <main className="min-h-screen bg-slate-950 py-16">
      <div className="mx-auto max-w-2xl px-4">
        <h1 className="text-2xl font-extrabold text-white mb-6">Acerca de TransLogix (_mp)</h1>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> React 19 + TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> Tailwind CSS v4 con plugin de Vite
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> React Router v7
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> Módulo de Despacho y Logística Interprovincial
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}