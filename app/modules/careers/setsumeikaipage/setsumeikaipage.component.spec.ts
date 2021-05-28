import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetsumeikaipageComponent } from './setsumeikaipage.component';

describe('SetsumeikaipageComponent', () => {
  let component: SetsumeikaipageComponent;
  let fixture: ComponentFixture<SetsumeikaipageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetsumeikaipageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetsumeikaipageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
