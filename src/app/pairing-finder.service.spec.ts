import { TestBed, inject } from '@angular/core/testing';

import { PairingFinderService } from './pairing-finder.service';

describe('PairingFinderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PairingFinderService]
    });
  });

  it('should ...', inject([PairingFinderService], (service: PairingFinderService) => {
    expect(service).toBeTruthy();
  }));
});
