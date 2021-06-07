import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardrendererComponent } from './cardrenderer.component';

describe('CardrendererComponent', () => {
  let component: CardrendererComponent;
  let fixture: ComponentFixture<CardrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardrendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
