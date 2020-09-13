const sum = require('./sum');

test('add 1 + 2 equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('add 2 + 4 equal 6', () => {
  expect(sum(2, 4)).toBe(6);
});

test('json', () => {
  const obj = { a: 1 };
  obj.b = 2;

  expect(obj).toEqual({ a: 1, b: 2 });
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBeGreaterThan(18);
    }
  }
});

test('null', () => {
  const nulo = null;
  expect(nulo).toBeNull();
  expect(nulo).toBeDefined();
  expect(nulo).not.toBeUndefined();
  expect(nulo).not.toBeTruthy();
  expect(nulo).toBeFalsy();
});

test('country', () => {
  const countries = ['PE', 'CO', 'BO', 'GT', 'US'];
  const countryEntered = 'EU';

  expect(countries).not.toContain(countryEntered);
});
