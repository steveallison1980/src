import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProMechComponent } from './pro-mech.component';

describe('ProMechComponent', () => {
  let component: ProMechComponent;
  let fixture: ComponentFixture<ProMechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProMechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProMechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
