import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanrendererComponent } from './spanrenderer.component';

describe('SpanrendererComponent', () => {
  let component: SpanrendererComponent;
  let fixture: ComponentFixture<SpanrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpanrendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
