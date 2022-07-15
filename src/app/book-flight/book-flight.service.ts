import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookFlightService {

  bookUrl = "http://localhost:5564/flights/book";

  constructor(private http:HttpClient) { }

  bookFlight(data:any):Observable<any>{
    return <Observable<any>>this.http.post(this.bookUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error){
    return throwError(error.error.message || "Server Error");
  }
}
