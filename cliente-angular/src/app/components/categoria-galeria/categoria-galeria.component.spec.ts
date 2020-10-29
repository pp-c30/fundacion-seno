import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaGaleriaComponent } from './categoria-galeria.component';

describe('CategoriaGaleriaComponent', () => {
  let component: CategoriaGaleriaComponent;
  let fixture: ComponentFixture<CategoriaGaleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaGaleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
