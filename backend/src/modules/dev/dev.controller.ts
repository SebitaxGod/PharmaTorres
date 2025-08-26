import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Controller('dev')
export class DevController {
  constructor(private readonly usersService: UsersService) {}

  @Post('fix-password')
  async fixPassword(@Body() body: { email: string; password: string }) {
    try {
      // Generar hash de la nueva contraseña
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(body.password, saltRounds);
      
      // Verificar que el hash funciona
      const testHash = await bcrypt.compare(body.password, hashedPassword);
      
      if (!testHash) {
        return { success: false, message: 'Error al generar hash' };
      }
      
      // Actualizar contraseña en la base de datos
      await this.usersService.updatePassword(body.email, hashedPassword);
      
      return {
        success: true,
        message: `Contraseña actualizada para ${body.email}`,
        testHash: true
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}
