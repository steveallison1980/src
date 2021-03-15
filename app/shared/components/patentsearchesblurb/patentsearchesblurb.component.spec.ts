import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentsearchesblurbComponent } from './patentsearchesblurb.component';

describe('PatentsearchesblurbComponent', () => {
  let component: PatentsearchesblurbComponent;
  let fixture: ComponentFixture<PatentsearchesblurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatentsearchesblurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentsearchesblurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
