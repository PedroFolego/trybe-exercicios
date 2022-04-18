const { expect } = require('chai');
const positiveNegative = require('../positiveNegative');

describe('Funçao negativo positivo', () => {
  describe('Quando o numero passa sendo', () => {
    it('positivo', () => {
      const results = positiveNegative(5);

      expect(results).to.be.equals('positivo');
    })
    it('negativo', () => {
      const results = positiveNegative(-2);

      expect(results).to.be.equals('negativo');
    })
    it('neutro', () => {
      const results = positiveNegative(0);

      expect(results).to.be.equals('neutro');
    })
  })
  describe('Quando não passa', () => {
    it('sendo uma string', () => {
      const results = positiveNegative('dfdf');
      expect(results).to.be.equals('Digite um número');
    })
  })
})