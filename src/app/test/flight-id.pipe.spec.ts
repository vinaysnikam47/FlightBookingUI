import { FlightIdPipe } from '../flight-id.pipe';
import { Booking } from '../shared/booking';

describe('FlightIdPipe', () => {

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
    const pipe = new FlightIdPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return array filtered based on flightId', () => {
    const pipe = new FlightIdPipe();
    expect(pipe.transform(bookingArray, "IND-101").length).toEqual(1);
    expect(pipe.transform(bookingArray, "IND-101")[0].bookingId).toEqual(2010);
  });

  it('should return whole bookingArray if flightId is not provided', () => {
    const pipe = new FlightIdPipe();
    expect(pipe.transform(bookingArray, "").length).toEqual(3);
  });
  
});
