import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutcontactpageComponent } from './aboutcontactpage.component';

describe('AboutcontactpageComponent', () => {
  let component: AboutcontactpageComponent;
  let fixture: ComponentFixture<AboutcontactpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutcontactpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutcontactpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
