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
  it('deve retornar `Fizz` quando o número informado for múltiplo de 3', () => {
    expect(fizzBuzz(3)).to.be.equal('Fizz');
    expect(fizzBuzz(6)).to.be.equal('Fizz');
  });

  it('deve retornar `Buzz` quando o número informado for múltiplo de 5', () => {
    expect(fizzBuzz(5)).to.be.equal('Buzz');
    expect(fizzBuzz(10)).to.be.equal('Buzz');
  });

  it('deve retornar `FizzBuzz` quando o número informado for múltiplo de 3 e 5', () => {
    expect(fizzBuzz(15)).to.be.equal('FizzBuzz');
    expect(fizzBuzz(45)).to.be.equal('FizzBuzz');
  });

  it('deve retornar o número informado quando o mesmo não for múltiplo de 3 e nem 5', () => {
    expect(fizzBuzz(7)).to.be.equal(7);
  });

  it('deve retornar zero quando o número informado for 0', () => {
    expect(fizzBuzz(0)).to.be.equal(0);
  });
});
