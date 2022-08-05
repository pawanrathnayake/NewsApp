import { TestBed } from '@angular/core/testing';

import { NewsapisericesService } from './newsapiserices.service';

describe('NewsapisericesService', () => {
  let service: NewsapisericesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsapisericesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
