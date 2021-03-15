import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesblurbComponent } from './gamesblurb.component';

describe('GamesblurbComponent', () => {
  let component: GamesblurbComponent;
  let fixture: ComponentFixture<GamesblurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesblurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesblurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
