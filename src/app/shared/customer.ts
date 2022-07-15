export class Customer{

    private _customerId: string;
    private _customerName: string;
    private _walletAmount: number;
    private _customerType: string;

    public get customerId(): string {
        return this._customerId;
    }
    public set customerId(value: string) {
        this._customerId = value;
    }
    public get customerName(): string {
        return this._customerName;
    }
    public set customerName(value: string) {
        this._customerName = value;
    }
    public get walletAmount(): number {
        return this._walletAmount;
    }
    public set walletAmount(value: number) {
        this._walletAmount = value;
    }
    public get customerType(): string {
        return this._customerType;
    }
    public set customerType(value: string) {
        this._customerType = value;
    }


}