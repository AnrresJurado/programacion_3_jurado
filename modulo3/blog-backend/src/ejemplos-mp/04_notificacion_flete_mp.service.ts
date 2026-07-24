import { Injectable } from '@nestjs/common';

/**
 * Ejercicio MP - Gestión de Transporte
 * Módulo: Notificaciones y Alertas de Fletes
 * Archivo: 04_notificacion_flete_mp.service.ts
 */
export interface NotificacionFlete {
  id: string;
  destinatario: string;
  asunto: string;
  mensaje: string;
  fechaEnvio: string;
  estado: 'ENVIADO' | 'PENDIENTE';
}

@Injectable()
export class NotificacionFleteMpService {
  async enviarNotificacionAsignacion(
    destinatario: string,
    codigoRuta: string,
    origen: string,
    destino: string,
  ): Promise<NotificacionFlete> {
    const mensaje = `Hola, se te ha asignado la ruta de transporte ${codigoRuta} desde ${origen} hacia ${destino}. Favor revisar la app.`;

    return {
      id: `NOTIF-${Math.floor(1000 + Math.random() * 9000)}`,
      destinatario,
      asunto: `Asignación de Flete / Ruta: ${codigoRuta}`,
      mensaje,
      fechaEnvio: new Date().toISOString(),
      estado: 'ENVIADO',
    };
  }
}