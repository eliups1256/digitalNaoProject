import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { ArticuloDto } from './articulo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Articulo } from './articulo.entity';

@Injectable()
export class ArticulosService {

  articulos: Articulo[] = [
    {
      id: 1,
      descripcion: 'Una historia de España',
      depto: 'Historia',
      subdepto:
        'Un relato ameno, personal, a ratos irónico, pero siempre único, de nuestra accidentada historia a través de los siglos. Una obra concebida por el autor para, en palabras suyas, «divertirme, releer y disfrutar; un pretexto para mirar atrás desde los tiempos remotos hasta el presente, reflexionar un poco sobre ello y contarlo por escrito de una manera poco ortodoxa.',
      
      precio: 256,
      image_url:
        'https://images-na.ssl-images-amazon.com/images/I/41%2B-e981m1L._SX311_BO1,204,203,200_.jpg',
    },
    {
      id: 2,
      descripcion: 'Historia de España contada para escépticos',
      depto: 'Historia',
      subdepto:
        'Como escribe el autor, no pretende ser veraz, justa y desapasionada, porque ninguna historia lo es. No está hecha para halagar a reyes y gobernantes, ni pretende halagar a los banqueros, ni a la Conferencia Episcopal, ni al colectivo gay.',
      
        precio: 592,
      image_url:
        'https://images-na.ssl-images-amazon.com/images/I/51IyZ5Mq8YL._SX326_BO1,204,203,200_.jpg',
    },
  ];

  @InjectRepository(Articulo) private articulosRepository: Repository<Articulo>;

  constructor(
    @InjectRepository(Articulo) private articulosRepository1: Repository<Articulo>, 
  ) {}

  async findAll(params): Promise<Articulo[]> { 
    return await this.articulosRepository.find();
  }

  async findArticulo(articuloId: string) : Promise<Articulo> {
    return this.articulosRepository.findOne({ where: { id: parseInt(articuloId) } });
  }

  createArticulo(newArticulo: Articulo) : Promise<Articulo>{
    console.log(newArticulo); 
    return this.articulosRepository.save(newArticulo);
  }

  async deleteArticulo(articuloId: string) : Promise<any> {
      return await this.articulosRepository.delete({ id: parseInt(articuloId) });
    }
 
    async updateArticulo(articuloId: string, newArticulo: ArticuloDto) : Promise<Articulo> {
      let toUpdate = await this.articulosRepository.findOne({where: {id: parseInt(articuloId, 10)}});

      let updated = Object.assign(toUpdate, newArticulo); 
  
      return this.articulosRepository.save(updated); 
    }
}
