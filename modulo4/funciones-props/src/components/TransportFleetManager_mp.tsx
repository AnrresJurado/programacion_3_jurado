import { useState } from 'react';

interface RouteCardProps {
  id: number;
  codigoRuta: string;
  origenDestino: string;
  tarifaFlete: number;
  onAssignTruck: (id: number, codigoRuta: string, tarifaFlete: number) => void;
}

export function RouteCardItem_mp({
  id,
  codigoRuta,
  origenDestino,
  tarifaFlete,
  onAssignTruck,
}: RouteCardProps) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '12px',
        marginBottom: '10px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h3 style={{ margin: '0 0 6px 0' }}>{codigoRuta}</h3>
      <p style={{ margin: '0 0 8px 0', color: '#555' }}>📍 {origenDestino}</p>
      <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>Flete: ${tarifaFlete.toFixed(2)}</p>
      <button
        onClick={() => onAssignTruck(id, codigoRuta, tarifaFlete)}
        style={{
          padding: '6px 12px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        🚛 Asignar Camión
      </button>
    </div>
  );
}

interface AssignedSummaryProps {
  assignedRoutes: Array<{ id: number; codigoRuta: string; tarifaFlete: number }>;
  onClearFleet: () => void;
}

export function AssignedRoutesSummary_mp({
  assignedRoutes,
  onClearFleet,
}: AssignedSummaryProps) {
  const totalFletes = assignedRoutes.reduce((acc, curr) => acc + curr.tarifaFlete, 0);

  return (
    <div
      style={{
        marginTop: '20px',
        borderTop: '2px solid #007bff',
        paddingTop: '16px',
      }}
    >
      <h2>📋 Resumen de Despacho (Transporte)</h2>
      {assignedRoutes.length === 0 ? (
        <p style={{ fontStyle: 'italic', color: '#777' }}>No hay rutas asignadas a unidades aún.</p>
      ) : (
        <>
          <ul style={{ paddingLeft: '20px' }}>
            {assignedRoutes.map((r) => (
              <li key={r.id}>
                {r.codigoRuta} — <strong>${r.tarifaFlete.toFixed(2)}</strong>
              </li>
            ))}
          </ul>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Total Fletes Programados: ${totalFletes.toFixed(2)}
          </p>
          <button
            onClick={onClearFleet}
            style={{
              padding: '6px 12px',
              backgroundColor: '#dc3545',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            🧹 Vaciar Despacho
          </button>
        </>
      )}
    </div>
  );
}

// Componente Principal
export default function TransportFleetManager_mp() {
  const [assignedRoutes, setAssignedRoutes] = useState<
    Array<{ id: number; codigoRuta: string; tarifaFlete: number }>
  >([]);

  const availableRoutes = [
    { id: 1, codigoRuta: 'RUT-2026-01', origenDestino: 'Quito ➔ Guayaquil', tarifaFlete: 450.00 },
    { id: 2, codigoRuta: 'RUT-2026-02', origenDestino: 'Cuenca ➔ Manta', tarifaFlete: 520.50 },
    { id: 3, codigoRuta: 'RUT-2026-03', origenDestino: 'Ambato ➔ Esmeraldas', tarifaFlete: 380.00 },
  ];

  function handleAssignTruck(id: number, codigoRuta: string, tarifaFlete: number) {
    const isAlreadyAssigned = assignedRoutes.some((r) => r.id === id);
    if (isAlreadyAssigned) return;
    setAssignedRoutes((prev) => [...prev, { id, codigoRuta, tarifaFlete }]);
  }

  function handleClearFleet() {
    setAssignedRoutes([]);
  }

  return (
    <section>
      <h1>🚛 Gestión de Transporte - Asignación de Rutas (_mp)</h1>
      <div style={{ marginTop: '16px' }}>
        {availableRoutes.map((r) => (
          <RouteCardItem_mp
            key={r.id}
            id={r.id}
            codigoRuta={r.codigoRuta}
            origenDestino={r.origenDestino}
            tarifaFlete={r.tarifaFlete}
            onAssignTruck={handleAssignTruck}
          />
        ))}
      </div>
      <AssignedRoutesSummary_mp
        assignedRoutes={assignedRoutes}
        onClearFleet={handleClearFleet}
      />
    </section>
  );
}