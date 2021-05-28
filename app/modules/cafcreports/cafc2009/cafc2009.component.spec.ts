import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafc2009Component } from './cafc2009.component';

describe('Cafc2009Component', () => {
  let component: Cafc2009Component;
  let fixture: ComponentFixture<Cafc2009Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafc2009Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafc2009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
