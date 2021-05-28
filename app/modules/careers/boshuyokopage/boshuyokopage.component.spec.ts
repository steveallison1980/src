import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoshuyokopageComponent } from './boshuyokopage.component';

describe('BoshuyokopageComponent', () => {
  let component: BoshuyokopageComponent;
  let fixture: ComponentFixture<BoshuyokopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoshuyokopageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoshuyokopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
