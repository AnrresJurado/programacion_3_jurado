import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Avatar, 
  Stack, 
  Divider, 
  Chip 
} from '@mui/material'

interface TeamMember {
  name: string
  role: string
  bio: string
  initials: string
}

const team: TeamMember[] = [
  {
    name: "Andrés Jurado",
    role: "Desarrollador Backend & Arquitectura",
    bio: "Estudiante de Desarrollo de Software. Encargado del diseño híbrido de bases de datos, APIs de transporte y optimización de flujos.",
    initials: "AJ"
  },
  {
    name: "Anahí Loza",
    role: "Desarrolladora Frontend & UI",
    bio: "Especialista en la creación de interfaces interactivas y paneles de control para flotas pesadas.",
    initials: "AL"
  },
  {
    name: "Hernán Varas",
    role: "QA & Integración",
    bio: "Responsable de asegurar los estándares de calidad del software de despacho y estabilidad del sistema.",
    initials: "HV"
  },
  {
    name: "Karla Mosquera",
    role: "Analista de Sistemas",
    bio: "Encargada del levantamiento de requerimientos de rutas y diseño estructural de datos de transporte.",
    initials: "KM"
  }
]

export default function AboutPage_mp() {
  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto', py: 2 }}>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Acerca del Sistema TransLogix (_mp)
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Información sobre el equipo de desarrollo y el ecosistema tecnológico para la gestión de transportes.
      </Typography>

      <Card variant="outlined" sx={{ mb: 5, bgcolor: 'grey.50' }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="subtitle1" fontWeight={700} gutterBottom>
            Ecosistema Tecnológico de Transporte
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Sistema modular SPA proyectado para el rastreo de flotas, control de inventario de repuestos y liquidación de hojas de ruta.
          </Typography>
          
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap gap={1}>
            <Chip label="React 19 + TypeScript" color="primary" size="small" />
            <Chip label="Vite" variant="outlined" size="small" />
            <Chip label="Material UI (MUI v7)" variant="outlined" size="small" />
            <Chip label="NestJS Backend" variant="outlined" size="small" />
            <Chip label="PostgreSQL & MongoDB" variant="outlined" size="small" />
          </Stack>
        </CardContent>
      </Card>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>
        Equipo de Desarrollo
      </Typography>

      <Grid container spacing={3}>
        {team.map((member) => (
          <Grid key={member.name} size={{ xs: 12, sm: 6 }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: 1, p: 3 }}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                  <Avatar 
                    sx={{ 
                      width: 48, 
                      height: 48, 
                      bgcolor: 'primary.main',
                      fontWeight: 600,
                      fontSize: '1rem'
                    }}
                  >
                    {member.initials}
                  </Avatar>
                  <Box>
                    <Typography variant="body1" fontWeight={600}>
                      {member.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" display="block">
                      {member.role}
                    </Typography>
                  </Box>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}