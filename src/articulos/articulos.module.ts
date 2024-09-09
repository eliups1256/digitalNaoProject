import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Articulo } from './articulo.entity';
import { ArticulosService } from './articulos.service';
import { ArticulosController } from './articulos.controller';
import { AuthModule } from 'src/utilities/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Articulo]), AuthModule], 
  providers: [ArticulosService], 
  controllers: [ArticulosController], 
})
export class ArticulosModule {}