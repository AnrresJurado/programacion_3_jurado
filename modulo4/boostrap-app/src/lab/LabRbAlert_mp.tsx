import { useState } from 'react';
import { Container, Alert, Button } from 'react-bootstrap';

export default function LabRbAlert_mp() {
  const [show, setShow] = useState(true);

  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Alertas de Despacho (_mp)</h2>
      <p className="text-secondary mb-3">Control de notificaciones operativas con visibilidad dinámicamente gestionada.</p>

      {show ? (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>🚚 Hoja de Ruta Generada Correctamente</Alert.Heading>
          <p className="mb-0">El camión PBX-1024 ha sido asignado al itinerario Quito - Guayaquil (Demo).</p>
        </Alert>
      ) : (
        <Button variant="primary" onClick={() => setShow(true)}>Mostrar Alerta de Despacho</Button>
      )}
    </Container>
  );
}