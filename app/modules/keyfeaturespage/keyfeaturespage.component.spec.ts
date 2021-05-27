import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyfeaturespageComponent } from './keyfeaturespage.component';

describe('KeyfeaturespageComponent', () => {
  let component: KeyfeaturespageComponent;
  let fixture: ComponentFixture<KeyfeaturespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyfeaturespageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyfeaturespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
