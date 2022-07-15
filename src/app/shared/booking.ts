export class Booking{

    private _bookingId: number;
    private _passengerName: string;
    private _noOfTickets: number;
    private _bookingCost: number;
    private _customerId: string;
    private _flightId: string;

    public get bookingId(): number {
        return this._bookingId;
    }
    public set bookingId(value: number) {
        this._bookingId = value;
    }
    public get passengerName(): string {
        return this._passengerName;
    }
    public set passengerName(value: string) {
        this._passengerName = value;
    }
    public get noOfTickets(): number {
        return this._noOfTickets;
    }
    public set noOfTickets(value: number) {
        this._noOfTickets = value;
    }
    public get bookingCost(): number {
        return this._bookingCost;
    }
    public set bookingCost(value: number) {
        this._bookingCost = value;
    }
    public get customerId(): string {
        return this._customerId;
    }
    public set customerId(value: string) {
        this._customerId = value;
    }
    public get flightId(): string {
        return this._flightId;
    }
    public set flightId(value: string) {
        this._flightId = value;
    }

}