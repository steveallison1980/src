import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrademarksblurbComponent } from './trademarksblurb.component';

describe('TrademarksblurbComponent', () => {
  let component: TrademarksblurbComponent;
  let fixture: ComponentFixture<TrademarksblurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrademarksblurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrademarksblurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
