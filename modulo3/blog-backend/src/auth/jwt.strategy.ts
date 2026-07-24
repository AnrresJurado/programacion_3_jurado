// src/auth/jwt.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'tu_secreto_backup',
    });
  }

  async validate(payload: { id: string; username: string }) {
    const user = await this.usersService.findOne(payload.id);
    if (!user) {
      throw new UnauthorizedException('Usuario no válido');
    }
    return user; // Esto inyecta el modelo de User completo en req.user
  }
}