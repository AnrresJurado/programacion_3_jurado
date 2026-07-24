import { useState } from 'react'
import { Box, Alert, AlertTitle, Button, Collapse, Stack, Typography } from '@mui/material'

export default function LabMuiAlert_mp() {
  const [show, setShow] = useState(true)

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h6" fontWeight={700} gutterBottom>LAB: Alertas del Sistema (_mp)</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Severidades, títulos y control de visibilidad con Collapse para la flota.
      </Typography>

      <Stack spacing={2} sx={{ mb: 3 }}>
        <Alert severity="info">Información GPS: Unidad PBX-1024 conectada a satélite.</Alert>
        <Alert severity="success">Despacho completado: Hoja de ruta Quito-Guayaquil liquidada.</Alert>
        <Alert severity="warning">Advertencia: Mantenimiento de frenos requerido en 300 km.</Alert>
        <Alert severity="error">Error: Falla en la transmisión del sensor de temperatura (Thermo).</Alert>
      </Stack>

      <Typography variant="subtitle2" sx={{ mb: 1 }}>Con título (AlertTitle)</Typography>
      <Stack spacing={2} sx={{ mb: 3 }}>
        <Alert severity="success">
          <AlertTitle>Flete Asignado</AlertTitle>
          La unidad ha sido vinculada exitosamente al manifiesto de carga.
        </Alert>
        <Alert severity="error">
          <AlertTitle>Ruta Bloqueada</AlertTitle>
          Cierre temporal en el tramo Alóag - Santo Domingo. Recalculando itinerario.
        </Alert>
      </Stack>

      <Typography variant="subtitle2" sx={{ mb: 1 }}>Con Collapse (Animación suave)</Typography>
      <Collapse in={show}>
        <Alert severity="info" onClose={() => setShow(false)} sx={{ mb: 1 }}>
          Esta notificación de peaje se puede descartar con la X o con el botón inferior.
        </Alert>
      </Collapse>
      {!show && (
        <Button size="small" onClick={() => setShow(true)}>Mostrar Alerta de Peaje</Button>
      )}
    </Box>
  )
}