import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorebelowComponent } from './morebelow.component';

describe('MorebelowComponent', () => {
  let component: MorebelowComponent;
  let fixture: ComponentFixture<MorebelowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorebelowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorebelowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
