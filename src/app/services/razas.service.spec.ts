import { TestBed } from '@angular/core/testing';

import { RazasService } from './razas.service';

describe('RazasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RazasService = TestBed.get(RazasService);
    expect(service).toBeTruthy();
  });
});
