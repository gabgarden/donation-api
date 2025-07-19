import { Donation } from "../entities/Donation";

interface DonateSupplyRequest {
    requesterId: string;
    supplies: { [materialId: string]: number };
}