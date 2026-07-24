import {
  Box, Card, CardContent, CardActions, CardMedia,
  Button, Typography, Chip, Grid,
} from '@mui/material'

interface UnitCardProps {
  name: string
  category: string
  price: number
  active: boolean
  imageUrl: string
}

function UnitCard({ name, category, price, active, imageUrl }: UnitCardProps) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height={160}
        image={imageUrl}
        alt={name}
        onError={(e) => {
          ;(e.currentTarget as HTMLImageElement).src =
            'https://placehold.co/400x160?text=Camion+Flota'
        }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="subtitle1" fontWeight={700} gutterBottom>
          🚛 {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Tipo: {category}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          <Chip
            label={active ? 'Operativo' : 'En Taller'}
            color={active ? 'success' : 'default'}
            size="small"
          />
          <Typography variant="h6" fontWeight={700}>${price.toFixed(2)}/día</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">Ver Hoja Técnica</Button>
      </CardActions>
    </Card>
  )
}

export default function LabMuiCard_mp() {
  const units: UnitCardProps[] = [
    { name: 'PBX-1024 (Mack)', category: 'Pesado 25 Ton', price: 450.00, active: true, imageUrl: 'https://picsum.photos/seed/truck1/400/160' },
    { name: 'PBA-3092 (Hino)', category: 'Refrigerado 18 Ton', price: 620.00, active: true, imageUrl: 'https://picsum.photos/seed/truck2/400/160' },
    { name: 'GSU-8812 (Chevrolet)', category: 'Liviano 5 Ton', price: 180.00, active: false, imageUrl: 'https://picsum.photos/seed/truck3/400/160' },
  ]

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', p: 3 }}>
      <Typography variant="h6" fontWeight={700} gutterBottom>LAB: Tarjetas de Flota (_mp)</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Componente Card con CardMedia, Chip y Grid v7 para unidades de transporte.
      </Typography>
      <Grid container spacing={2}>
        {units.map(u => (
          <Grid key={u.name} size={{ xs: 12, sm: 6, md: 4 }}>
            <UnitCard {...u} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}