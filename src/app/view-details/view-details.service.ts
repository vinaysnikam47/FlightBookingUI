import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../shared/flight';
import { Booking } from '../shared/booking';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ViewDetailsService {

  flightUrl:string = "http://localhost:5564/flights/";
  deleteUrl:string = "http://localhost:5564/flights/delete/";
  bookingsUrl:string = "http://localhost:5564/flights/bookings";

  constructor(private http:HttpClient) { }

  view():Observable<Flight[]>{
    return this.http.get<Flight[]>(this.flightUrl).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  deleteBooking(bookingId:number):Observable<any>{
    return this.http.delete<any>(this.deleteUrl + bookingId).pipe(
      catchError(this.handleError)
    );
  }

  viewBookings():Observable<Booking[]>{
    return this.http.get<Booking[]>(this.bookingsUrl).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error){
    return throwError(error.error.message || "Server Error");
  }
}
