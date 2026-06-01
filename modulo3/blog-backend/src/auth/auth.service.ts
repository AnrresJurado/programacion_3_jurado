import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from '../users/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<string | null> {
    try {
      // 1. Asegúrate de invocar el método que busque explícitamente en la columna correspondiente
      // Si tu UsersService busca por email, usa la propiedad loginDto.email
      const user: User | null = await this.usersService.findByUsername(loginDto.email!);
      
      if (!user) {
        console.log(`[AuthService] No se encontró registro para el identificador: ${loginDto.email}`);
        return null;
      }

      // 2. Validación estricta del hash de Bcrypt
      const isValid = await bcrypt.compare(loginDto.password!, user.password!);
      if (!isValid) {
        console.log(`[AuthService] Hash de contraseña inválido para: ${loginDto.email}`);
        return null;
      }

      // 3. Estructuración del payload idéntica a los requerimientos de la estrategia del profesor
      const payload = { id: user.id, email: user.email }; 
      return this.jwtService.sign(payload);
    } catch (err) {
      console.error('Unexpected login error:', err);
      return null;
    }
  }

  async register(createUserDto: CreateUserDto) {
    try {
      // Llama al servicio de usuarios para la creación física
      const newUser = await this.usersService.create(createUserDto);
      
      // CONTROL CRÍTICO: Si el servicio de usuarios retornó null, investigamos aquí
      if (!newUser) {
        console.error('[AuthService Error] El método usersService.create retornó null');
        return null;
      }

      const payload = { id: newUser.id, email: newUser.email };
      return this.jwtService.sign(payload);
    } catch (err) {
      // 👈 LOG DE CONTROL ABSOLUTO
      console.error('[AuthService Error] Fallo crítico en el método register:', err);
      return null;
    }
  }
}