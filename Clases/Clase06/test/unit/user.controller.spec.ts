import 'reflect-metadata';
import { UserController } from '../../src/controllers';
import UserRepository from '../../src/repositories/user.repository';
import mockUsers from '../mocks/users.json';
import * as httpMock from 'node-mocks-http';

let req: any;
let res: any;

beforeEach(() => {
  (req = httpMock.createRequest()), (res = httpMock.createResponse());
});

describe('user.controller.ts', () => {
  it('getAll', async () => {
    (UserRepository as jest.Mock) = jest.fn().mockReturnValue({
      getAll: jest.fn().mockResolvedValue(mockUsers),
    });

    const userRepository = new UserRepository();
    const userController = new UserController(userRepository);

    userController.getAll(req, res);

    expect((userRepository.getAll as jest.Mock).mock.calls.length).toBe(1);
    expect(
      (await (userRepository.getAll as jest.Mock).mock.results[0].value)[0]
    ).toEqual(mockUsers[0]);
  });
});
