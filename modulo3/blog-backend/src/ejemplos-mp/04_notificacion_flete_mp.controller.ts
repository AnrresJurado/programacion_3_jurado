import { Body, Controller, Post } from '@nestjs/common';
import { NotificacionFleteMpService } from './04_notificacion_flete_mp.service';

/**
 * Ejercicio MP - Gestión de Transporte
 * Controlador para disparar alertas de transporte mediante NotificacionFleteMpService
 */
@Controller('ejemplos-mp/notificaciones-flete')
export class NotificacionFleteMpController {
  constructor(private readonly notificacionService: NotificacionFleteMpService) {}

  @Post('enviar-alerta')
  async enviarAlerta(@Body() body: { destinatario: string; codigoRuta: string; origen: string; destino: string }) {
    return this.notificacionService.enviarNotificacionAsignacion(
      body.destinatario || 'chofer.perez@transporte.com',
      body.codigoRuta || 'RUT-2026-001',
      body.origen || 'Quito',
      body.destino || 'Guayaquil',
    );
  }
}