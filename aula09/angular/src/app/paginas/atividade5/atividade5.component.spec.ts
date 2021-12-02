import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade5Component } from './atividade5.component';

describe('Atividade5Component', () => {
  let component: Atividade5Component;
  let fixture: ComponentFixture<Atividade5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atividade5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Atividade5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
