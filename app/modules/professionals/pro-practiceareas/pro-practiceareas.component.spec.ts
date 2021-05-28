import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProPracticeareasComponent } from './pro-practiceareas.component';

describe('ProPracticeareasComponent', () => {
  let component: ProPracticeareasComponent;
  let fixture: ComponentFixture<ProPracticeareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProPracticeareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProPracticeareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
