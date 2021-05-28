import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProInternationalComponent } from './pro-international.component';

describe('ProInternationalComponent', () => {
  let component: ProInternationalComponent;
  let fixture: ComponentFixture<ProInternationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProInternationalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProInternationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
