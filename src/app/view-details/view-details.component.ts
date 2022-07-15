import { Component, OnInit } from '@angular/core';
import { Booking } from '../shared/booking';
import { Flight } from '../shared/flight';
import { ViewDetailsService } from './view-details.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {


  bookings:Booking[];
  flightDetails:Flight[];
  custId:string = "";
  flightId:string = "";
  errorMessage:string;
  deleteSuccessMessage:string;
  deleteErrorMessage:string;

  constructor(private viewDetailsService:ViewDetailsService) { }

  ngOnInit(): void {
    this.viewAllBookings();
  }

  viewAllBookings(){
    this.viewDetailsService.viewBookings().subscribe(
      bookings => this.bookings = bookings,
      error => this.errorMessage = error
    )
  }

  delete(bookingId:number){
    this.deleteSuccessMessage = null;
    this.deleteErrorMessage = null;
    this.viewDetailsService.deleteBooking(bookingId).subscribe(
      success => this.deleteSuccessMessage = success.response,
      error => this.deleteErrorMessage = error
    );
    window.scrollTo(0,0);
    setInterval(function(){
      window.location.reload();
    }, 6000);
  }

}
