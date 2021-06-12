import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementgridrendererComponent } from './elementgridrenderer.component';

describe('ElementgridrendererComponent', () => {
  let component: ElementgridrendererComponent;
  let fixture: ComponentFixture<ElementgridrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementgridrendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementgridrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
