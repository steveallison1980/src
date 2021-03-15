import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputersblurbComponent } from './computersblurb.component';

describe('ComputersblurbComponent', () => {
  let component: ComputersblurbComponent;
  let fixture: ComponentFixture<ComputersblurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputersblurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputersblurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
