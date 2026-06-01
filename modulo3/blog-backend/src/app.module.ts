import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';  // 👈 Añadido de Mongoose
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { PostsModule } from './posts/posts.module';
import { MailModule } from './mail/mail.module';
import { join } from 'path'; 
import { CursosModule } from './cursos/cursos.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI || ''), // 👈 Añadido de Mongoose
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true, 
      ssl: process.env.DB_HOST === 'localhost' ? false : { rejectUnauthorized: false },
      logging: true, 
    }),
    AuthModule,
    UsersModule,
    CategoriesModule,
    PostsModule,
    MailModule,
    CursosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}