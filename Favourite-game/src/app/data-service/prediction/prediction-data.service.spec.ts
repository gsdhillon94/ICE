import { TestBed } from '@angular/core/testing';

import { PredictionDataService } from './prediction-data.service';

describe('PredictionDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PredictionDataService = TestBed.get(PredictionDataService);
    expect(service).toBeTruthy();
  });
});
