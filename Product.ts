export class Product {
    private _code: number;
    private _name: string;
    private _type: string;
    private _price: number;
    private _quantity: number;
    private _creationDate: string;
    private _description: string;


    constructor(code: number, name: string, type: string, price: number, quantity: number, creationDate: string, description: string) {
        this._code = code;
        this._name = name;
        this._type = type;
        this._price = price;
        this._quantity = quantity;
        this._creationDate = creationDate;
        this._description = description;
    }

    get code(): number {
        return this._code;
    }

    set code(value: number) {
        this._code = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    get creationDate(): string {
        return this._creationDate;
    }

    set creationDate(value: string) {
        this._creationDate = value;
    }


    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}