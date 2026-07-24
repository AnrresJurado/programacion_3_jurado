import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

interface Unit {
  id: number;
  placa: string;
  tipo: 'Liviano' | 'Pesado' | 'Refrigerado';
  capacidad: string;
  estado: string;
}

const UNITS: Unit[] = [
  { id: 1, placa: 'PBX-1024', tipo: 'Pesado', capacidad: '25 Ton', estado: 'Disponible' },
  { id: 2, placa: 'PBA-3092', tipo: 'Refrigerado', capacidad: '18 Ton', estado: 'En Ruta' },
  { id: 3, placa: 'GSU-8812', tipo: 'Liviano', capacidad: '5 Ton', estado: 'Disponible' },
  { id: 4, placa: 'PCH-4410', tipo: 'Pesado', capacidad: '30 Ton', estado: 'Mantenimiento' },
  { id: 5, placa: 'MAZ-9921', tipo: 'Refrigerado', capacidad: '15 Ton', estado: 'Disponible' },
  { id: 6, placa: 'PBA-5512', tipo: 'Liviano', capacidad: '8 Ton', estado: 'En Ruta' },
];

const TIPO_COLOR: Record<Unit['tipo'], string> = {
  Liviano: 'success',
  Pesado: 'primary',
  Refrigerado: 'warning',
};

export default function RBCourseGrid_mp() {
  return (
    <section className="py-5">
      <Container>
        <h2 className="fw-bold mb-1">Flota de Unidades Disponibles (_mp)</h2>
        <p className="text-muted mb-4">Selecciona el tipo de transporte requerido para tu carga.</p>

        <Row className="g-3">
          {UNITS.map((unit) => (
            <Col key={unit.id} xs={12} sm={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Badge bg={TIPO_COLOR[unit.tipo]}>{unit.tipo}</Badge>
                    <Badge bg={unit.estado === 'Disponible' ? 'dark' : 'secondary'}>
                      {unit.estado}
                    </Badge>
                  </div>
                  <Card.Title className="fw-bold">Placa: {unit.placa}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    Capacidad máxima: {unit.capacidad}
                  </Card.Text>
                  <Button variant="outline-primary" size="sm" className="mt-auto">
                    Ver Expediente
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}