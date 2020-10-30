import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaEventoComponent } from './categoria-evento.component';

describe('CategoriaEventoComponent', () => {
  let component: CategoriaEventoComponent;
  let fixture: ComponentFixture<CategoriaEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
