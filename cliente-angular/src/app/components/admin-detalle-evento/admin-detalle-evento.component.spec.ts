import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetalleEventoComponent } from './admin-detalle-evento.component';

describe('AdminDetalleEventoComponent', () => {
  let component: AdminDetalleEventoComponent;
  let fixture: ComponentFixture<AdminDetalleEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDetalleEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetalleEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
