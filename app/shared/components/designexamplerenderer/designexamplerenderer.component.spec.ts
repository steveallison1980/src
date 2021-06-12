import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignexamplerendererComponent } from './designexamplerenderer.component';

describe('DesignexamplerendererComponent', () => {
  let component: DesignexamplerendererComponent;
  let fixture: ComponentFixture<DesignexamplerendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignexamplerendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignexamplerendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
