import { TestBed } from '@angular/core/testing';

import { NearbyMatchesDataService } from './nearby-matches-data.service';

describe('NearbyMatchesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NearbyMatchesDataService = TestBed.get(NearbyMatchesDataService);
    expect(service).toBeTruthy();
  });
});
