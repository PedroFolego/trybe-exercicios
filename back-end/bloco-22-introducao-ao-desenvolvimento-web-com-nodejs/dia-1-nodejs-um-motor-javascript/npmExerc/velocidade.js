const readLine = require('readline-sync');

const velocidadeCarro = () => {
  const distancia = readLine.question('Qual a distância que o carro percorreu em metros?\nR:');
  const tempo = readLine.question('Em quanto tempo em segundos?\nR:');

  console.log(`A velocidade média do carro foi de ${distancia / tempo}`);
}

velocidadeCarro();