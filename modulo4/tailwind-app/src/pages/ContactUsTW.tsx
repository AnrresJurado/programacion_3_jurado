// src/pages/ContactUsTW.tsx

export default function ContactUsTW() {
  return (
    <main className="min-h-screen bg-slate-950 py-16">
      <div className="mx-auto max-w-2xl px-4">
        <h1 className="text-2xl font-extrabold text-white mb-6">Contáctanos</h1>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> Telefono: +41514185784
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> Correo electrónico: app@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> Dirección: 123 Calle Principal, Ciudad, País
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> Redes Sociales: @tuempresa
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}