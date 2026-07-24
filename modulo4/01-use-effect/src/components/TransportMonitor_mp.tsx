import { useState, useEffect, useRef } from 'react';

interface ChoferTransporte {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: { name: string };
}

export default function TransportMonitor_mp() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  const [choferes, setChoferes] = useState<ChoferTransporte[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [currentTime, setCurrentTime] = useState<string>(
    () => new Date().toLocaleTimeString()
  );

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  // =========================================================================
  // EFECTO 1: DocumentTitle — Actualizar el título del documento según choferes
  // =========================================================================
  useEffect(() => {
    document.title = `Transporte (${choferes.length} Choferes) - Monitoreo MP`;
    return () => {
      document.title = 'React App'; // Cleanup al desmontar
    };
  }, [choferes.length]);

  // =========================================================================
  // EFECTO 2: AutoFocusInput — Dar foco imperativo al input al cargar
  // =========================================================================
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  // =========================================================================
  // EFECTO 3: OnlineStatus — Escuchar estado de conexión de red
  // =========================================================================
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // =========================================================================
  // EFECTO 4: WindowSize — Escuchar el cambio de tamaño de la ventana
  // =========================================================================
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // =========================================================================
  // EFECTO 5: LiveClock — Reloj en tiempo real para control de rutas
  // =========================================================================
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timerId); // Cleanup del intervalo
  }, []);

  // =========================================================================
  // EFECTO 6: DebounceSearch — Esperar a que el usuario deje de tipear (300ms)
  // =========================================================================
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);

    return () => clearTimeout(handler); // Cleanup del timeout anterior
  }, [searchTerm]);

  // =========================================================================
  // EFECTO 7: FetchUser — Petición asíncrona real con manejo de cancelación
  // =========================================================================
  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    setError(null);

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Error al consultar el personal de transporte');
        return res.json();
      })
      .then((data: ChoferTransporte[]) => {
        if (!isCancelled) {
          setChoferes(data);
          setLoading(false);
        }
      })
      .catch((err: Error) => {
        if (!isCancelled) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      isCancelled = true; // Prevención de race conditions y fugas de memoria
    };
  }, []);

  // =========================================================================
  // EFECTO 8: SearchWithEffect — Filtrar choferes en base al término diferido
  // =========================================================================
  const filteredChoferes = choferes.filter((c) =>
    c.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    c.company.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', backgroundColor: '#fff' }}>
      {/* HEADER DE ESTADO */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h2>🚛 Monitoreo de Choferes (_mp)</h2>
        <span
          style={{
            padding: '4px 10px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#fff',
            backgroundColor: isOnline ? '#28a745' : '#dc3545',
          }}
        >
          {isOnline ? '🟢 Red Conectada' : '🔴 Sin Conexión'}
        </span>
      </div>

      {/* METRICAS DE TIEMPO Y NAVEGADOR */}
      <div style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '6px', marginBottom: '16px', fontSize: '13px' }}>
        <p style={{ margin: '2px 0' }}>🕒 <strong>Hora de Despacho:</strong> {currentTime}</p>
        <p style={{ margin: '2px 0' }}>📐 <strong>Pantalla Terminal:</strong> {windowSize.width}px x {windowSize.height}px</p>
      </div>

      {/* BUSCADOR AUTOFOCUS CON DEBOUNCE */}
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>
          🔍 Buscar Chofer o Empresa Transportista:
        </label>
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Escribe el nombre del chofer..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        {searchTerm !== debouncedSearch && (
          <small style={{ color: '#007bff' }}>Procesando búsqueda (Debounce)...</small>
        )}
      </div>

      {/* RENDERIZADO ASÍNCRONO DE CHOFERES */}
      <h3>👨‍✈️ Nómina de Choferes Disponibles ({filteredChoferes.length})</h3>

      {loading && <p style={{ color: '#666' }}>⏳ Cargando datos del servidor de transportes...</p>}
      {error && <p style={{ color: '#dc3545' }}>❌ {error}</p>}

      {!loading && !error && (
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {filteredChoferes.length === 0 ? (
            <p style={{ fontStyle: 'italic', color: '#888' }}>No se encontraron choferes con el filtro actual.</p>
          ) : (
            filteredChoferes.map((c) => (
              <li
                key={c.id}
                style={{
                  padding: '10px',
                  borderBottom: '1px solid #eee',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <strong>{c.name}</strong>
                  <br />
                  <small style={{ color: '#666' }}>🏢 Empresa: {c.company.name} | 📞 {c.phone}</small>
                </div>
                <span style={{ fontSize: '12px', color: '#28a745', fontWeight: 'bold' }}>Disponible</span>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}