import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkenvComponent } from './workenv.component';

describe('WorkenvComponent', () => {
  let component: WorkenvComponent;
  let fixture: ComponentFixture<WorkenvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkenvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkenvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
