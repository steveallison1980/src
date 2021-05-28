import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProLitComponent } from './pro-lit.component';

describe('ProLitComponent', () => {
  let component: ProLitComponent;
  let fixture: ComponentFixture<ProLitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProLitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProLitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
