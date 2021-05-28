import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProInfoprocComponent } from './pro-infoproc.component';

describe('ProInfoprocComponent', () => {
  let component: ProInfoprocComponent;
  let fixture: ComponentFixture<ProInfoprocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProInfoprocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProInfoprocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
