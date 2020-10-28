import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaDonacionesComponent } from './categoria-donaciones.component';

describe('CategoriaDonacionesComponent', () => {
  let component: CategoriaDonacionesComponent;
  let fixture: ComponentFixture<CategoriaDonacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaDonacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaDonacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
