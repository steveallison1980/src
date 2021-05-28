import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProPatengineersComponent } from './pro-patengineers.component';

describe('ProPatengineersComponent', () => {
  let component: ProPatengineersComponent;
  let fixture: ComponentFixture<ProPatengineersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProPatengineersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProPatengineersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
