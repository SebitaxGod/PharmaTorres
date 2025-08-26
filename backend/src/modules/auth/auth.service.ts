import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    // Verificar si el usuario ya existe
    const existingUser = await this.usersService.findByEmail(registerDto.email);
    if (existingUser) {
      throw new ConflictException('El email ya está registrado');
    }

    // Procesar el nombre completo
    const nameParts = registerDto.name.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ') || firstName;

    // Hash de la contraseña con verificación
    console.log('🔐 REGISTER - Password to hash:', registerDto.password);
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(registerDto.password, saltRounds);
    console.log('🔐 REGISTER - Generated hash:', hashedPassword.substring(0, 10) + '...');
    
    // VERIFICACIÓN CRÍTICA: Asegurar que el hash funciona antes de guardar
    const verifyNewHash = await bcrypt.compare(registerDto.password, hashedPassword);
    console.log('🔐 REGISTER - Hash verification:', verifyNewHash);
    
    if (!verifyNewHash) {
      console.error('❌ REGISTER - Hash verification failed!');
      throw new Error('Error interno al procesar la contraseña');
    }

    // Crear el usuario
    const userData: CreateUserDto = {
      firstName,
      lastName,
      email: registerDto.email,
      password: hashedPassword,
      phone: registerDto.phone,
      address: registerDto.address,
    };

    const user = await this.usersService.create(userData);
    
    // Generar token JWT
    const payload = { email: user.email, sub: user.id, role: user.role };
    const access_token = this.jwtService.sign(payload);

    // Remover la contraseña de la respuesta
    const { password, ...userWithoutPassword } = user;

    return {
      user: userWithoutPassword,
      access_token,
      message: 'Usuario registrado exitosamente',
    };
  }

  async login(loginDto: LoginDto) {
    console.log('🔍 LOGIN - Email:', loginDto.email);
    console.log('🔍 LOGIN - Password length:', loginDto.password?.length);
    
    // Buscar usuario por email (con contraseña para validación)
    const user = await this.usersService.findByEmailWithPassword(loginDto.email);
    if (!user) {
      console.log('❌ LOGIN - Usuario no encontrado');
      throw new UnauthorizedException('Credenciales inválidas');
    }

    console.log('✅ LOGIN - Usuario encontrado:', user.email);
    console.log('🔐 LOGIN - Hash en DB:', user.password?.substring(0, 10) + '...');

    // Verificar contraseña
    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
    console.log('🔐 LOGIN - Contraseña válida:', isPasswordValid);
    
    if (!isPasswordValid) {
      console.log('❌ LOGIN - Contraseña incorrecta');
      throw new UnauthorizedException('Credenciales inválidas');
    }

    console.log('✅ LOGIN - Exitoso para:', user.email);

    // Generar token JWT
    const payload = { email: user.email, sub: user.id, role: user.role };
    const access_token = this.jwtService.sign(payload);

    // Remover la contraseña de la respuesta
    const { password, ...userWithoutPassword } = user;

    return {
      user: userWithoutPassword,
      access_token,
      message: 'Login exitoso',
    };
  }

  async forgotPassword(email: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      // Por seguridad, no revelamos si el email existe o no
      return {
        message: 'Si el email existe, recibirás un enlace de recuperación',
      };
    }

    // Aquí implementarías el envío de email de recuperación
    // Por ahora solo retornamos un mensaje
    console.log(`Email de recuperación enviado a: ${email}`);

    return {
      message: 'Si el email existe, recibirás un enlace de recuperación',
    };
  }
}
