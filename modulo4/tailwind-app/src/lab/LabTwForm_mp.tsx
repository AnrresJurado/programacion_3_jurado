import { useState } from 'react'

interface FormValues {
  name: string
  email: string
  role: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

export default function LabTwForm_mp() {
  const [values, setValues] = useState<FormValues>({ name: '', email: '', role: 'chofer' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [success, setSuccess] = useState(false)

  function validate(): boolean {
    const e: FormErrors = {}
    if (!values.name.trim()) e.name = 'El nombre del operador es requerido'
    if (!values.email.includes('@')) e.email = 'Correo corporativo inválido'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) return
    setSuccess(true)
    setValues({ name: '', email: '', role: 'chofer' })
    setTimeout(() => setSuccess(false), 3000)
  }

  const inputClass = (field: keyof FormValues) =>
    `h-11 w-full rounded-xl border bg-white/5 px-4 text-white placeholder:text-white/40 outline-none transition focus:ring-2 ${
      errors[field]
        ? 'border-red-500/60 focus:ring-red-500/30'
        : 'border-white/10 focus:ring-blue-500/40'
    }`

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h2 className="text-xl font-extrabold mb-1">LAB: Registro de Choferes (_mp)</h2>
      <p className="text-white/60 mb-6 text-sm">Formulario con validación y alertas de personal de flota.</p>

      {success && (
        <div className="mb-4 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-300 text-sm max-w-md">
          ✅ Operador registrado en el sistema correctamente
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <div>
          <label className="mb-1 block text-sm font-semibold text-white/80">Nombre Completo</label>
          <input
            className={inputClass('name')}
            type="text"
            placeholder="Andrés Jurado"
            value={values.name}
            onChange={e => {
              setValues(v => ({ ...v, name: e.target.value }))
              setErrors(v => ({ ...v, name: undefined }))
            }}
          />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-white/80">Correo Corporativo</label>
          <input
            className={inputClass('email')}
            type="email"
            placeholder="chofer@translogix.com"
            value={values.email}
            onChange={e => {
              setValues(v => ({ ...v, email: e.target.value }))
              setErrors(v => ({ ...v, email: undefined }))
            }}
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-white/80">Rol Operativo</label>
          <select
            className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:ring-2 focus:ring-blue-500/40"
            value={values.role}
            onChange={e => setValues(v => ({ ...v, role: e.target.value }))}
          >
            <option value="chofer" className="bg-slate-900">Chofer de Flota</option>
            <option value="despachador" className="bg-slate-900">Despachador</option>
            <option value="admin" className="bg-slate-900">Administrador Logístico</option>
          </select>
        </div>

        <button
          type="submit"
          className="h-11 rounded-xl bg-blue-600 font-semibold hover:bg-blue-500 transition"
        >
          Guardar Operador
        </button>
      </form>
    </main>
  )
}