import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitigationteamblurbComponent } from './litigationteamblurb.component';

describe('LitigationteamblurbComponent', () => {
  let component: LitigationteamblurbComponent;
  let fixture: ComponentFixture<LitigationteamblurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitigationteamblurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LitigationteamblurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
