import { TestBed } from '@angular/core/testing';

import { DisplayusersService } from './displayusers.service';

describe('DisplayusersService', () => {
  let service: DisplayusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
