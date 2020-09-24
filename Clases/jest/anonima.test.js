test('Probando funciones anónimas', () => {
  jest.mock('./anonima.js');
  jest.mock('./nombrecompleto.js');

  const nombreCompleto = require('./nombrecompleto');

  nombreCompleto.mockImplementation((a, b) => 'Sergio Hidalgo');
  const datosUsuario = {
    nombreUsuarioCompleto: nombreCompleto('Ivan', 'Cáceres'),
  };

  const edad = require('./anonima');

  edad.mockImplementationOnce(() => 60); // [ fn1]
  edad.mockImplementationOnce(() => 25); // [ fn1, fn2]
  edad.mockImplementation(() => 100); // [ fn1, fn2, fn3]
  edad.mockImplementation(() => 200); // [ fn1, fn2, fn4]

  expect(edad()).toBe(60); // [fn2, fn4]
  expect(edad()).toBe(25); // [fn4]
  expect(edad()).toBe(200); // [fn4]
  expect(edad()).toBe(200); // [fn4]
  expect(edad()).toBe(200);// [fn4]

  expect(nombreCompleto().toUpperCase()).toBe('SERGIO HIDALGO');
  expect(datosUsuario).toEqual({ nombreUsuarioCompleto: 'Sergio Hidalgo' });
};);
