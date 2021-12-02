import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade4Component } from './atividade4.component';

describe('Atividade4Component', () => {
  let component: Atividade4Component;
  let fixture: ComponentFixture<Atividade4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atividade4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Atividade4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
