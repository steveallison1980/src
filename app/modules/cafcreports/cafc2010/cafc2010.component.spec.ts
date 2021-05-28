import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafc2010Component } from './cafc2010.component';

describe('Cafc2010Component', () => {
  let component: Cafc2010Component;
  let fixture: ComponentFixture<Cafc2010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafc2010Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafc2010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
