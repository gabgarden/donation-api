import { Supply } from "./Supply";
import { User } from "./User";
import { DonationStatus } from "../enums/DonationStatus";

export class Donation{
    id: string;
    requester: User;
    message: string;
    createdAt: Date;
    status: DonationStatus = DonationStatus.PENDING;
    supplies: { supplyId: string; quantity: number }[];

    constructor(id: string, requester: User, message: string, createdAt: Date) {
        this.id = id;
        this.requester = requester;
        this.message = message;
        this.createdAt = createdAt;
    }
}

