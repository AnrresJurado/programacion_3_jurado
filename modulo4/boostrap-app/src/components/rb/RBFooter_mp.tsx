import { Container, Row, Col } from 'react-bootstrap';

export default function RBFooter_mp() {
  return (
    <footer className="py-4 bg-dark text-white border-top border-secondary">
      <Container>
        <Row className="align-items-center g-2">
          <Col xs={12} md="auto">
            <span className="fw-bold">🚛 TransLogix _mp</span>
          </Col>
          <Col className="text-md-center text-muted small">
            Sistema de Despacho construido con React-Bootstrap v2 + Bootstrap 5
          </Col>
          <Col xs={12} md="auto" className="d-flex gap-3 justify-content-end">
            <a href="#" className="text-white-50 text-decoration-none small">Documentación</a>
            <a href="#" className="text-white-50 text-decoration-none small">Soporte GPS</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}