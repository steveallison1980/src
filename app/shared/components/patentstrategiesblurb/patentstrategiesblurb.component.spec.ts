import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentstrategiesblurbComponent } from './patentstrategiesblurb.component';

describe('PatentstrategiesblurbComponent', () => {
  let component: PatentstrategiesblurbComponent;
  let fixture: ComponentFixture<PatentstrategiesblurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatentstrategiesblurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentstrategiesblurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
