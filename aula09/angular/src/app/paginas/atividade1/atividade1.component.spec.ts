import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade1Component } from './atividade1.component';

describe('Atividade1Component', () => {
  let component: Atividade1Component;
  let fixture: ComponentFixture<Atividade1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atividade1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Atividade1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
