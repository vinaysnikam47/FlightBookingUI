import { TestBed } from '@angular/core/testing';

import { MockViewDetailsService } from './mock-view-details.service';

describe('MockViewDetailsService', () => {
  let service: MockViewDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockViewDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
