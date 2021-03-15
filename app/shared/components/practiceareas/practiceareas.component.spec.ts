import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeareasComponent } from './practiceareas.component';

describe('PracticeareasComponent', () => {
  let component: PracticeareasComponent;
  let fixture: ComponentFixture<PracticeareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
