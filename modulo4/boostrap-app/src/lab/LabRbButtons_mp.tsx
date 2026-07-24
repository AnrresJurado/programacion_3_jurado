import { Container, Button, Stack } from 'react-bootstrap';

export default function LabRbButtons_mp() {
  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Botones de Acción de Flota (_mp)</h2>
      <p className="text-secondary mb-3">Variantes y tamaños de controles para choferes y despachadores.</p>

      <Stack direction="horizontal" gap={2} className="flex-wrap mb-3">
        <Button variant="primary">Iniciar Ruta</Button>
        <Button variant="outline-primary">Ver Telemetría</Button>
        <Button variant="success">Reportar Llegada</Button>
        <Button variant="danger">Detención de Emergencia</Button>
        <Button variant="warning">Mantenimiento Requerido</Button>
        <Button variant="secondary">Pausa de Turno</Button>
      </Stack>

      <Stack direction="horizontal" gap={2}>
        <Button variant="primary" size="lg">Acción Principal (LG)</Button>
        <Button variant="primary">Estándar</Button>
        <Button variant="primary" size="sm">Compacto (SM)</Button>
      </Stack>
    </Container>
  );
}