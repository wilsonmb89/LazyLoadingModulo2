import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo2Pagina3Component } from './modulo2-pagina3.component';

describe('Modulo2Pagina3Component', () => {
  let component: Modulo2Pagina3Component;
  let fixture: ComponentFixture<Modulo2Pagina3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modulo2Pagina3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modulo2Pagina3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
