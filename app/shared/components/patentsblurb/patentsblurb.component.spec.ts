import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentsblurbComponent } from './patentsblurb.component';

describe('PatentsblurbComponent', () => {
  let component: PatentsblurbComponent;
  let fixture: ComponentFixture<PatentsblurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatentsblurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentsblurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
