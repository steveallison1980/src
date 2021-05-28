import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitigationpageComponent } from './litigationpage.component';

describe('LitigationpageComponent', () => {
  let component: LitigationpageComponent;
  let fixture: ComponentFixture<LitigationpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitigationpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LitigationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
