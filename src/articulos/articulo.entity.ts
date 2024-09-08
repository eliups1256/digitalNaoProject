import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Articulo {
  @PrimaryGeneratedColumn({ name: 'id' }) 
  id: number;

  @Column()
  descripcion: string;

  @Column()
  depto: string;

  @Column('text') 
  subdepto: string;

  @Column()
  precio: number;

  @Column()
  image_url: string;
}