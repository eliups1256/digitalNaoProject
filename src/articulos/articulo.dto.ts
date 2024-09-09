import { ApiProperty } from "@nestjs/swagger";

export class ArticuloDto {
    @ApiProperty({ example: 'Television 50 pulgadas' }) 
    readonly descripcion: string;
    @ApiProperty({ example: 'Electronica' })
    readonly dpto: string;
    @ApiProperty({ example: 'Televisiones' })
    readonly subdepto: string;
    @ApiProperty({ example: '12000' })
    readonly precio: string;
    @ApiProperty({ example: './img/tele50.jpg' })
    readonly image_url: string;
  }