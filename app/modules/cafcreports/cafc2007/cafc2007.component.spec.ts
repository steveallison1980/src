import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafc2007Component } from './cafc2007.component';

describe('Cafc2007Component', () => {
  let component: Cafc2007Component;
  let fixture: ComponentFixture<Cafc2007Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafc2007Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafc2007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
