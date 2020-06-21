import { TestBed } from '@angular/core/testing';

import { SearchinteractionService } from './searchinteraction.service';

describe('SearchinteractionService', () => {
  let service: SearchinteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchinteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
