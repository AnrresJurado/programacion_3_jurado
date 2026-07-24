import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { GlobalHttpExceptionFilter } from './common/filters/http-exception.filter';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express'; // Importación necesaria

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule); // Tipo específico

  // ◄ HABILITACIÓN DE CORS CONFIGURADA ►
  app.enableCors({
    origin: 'http://localhost:5173', // Permite peticiones de tu frontend React
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Permite cookies y cabeceras de autorización
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
  app.useGlobalFilters(new GlobalHttpExceptionFilter());

  app.useStaticAssets(join(__dirname, '..', 'public')); // Habilita acceso público a /public

  await app.listen(3000);
}
bootstrap();