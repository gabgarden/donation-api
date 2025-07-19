import { IRepository } from "../contracts/iRepository";
import { Donation } from "../entities/Donation"; // Adjust the path as needed

export class DonationRepository implements IRepository<Donation>{

    async get(id: string): Promise<Donation | Error> {
        // Implement logic to get a donation by ID
        throw new Error("Method not implemented.");
    }

    async getAll(): Promise<Donation[] | Error> {
        // Implement logic to get all donations
        throw new Error("Method not implemented.");
    }


    async create(item: Donation): Promise<Donation | Error> {
        // Implement logic to create a new donation
        throw new Error("Method not implemented.");
    }

   async delete(id: string): Promise<Donation | Error> {
        // Implement logic to delete a donation by ID
        throw new Error("Method not implemented.");
    }

    

}