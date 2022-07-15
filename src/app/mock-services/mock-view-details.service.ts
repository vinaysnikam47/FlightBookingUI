import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../shared/flight';
import { Booking } from '../shared/booking';

@Injectable({
  providedIn: 'root'
})
export class MockViewDetailsService {

  constructor() { }

  view():Observable<Flight[]>{
    let flight = new Flight();
    flight.aircraftName = "JetBlue";
    flight.availableSeats = 10;
    flight.flightId = "IND-101";
    flight.status = "Running";
    flight.fare = 600;
    let bookingArray:Booking[] = []; 
    let b1 = new Booking();
    b1.bookingCost = 1200;
    b1.bookingId = 2010;
    b1.customerId = "S1001";
    b1.flightId = "IND-101";
    b1.noOfTickets = 2;
    b1.passengerName = "Vinay";
    bookingArray.push(b1);
    flight.bookings = bookingArray;

    let flightArray:Flight[] = [];
    flightArray.push(flight);
    return of(flightArray);
  }
}
