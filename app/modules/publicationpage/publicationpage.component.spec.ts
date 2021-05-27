import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationpageComponent } from './publicationpage.component';

describe('PublicationpageComponent', () => {
  let component: PublicationpageComponent;
  let fixture: ComponentFixture<PublicationpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
