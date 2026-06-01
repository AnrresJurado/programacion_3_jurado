import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueryDto } from '../common/dtos/query.dto'; // Importamos el nuevo DTO
import { paginate, Pagination } from 'nestjs-typeorm-paginate'; // Importamos la paginación
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User | null> {
    try {
      // Validación preventiva estricta en tiempo de ejecución
      if (!createUserDto.password || !createUserDto.username || !createUserDto.email) {
        console.error('[UsersService Error] Faltan propiedades obligatorias en el DTO recibido');
        return null;
      }

      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      
      // Mapeo explícito para garantizar la integridad de las columnas en la tabla física de PostgreSQL
      const user = this.userRepository.create({
        username: createUserDto.username,
        email: createUserDto.email,
        password: hashedPassword,
        isActive: true,
      });
      
      return await this.userRepository.save(user);
    } catch (err) {
      console.error('=== FALLO CRÍTICO EN LA INSERCIÓN DE BASE DE DATOS ===');
      console.error(err); // Esto expondrá la restricción exacta de PostgreSQL en consola
      return null;
    }
  }

  async findAll(
    queryDto: QueryDto,
    isActive?: boolean,
  ): Promise<Pagination<User> | null> {
    try {
      const { page, limit, search, searchField, sort, order } = queryDto;
      const query = this.userRepository.createQueryBuilder('user');

      if (isActive !== undefined) {
        query.andWhere('user.isActive = :isActive', { isActive });
      }

      if (search) {
        if (searchField) {
          switch (searchField) {
            case 'username':
              query.andWhere('user.username ILIKE :search', { search: `%${search}%` });
              break;
            case 'email':
              query.andWhere('user.email ILIKE :search', { search: `%${search}%` });
              break;
            default:
              query.andWhere(
                '(user.username ILIKE :search OR user.email ILIKE :search)',
                { search: `%${search}%` },
              );
          }
        } else {
          query.andWhere(
            '(user.username ILIKE :search OR user.email ILIKE :search)',
            { search: `%${search}%` },
          );
        }
      }

      if (sort) {
        query.orderBy(`user.${sort}`, (order ?? 'ASC') as 'ASC' | 'DESC');
      }

      return await paginate<User>(query, { page, limit });
    } catch (err) {
      console.error('Error retrieving users:', err);
      return null;
    }
  }

  async findOne(id: string): Promise<User | null> {
    try {
      return await this.userRepository.findOne({ where: { id } });
    } catch (err) {
      console.error('Error fetching user:', err);
      return null;
    }
  }

  async findByEmail(identifier: string): Promise<User | null> {
    try {
      return await this.userRepository
        .createQueryBuilder('user')
        .where('user.email = :identifier', { identifier })
        .orWhere('user.username = :identifier', { identifier })
        .getOne();
    } catch (err) {
      console.error('Error en findByEmail QueryBuilder:', err);
      return null;
    }
  }

  async findByUsername(username: string): Promise<User | null> {
    try {
      return await this.userRepository.findOne({ where: { username } });
    } catch (err) {
      console.error('Error fetching user by username:', err);
      return null;
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) return null;

    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    Object.assign(user, updateUserDto);
    return this.userRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) return null;
    return this.userRepository.remove(user);
  }

  async updateProfile(id: string, profile: string) {
    const user = await this.userRepository.findOne({ where: { id: id } });
    if (!user) throw new NotFoundException('User not found');
    user.profile = profile;
    return this.userRepository.save(user);
  }
}