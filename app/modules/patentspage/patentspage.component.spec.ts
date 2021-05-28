import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentspageComponent } from './patentspage.component';

describe('PatentspageComponent', () => {
  let component: PatentspageComponent;
  let fixture: ComponentFixture<PatentspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatentspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
