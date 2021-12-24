import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafc2021Component } from './cafc2021.component';

describe('Cafc2021Component', () => {
  let component: Cafc2021Component;
  let fixture: ComponentFixture<Cafc2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafc2021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafc2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
