import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetsumeikaiComponent } from './setsumeikai.component';

describe('SetsumeikaiComponent', () => {
  let component: SetsumeikaiComponent;
  let fixture: ComponentFixture<SetsumeikaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetsumeikaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetsumeikaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
