import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCuidadosComponent } from './admin-cuidados.component';

describe('AdminCuidadosComponent', () => {
  let component: AdminCuidadosComponent;
  let fixture: ComponentFixture<AdminCuidadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCuidadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCuidadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
