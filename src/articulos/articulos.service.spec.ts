import { Test, TestingModule } from '@nestjs/testing';
import { ArticulosService } from './articulos.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Articulo } from './articulo.entity';


describe('ArticulosService', () => {
  let service: ArticulosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticulosService,
              {provide: getRepositoryToken(Articulo),
                useValue: {
                  save: jest.fn().mockResolvedValue(Articulo),
                  find: jest.fn().mockResolvedValue([Articulo]),
                },}, 
      ]
    }).compile();

    service = module.get<ArticulosService>(ArticulosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
