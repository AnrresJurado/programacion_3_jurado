import * as nodemailer from 'nodemailer';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SendMailDto } from './dto/send-mail.dto';

@Injectable()
export class MailService {
  async sendMail(dto: SendMailDto) {
    // Configuración explícita y robusta para SMTP de Gmail
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true para puerto 465 bajo SSL/TLS
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    try {
      const info = await transporter.sendMail({
        from: `"API NestJS" <${process.env.MAIL_USER}>`,
        to: dto.to,
        subject: dto.subject,
        html: dto.message,
      });
      
      return { messageId: info.messageId };
    } catch (error) {
      // ⚠️ ESTO ES CRUCIAL: Imprime la causa exacta en la terminal de tu servidor
      console.error('--- ERROR EN MAIL_SERVICE ---');
      console.error(error);
      console.error('-----------------------------');
      
      throw new InternalServerErrorException('No se pudo enviar el correo');
    }
  }
}