import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { LoginDto } from '../auth/dto/login.dto';

/**
 * Ejercicio MP - Gestión de Transporte
 * Módulo: Autenticación y Autorización de Choferes
 * Archivo: 01_auth_chofer_mp.controller.ts
 */
@Controller('ejemplos-mp/auth-chofer')
export class AuthChoferMpController {

  /**
   * Endpoint para el inicio de sesión de conductores de la flota
   * POST /ejemplos-mp/auth-chofer/login
   */
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async loginChofer(@Body() loginDto: LoginDto) {
    return {
      message: 'Inicio de sesión exitoso para el conductor',
      usuario: loginDto.email,
      rol: 'CHOFER',
      tokenAcceso: 'jwt-token-simulado-transporte-12345',
      estadoUnidad: 'DISPONIBLE_PARA_RUTA',
    };
  }

  /**
   * Endpoint protegido: solo accesibles por usuarios con rol CHOFER o ADMIN
   * POST /ejemplos-mp/auth-chofer/iniciar-turno
   */
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('CHOFER', 'ADMIN')
  @Post('iniciar-turno')
  @HttpCode(HttpStatus.OK)
  async iniciarTurno() {
    return {
      status: 'success',
      mensaje: 'Turno de conducción registrado correctamente',
      horaInicio: new Date().toISOString(),
      mantenimientoVerificado: true,
    };
  }
}