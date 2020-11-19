import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadosDetalleComponent } from './cuidados-detalle.component';

describe('CuidadosDetalleComponent', () => {
  let component: CuidadosDetalleComponent;
  let fixture: ComponentFixture<CuidadosDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuidadosDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidadosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
