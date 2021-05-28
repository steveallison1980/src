import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafcallComponent } from './cafcall.component';

describe('CafcallComponent', () => {
  let component: CafcallComponent;
  let fixture: ComponentFixture<CafcallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafcallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafcallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
