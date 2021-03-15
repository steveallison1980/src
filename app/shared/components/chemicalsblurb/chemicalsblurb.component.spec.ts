import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalsblurbComponent } from './chemicalsblurb.component';

describe('ChemicalsblurbComponent', () => {
  let component: ChemicalsblurbComponent;
  let fixture: ComponentFixture<ChemicalsblurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChemicalsblurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemicalsblurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
