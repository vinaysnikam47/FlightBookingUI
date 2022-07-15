import { TestBed } from '@angular/core/testing';

import { BookFlightService } from '../book-flight/book-flight.service';
import { HttpClientModule } from '@angular/common/http';

describe('BookFlightService', () => {
  let service: BookFlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(BookFlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
