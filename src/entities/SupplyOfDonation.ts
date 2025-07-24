import { Supply } from "./Supply";

export class SupplyOfDonation {
    supply: Supply;
    quantity: number;

    constructor(supply: Supply, quantity: number) {
        this.supply = supply;
        this.quantity = quantity;
    }
}