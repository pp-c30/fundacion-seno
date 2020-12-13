import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionesDetalleComponent } from './donaciones-detalle.component';

describe('DonacionesDetalleComponent', () => {
  let component: DonacionesDetalleComponent;
  let fixture: ComponentFixture<DonacionesDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonacionesDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonacionesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
