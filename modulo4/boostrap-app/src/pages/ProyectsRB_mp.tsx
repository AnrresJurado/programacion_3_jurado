import { Container, Card, ListGroup } from 'react-bootstrap';

export default function ProyectsRB_mp() {
  return (
    <Container className="py-5" style={{ maxWidth: 600 }}>
      <h1 className="h3 fw-bold mb-4">🚛 Proyectos de Logística (_mp)</h1>
      <Card className="shadow-sm">
        <Card.Header className="fw-semibold">Sistemas de Gestión de Carga</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Monitoreo GPS en tiempo real (AWS IoT)</ListGroup.Item>
          <ListGroup.Item>ERP Contable y Cálculo de Fletes Interprovinciales</ListGroup.Item>
          <ListGroup.Item>Sistema de Despacho y Hoja de Ruta Electrónica</ListGroup.Item>
          <ListGroup.Item>Portal de Control de Peajes y Flota Pesada</ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
}