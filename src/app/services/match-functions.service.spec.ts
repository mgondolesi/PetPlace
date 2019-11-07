import { TestBed } from '@angular/core/testing';

import { MatchFunctionsService } from './match-functions.service';

describe('MatchFunctionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchFunctionsService = TestBed.get(MatchFunctionsService);
    expect(service).toBeTruthy();
  });
});
