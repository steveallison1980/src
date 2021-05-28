import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafc2019Component } from './cafc2019.component';

describe('Cafc2019Component', () => {
  let component: Cafc2019Component;
  let fixture: ComponentFixture<Cafc2019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafc2019Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafc2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
