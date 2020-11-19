import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetalleCuidadosComponent } from './admin-detalle-cuidados.component';

describe('AdminDetalleCuidadosComponent', () => {
  let component: AdminDetalleCuidadosComponent;
  let fixture: ComponentFixture<AdminDetalleCuidadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDetalleCuidadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetalleCuidadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
