import { TestBed } from '@angular/core/testing';

import { GetpackageService } from './getpackage.service';

describe('GetpackageService', () => {
  let service: GetpackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetpackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
