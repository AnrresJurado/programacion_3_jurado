import { useReducer } from 'react';

interface FormState {
  nombre:    string;
  cedula:    string;
  email:     string;
  licencia:  string;
  errors:    Partial<Record<'nombre' | 'email' | 'cedula' | 'licencia', string>>;
  status:    'idle' | 'submitting' | 'success' | 'error' | 'validating';
}

type FormAction =
  | { type: 'SET_FIELD'; field: keyof Pick<FormState, 'nombre' | 'email' | 'cedula' | 'licencia'>; value: string }
  | { type: 'SET_ERRORS'; errors: FormState['errors'] }
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_VALIDATING' }
  | { type: 'SUBMIT_SUCCESS' }
  | { type: 'SUBMIT_ERROR' }
  | { type: 'RESET' };

const INITIAL_STATE: FormState = {
  nombre:   '',
  cedula:   '',
  email:    '',
  licencia: '',
  errors:   {},
  status:   'idle',
};

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: undefined },
      };
    case 'SET_ERRORS':
      return { ...state, errors: action.errors };
    case 'SUBMIT_START':
      return { ...state, status: 'submitting' };
    case 'SUBMIT_VALIDATING':
      return { ...state, status: 'validating' };
    case 'SUBMIT_SUCCESS':
      return { ...INITIAL_STATE, status: 'success' };
    case 'SUBMIT_ERROR':
      return { ...state, status: 'error' };
    case 'RESET':
      return INITIAL_STATE;
  }
}

export default function RegistrationForm_mp() {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  function validate(): boolean {
    const errors: FormState['errors'] = {};
    if (!state.nombre.trim())         errors.nombre   = 'El nombre del chofer es requerido';
    if (state.cedula.length < 10)     errors.cedula   = 'Cédula debe tener 10 dígitos';
    if (!state.email.includes('@'))   errors.email    = 'Correo corporativo inválido';
    if (state.licencia.length < 4)    errors.licencia = 'Ingrese tipo de licencia (ej. Tipo E)';

    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SET_ERRORS', errors });
      return false;
    }
    return true;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    dispatch({ type: 'SUBMIT_START' });
    await new Promise((resolve) => setTimeout(resolve, 800));
    dispatch({ type: 'SUBMIT_VALIDATING' });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch({ type: 'SUBMIT_SUCCESS' });
  }

  const isSubmitting = state.status === 'submitting';
  const isValidating = state.status === 'validating';

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}
    >
      <h3>👨‍✈️ Registro de Conductores (_mp)</h3>

      {state.status === 'success' && (
        <div style={{ padding: 12, background: '#dcfce7', borderRadius: 6, color: '#166534' }}>
          ✅ Conductor registrado correctamente en el sistema
        </div>
      )}

      <div>
        <input
          value={state.nombre}
          onChange={(e) =>
            dispatch({ type: 'SET_FIELD', field: 'nombre', value: e.target.value })
          }
          placeholder="Nombre Completo del Chofer"
          disabled={isSubmitting}
          style={inputStyle(!!state.errors.nombre)}
        />
        {state.errors.nombre && <p style={errorStyle}>{state.errors.nombre}</p>}
      </div>

      <div>
        <input
          value={state.cedula}
          onChange={(e) =>
            dispatch({ type: 'SET_FIELD', field: 'cedula', value: e.target.value })
          }
          placeholder="Cédula de Identidad"
          disabled={isSubmitting}
          style={inputStyle(!!state.errors.cedula)}
        />
        {state.errors.cedula && <p style={errorStyle}>{state.errors.cedula}</p>}
      </div>

      <div>
        <input
          type="email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: 'SET_FIELD', field: 'email', value: e.target.value })
          }
          placeholder="Correo Electrónico"
          disabled={isSubmitting}
          style={inputStyle(!!state.errors.email)}
        />
        {state.errors.email && <p style={errorStyle}>{state.errors.email}</p>}
      </div>

      <div>
        <input
          value={state.licencia}
          onChange={(e) =>
            dispatch({ type: 'SET_FIELD', field: 'licencia', value: e.target.value })
          }
          placeholder="Tipo de Licencia (ej. Tipo E, Tipo D)"
          disabled={isSubmitting}
          style={inputStyle(!!state.errors.licencia)}
        />
        {state.errors.licencia && <p style={errorStyle}>{state.errors.licencia}</p>}
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            flex: 1, padding: '10px',
            background: isSubmitting || isValidating ? '#93c5fd' : '#0070f3',
            color: '#fff', border: 'none', borderRadius: 6,
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            fontWeight: 500,
          }}
        >
          {isSubmitting ? 'Procesando...' : isValidating ? 'Validando Licencia...' : 'Registrar Chofer'}
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: 'RESET' })}
          disabled={isSubmitting}
          style={{
            padding: '10px 16px',
            background: '#f3f4f6', color: '#6b7280',
            border: 'none', borderRadius: 6, cursor: 'pointer',
          }}
        >
          Limpiar
        </button>
      </div>
    </form>
  );
}

function inputStyle(hasError: boolean): React.CSSProperties {
  return {
    width: '100%',
    padding: '8px 12px',
    border: `1px solid ${hasError ? '#ef4444' : '#d1d5db'}`,
    borderRadius: 6,
    fontSize: 14,
    boxSizing: 'border-box',
  };
}

const errorStyle: React.CSSProperties = {
  margin: '4px 0 0',
  fontSize: 12,
  color: '#ef4444',
};