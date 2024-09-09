import { Test, TestingModule } from '@nestjs/testing';
import { ArticulosController } from './articulos.controller';
import { ArticulosService } from './articulos.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Articulo } from './articulo.entity';
 


describe('ArticulosController', () => {
  let controller: ArticulosController;
 
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticulosController],
      providers: [ArticulosService,{
        provide:getRepositoryToken(Articulo),
        useValue: {
          save: jest.fn().mockResolvedValue(Articulo),
          find: jest.fn().mockResolvedValue([Articulo]),
        },
      }],
    }).compile();

    controller = module.get<ArticulosController>(ArticulosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
