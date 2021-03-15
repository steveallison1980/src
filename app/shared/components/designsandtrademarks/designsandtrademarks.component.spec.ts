import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignsandtrademarksComponent } from './designsandtrademarks.component';

describe('DesignsandtrademarksComponent', () => {
  let component: DesignsandtrademarksComponent;
  let fixture: ComponentFixture<DesignsandtrademarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignsandtrademarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignsandtrademarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
