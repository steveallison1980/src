import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProMeddevicesComponent } from './pro-meddevices.component';

describe('ProMeddevicesComponent', () => {
  let component: ProMeddevicesComponent;
  let fixture: ComponentFixture<ProMeddevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProMeddevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProMeddevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
