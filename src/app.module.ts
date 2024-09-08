import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config.service';
import { ArticulosModule } from './articulos/articulos.module';
import { TypeOrmModule } from '@nestjs/typeorm';

//import { ArticulosService } from './articulos/articulos.service';
//import { ArticulosController } from './articulos/articulos.controller';

@Module({
  imports: [
    ArticulosModule, 
    TypeOrmModule.forRoot( 
      configService.getTypeOrmConfig(),
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {}
