import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticcardComponent } from './staticcard.component';

describe('StaticcardComponent', () => {
  let component: StaticcardComponent;
  let fixture: ComponentFixture<StaticcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
