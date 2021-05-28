import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProChempharmabioComponent } from './pro-chempharmabio.component';

describe('ProChempharmabioComponent', () => {
  let component: ProChempharmabioComponent;
  let fixture: ComponentFixture<ProChempharmabioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProChempharmabioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProChempharmabioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
