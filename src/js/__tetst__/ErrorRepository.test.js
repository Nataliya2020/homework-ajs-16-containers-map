import ErrorRepository from '../ErrorRepository';

test(('checking the output of the error text'), () => {
  const error = new ErrorRepository();
  error.map.set(1, 'error1');
  error.map.set(2, 'error2');
  error.map.set(3, 'error3');

  expect(error.translate(1)).toBe('error1');
});

test(('checking the error output'), () => {
  const error = new ErrorRepository();
  error.map.set(1, 'error1');
  error.map.set(2, 'error2');
  error.map.set(3, 'error3');

  expect(error.translate(4)).toBe('Unknown error');
});
