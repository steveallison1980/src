import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignstmpageComponent } from './designstmpage.component';

describe('DesignstmpageComponent', () => {
  let component: DesignstmpageComponent;
  let fixture: ComponentFixture<DesignstmpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignstmpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignstmpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
