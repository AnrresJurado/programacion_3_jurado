import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('rutas_transporte_mp')
export class RutaTransporteMpEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  codigoRuta: string;

  @Column()
  origen: string;

  @Column()
  destino: string;

  @Column('decimal', { precision: 10, scale: 2 })
  distanciaKm: number;

  @Column({ default: 'PROGRAMADO' })
  estado: string; // PROGRAMADO, EN_TRANSITO, COMPLETADO, CANCELADO

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}