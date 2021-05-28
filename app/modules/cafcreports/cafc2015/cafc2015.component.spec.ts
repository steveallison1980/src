import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafc2015Component } from './cafc2015.component';

describe('Cafc2015Component', () => {
  let component: Cafc2015Component;
  let fixture: ComponentFixture<Cafc2015Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafc2015Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafc2015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
