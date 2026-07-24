import { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';

interface FormValues {
  nombre: string;
  email: string;
  rol: string;
}

export default function LabRbForm_mp() {
  const [values, setValues] = useState<FormValues>({ nombre: '', email: '', rol: 'Conductor' });
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<FormValues>>({});

  function validate(): boolean {
    const e: Partial<FormValues> = {};
    if (!values.nombre.trim()) e.nombre = 'El nombre del operador es requerido';
    if (!values.email.includes('@')) e.email = 'Correo corporativo inválido';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setValues({ nombre: '', email: '', rol: 'Conductor' });
    }, 3000);
  }

  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Formulario de Operadores (_mp)</h2>
      <p className="text-secondary mb-3">Registro de personal con validación manual e indicador visual.</p>

      {success && <Alert variant="success">✅ Registro de operador guardado correctamente</Alert>}

      <Form onSubmit={handleSubmit} style={{ maxWidth: 480 }}>
        <Row className="g-3">
          <Col xs={12}>
            <Form.Group>
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control
                type="text"
                value={values.nombre}
                onChange={(e) => setValues((v) => ({ ...v, nombre: e.target.value }))}
                isInvalid={!!errors.nombre}
                placeholder="Andrés Jurado"
              />
              <Form.Control.Feedback type="invalid">{errors.nombre}</Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group>
              <Form.Label>Correo Corporativo</Form.Label>
              <Form.Control
                type="email"
                value={values.email}
                onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                isInvalid={!!errors.email}
                placeholder="chofer@transporte.com"
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group>
              <Form.Label>Rol Operativo</Form.Label>
              <Form.Select
                value={values.rol}
                onChange={(e) => setValues((v) => ({ ...v, rol: e.target.value }))}
              >
                <option value="Conductor">Conductor</option>
                <option value="Despachador">Despachador</option>
                <option value="Administrador">Administrador de Flota</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Button type="submit" variant="primary">Registrar Operador</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}