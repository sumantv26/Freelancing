import { TestBed } from '@angular/core/testing';

import { DevdataService } from './devdata.service';

describe('DevdataService', () => {
  let service: DevdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
