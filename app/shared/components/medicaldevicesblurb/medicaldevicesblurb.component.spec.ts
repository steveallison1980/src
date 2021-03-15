import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicaldevicesblurbComponent } from './medicaldevicesblurb.component';

describe('MedicaldevicesblurbComponent', () => {
  let component: MedicaldevicesblurbComponent;
  let fixture: ComponentFixture<MedicaldevicesblurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicaldevicesblurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicaldevicesblurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
