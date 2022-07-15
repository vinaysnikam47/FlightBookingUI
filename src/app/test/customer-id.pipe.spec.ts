import { CustomerIdPipe } from '../customer-id.pipe';
import { Booking } from '../shared/booking';
import { pipe } from 'rxjs';

describe('CustomerIdPipe', () => {

  let bookingArray:Booking[] = [];
  let b1 = new Booking();
  b1.bookingCost = 1200;
  b1.bookingId = 2010;
  b1.customerId = "S1001";
  b1.flightId = "IND-101";
  b1.noOfTickets = 2;
  b1.passengerName = "Vinay";

  let b2 = new Booking();
  b2.bookingCost = 1200;
  b2.bookingId = 2011;
  b2.customerId = "G1001";
  b2.flightId = "IND-102";
  b2.noOfTickets = 1;
  b2.passengerName = "Vivek";

  let b3 = new Booking();
  b3.bookingCost = 1200;
  b3.bookingId = 2013;
  b3.customerId = "S1001";
  b3.flightId = "IND-102";
  b3.noOfTickets = 1;
  b3.passengerName = "Mammi";

  bookingArray.push(b1,b2,b3);

  it('create an instance', () => {
    const pipe = new CustomerIdPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return bookings with matching customerId', () => {
    const pipe = new CustomerIdPipe();
    expect(pipe.transform(bookingArray, 'S1001').length).toEqual(2);
    expect(pipe.transform(bookingArray, "S1001")[0].bookingId).toEqual(2010);
    expect(pipe.transform(bookingArray, "S1001")[1].bookingId).toEqual(2013);
  });

  it('should return same array when customer id is not given', () => {
    const pipe = new CustomerIdPipe();
    expect(pipe.transform(bookingArray, "").length).toEqual(3);
  });

  
});
