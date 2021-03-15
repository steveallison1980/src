import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactinfotableComponent } from './contactinfotable.component';

describe('ContactinfotableComponent', () => {
  let component: ContactinfotableComponent;
  let fixture: ComponentFixture<ContactinfotableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactinfotableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactinfotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
