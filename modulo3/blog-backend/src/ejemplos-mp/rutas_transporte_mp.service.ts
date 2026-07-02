import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RutaTransporteMpEntity } from './ruta-transporte_mp.entity';
import { CreateRutaMpDto } from './dto/create-ruta_mp.dto';
import { UpdateRutaMpDto } from './dto/update-ruta_mp.dto';

@Injectable()
export class RutasTransporteMpService {
  constructor(
    @InjectRepository(RutaTransporteMpEntity)
    private readonly rutaRepository: Repository<RutaTransporteMpEntity>,
  ) {}

  // POST: Crear en DB
  async create(createDto: CreateRutaMpDto): Promise<RutaTransporteMpEntity> {
    const nuevaRuta = this.rutaRepository.create(createDto);
    return await this.rutaRepository.save(nuevaRuta);
  }

  // GET: Obtener todos
  async findAll(): Promise<RutaTransporteMpEntity[]> {
    return await this.rutaRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  // GET: Obtener por ID
  async findOne(id: string): Promise<RutaTransporteMpEntity> {
    const ruta = await this.rutaRepository.findOneBy({ id });
    if (!ruta) {
      throw new NotFoundException(`La ruta de transporte con ID ${id} no existe`);
    }
    return ruta;
  }

  // PATCH: Actualizar
  async update(id: string, updateDto: UpdateRutaMpDto): Promise<RutaTransporteMpEntity> {
    const ruta = await this.findOne(id);
    Object.assign(ruta, updateDto);
    return await this.rutaRepository.save(ruta);
  }

  // DELETE: Eliminar de DB
  async remove(id: string): Promise<{ message: string }> {
    const ruta = await this.findOne(id);
    await this.rutaRepository.remove(ruta);
    return { message: `Ruta ${ruta.codigoRuta} eliminada correctamente de la base de datos` };
  }
}