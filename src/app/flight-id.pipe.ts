import { Pipe, PipeTransform } from '@angular/core';
import { Booking } from './shared/booking';

@Pipe({
  name: 'flightId'
})
export class FlightIdPipe implements PipeTransform {

  transform(value: Booking[], args: string): Booking[] {
    if(args == ""){
      return value;
    }
    else{
      return value.filter(bookings => bookings.flightId == args);
    }
  }

}
