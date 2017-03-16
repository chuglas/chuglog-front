import { TestBed, inject } from '@angular/core/testing';

import { BrandFinderService } from './brand-finder.service';

describe('BrandFinderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrandFinderService]
    });
  });

  it('should ...', inject([BrandFinderService], (service: BrandFinderService) => {
    expect(service).toBeTruthy();
  }));
});
