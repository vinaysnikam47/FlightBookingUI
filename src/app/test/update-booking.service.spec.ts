import { TestBed } from '@angular/core/testing';

import { UpdateBookingService } from '../update-booking/update-booking.service';
import { HttpClientModule } from '@angular/common/http';

describe('UpdateBookingService', () => {
  let service: UpdateBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(UpdateBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
