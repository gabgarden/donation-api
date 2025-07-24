import { DonateSupply } from "../../usecases/DonateSupply";

export function makeDonateSupplyUseCase(): DonateSupply {
    const donateSupplyUseCase = new DonateSupply();
    
    return donateSupplyUseCase;
}   