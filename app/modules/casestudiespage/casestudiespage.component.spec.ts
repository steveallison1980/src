import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasestudiespageComponent } from './casestudiespage.component';

describe('CasestudiespageComponent', () => {
  let component: CasestudiespageComponent;
  let fixture: ComponentFixture<CasestudiespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasestudiespageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasestudiespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
