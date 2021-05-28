import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetsumeikaiguideComponent } from './setsumeikaiguide.component';

describe('SetsumeikaiguideComponent', () => {
  let component: SetsumeikaiguideComponent;
  let fixture: ComponentFixture<SetsumeikaiguideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetsumeikaiguideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetsumeikaiguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
