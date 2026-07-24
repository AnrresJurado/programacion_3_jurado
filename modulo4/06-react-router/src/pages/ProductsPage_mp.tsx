import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

interface TransportUnit {
  id: number;
  placa: string;
  categoria: string;
  tarifaFlete: number;
}

const UNIDADES_TRANSPORTE: TransportUnit[] = [
  { id: 101, placa: 'PBX-1024 (Trailer Heavy)', categoria: 'Pesado', tarifaFlete: 450 },
  { id: 102, placa: 'PBA-3092 (Camión Thermo)', categoria: 'Refrigerado', tarifaFlete: 620 },
  { id: 103, placa: 'GSU-8812 (Camioneta Cargo)', categoria: 'Liviano', tarifaFlete: 180 },
  { id: 104, placa: 'PCH-4410 (MACK Granit)', categoria: 'Pesado', tarifaFlete: 500 },
  { id: 105, placa: 'MAZ-9921 (Hino Refrigerado)', categoria: 'Refrigerado', tarifaFlete: 580 },
];

export default function ProductsPage_mp() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('q') ?? '';
  const category = searchParams.get('category') ?? '';

  function handleQueryChange(value: string) {
    setSearchParams(
      (prev) => {
        prev.set('q', value);
        return prev;
      },
      { replace: true }
    );
  }

  function handleCategoryChange(value: string) {
    setSearchParams(
      (prev) => {
        if (value) prev.set('category', value);
        else prev.delete('category');
        return prev;
      },
      { replace: true }
    );
  }

  const filtered = useMemo(
    () =>
      UNIDADES_TRANSPORTE.filter((u) =>
        u.placa.toLowerCase().includes(query.toLowerCase())
      ).filter((u) => !category || u.categoria === category),
    [query, category]
  );

  const categories = [...new Set(UNIDADES_TRANSPORTE.map((u) => u.categoria))];

  return (
    <div>
      <h1 style={{ fontSize: 22, marginBottom: 16 }}>🚛 Unidades de Transporte Disponibles (_mp)</h1>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          placeholder="Buscar por placa o modelo..."
          style={{ flex: 1, padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
        />
        <select
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
          style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
        >
          <option value="">Todas las categorías</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {filtered.map((unit) => (
          <Link
            key={unit.id}
            to={`/products/${unit.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 16px',
                border: '1px solid #e5e7eb',
                borderRadius: 8,
                background: '#fafafa',
              }}
            >
              <div>
                <p style={{ margin: 0, fontWeight: 500 }}>{unit.placa}</p>
                <p style={{ margin: 0, fontSize: 12, color: '#9ca3af' }}>Categoría: {unit.categoria}</p>
              </div>
              <span style={{ fontWeight: 600, color: '#0284c7' }}>Flete: ${unit.tarifaFlete}</span>
            </div>
          </Link>
        ))}
        {filtered.length === 0 && <p style={{ color: '#9ca3af' }}>Sin unidades registradas con ese filtro.</p>}
      </div>
    </div>
  );
}