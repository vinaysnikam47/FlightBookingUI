import { Component, OnInit } from '@angular/core';
import { Flight } from '../shared/flight';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BookFlightService } from './book-flight.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  errorMessage:string;
  successMessage:string;
  flightDetails:Flight;
  bookingForm:FormGroup;
  check:boolean = false;

  constructor(private formBuilder:FormBuilder, private bookFlightService:BookFlightService) { }

  ngOnInit(): void {
  }

  book(){
    this.errorMessage = null;
    this.successMessage = null;
    this.check = false;
    this.bookFlightService.bookFlight(this.bookingForm.getRawValue()).subscribe(
      success => {this.successMessage = success.response; this.check = true;},
      error => this.errorMessage = error
    );
    
  }

  showForm(flight){
    this.successMessage = null;
    this.errorMessage = null;
    this.flightDetails = flight;
    window.scrollTo(0, 1000);
    this.bookingForm = this.formBuilder.group({
      passengerName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      noOfTickets: ['', [Validators.required, Validators.min(1)]],
      flightId: [{value:this.flightDetails.flightId, disabled:true}],
      customerId: ['', [Validators.required, this.validateCustomerId]]
    });
  }

  validateCustomerId(c: FormControl){
    let regex = /^[A-Z][1-9][0-9]{3}$/;
    if(regex.test(c.value)){
      return null;
    }
    else{
      return {customerIdErr: { message: 'Enter a valid Customer Id(E.g., R1001)'}};
    }
  }

}
