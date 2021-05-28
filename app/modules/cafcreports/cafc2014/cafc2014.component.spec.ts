import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafc2014Component } from './cafc2014.component';

describe('Cafc2014Component', () => {
  let component: Cafc2014Component;
  let fixture: ComponentFixture<Cafc2014Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafc2014Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafc2014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
