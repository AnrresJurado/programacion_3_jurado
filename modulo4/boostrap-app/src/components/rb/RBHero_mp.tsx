import { Container, Button, Stack, Badge } from 'react-bootstrap';

export default function RBHero_mp() {
  return (
    <section className="py-5 bg-dark text-white">
      <Container>
        <Badge bg="primary" className="mb-3">TransLogix v2.0</Badge>
        <h1 className="display-5 fw-bold mb-3">
          Gestión Logística y Control de Flotas
        </h1>
        <p className="lead text-white-50 mb-4" style={{ maxWidth: 560 }}>
          Plataforma de despacho de carga en tiempo real. Asignación de rutas, 
          mantenimiento de camiones y monitoreo GPS centralizado.
        </p>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          <Button variant="primary" size="lg">Ver Unidades</Button>
          <Button variant="outline-light" size="lg">Programar Despacho</Button>
        </Stack>
      </Container>
    </section>
  );
}