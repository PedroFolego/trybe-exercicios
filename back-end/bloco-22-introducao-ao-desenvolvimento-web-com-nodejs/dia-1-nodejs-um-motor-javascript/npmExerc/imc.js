const readlineSync = require('readline-sync');

const imcMesure = () => {
  const weigth = readlineSync.question('How much do you weight?\nR:');
  const height = readlineSync.questionFloat('How tall are you?\nR:');

  const imc = (weigth / height ** 2).toFixed(2);

  let result = 'Obesidade grau III e IV';
  if (imc < 39.9) result = 'Obesidade grau II';
  if (imc < 34.9) result = 'Obesidade grau I';
  if (imc < 29.9) result = 'Acima do peso (sobrepeso)' ;
  if (imc < 24.9) result = 'Peso normal';
  if (imc < 18.5) result = 'Abaixo do peso (magreza)';

  return console.log(`Seu IMC é ${imc} e sua situação é ${result}`);
};

imcMesure();