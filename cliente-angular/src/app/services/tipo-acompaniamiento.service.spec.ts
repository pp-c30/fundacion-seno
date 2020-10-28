import { TestBed } from '@angular/core/testing';

import { TipoAcompaniamientoService } from './tipo-acompaniamiento.service';

describe('TipoAcompaniamientoService', () => {
  let service: TipoAcompaniamientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoAcompaniamientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
