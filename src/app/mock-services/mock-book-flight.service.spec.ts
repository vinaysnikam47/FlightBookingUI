import { TestBed } from '@angular/core/testing';

import { MockBookFlightService } from './mock-book-flight.service';

describe('MockBookFlightService', () => {
  let service: MockBookFlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockBookFlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
