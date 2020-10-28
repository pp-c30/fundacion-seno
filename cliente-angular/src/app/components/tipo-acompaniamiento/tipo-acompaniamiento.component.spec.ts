import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAcompaniamientoComponent } from './tipo-acompaniamiento.component';

describe('TipoAcompaniamientoComponent', () => {
  let component: TipoAcompaniamientoComponent;
  let fixture: ComponentFixture<TipoAcompaniamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoAcompaniamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoAcompaniamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
