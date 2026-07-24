import { useState } from 'react'

type AlertType = 'success' | 'error' | 'warning' | 'info'

interface AlertProps {
  type: AlertType
  message: string
  onClose: () => void
}

const STYLES: Record<AlertType, string> = {
  success: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  error: 'border-red-400/30 bg-red-400/10 text-red-300',
  warning: 'border-amber-400/30 bg-amber-400/10 text-amber-300',
  info: 'border-blue-400/30 bg-blue-400/10 text-blue-300',
}

function Alert({ type, message, onClose }: AlertProps) {
  return (
    <div className={`flex items-start justify-between rounded-2xl border p-4 ${STYLES[type]}`}>
      <span className="text-sm">{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-current opacity-60 hover:opacity-100 transition text-lg leading-none"
      >
        ✕
      </button>
    </div>
  )
}

export default function LabTwAlert_mp() {
  const [alerts, setAlerts] = useState<AlertType[]>(['success', 'error', 'warning', 'info'])

  const remove = (type: AlertType) =>
    setAlerts(prev => prev.filter(a => a !== type))

  const MESSAGES: Record<AlertType, string> = {
    success: 'Arribo Exitoso: Unidad PBX-1024 ha completado la ruta Quito - Guayaquil.',
    error: 'Bloqueo Detectado: Cierre total en el tramo Alóag - Santo Domingo.',
    warning: 'Mantenimiento Preventivo: Cambio de neumáticos requerido en 500 km.',
    info: 'Telemetría OK: Señal satelital estable en toda la flota activa.',
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h2 className="text-xl font-extrabold mb-1">LAB: Alertas de Flota (_mp)</h2>
      <p className="text-white/60 mb-6 text-sm">Notificaciones operativas con descarte individual.</p>

      <div className="flex flex-col gap-3 max-w-xl">
        {alerts.map(type => (
          <Alert
            key={type}
            type={type}
            message={MESSAGES[type]}
            onClose={() => remove(type)}
          />
        ))}
        {alerts.length === 0 && (
          <button
            onClick={() => setAlerts(['success', 'error', 'warning', 'info'])}
            className="self-start rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition"
          >
            Restaurar Alertas de Carretera
          </button>
        )}
      </div>
    </main>
  )
}