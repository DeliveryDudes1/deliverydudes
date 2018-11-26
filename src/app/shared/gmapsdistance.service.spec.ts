import { TestBed } from '@angular/core/testing';

import { GmapsdistanceService } from './gmapsdistance.service';

describe('GmapsdistanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmapsdistanceService = TestBed.get(GmapsdistanceService);
    expect(service).toBeTruthy();
  });
});
