// src/pages/AboutPage.tsx
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

// Si necesitas definir tipos para los integrantes o el proyecto de forma estricta:
interface TeamMember {
  name: string
  role: string
  bio: string
  avatarUrl?: string
  initials: string
}

const team: TeamMember[] = [
  {
    name: "Andrés Jurado",
    role: "Desarrollador Backend & Arquitectura",
    bio: "Estudiante de Desarrollo de Software. Encargado del diseño híbrido de bases de datos, APIs robustas y optimización de flujos de trabajo.",
    initials: "AJ"
  },
  {
    name: "Anahi Loza",
    role: "Desarrollador Frontend & UI",
    bio: "Especialista en la creación de interfaces interactivas, limpias y altamente eficientes utilizando ecosistemas modernos de desarrollo.",
    initials: "AL"
  },
  {
    name: "Hernán Varas",
    role: "QA & Integración",
    bio: "Responsable de asegurar los estándares de calidad del software, automatización de pruebas y estabilidad del sistema.",
    initials: "HV"
  },
  {
    name: "Karla Mosquera",
    role: "Analista de Sistemas",
    bio: "Encargada del levantamiento de requerimientos, modelado de procesos de negocio y diseño estructural de datos.",
    initials: "KM"
  }
]

export default function AboutPage() {
  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto', py: 2 }}>
      {/* Encabezado Principal */}
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Acerca del Proyecto
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Información sobre el equipo de desarrollo y el ecosistema tecnológico implementado.
      </Typography>

      {/* Tarjeta de Información General del Sistema */}
      <Card variant="outlined" sx={{ mb: 5, bgcolor: 'grey.50' }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="subtitle1" fontWeight={700} gutterBottom>
            Ecosistema Tecnológico
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Este sistema ha sido diseñado como una SPA (Single Page Application) modular y escalable. Integra un backend robusto enfocado en la concurrencia y un frontend responsivo basado en componentes atómicos.
          </Typography>
          
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap gap={1}>
            <Chip label="React + TypeScript" color="primary" size="small" />
            <Chip label="Vite" variant="outlined" size="small" />
            <Chip label="Material UI (MUI)" variant="outlined" size="small" />
            <Chip label="NestJS Backend" variant="outlined" size="small" />
            <Chip label="PostgreSQL & MongoDB" variant="outlined" size="small" />
          </Stack>
        </CardContent>
      </Card>

      <Divider sx={{ mb: 4 }} />

      {/* Sección del Equipo */}
      <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>
        Nuestro Equipo
      </Typography>

      <Grid container spacing={3}>
        {team.map((member) => (
          <Grid key={member.name} size={{ xs: 12, sm: 6 }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: 1, p: 3 }}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                  <Avatar 
                    src={member.avatarUrl} 
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