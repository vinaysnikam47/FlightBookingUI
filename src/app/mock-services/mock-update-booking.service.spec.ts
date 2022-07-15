import { TestBed } from '@angular/core/testing';

import { MockUpdateBookingService } from './mock-update-booking.service';

describe('MockUpdateBookingService', () => {
  let service: MockUpdateBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockUpdateBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
