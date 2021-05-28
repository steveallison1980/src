import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkenvironmentComponent } from './workenvironment.component';

describe('WorkenvironmentComponent', () => {
  let component: WorkenvironmentComponent;
  let fixture: ComponentFixture<WorkenvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkenvironmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkenvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
