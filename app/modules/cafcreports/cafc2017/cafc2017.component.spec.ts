import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafc2017Component } from './cafc2017.component';

describe('Cafc2017Component', () => {
  let component: Cafc2017Component;
  let fixture: ComponentFixture<Cafc2017Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafc2017Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafc2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
