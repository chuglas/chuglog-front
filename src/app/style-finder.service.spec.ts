import { TestBed, inject } from '@angular/core/testing';

import { StyleFinderService } from './style-finder.service';

describe('StyleFinderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StyleFinderService]
    });
  });

  it('should ...', inject([StyleFinderService], (service: StyleFinderService) => {
    expect(service).toBeTruthy();
  }));
});
