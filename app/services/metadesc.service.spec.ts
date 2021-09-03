import { TestBed } from '@angular/core/testing';

import { MetadescService } from './metadesc.service';

describe('MetadescService', () => {
  let service: MetadescService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetadescService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
