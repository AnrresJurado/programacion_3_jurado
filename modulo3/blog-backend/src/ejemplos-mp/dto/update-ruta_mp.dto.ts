import { PartialType } from '@nestjs/mapped-types';
import { CreateRutaMpDto } from './create-ruta_mp.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateRutaMpDto extends PartialType(CreateRutaMpDto) {
  @IsOptional()
  @IsString()
  estado?: string;
}