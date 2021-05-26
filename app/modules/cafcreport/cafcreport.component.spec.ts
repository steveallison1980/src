import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafcreportComponent } from './cafcreport.component';

describe('CafcreportComponent', () => {
  let component: CafcreportComponent;
  let fixture: ComponentFixture<CafcreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafcreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafcreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
