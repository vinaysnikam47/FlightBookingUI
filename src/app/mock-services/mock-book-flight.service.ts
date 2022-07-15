import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MockBookFlightService {

  constructor() { }

  bookFlight(data:any):Observable<any>{
    return of({response: "Booking Successful!"});
  }
}
