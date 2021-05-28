import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafc2011Component } from './cafc2011.component';

describe('Cafc2011Component', () => {
  let component: Cafc2011Component;
  let fixture: ComponentFixture<Cafc2011Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafc2011Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafc2011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
