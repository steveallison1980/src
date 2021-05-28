import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafc2008Component } from './cafc2008.component';

describe('Cafc2008Component', () => {
  let component: Cafc2008Component;
  let fixture: ComponentFixture<Cafc2008Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafc2008Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafc2008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
