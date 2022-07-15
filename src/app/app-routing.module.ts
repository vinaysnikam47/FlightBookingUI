import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';

const routes: Routes = [
  {path:'', redirectTo:'book', pathMatch:'full'},
  {path:'book', component:BookFlightComponent},
  {path:'view', component:ViewDetailsComponent},
  {path:'updateBooking/:bookingId/:flightId', component:UpdateBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
