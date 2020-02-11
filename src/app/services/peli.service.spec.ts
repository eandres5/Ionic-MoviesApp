import { TestBed } from '@angular/core/testing';

import { PeliService } from './peli.service';

describe('PeliService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeliService = TestBed.get(PeliService);
    expect(service).toBeTruthy();
  });
});
