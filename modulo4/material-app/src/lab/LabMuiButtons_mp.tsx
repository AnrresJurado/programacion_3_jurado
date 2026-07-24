import { Box, Button, Stack, Typography, IconButton, Tooltip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import AddIcon from '@mui/icons-material/Add'

export default function LabMuiButtons_mp() {
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h6" fontWeight={700} gutterBottom>LAB: Botones de Acción (_mp)</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Variantes, colores, tamaños, íconos y estados para operadores de transporte.
      </Typography>

      <Typography variant="subtitle2" sx={{ mb: 1 }}>Variantes</Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 3 }}>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </Stack>

      <Typography variant="subtitle2" sx={{ mb: 1 }}>Colores Operativos</Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 3 }}>
        <Button variant="contained" color="primary">Iniciar Ruta</Button>
        <Button variant="contained" color="secondary">Reporte Chofer</Button>
        <Button variant="contained" color="success">Entrega Correcta</Button>
        <Button variant="contained" color="error">Parada Emergencia</Button>
        <Button variant="contained" color="warning">Mantenimiento</Button>
      </Stack>

      <Typography variant="subtitle2" sx={{ mb: 1 }}>Con Íconos</Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 3 }}>
        <Button variant="contained" startIcon={<SendIcon />}>Despachar</Button>
        <Button variant="outlined" startIcon={<AddIcon />}>Nueva Unidad</Button>
        <Button variant="outlined" endIcon={<DeleteIcon />} color="error">Eliminar Flete</Button>
        <Tooltip title="Eliminar registro">
          <IconButton color="error"><DeleteIcon /></IconButton>
        </Tooltip>
      </Stack>

      <Typography variant="subtitle2" sx={{ mb: 1 }}>Tamaños y Estados</Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
        <Button variant="contained" size="large">Grande</Button>
        <Button variant="contained">Normal</Button>
        <Button variant="contained" size="small">Pequeño</Button>
        <Button variant="contained" disabled>Inactivo</Button>
        <Button variant="contained" loading>Sincronizando</Button>
      </Stack>
    </Box>
  )
}