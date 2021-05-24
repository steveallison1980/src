import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafcdetailsComponent } from './cafcdetails.component';

describe('CafcdetailsComponent', () => {
  let component: CafcdetailsComponent;
  let fixture: ComponentFixture<CafcdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafcdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafcdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
