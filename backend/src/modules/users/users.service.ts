import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../../entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // La contraseña ya viene hasheada desde auth.service.ts
    // No necesitamos hashearla de nuevo aquí
    const user = this.usersRepository.create(createUserDto);

    return await this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['id', 'firstName', 'lastName', 'email', 'phone', 'role', 'isActive', 'emailVerified', 'createdAt', 'updatedAt'],
    });
  }

  async findOne(id: string): Promise<User> {
    return await this.usersRepository.findOne({
      where: { id },
      select: ['id', 'firstName', 'lastName', 'email', 'phone', 'role', 'isActive', 'emailVerified', 'createdAt', 'updatedAt'],
    });
  }

  async findByEmail(email: string): Promise<User> {
    return await this.usersRepository.findOne({
      where: { email },
    });
  }

  async findByEmailWithPassword(email: string): Promise<User> {
    return await this.usersRepository.findOne({
      where: { email },
      select: ['id', 'firstName', 'lastName', 'email', 'password', 'phone', 'role', 'isActive', 'emailVerified', 'createdAt', 'updatedAt'],
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    if (updateUserDto.password) {
      const saltRounds = 10;
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, saltRounds);
    }

    await this.usersRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async updatePassword(email: string, hashedPassword: string): Promise<void> {
    await this.usersRepository.update({ email }, { password: hashedPassword });
  }
}
