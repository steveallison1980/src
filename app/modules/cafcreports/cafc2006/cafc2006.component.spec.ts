import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafc2006Component } from './cafc2006.component';

describe('Cafc2006Component', () => {
  let component: Cafc2006Component;
  let fixture: ComponentFixture<Cafc2006Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafc2006Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafc2006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
