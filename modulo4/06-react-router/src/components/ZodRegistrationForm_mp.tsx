import { useState } from 'react';
import { z } from 'zod';

const RegisterSchema = z.object({
  fullName: z.string().min(2, 'El nombre del chofer requiere al menos 2 caracteres'),
  email: z.string().email('Introduzca un correo válido'),
  licencia: z.string().min(4, 'Especifique tipo de licencia (ej. Tipo E)'),
  birthYear: z.number({ error: 'Debe ser un número de año' })
    .int('Debe ser un año completo')
    .min(1900, 'Año inválido')
    .max(new Date().getFullYear() - 18, 'El conductor debe ser mayor de edad'),
});

type RegisterFormData = z.infer<typeof RegisterSchema>;
type FormErrors = Partial<Record<keyof RegisterFormData, string>>;

const INITIAL_VALUES: RegisterFormData = {
  fullName: '',
  email: '',
  licencia: '',
  birthYear: 1995,
};

export default function ZodRegistrationForm_mp() {
  const [values, setValues] = useState<RegisterFormData>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);

  function handleChange<K extends keyof RegisterFormData>(field: K, value: RegisterFormData[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const result = RegisterSchema.safeParse(values);

    if (!result.success) {
      const zodErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof RegisterFormData;
        if (field && !zodErrors[field]) {
          zodErrors[field] = issue.message;
        }
      }
      setErrors(zodErrors);
      return;
    }

    setSuccess(true);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
      <h3>📝 Registro Zod de Conductores (_mp)</h3>

      {success && (
        <div style={{ padding: 12, background: '#dcfce7', borderRadius: 6, color: '#166534' }}>
          ✅ Registro de conductor validado con Zod
        </div>
      )}

      <FormField
        label="Nombre Completo"
        value={values.fullName}
        error={errors.fullName}
        placeholder="Andrés Jurado"
        onChange={(v) => handleChange('fullName', v)}
      />

      <FormField
        label="Correo Corporativo"
        type="email"
        value={values.email}
        error={errors.email}
        placeholder="chofer@transporte.com"
        onChange={(v) => handleChange('email', v)}
      />

      <FormField
        label="Tipo de Licencia"
        value={values.licencia}
        error={errors.licencia}
        placeholder="Ej. Tipo E / Tipo D"
        onChange={(v) => handleChange('licencia', v)}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <label style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>Año de Nacimiento</label>
        <input
          type="number"
          value={values.birthYear}
          onChange={(e) => handleChange('birthYear', Number(e.target.value))}
          style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
        />
        {errors.birthYear && <p style={errorStyle}>{errors.birthYear}</p>}
      </div>

      <button
        type="submit"
        style={{
          padding: '10px',
          background: '#0284c7',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          fontWeight: 500,
        }}
      >
        Registrar Conductor
      </button>
    </form>
  );
}

interface FormFieldProps {
  label: string;
  value: string;
  error?: string;
  placeholder?: string;
  type?: string;
  onChange: (value: string) => void;
}

function FormField({ label, value, error, placeholder, type = 'text', onChange }: FormFieldProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <label style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          padding: '8px 12px',
          fontSize: 14,
          border: `1px solid ${error ? '#ef4444' : '#d1d5db'}`,
          borderRadius: 6,
        }}
      />
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  );
}

const errorStyle = { margin: 0, fontSize: 12, color: '#ef4444' };