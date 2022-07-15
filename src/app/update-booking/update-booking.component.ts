import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UpdateBookingService } from "./update-booking.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit {

  updateBookingForm:FormGroup;
  bookingId:number;
  flightId:string;
  successMessage:string;
  errorMessage:string;

  constructor(private formBuilder:FormBuilder, private updateBookingService:UpdateBookingService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.bookingId = params['bookingId'];
      this.flightId = params['flightId'];
    });
    this.updateBookingForm = this.formBuilder.group({
      bookingId: [{value:this.bookingId, disabled:true}],
      noOfTickets: ['', [Validators.required, Validators.min(1)]],
      flightId: [{value:this.flightId, disabled:true}]
    });
  }

  updateBooking(){
    this.successMessage = null;
    this.errorMessage = null;
    this.updateBookingService.updateBooking(this.updateBookingForm.getRawValue()).subscribe(
      success => this.successMessage = success.response,
      error => this.errorMessage = error
    );
  }

}
