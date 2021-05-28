import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafc2013Component } from './cafc2013.component';

describe('Cafc2013Component', () => {
  let component: Cafc2013Component;
  let fixture: ComponentFixture<Cafc2013Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafc2013Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafc2013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
