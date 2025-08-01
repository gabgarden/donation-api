import { DonationController } from './../../controllers/donation-controller';
import { IUseCase } from 'contracts/iUseCase';
import { Request, Response } from 'express';
import { Donation } from 'domain/entities/donation';

class FakeUseCase implements IUseCase<any> {
  called: boolean = false;

  async perform(data: any) {
    this.called = true;
    return {
      id: '123',
      donator: data.donator,
      supplies: data.supplies,
      createdAt: new Date(),
      status: 'pending',
    };
  }
}

class UseCaseWithError
  implements IUseCase<Omit<Donation, 'id' | 'createdAt' | 'status'> | Error>
{
  async perform(
    data: Omit<Donation, 'id' | 'createdAt' | 'status'>
  ): Promise<Donation | Error> {
    throw new Error('Error test');
  }
}

class ResponseFake {
  statusCode: number = 0;
  jsonData: any = null;
  ended: boolean = false;

  status(code: number) {
    this.statusCode = code;
    return this;
  }

  json(data: any) {
    this.jsonData = data;
    return this;
  }

  end() {
    this.ended = true;
    return this;
  }
}

function makeSUT() {
  const responseFake = new ResponseFake();
  const uc = new FakeUseCase();
  const controller = new DonationController(uc);

  const requestStub = {
    body: {
      donator: {
        name: 'João Silva',
        email: 'joao.silva@email.com',
        address: 'Rua das Flores, 123, Centro, Campos dos Goytacazes - RJ',
        phoneNumber: '+55 22 99999-9999',
      },
      supplies: [
        {
          id: 'supply_001',
          name: 'Cimento Portland 50kg',
          category: 'STRUCTURAL',
        },
        {
          id: 'supply_002',
          name: 'Tinta Acrílica Branca 18L',
          category: 'FINISHING',
        },
      ],
    },
  } as Request;

  return { uc, controller, requestStub, responseFake };
}

describe('Donation Controller', () => {
  it('should create an instance of DonationController', () => {
    const { controller } = makeSUT();

    expect(controller).toBeDefined();
  });

  it('should calls handle method', async () => {
    const { uc, controller, requestStub, responseFake } = makeSUT();

    await controller.handle(requestStub, responseFake as any as Response);

    expect(uc.called).toBe(true);
    expect(responseFake.statusCode).toBe(201);
  });

  it('should return donation data correctly', async () => {
    const { controller, requestStub, responseFake } = makeSUT();

    await controller.handle(requestStub, responseFake as any as Response);

    expect(responseFake.jsonData.donator).toEqual(requestStub.body.donator);
    expect(responseFake.jsonData.supplies).toEqual(requestStub.body.supplies);
    expect(responseFake.jsonData.id).toBeDefined();
    expect(responseFake.jsonData.createdAt).toBeDefined();
    expect(responseFake.jsonData.status).toBe('pending');
  });

  it('should handle errors properly', async () => {
    const responseFake = new ResponseFake();
    const uc = new UseCaseWithError();
    const controller = new DonationController(uc);

    const requestStub = {
      body: {
        donator: { id: '1', name: 'Test' },
        supplies: [],
      },
    } as Request;

    await expect(
      controller.handle(requestStub, responseFake as any as Response)
    ).rejects.toThrow('Error test');
  });
});
