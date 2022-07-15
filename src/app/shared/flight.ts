import { Booking } from './booking';

export class Flight{

    private _flightId: string;
    private _aircraftName: string;
    private _fare: number;
    private _availableSeats: number;
    private _status: string;
    private _bookings: Booking[];

    public get flightId(): string {
        return this._flightId;
    }
    public set flightId(value: string) {
        this._flightId = value;
    }
    public get aircraftName(): string {
        return this._aircraftName;
    }
    public set aircraftName(value: string) {
        this._aircraftName = value;
    }
    public get fare(): number {
        return this._fare;
    }
    public set fare(value: number) {
        this._fare = value;
    }
    public get availableSeats(): number {
        return this._availableSeats;
    }
    public set availableSeats(value: number) {
        this._availableSeats = value;
    }
    public get status(): string {
        return this._status;
    }
    public set status(value: string) {
        this._status = value;
    }
    public get bookings(): Booking[] {
        return this._bookings;
    }
    public set bookings(value: Booking[]) {
        this._bookings = value;
    }
}