import { Injectable, NotFoundException } from '@nestjs/common';

/**
 * Ejercicio MP - Gestión de Transporte
 * Módulo: Categorías de Vehículos / Flota
 * Archivo: 02_categoria_vehiculo_mp.service.ts
 */
export interface CategoriaVehiculo {
  id: number;
  nombre: string;
  capacidadCargaKg: number;
  requiereLicenciaEspecial: boolean;
  estado: 'ACTIVO' | 'INACTIVO';
}

@Injectable()
export class CategoriaVehiculoMpService {
  private categoriasVehiculos: CategoriaVehiculo[] = [
    { id: 1, nombre: 'Carga Pesada (Tractocamión)', capacidadCargaKg: 25000, requiereLicenciaEspecial: true, estado: 'ACTIVO' },
    { id: 2, nombre: 'Furgón Mediano (Reparto)', capacidadCargaKg: 3500, requiereLicenciaEspecial: false, estado: 'ACTIVO' },
    { id: 3, nombre: 'Camión Refrigerado', capacidadCargaKg: 10000, requiereLicenciaEspecial: true, estado: 'ACTIVO' },
  ];

  async obtenerTodas(): Promise<CategoriaVehiculo[]> {
    return this.categoriasVehiculos;
  }

  async obtenerPorId(id: number): Promise<CategoriaVehiculo> {
    const categoria = this.categoriasVehiculos.find((cat) => cat.id === id);
    if (!categoria) {
      throw new NotFoundException(`La categoría de vehículo con ID ${id} no existe`);
    }
    return categoria;
  }

  async crearCategoria(dto: Partial<CategoriaVehiculo>): Promise<CategoriaVehiculo> {
    const nuevaCategoria: CategoriaVehiculo = {
      id: this.categoriasVehiculos.length + 1,
      nombre: dto.nombre || 'Categoría General',
      capacidadCargaKg: dto.capacidadCargaKg || 1000,
      requiereLicenciaEspecial: dto.requiereLicenciaEspecial ?? false,
      estado: 'ACTIVO',
    };
    this.categoriasVehiculos.push(nuevaCategoria);
    return nuevaCategoria;
  }
}