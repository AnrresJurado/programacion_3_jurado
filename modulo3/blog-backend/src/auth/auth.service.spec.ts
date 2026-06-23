// src/auth/auth.service.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

describe('AuthService', () => {
  let service: AuthService;

  const mockUsersService = {
    findByUsername: jest.fn(),
    create:         jest.fn(),
  };

  const mockJwtService = {
    sign: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: mockUsersService },
        { provide: JwtService,   useValue: mockJwtService   },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // ────────────────────────────────────────────────────────────
  describe('login()', () => {

    it('should return null when user does not exist', async () => {
      // Arrange: el usuario no está registrado
      mockUsersService.findByUsername.mockResolvedValue(null);

      // Act
      const result = await service.login({
        username: 'noexiste',
        password: '1234',
      });

      // Assert
      expect(result).toBeNull();
    });

    it('should return null when password is incorrect', async () => {
      // Arrange: el usuario existe pero la contraseña es incorrecta
      const mockUser = { id: '1', username: 'admin', password: 'hash' };
      mockUsersService.findByUsername.mockResolvedValue(mockUser);

      // Interceptamos bcrypt.compare para que devuelva false
      jest.spyOn(bcrypt, 'compare').mockResolvedValue(false as never);

      // Act
      const result = await service.login({ username: 'admin', password: 'wrong' });

      // Assert
      expect(result).toBeNull();
    });

    it('should return a JWT token on successful login', async () => {
      // Arrange: usuario existe y contraseña correcta
      const mockUser = { id: '1', username: 'admin', password: 'hash' };
      mockUsersService.findByUsername.mockResolvedValue(mockUser);
      jest.spyOn(bcrypt, 'compare').mockResolvedValue(true as never);
      mockJwtService.sign.mockReturnValue('jwt.token.aqui');

      // Act
      const result = await service.login({ username: 'admin', password: 'correcta' });

      // Assert
      expect(result).toBe('jwt.token.aqui');
      expect(typeof result).toBe('string');
    });

    it('should call jwtService.sign with correct payload', async () => {
      // Arrange
      const mockUser = { id: '42', username: 'maria', password: 'hash' };
      mockUsersService.findByUsername.mockResolvedValue(mockUser);
      jest.spyOn(bcrypt, 'compare').mockResolvedValue(true as never);
      mockJwtService.sign.mockReturnValue('token');

      // Act
      await service.login({ username: 'maria', password: 'pass' });

      // Assert: verificamos que el payload tiene el id y username del usuario
      expect(mockJwtService.sign).toHaveBeenCalledWith({
        id:       '42',
        username: 'maria',
      });
    });

    it('should return null when an unexpected error occurs', async () => {
      // Arrange: usersService lanza un error inesperado
      mockUsersService.findByUsername.mockRejectedValue(
        new Error('DB connection error')
      );

      // Act
      const result = await service.login({ username: 'admin', password: 'pass' });

      // Assert: el bloque catch devuelve null
      expect(result).toBeNull();
    });

  });

});