import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusblurbComponent } from './aboutusblurb.component';

describe('AboutusblurbComponent', () => {
  let component: AboutusblurbComponent;
  let fixture: ComponentFixture<AboutusblurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusblurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusblurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
