import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafc2005Component } from './cafc2005.component';

describe('Cafc2005Component', () => {
  let component: Cafc2005Component;
  let fixture: ComponentFixture<Cafc2005Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafc2005Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafc2005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
