import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { RutasTransporteMpService } from './rutas_transporte_mp.service';
import { CreateRutaMpDto } from './dto/create-ruta_mp.dto';
import { UpdateRutaMpDto } from './dto/update-ruta_mp.dto';

@Controller('ejemplos-mp/rutas-transporte')
export class RutasTransporteMpController {
  constructor(private readonly rutasService: RutasTransporteMpService) {}

  // 1. POST - Crear registro
  @Post()
  create(@Body() createDto: CreateRutaMpDto) {
    return this.rutasService.create(createDto);
  }

  // 2. GET - Obtener todos
  @Get()
  findAll() {
    return this.rutasService.findAll();
  }

  // GET por ID
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.rutasService.findOne(id);
  }

  // 3. PATCH - Actualizar parcialmente
  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateDto: UpdateRutaMpDto) {
    return this.rutasService.update(id, updateDto);
  }

  // 4. DELETE - Eliminar registro
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.rutasService.remove(id);
  }
}