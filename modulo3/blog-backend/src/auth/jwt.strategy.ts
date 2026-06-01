

import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      // 👈 REVISIÓN 1: Debe extraer explícitamente desde la cabecera Bearer
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // 👈 REVISIÓN 2: La clave secreta debe coincidir exactamente con la que se firma
      secretOrKey: process.env.JWT_SECRET || 'UnArbolAzulVolandoSobreElMar2026!',
    });
  }

  async validate(payload: { id: string; email: string }) {
    // Passport inyecta este payload decodificado si la firma es válida
    const user = await this.usersService.findOne(payload.id);
    if (!user || !user.isActive) {
      throw new UnauthorizedException('Usuario no válido o inactivo');
    }
    return user; // Esto se inyecta en req.user
  }
}