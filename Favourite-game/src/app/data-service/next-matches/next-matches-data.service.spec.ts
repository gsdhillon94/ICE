import { TestBed } from '@angular/core/testing';

import { NextMatchesDataService } from './next-matches-data.service';

describe('NextMatchesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NextMatchesDataService = TestBed.get(NextMatchesDataService);
    expect(service).toBeTruthy();
  });
});
