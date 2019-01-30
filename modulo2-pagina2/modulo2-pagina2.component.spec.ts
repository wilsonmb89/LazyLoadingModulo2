import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo2Pagina2Component } from './modulo2-pagina2.component';

describe('Modulo2Pagina2Component', () => {
  let component: Modulo2Pagina2Component;
  let fixture: ComponentFixture<Modulo2Pagina2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modulo2Pagina2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modulo2Pagina2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
