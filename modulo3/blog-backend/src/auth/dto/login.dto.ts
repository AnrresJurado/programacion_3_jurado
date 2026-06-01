import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsString({ message: 'El identificador debe ser una cadena de texto' }) // 👈 Cambiado de @IsEmail() a @IsString()
  @IsNotEmpty({ message: 'El identificador (email o username) es obligatorio' })
  email: string;

  @IsString({ message: 'El nombre de usuario debe ser una cadena de texto' })
  @IsOptional()
  username?: string;

  @IsString({ message: 'La contraseña es obligatoria y debe ser texto' })
  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  password: string;
}