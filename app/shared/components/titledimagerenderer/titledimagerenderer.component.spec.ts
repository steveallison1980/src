import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitledimagerendererComponent } from './titledimagerenderer.component';

describe('TitledimagerendererComponent', () => {
  let component: TitledimagerendererComponent;
  let fixture: ComponentFixture<TitledimagerendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitledimagerendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitledimagerendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
