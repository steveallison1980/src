import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrendererComponent } from './listrenderer.component';

describe('ListrendererComponent', () => {
  let component: ListrendererComponent;
  let fixture: ComponentFixture<ListrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListrendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
