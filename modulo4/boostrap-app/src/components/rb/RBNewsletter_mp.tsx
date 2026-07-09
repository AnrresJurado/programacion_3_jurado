import { Container, Form, Button, Row, Col } from 'react-bootstrap';

export default function RBNewsletter_mp() {
  return (
    <section className="py-5 bg-light border-top">
      <Container style={{ maxWidth: 600 }}>
        <h3 className="fw-bold text-center mb-2">📢 Alertas de Vías y Carreteras</h3>
        <p className="text-muted text-center mb-4">
          Recibe notificaciones en tiempo real sobre el estado de las carreteras y peajes.
        </p>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Row className="g-2">
            <Col xs={12} sm={8}>
              <Form.Control type="email" placeholder="Correo electrónico corporativo..." required />
            </Col>
            <Col xs={12} sm={4}>
              <Button variant="primary" type="submit" className="w-100">
                Suscribirme
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
}