import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateRutaMpDto {
  @IsString()
  @IsNotEmpty()
  codigoRuta: string;

  @IsString()
  @IsNotEmpty()
  origen: string;

  @IsString()
  @IsNotEmpty()
  destino: string;

  @IsNumber()
  @Min(1)
  distanciaKm: number;
}