import { TestBed } from '@angular/core/testing';

import { CategoriaGaleriaService } from './categoria-galeria.service';

describe('CategoriaGaleriaService', () => {
  let service: CategoriaGaleriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaGaleriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
