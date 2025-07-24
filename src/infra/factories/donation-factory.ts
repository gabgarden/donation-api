import { DonationController } from '../../controllers/donation-controller';

import { DonationRepository } from '../../repositories/donation-repository';

import { DonationUseCase } from '../../domain/usecases/donation-usecase';

export function DonationFactory() {
  const repository = new DonationRepository();
  const useCase = new DonationUseCase(repository);
  const controller = new DonationController(useCase);

  return controller;
}
