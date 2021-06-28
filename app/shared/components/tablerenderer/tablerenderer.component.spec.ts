import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablerendererComponent } from './tablerenderer.component';

describe('TablerendererComponent', () => {
  let component: TablerendererComponent;
  let fixture: ComponentFixture<TablerendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablerendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablerendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
