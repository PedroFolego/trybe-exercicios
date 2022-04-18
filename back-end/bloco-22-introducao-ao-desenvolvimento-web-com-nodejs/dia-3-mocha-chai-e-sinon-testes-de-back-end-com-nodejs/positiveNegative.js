const positiveNegative = (number) => {
  try {
    if(number > 0) return 'positivo';
    if(number < 0) return 'negativo';
    if(number === 0) return 'neutro';
    throw new Error;
  } catch (error) {
    return 'Digite um número';
  }
}

module.exports = positiveNegative;