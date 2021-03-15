import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtcasereportsComponent } from './courtcasereports.component';

describe('CourtcasereportsComponent', () => {
  let component: CourtcasereportsComponent;
  let fixture: ComponentFixture<CourtcasereportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtcasereportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtcasereportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
