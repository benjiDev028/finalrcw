import { TestBed } from '@angular/core/testing';

import { CriminelsService } from './criminels.service';

describe('CriminelsService', () => {
  let service: CriminelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriminelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
