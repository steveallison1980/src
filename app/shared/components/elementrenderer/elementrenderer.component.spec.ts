import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementrendererComponent } from './elementrenderer.component';

describe('ElementrendererComponent', () => {
  let component: ElementrendererComponent;
  let fixture: ComponentFixture<ElementrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementrendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
