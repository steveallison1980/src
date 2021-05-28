import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProToysgamesComponent } from './pro-toysgames.component';

describe('ProToysgamesComponent', () => {
  let component: ProToysgamesComponent;
  let fixture: ComponentFixture<ProToysgamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProToysgamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProToysgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
