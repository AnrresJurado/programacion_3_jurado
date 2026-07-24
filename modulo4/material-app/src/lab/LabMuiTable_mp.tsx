import { useState } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Chip, Typography,
  TableSortLabel, InputAdornment, TextField,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

interface Product {
  id: number
  name: string
  category: string
  price: number
  active: boolean
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'Bomba de Inyección Hino', category: 'Motor', price: 489.99, active: true },
  { id: 2, name: 'Llanta 295/80 R22.5', category: 'Neumáticos', price: 349.99, active: true },
  { id: 3, name: 'Filtro de Aire Mack', category: 'Filtros', price: 49.99, active: false },
  { id: 4, name: 'Kit de Embrague Heavy Duty', category: 'Transmisión', price: 859.99, active: true },
  { id: 5, name: 'Batería 12V 150Ah Flota', category: 'Eléctrico', price: 219.99, active: false },
]

type SortDir = 'asc' | 'desc'

export default function LabMuiTable_mp() {
  const [search, setSearch] = useState('')
  const [sortDir, setSortDir] = useState<SortDir>('asc')

  const filtered = PRODUCTS
    .filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => sortDir === 'asc' ? a.price - b.price : b.price - a.price)

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', p: 3 }}>
      <Typography variant="h6" fontWeight={700} gutterBottom>LAB: Tabla de Inventario (_mp)</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        TableSortLabel, búsqueda con InputAdornment y Chip de estado operativo.
      </Typography>

      <TextField
        size="small"
        placeholder="Buscar repuesto o categoría..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        sx={{ mb: 2, maxWidth: 340 }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          },
        }}
      />

      <TableContainer component={Paper} variant="outlined">
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: 'grey.50' }}>
              <TableCell>#</TableCell>
              <TableCell>Pieza / Repuesto</TableCell>
              <TableCell>Categoría</TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active
                  direction={sortDir}
                  onClick={() => setSortDir(d => d === 'asc' ? 'desc' : 'asc')}
                >
                  Precio
                </TableSortLabel>
              </TableCell>
              <TableCell>Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map(p => (
              <TableRow key={p.id} hover>
                <TableCell>{p.id}</TableCell>
                <TableCell>
                  <Typography variant="body2" fontWeight={600}>🔧 {p.name}</Typography>
                </TableCell>
                <TableCell>{p.category}</TableCell>
                <TableCell align="right">
                  <Typography variant="body2" fontWeight={700}>${p.price.toFixed(2)}</Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    label={p.active ? 'Disponible' : 'Agotado'}
                    color={p.active ? 'success' : 'default'}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography variant="body2" color="text.secondary">
                    Sin repuestos encontrados.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}