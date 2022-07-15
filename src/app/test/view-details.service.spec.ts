import { TestBed } from '@angular/core/testing';

import { ViewDetailsService } from '../view-details/view-details.service';
import { HttpClientModule } from '@angular/common/http';

describe('ViewDetailsService', () => {
  let service: ViewDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(ViewDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
