import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerspageComponent } from './careerspage.component';

describe('CareerspageComponent', () => {
  let component: CareerspageComponent;
  let fixture: ComponentFixture<CareerspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
