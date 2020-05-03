import { TestBed } from '@angular/core/testing';

import { TeamsDataService } from './teams-data.service';

describe('TeamsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamsDataService = TestBed.get(TeamsDataService);
    expect(service).toBeTruthy();
  });
});
