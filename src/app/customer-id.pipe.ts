import { Pipe, PipeTransform } from '@angular/core';
import { Booking } from './shared/booking';

@Pipe({
  name: 'customerId'
})
export class CustomerIdPipe implements PipeTransform {

  transform(value: Booking[], args: string): Booking[] {
    if(args == ""){
      return value;
    }
    else{
      return value.filter(booking => booking.customerId == args);
    }
  }

}
