import { SupplyOfDonation } from '../entities/SupplyOfDonation';
import { User } from '../entities/User';
import { makeDonateSupplyUseCase } from '../infra/factories/MakeDonateSupplyUseCase';
import { Request, Response } from 'express';

export class DonateSupplyController {
  private usecase = makeDonateSupplyUseCase();

  public async handle(req: Request, res: Response): Promise<any> {
    const data = req.body as {
      requester: User;
      supplies: SupplyOfDonation[];
    };

    const result = await this.usecase.perform(data);
  }
}
