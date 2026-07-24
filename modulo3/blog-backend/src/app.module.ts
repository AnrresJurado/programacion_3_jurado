import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { PostsModule } from './posts/posts.module';
import { MailModule } from './mail/mail.module';
import { AuthChoferMpController } from './ejemplos-mp/01_auth_chofer_mp.controller';
import { CategoriaVehiculoMpService } from './ejemplos-mp/02_categoria_vehiculo_mp.service';
import { CategoriaVehiculoMpController } from './ejemplos-mp/02_categoria_vehiculo_mp.controller';
import { RutasTransporteMpController } from './ejemplos-mp/03_rutas_transporte_mp.controller';
import { NotificacionFleteMpService } from './ejemplos-mp/04_notificacion_flete_mp.service';
import { NotificacionFleteMpController } from './ejemplos-mp/04_notificacion_flete_mp.controller';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, 
      ssl: process.env.DB_HOST === 'localhost' ? false : { rejectUnauthorized: false },
    }),
    AuthModule,
    UsersModule,
    CategoriesModule,
    PostsModule,
    MailModule,
  ],
  controllers: [AppController, AuthChoferMpController, 
    CategoriaVehiculoMpController, RutasTransporteMpController,
    NotificacionFleteMpController],
  providers: [AppService, CategoriaVehiculoMpService, NotificacionFleteMpService],
})
export class AppModule {}