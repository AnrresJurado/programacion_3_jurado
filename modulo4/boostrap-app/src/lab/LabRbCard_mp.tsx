import { Container, Card, Button, Row, Col, Badge } from 'react-bootstrap';

interface UnitCardProps {
  placa: string;
  flete: string;
  categoria: string;
  disponible: boolean;
}

function UnitCard({ placa, flete, categoria, disponible }: UnitCardProps) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title className="fw-bold">🚛 Placa: {placa}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Categoría: {categoria}</Card.Subtitle>
        <Card.Text>
          <Badge bg={disponible ? 'success' : 'secondary'} className="me-2">
            {disponible ? 'Disponible' : 'En Ruta'}
          </Badge>
          <strong>Tarifa Flete: {flete}</strong>
        </Card.Text>
        <Button variant="primary" size="sm">Ficha Técnica</Button>
      </Card.Body>
    </Card>
  );
}

export default function LabRbCard_mp() {
  const unidades = [
    { placa: 'PBX-1024', flete: '$450.00', categoria: 'Pesado', disponible: true },
    { placa: 'PBA-3092', flete: '$620.00', categoria: 'Refrigerado', disponible: true },
    { placa: 'GSU-8812', flete: '$180.00', categoria: 'Liviano', disponible: false },
  ];

  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Tarjetas de Unidades (_mp)</h2>
      <p className="text-secondary mb-3">Grid responsivo de la flota disponible en el terminal.</p>
      <Row className="g-3">
        {unidades.map((u) => (
          <Col key={u.placa} xs={12} sm={6} md={4}>
            <UnitCard {...u} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}