import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFlightComponent } from '../book-flight/book-flight.component';
import { ViewFlightsComponent } from '../view-flights/view-flights.component';
import { MockBookFlightService } from '../mock-services/mock-book-flight.service';
import { BookFlightService } from '../book-flight/book-flight.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Flight } from '../shared/flight';
import { Booking } from '../shared/booking';

describe('BookFlightComponent', () => {
  let component: BookFlightComponent;
  let fixture: ComponentFixture<BookFlightComponent>;
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFlightComponent, ViewFlightsComponent ],
      imports: [ReactiveFormsModule, HttpClientModule],
      providers: [{provide:BookFlightService, useclass:MockBookFlightService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    component.showForm(flight);
    fixture.detectChanges();
    expect(component.bookingForm.valid).toBeFalsy();
  });

  it('should check fields required validation', () => {
    component.showForm(flight);
    let errorPassengerName = component.bookingForm.controls.passengerName.errors;
    let errorNoOfTickets = component.bookingForm.controls.noOfTickets.errors;
    let errorCustomerId = component.bookingForm.controls.customerId.errors;
    expect(errorPassengerName['required']).toBeTruthy();
    expect(errorNoOfTickets['required']).toBeTruthy();
    expect(errorCustomerId['required']).toBeTruthy();
  });

  it('should check value of flight Id in booking form is by default', () => {
    component.showForm(flight);
    expect(component.bookingForm.controls.flightId.value).toEqual("IND-101");
  });

  it('should check for passenger Name pattern error', () => {
    component.showForm(flight);
    let passengerName = component.bookingForm.controls['passengerName'];
    passengerName.setValue('dd1');
    let errorPassengerName = passengerName.errors || {};
    fixture.detectChanges();
    expect(errorPassengerName['pattern']).toBeTruthy();
  });

  it('should check for minimum number of tickets error', () => {
    component.showForm(flight);
    let noOfTickets = component.bookingForm.controls['noOfTickets'];
    noOfTickets.setValue(-2);
    let errorNoOfTickets = noOfTickets.errors || {};
    fixture.detectChanges();
    expect(errorNoOfTickets['min']).toBeTruthy();
  });

  it('should check customerId validity error', () => {
    component.showForm(flight);
    let customerId = component.bookingForm.controls['customerId'];
    customerId.setValue('Q0101');
    let errorCustomerId = customerId.errors || {};
    fixture.detectChanges();
    expect(errorCustomerId['customerIdErr'].message.trim()).toEqual("Enter a valid Customer Id(E.g., R1001)");
  });

});
