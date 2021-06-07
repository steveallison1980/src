import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderrendererComponent } from './headerrenderer.component';

describe('HeaderrendererComponent', () => {
  let component: HeaderrendererComponent;
  let fixture: ComponentFixture<HeaderrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderrendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
