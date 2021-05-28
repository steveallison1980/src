import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProPatattorneysComponent } from './pro-patattorneys.component';

describe('ProPatattorneysComponent', () => {
  let component: ProPatattorneysComponent;
  let fixture: ComponentFixture<ProPatattorneysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProPatattorneysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProPatattorneysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
