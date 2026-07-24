import { useState, useMemo } from 'react';

interface TransportUnit {
  id: number;
  placa: string;
  categoria: string; // Pesado, Liviano, Refrigerado
  fleteBase: number;
  disponible: boolean;
  capacidadToneladas: number;
}

const FLOTA_CAMIONES: TransportUnit[] = [
  { id: 1, placa: 'PBX-1024', categoria: 'Pesado', fleteBase: 450.0, disponible: true, capacidadToneladas: 25 },
  { id: 2, placa: 'PBA-3092', categoria: 'Refrigerado', fleteBase: 620.0, disponible: true, capacidadToneladas: 18 },
  { id: 3, placa: 'GSU-8812', categoria: 'Liviano', fleteBase: 180.0, disponible: false, capacidadToneladas: 5 },
  { id: 4, placa: 'PCH-4410', categoria: 'Pesado', fleteBase: 500.0, disponible: true, capacidadToneladas: 30 },
  { id: 5, placa: 'MAZ-9921', categoria: 'Refrigerado', fleteBase: 580.0, disponible: true, capacidadToneladas: 15 },
  { id: 6, placa: 'PBA-5512', categoria: 'Liviano', fleteBase: 220.0, disponible: true, capacidadToneladas: 8 },
];

type SortKey = 'placa' | 'fleteBase' | 'capacidadToneladas';

export default function FilteredCatalog_mp() {
  const [search, setSearch] = useState('');
  const [onlyAvailable, setOnlyAvailable] = useState(true);
  const [category, setCategory] = useState('Todas');
  const [sortBy, setSortBy] = useState<SortKey>('placa');

  // useMemo 1: Filtrar la flota
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return FLOTA_CAMIONES.filter(
      (u) =>
        (!onlyAvailable || u.disponible) &&
        (category === 'Todas' || u.categoria === category) &&
        (u.placa.toLowerCase().includes(q) || u.categoria.toLowerCase().includes(q))
    );
  }, [search, onlyAvailable, category]);

  // useMemo 2: Ordenar la flota filtrada
  const sorted = useMemo(
    () =>
      [...filtered].sort((a, b) =>
        sortBy === 'placa'
          ? a.placa.localeCompare(b.placa)
          : sortBy === 'fleteBase'
          ? a.fleteBase - b.fleteBase
          : b.capacidadToneladas - a.capacidadToneladas
      ),
    [filtered, sortBy]
  );

  const categories = useMemo(
    () => ['Todas', ...new Set(FLOTA_CAMIONES.map((u) => u.categoria))],
    []
  );

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 620, margin: '0 auto', padding: 20 }}>
      <h3>🚛 Catálogo de Unidades y Flotas (_mp)</h3>
      <p style={{ color: '#666', fontSize: 13, marginBottom: 16 }}>
        Filtrado y ordenamiento eficiente utilizando <code>useMemo</code> encadenados.
      </p>

      {/* Controles */}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Buscar por placa o categoría..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, minWidth: 160, padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortKey)}
          style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
        >
          <option value="placa">Placa (A–Z)</option>
          <option value="fleteBase">Flete Base ↑</option>
          <option value="capacidadToneladas">Capacidad Ton ↓</option>
        </select>
        <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={onlyAvailable}
            onChange={(e) => setOnlyAvailable(e.target.checked)}
          />
          Solo disponibles
        </label>
      </div>

      <p style={{ fontSize: 13, color: '#888', marginBottom: 12 }}>
        Mostrando {sorted.length} de {FLOTA_CAMIONES.length} unidades
      </p>

      {/* Lista */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {sorted.map((u) => (
          <div
            key={u.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 14px',
              background: u.disponible ? '#f9f9f9' : '#f0f0f0',
              borderRadius: 8,
              border: '1px solid #e5e5e5',
              opacity: u.disponible ? 1 : 0.6,
            }}
          >
            <div>
              <span style={{ fontWeight: 600, fontSize: 14 }}>🚛 Placa: {u.placa}</span>
              <span style={{ marginLeft: 8, fontSize: 12, color: '#888' }}>({u.categoria})</span>
            </div>
            <div style={{ textAlign: 'right', fontSize: 13 }}>
              <div style={{ fontWeight: 700 }}>Flete: ${u.fleteBase.toFixed(2)}</div>
              <div style={{ color: '#555' }}>Capacidad: {u.capacidadToneladas} Ton</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}