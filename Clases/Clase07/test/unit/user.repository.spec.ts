import { User } from '../../src/models/';
import { UserRepository } from '../../src/repositories';
import mockUsers from '../mocks/users.json';

User.find = jest.fn().mockReturnValue({
  populate: jest.fn().mockResolvedValue(mockUsers),
});

User.findOne = jest.fn().mockReturnValue({
  populate: jest.fn().mockResolvedValue(mockUsers[0]),
});

describe('user.repository.ts', () => {
  it('getAll', async () => {
    const userRepository = new UserRepository();
    const itemsReturned = await userRepository.getAll();

    expect(itemsReturned.length).toBe(3);
    expect(itemsReturned[0]).toEqual(mockUsers[0]);
    expect(itemsReturned[0].hasOwnProperty('email')).toBeTruthy();
  });

  it('getUserByEmail', async () => {
    const userRepository = new UserRepository();
    const itemReturned = await userRepository.getUserByEmail(
      mockUsers[0].email
    );

    expect(itemReturned).toEqual(mockUsers[0]);
  });
});
