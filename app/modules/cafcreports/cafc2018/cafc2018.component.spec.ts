import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafc2018Component } from './cafc2018.component';

describe('Cafc2018Component', () => {
  let component: Cafc2018Component;
  let fixture: ComponentFixture<Cafc2018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafc2018Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafc2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
