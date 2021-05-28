import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProAdvisorsComponent } from './pro-advisors.component';

describe('ProAdvisorsComponent', () => {
  let component: ProAdvisorsComponent;
  let fixture: ComponentFixture<ProAdvisorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProAdvisorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProAdvisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
