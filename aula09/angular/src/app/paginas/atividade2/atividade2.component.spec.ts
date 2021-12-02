import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade2Component } from './atividade2.component';

describe('Atividade2Component', () => {
  let component: Atividade2Component;
  let fixture: ComponentFixture<Atividade2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atividade2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Atividade2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
