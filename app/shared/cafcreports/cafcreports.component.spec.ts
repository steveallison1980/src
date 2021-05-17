import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafcreportsComponent } from './cafcreports.component';

describe('CafcreportsComponent', () => {
  let component: CafcreportsComponent;
  let fixture: ComponentFixture<CafcreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafcreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafcreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
