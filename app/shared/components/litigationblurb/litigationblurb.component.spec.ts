import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitigationblurbComponent } from './litigationblurb.component';

describe('LitigationblurbComponent', () => {
  let component: LitigationblurbComponent;
  let fixture: ComponentFixture<LitigationblurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitigationblurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LitigationblurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
