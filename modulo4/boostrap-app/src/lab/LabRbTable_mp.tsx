import { useState } from 'react';
import { Container, Table, Badge, Form, InputGroup } from 'react-bootstrap';

interface TransportUnit {
  id: number;
  placa: string;
  categoria: string;
  flete: number;
  activa: boolean;
}

const UNIDADES: TransportUnit[] = [
  { id: 1, placa: 'PBX-1024', categoria: 'Pesado', flete: 450.0, activa: true },
  { id: 2, placa: 'PBA-3092', categoria: 'Refrigerado', flete: 620.0, activa: true },
  { id: 3, placa: 'GSU-8812', categoria: 'Liviano', flete: 180.0, activa: false },
  { id: 4, placa: 'PCH-4410', categoria: 'Pesado', flete: 500.0, activa: true },
  { id: 5, placa: 'MAZ-9921', categoria: 'Refrigerado', flete: 580.0, activa: false },
];

export default function LabRbTable_mp() {
  const [search, setSearch] = useState('');

  const filtered = UNIDADES.filter(
    (u) =>
      u.placa.toLowerCase().includes(search.toLowerCase()) ||
      u.categoria.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Tabla de Control de Flotas (_mp)</h2>
      <p className="text-secondary mb-3">Tabla responsiva con filtro de búsqueda en tiempo real.</p>

      <InputGroup className="mb-3" style={{ maxWidth: 360 }}>
        <Form.Control
          placeholder="Buscar por placa o categoría..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>

      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Placa / Unidad</th>
            <th>Categoría</th>
            <th className="text-end">Flete Base</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td className="fw-semibold">🚛 {u.placa}</td>
              <td>{u.categoria}</td>
              <td className="text-end">${u.flete.toFixed(2)}</td>
              <td>
                <Badge bg={u.activa ? 'success' : 'secondary'}>
                  {u.activa ? 'Operativo' : 'Inactivo'}
                </Badge>
              </td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center text-muted">
                Sin registros encontrados.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}