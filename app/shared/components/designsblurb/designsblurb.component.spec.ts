import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignsblurbComponent } from './designsblurb.component';

describe('DesignsblurbComponent', () => {
  let component: DesignsblurbComponent;
  let fixture: ComponentFixture<DesignsblurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignsblurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignsblurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
