import { TestBed } from '@angular/core/testing';

import { HelpseekerService } from './helpseeker.service';

describe('HelpseekerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelpseekerService = TestBed.get(HelpseekerService);
    expect(service).toBeTruthy();
  });
});
