import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoriaVehiculoMpService } from './02_categoria_vehiculo_mp.service';

/**
 * Ejercicio MP - Gestión de Transporte
 * Controlador para consumir el servicio de Categorías de Vehículos
 */
@Controller('ejemplos-mp/categorias-vehiculos')
export class CategoriaVehiculoMpController {
  constructor(private readonly categoriaService: CategoriaVehiculoMpService) {}

  @Get()
  async obtenerTodas() {
    return this.categoriaService.obtenerTodas();
  }

  @Get(':id')
  async obtenerPorId(@Param('id') id: string) {
    return this.categoriaService.obtenerPorId(Number(id));
  }

  @Post()
  async crearCategoria(@Body() dto: any) {
    return this.categoriaService.crearCategoria(dto);
  }
}