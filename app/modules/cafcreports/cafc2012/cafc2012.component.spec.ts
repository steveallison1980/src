import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafc2012Component } from './cafc2012.component';

describe('Cafc2012Component', () => {
  let component: Cafc2012Component;
  let fixture: ComponentFixture<Cafc2012Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafc2012Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafc2012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
