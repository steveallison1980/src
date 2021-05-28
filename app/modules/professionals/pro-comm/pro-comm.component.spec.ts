import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProCommComponent } from './pro-comm.component';

describe('ProCommComponent', () => {
  let component: ProCommComponent;
  let fixture: ComponentFixture<ProCommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProCommComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
