import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateBookingService {

  updateUrl:string = "http://localhost:5564/flights/update/"

  constructor(private http: HttpClient) { }

  updateBooking(data:any):Observable<any>{
    let bookingId:number = data.bookingId;
    return this.http.put<any>(this.updateUrl+bookingId, data).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error){
    return throwError(error.error.message || "Server Error");
  }
}
