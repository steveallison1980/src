import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafcComponent } from './cafc.component';

describe('CafcComponent', () => {
  let component: CafcComponent;
  let fixture: ComponentFixture<CafcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
