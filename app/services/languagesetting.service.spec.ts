import { TestBed } from '@angular/core/testing';

import { LanguagesettingService } from './languagesetting.service';

describe('LanguagesettingService', () => {
  let service: LanguagesettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguagesettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
