import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ArticulosService } from './articulos.service';
import { Request } from 'express';
import { ArticuloDto } from './articulo.dto';
import { Articulo } from './articulo.entity';


@Controller('articulos')
export class ArticulosController {
    constructor(private articulosService: ArticulosService) {}

  @Get() 
  findAll(@Req() request: Request) : Promise<Articulo[]> { 
    console.log(request.query);
    return this.articulosService.findAll(request.query); 
  }

  @Get(':articuloId') 
  findBook(@Param('articuloId') articuloId: string) : Promise<Articulo> { 
    return this.articulosService.findArticulo(articuloId); 
  }

  @Post() 
  createArticulo(newArticulo : ArticuloDto) : Promise<Articulo> { 
    console.log(newArticulo);
    var newArticulo2 = new Articulo();
    newArticulo2.descripcion = "Laptop";
    newArticulo2.depto = "Electronica";
    newArticulo2.subdepto = "Computo";
    newArticulo2.precio = 1200;
    newArticulo2.image_url = "./img/laptop.jpg";
    return this.articulosService.createArticulo(newArticulo2); 
  }  

  @Delete(':articuloId') 
  deleteBook(@Param('articuloId') articuloId: string) : Promise<Articulo> { 
    return this.articulosService.deleteArticulo(articuloId); 
  }

  @Put(':articuloId')  
  updateArticulo(@Param('articuloId') articuloId: string, @Body() newArticulo: ArticuloDto) : Promise<Articulo> { 
    return this.articulosService.updateArticulo(articuloId, newArticulo); 
  }
}
