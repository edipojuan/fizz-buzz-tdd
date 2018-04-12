const fizzBuzz = numero => {
  if (numero % 3 === 0) return 'Fizz';
  if (numero % 5 === 0) return 'Buzz';
  if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
};

export default fizzBuzz;
