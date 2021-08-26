import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashoverlayComponent } from './splashoverlay.component';

describe('SplashoverlayComponent', () => {
  let component: SplashoverlayComponent;
  let fixture: ComponentFixture<SplashoverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashoverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashoverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
