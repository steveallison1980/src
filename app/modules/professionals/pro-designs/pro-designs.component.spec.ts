import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProDesignsComponent } from './pro-designs.component';

describe('ProDesignsComponent', () => {
  let component: ProDesignsComponent;
  let fixture: ComponentFixture<ProDesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProDesignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
