import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaDetalleComponent } from './galeria-detalle.component';

describe('GaleriaDetalleComponent', () => {
  let component: GaleriaDetalleComponent;
  let fixture: ComponentFixture<GaleriaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
