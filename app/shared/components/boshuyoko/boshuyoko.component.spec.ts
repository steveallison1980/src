import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoshuyokoComponent } from './boshuyoko.component';

describe('BoshuyokoComponent', () => {
  let component: BoshuyokoComponent;
  let fixture: ComponentFixture<BoshuyokoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoshuyokoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoshuyokoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
