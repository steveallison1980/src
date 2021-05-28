import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetsumeikaiguidepageComponent } from './setsumeikaiguidepage.component';

describe('SetsumeikaiguidepageComponent', () => {
  let component: SetsumeikaiguidepageComponent;
  let fixture: ComponentFixture<SetsumeikaiguidepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetsumeikaiguidepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetsumeikaiguidepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
