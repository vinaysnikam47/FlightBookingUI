import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { ViewFlightsComponent } from './view-flights/view-flights.component';
import { BookingsComponent } from './bookings/bookings.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { CustomerIdPipe } from './customer-id.pipe';
import { FlightIdPipe } from './flight-id.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookFlightComponent,
    ViewFlightsComponent,
    BookingsComponent,
    UpdateBookingComponent,
    ViewDetailsComponent,
    CustomerIdPipe,
    FlightIdPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
