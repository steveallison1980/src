import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafc2020Component } from './cafc2020.component';

describe('Cafc2020Component', () => {
  let component: Cafc2020Component;
  let fixture: ComponentFixture<Cafc2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafc2020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafc2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
