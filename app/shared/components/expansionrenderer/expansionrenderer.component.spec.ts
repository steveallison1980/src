import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionrendererComponent } from './expansionrenderer.component';

describe('ExpansionrendererComponent', () => {
  let component: ExpansionrendererComponent;
  let fixture: ComponentFixture<ExpansionrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionrendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
