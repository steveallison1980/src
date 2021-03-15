import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignsteamblurbComponent } from './designsteamblurb.component';

describe('DesignsteamblurbComponent', () => {
  let component: DesignsteamblurbComponent;
  let fixture: ComponentFixture<DesignsteamblurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignsteamblurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignsteamblurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
