import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

export interface RutaTransporte {
  id: number;
  codigoRuta: string;
  origen: string;
  destino: string;
  distanciaKm: number;
  choferAsignado: string;
  estado: 'PROGRAMADO' | 'EN_TRANSITO' | 'COMPLETADO' | 'CANCELADO';
}

@Controller('ejemplos-mp/rutas-transporte')
export class RutasTransporteMpController {
  private rutas: RutaTransporte[] = [
    {
      id: 1,
      codigoRuta: 'RUT-2026-001',
      origen: 'Quito - Terminal Terrestre',
      destino: 'Guayaquil - Centro Logístico',
      distanciaKm: 420,
      choferAsignado: 'Carlos Pérez',
      estado: 'EN_TRANSITO',
    },
    {
      id: 2,
      codigoRuta: 'RUT-2026-002',
      origen: 'Cuenca - Bodega Central',
      destino: 'Manta - Puerto',
      distanciaKm: 510,
      choferAsignado: 'Andrés Jurado',
      estado: 'PROGRAMADO',
    },
  ];

  // 1. POST - Crear registro
  @Post()
  async crearRuta(@Body() dto: Partial<RutaTransporte>) {
    const nuevaRuta: RutaTransporte = {
      id: this.rutas.length + 1,
      codigoRuta: `RUT-2026-00${this.rutas.length + 1}`,
      origen: dto.origen || 'Origen Por Definir',
      destino: dto.destino || 'Destino Por Definir',
      distanciaKm: dto.distanciaKm || 100,
      choferAsignado: dto.choferAsignado || 'Sin Chofer Asignado',
      estado: dto.estado || 'PROGRAMADO',
    };
    this.rutas.push(nuevaRuta);
    return {
      success: true,
      message: 'Ruta de transporte programada exitosamente',
      data: nuevaRuta,
    };
  }

  // 2. GET - Obtener todos (con filtro opcional por estado)
  @Get()
  async obtenerTodas(@Query('estado') estado?: RutaTransporte['estado']) {
    if (estado) {
      return this.rutas.filter((r) => r.estado === estado);
    }
    return this.rutas;
  }

  // GET por ID
  @Get(':id')
  async obtenerPorId(@Param('id', ParseIntPipe) id: number) {
    const ruta = this.rutas.find((r) => r.id === id);
    if (!ruta) {
      throw new NotFoundException(`La ruta de transporte con ID ${id} no fue encontrada`);
    }
    return { success: true, data: ruta };
  }

  // 3. PATCH - Actualizar parcialmente
  @Patch(':id')
  async actualizarRuta(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: Partial<RutaTransporte>,
  ) {
    const rutaIndex = this.rutas.findIndex((r) => r.id === id);

    if (rutaIndex === -1) {
      throw new NotFoundException(`La ruta de transporte con ID ${id} no fue encontrada`);
    }

    this.rutas[rutaIndex] = {
      ...this.rutas[rutaIndex],
      ...dto,
    };

    return {
      success: true,
      message: `Ruta ${this.rutas[rutaIndex].codigoRuta} actualizada exitosamente`,
      data: this.rutas[rutaIndex],
    };
  }

  // 4. DELETE - Eliminar registro
  @Delete(':id')
  async eliminarRuta(@Param('id', ParseIntPipe) id: number) {
    const rutaIndex = this.rutas.findIndex((r) => r.id === id);

    if (rutaIndex === -1) {
      throw new NotFoundException(`La ruta de transporte con ID ${id} no fue encontrada`);
    }

    const [rutaEliminada] = this.rutas.splice(rutaIndex, 1);

    return {
      success: true,
      message: `Ruta ${rutaEliminada.codigoRuta} eliminada exitosamente del sistema`,
    };
  }
}