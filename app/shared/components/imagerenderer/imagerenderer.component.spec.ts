import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagerendererComponent } from './imagerenderer.component';

describe('ImagerendererComponent', () => {
  let component: ImagerendererComponent;
  let fixture: ComponentFixture<ImagerendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagerendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagerendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
