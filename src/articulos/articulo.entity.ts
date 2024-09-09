import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Articulo {
  @ApiProperty({ example: 99 })
  @PrimaryGeneratedColumn({ name: 'id' }) 
  id: number;

  @ApiProperty({ example: 'Television 50 pulgadas' })
  @Column()
  descripcion: string;

  @ApiProperty({ example: 'Electronica' })
  @Column()
  depto: string;

  @ApiProperty({ example: 'Televisiones' })
  @Column('text') 
  subdepto: string;

  @ApiProperty({ example: '12000' })
  @Column()
  precio: number;

  @ApiProperty({ example: './img/tele50.jpg' })
  @Column()
  image_url: string;
}