import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentsandutilitymodelsComponent } from './patentsandutilitymodels.component';

describe('PatentsandutilitymodelsComponent', () => {
  let component: PatentsandutilitymodelsComponent;
  let fixture: ComponentFixture<PatentsandutilitymodelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatentsandutilitymodelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentsandutilitymodelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
