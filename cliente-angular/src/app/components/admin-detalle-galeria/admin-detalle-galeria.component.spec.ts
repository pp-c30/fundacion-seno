import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetalleGaleriaComponent } from './admin-detalle-galeria.component';

describe('AdminDetalleGaleriaComponent', () => {
  let component: AdminDetalleGaleriaComponent;
  let fixture: ComponentFixture<AdminDetalleGaleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDetalleGaleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetalleGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
