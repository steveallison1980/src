import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitletextComponent } from './titletext.component';

describe('TitletextComponent', () => {
  let component: TitletextComponent;
  let fixture: ComponentFixture<TitletextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitletextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitletextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
