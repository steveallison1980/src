import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentrendererComponent } from './contentrenderer.component';

describe('ContentrendererComponent', () => {
  let component: ContentrendererComponent;
  let fixture: ComponentFixture<ContentrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentrendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
