// src/pages/AboutRB.tsx

import { Container, Card, ListGroup } from 'react-bootstrap'

export default function ProyectsRB() {
  return (
    <Container className="py-5" style={{ maxWidth: 600 }}>
      <h1 className="h3 fw-bold mb-4">Proyectos</h1>
      <Card className="shadow-sm">
        <Card.Header className="fw-semibold">Proyectos full stack</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Despliegues AWS, GoogleCloud, Azure</ListGroup.Item>
          <ListGroup.Item>ERP contables</ListGroup.Item>
          <ListGroup.Item>Point Cloud viewer</ListGroup.Item>
          <ListGroup.Item>Control de enventos academicos</ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  )
}