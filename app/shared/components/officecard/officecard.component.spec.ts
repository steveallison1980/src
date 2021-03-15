import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficecardComponent } from './officecard.component';

describe('OfficecardComponent', () => {
  let component: OfficecardComponent;
  let fixture: ComponentFixture<OfficecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
