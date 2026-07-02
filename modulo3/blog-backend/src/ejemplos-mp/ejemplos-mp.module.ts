import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RutaTransporteMpEntity } from './ruta-transporte_mp.entity';
import { RutasTransporteMpService } from './rutas_transporte_mp.service';
import { RutasTransporteMpController } from './rutas_transporte_mp.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RutaTransporteMpEntity])],
  controllers: [RutasTransporteMpController],
  providers: [RutasTransporteMpService],
  exports: [RutasTransporteMpService],
})
export class EjemplosMpModule {}