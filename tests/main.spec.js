/*
Desafio FizzBuzz
Deve ser escrito uma lib que receba um número e:
  Se o número for divisível por 3, no lugar do número escreva 'Fizz'
  Se o número for divisível por 5, no lugar do número escreva 'Buzz'
  Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz'
  Se não for múltiplo de nada, retorna o número
*/

import { expect } from 'chai';
import fizzBuzz from '../src/main';

describe('FizzBuzz', () => {
  it('deve retornar `Fizz` quando o número informado for multiplo de 3', () => {
    expect(fizzBuzz(3)).to.be.equal('Fizz');
    expect(fizzBuzz(6)).to.be.equal('Fizz');
  });

  it('deve retornar `Buzz` quando o número informado for multiplo de 5', () => {
    expect(fizzBuzz(5)).to.be.equal('Buzz');
  });
});
