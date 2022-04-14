const readLine = require('readline-sync');

const chooseApp = () => {
  const options = readLine.question('Qual app gostaria de usar?\n1: IMC\n2: Calcular a velocidade do carro\n3: Adivinhe o número\n~');
  if (options == 1) require('./imc.js');
  if (options == 2) require('./velocidade');
  if (options == 3) require('./sorteio');

}

chooseApp();
