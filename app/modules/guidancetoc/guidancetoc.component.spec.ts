import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidancetocComponent } from './guidancetoc.component';

describe('GuidancetocComponent', () => {
  let component: GuidancetocComponent;
  let fixture: ComponentFixture<GuidancetocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidancetocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidancetocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
