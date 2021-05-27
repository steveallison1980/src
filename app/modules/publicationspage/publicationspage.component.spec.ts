import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationspageComponent } from './publicationspage.component';

describe('PublicationspageComponent', () => {
  let component: PublicationspageComponent;
  let fixture: ComponentFixture<PublicationspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
