import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { ArticulosService } from './articulos.service';
import { Request } from 'express';
import { ArticuloDto } from './articulo.dto';
import { Articulo } from './articulo.entity';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('articulo')
@Controller('articulos')
//@UseGuards(AuthGuard('jwt')) 
//@ApiBearerAuth('access-token')
export class ArticulosController {
    constructor(private articulosService: ArticulosService) {}

  /** 
   *
   * @returns {Articulo[]} Devuelve una lista de Articulos
   * @param {Request} request Lista de parámetros para filtrar
   */
  @Get()
  @ApiOperation({ summary: 'Obtener lista de libros' }) 
  @ApiResponse({ 
    status: 201,
    description: 'Lista de Articulos',
    type: Articulo, 
  })
  findAll(@Req() request: Request) : Promise<Articulo[]> { 
    console.log(request.query);
    return this.articulosService.findAll(request.query); 
  }

  @Get(':articuloId') 
  @ApiOperation({ summary: 'Devuelve información sobre un Articulo específico' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Datos del Articulo',
    type: Articulo,
  })
  findBook(@Param('articuloId') articuloId: string) : Promise<Articulo> { 
    return this.articulosService.findArticulo(articuloId); 
  }

  @Post() 
  @ApiOperation({ summary: 'Crear un Articulo' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Datos del Articulo creado',
    type: Articulo,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  createArticulo(@Req() request: Request,
  @Body() newArticulo: Articulo,
  @Res() res,
) : Promise<Articulo> { 
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
  @ApiOperation({ summary: 'Eliminar un Articulo específico' })
  @ApiResponse({
    status: 200,
    description: 'Datos del Articulo eliminado',
  })
  deleteBook(@Param('articuloId') articuloId: string) : Promise<Articulo> { 
    return this.articulosService.deleteArticulo(articuloId); 
  }

  @Put(':articuloId')  
  @ApiOperation({ summary: 'Actualizar un Articulo específico' })
  @ApiResponse({
    status: 200,
    description: 'Datos del Articulo actualizado',
    type: Articulo,
  })
  updateArticulo(@Param('articuloId') articuloId: string, @Body() newArticulo: ArticuloDto) : Promise<Articulo> { 
    return this.articulosService.updateArticulo(articuloId, newArticulo); 
  }
}
