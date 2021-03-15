import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitigationandstrategyComponent } from './litigationandstrategy.component';

describe('LitigationandstrategyComponent', () => {
  let component: LitigationandstrategyComponent;
  let fixture: ComponentFixture<LitigationandstrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitigationandstrategyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LitigationandstrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
