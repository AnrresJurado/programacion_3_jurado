import { useParams, Link } from 'react-router-dom';
import { Container, Card, Badge } from 'react-bootstrap';

interface ProductParams extends Record<string, string | undefined> {
  id: string;
}

export default function ProductDetailPage_mp() {
  const { id } = useParams<ProductParams>();
  const productId = Number(id);

  if (!id || isNaN(productId)) {
    return (
      <Container className="py-5">
        <p className="text-danger">ID de unidad de transporte inválido.</p>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Link to="/" className="text-decoration-none text-secondary mb-3 d-inline-block">
        ← Volver al catálogo de flota
      </Link>
      <Card className="shadow-sm border-0">
        <Card.Body>
          <div className="d-flex align-items-center gap-2 mb-2">
            <Badge bg="info">Unidad Activa</Badge>
            <span className="text-muted small">GPS: Conectado</span>
          </div>
          <h1 className="h3 fw-bold">🚛 Camión de Flota #{productId} (_mp)</h1>
          <p className="text-muted">
            Detalle técnico del vehículo asignado a rutas interprovinciales. Mantenimiento y SOAT al día.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}