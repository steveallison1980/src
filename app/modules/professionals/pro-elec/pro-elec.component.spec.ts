import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProElecComponent } from './pro-elec.component';

describe('ProElecComponent', () => {
  let component: ProElecComponent;
  let fixture: ComponentFixture<ProElecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProElecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProElecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
