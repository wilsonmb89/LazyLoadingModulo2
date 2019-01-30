import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo2Pagina1Component } from './modulo2-pagina1.component';

describe('Modulo2Pagina1Component', () => {
  let component: Modulo2Pagina1Component;
  let fixture: ComponentFixture<Modulo2Pagina1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modulo2Pagina1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modulo2Pagina1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
