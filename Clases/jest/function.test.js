const { TestScheduler } = require('jest');
const forEach = require('./function');
const mockCallback = jest.fn((x) => x + 1);

test('Testing callback', () => {
  const lista = [3, 4];
  forEach(lista, mockCallback);

  expect(mockCallback.mock.calls.length).toBe(lista.length);
  expect(mockCallback.mock.calls[0][0]).toBe(lista[0]);
  expect(mockCallback.mock.calls[1][0]).toBe(lista[1]);

  expect(mockCallback.mock.results[0].value).toBe(lista[0] + 1);
  expect(mockCallback.mock.results[1].value).toBe(lista[1] + 1);
  // console.log(mockCallback.mock);
});

test('Async values', async () => {
  const mockFind = jest.fn();
  mockFind.mockResolvedValue(30);

  const valueReturned = await mockFind();

  expect(valueReturned).toBe(30);
});

test('Probando controlador', async () => {
  const users = ['usuario1', 'usuario2', 'usuario3'];
  const getRepository = jest.fn().mockReturnValue({
    find: jest.fn().mockResolvedValue(users),
  });

  const userRepository = getRepository();
  const listUsers = await userRepository.find();

  expect(listUsers).toEqual(users);
});

/* const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(30), 0)
}) */
