import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicalblurbComponent } from './mechanicalblurb.component';

describe('MechanicalblurbComponent', () => {
  let component: MechanicalblurbComponent;
  let fixture: ComponentFixture<MechanicalblurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechanicalblurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicalblurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
