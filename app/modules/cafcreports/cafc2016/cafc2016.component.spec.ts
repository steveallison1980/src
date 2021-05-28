import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafc2016Component } from './cafc2016.component';

describe('Cafc2016Component', () => {
  let component: Cafc2016Component;
  let fixture: ComponentFixture<Cafc2016Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafc2016Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafc2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
