import { useParams, Link } from 'react-router-dom';

interface UnitParams extends Record<string, string | undefined> {
  id: string;
}

export default function ProductDetailPage_mp() {
  const { id } = useParams<UnitParams>();
  const unitId = Number(id);

  if (!id || isNaN(unitId)) {
    return <p style={{ color: '#ef4444' }}>ID de unidad de transporte inválido.</p>;
  }

  return (
    <div>
      <Link to="/products" style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none' }}>
        ← Volver al catálogo de flota
      </Link>
      <h1 style={{ marginTop: 12 }}>🚛 Expediente Técnico de la Unidad #{unitId} (_mp)</h1>
      <div style={{ padding: 16, border: '1px solid #e5e7eb', borderRadius: 8, background: '#f9fafb', marginTop: 16 }}>
        <p style={{ margin: '0 0 8px 0', color: '#374151' }}>
          <strong>Estado de Mantenimiento:</strong> Al día (Inspección aprobada)
        </p>
        <p style={{ margin: '0 0 8px 0', color: '#374151' }}>
          <strong>Disponibilidad:</strong> Lista para asignación de ruta interprovincial.
        </p>
        <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>
          Ubicación GPS: Terminal Terrestre de Quito
        </p>
      </div>
    </div>
  );
}