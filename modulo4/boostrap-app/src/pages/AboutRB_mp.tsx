import { Container, Card, ListGroup } from 'react-bootstrap';

export default function AboutRB_mp() {
  return (
    <Container className="py-5" style={{ maxWidth: 600 }}>
      <h1 className="h3 fw-bold mb-4">🚛 Acerca de TransLogix (_mp)</h1>
      <Card className="shadow-sm">
        <Card.Header className="fw-semibold">Stack Tecnológico del Sistema</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>React 19 + TypeScript</ListGroup.Item>
          <ListGroup.Item>React-Bootstrap v2 + Bootstrap 5</ListGroup.Item>
          <ListGroup.Item>React Router v7</ListGroup.Item>
          <ListGroup.Item>Módulo de Flotas y Despacho Interprovincial</ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
}