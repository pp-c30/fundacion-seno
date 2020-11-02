import { TestBed } from '@angular/core/testing';

import { CategoriaEventoService } from './categoria-evento.service';

describe('CategoriaEventoService', () => {
  let service: CategoriaEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
