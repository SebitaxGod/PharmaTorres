import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { CartModule } from './modules/cart/cart.module';
import { PrescriptionsModule } from './modules/prescriptions/prescriptions.module';
import { DevModule } from './modules/dev/dev.module';
import { User } from './entities/user.entity';

@Module({
  imports: [
    // Configuración global
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    
    // Configuración de TypeORM
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [User],
      synchronize: false, // Deshabilitado para producción con Supabase
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    
    // Módulos de la aplicación
    AuthModule,
    UsersModule,
    ProductsModule,
    OrdersModule,
    CartModule,
    PrescriptionsModule,
    DevModule, // Módulo temporal para desarrollo
  ],
})
export class AppModule {}
