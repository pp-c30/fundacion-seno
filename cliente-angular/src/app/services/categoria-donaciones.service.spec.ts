import { TestBed } from '@angular/core/testing';

import { CategoriaDonacionesService } from './categoria-donaciones.service';

describe('CategoriaDonacionesService', () => {
  let service: CategoriaDonacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaDonacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
