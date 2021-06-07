import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphrendererComponent } from './paragraphrenderer.component';

describe('ParagraphrendererComponent', () => {
  let component: ParagraphrendererComponent;
  let fixture: ComponentFixture<ParagraphrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphrendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
