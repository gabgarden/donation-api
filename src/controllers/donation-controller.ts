import { Request, Response } from 'express';

import { IUseCase } from '../contracts/iUseCase';

import { Donation } from '../domain/entities/donation';
import { DonationItem } from '../domain/entities/donation-item';
import { User } from '../domain/entities/user';

export class DonationController {
  usecase: IUseCase<Omit<Donation, 'id' | 'createdAt' | 'status'>>;

  constructor(
    usecase: IUseCase<Omit<Donation, 'id' | 'createdAt' | 'status'>>
  ) {
    this.usecase = usecase;
  }

  public async handle(req: Request, res: Response): Promise<any> {
    const data = req.body as {
      donator: User;
      supplies: DonationItem[];
    };

    await this.usecase.perform(data);
  }
}
