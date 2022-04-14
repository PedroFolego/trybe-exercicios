const readLine = require('readline-sync');

const sortGame = () => {
  const numberRandom =  Math.floor(Math.random() * 10);
  
  const numberAsk = readLine.question('Adivinhe um número de 1 a 10\nR:');

  if (numberAsk == numberRandom) { 
    console.log('Você acertou!'); 
  } else { 
    console.log(`Você errou! O número era ${numberRandom}.`); 
  }

  const repeatGame = readLine.question('Quer jogar novamente? (s) ou (n)\nR:');

  if (repeatGame === 's') return sortGame();
}

sortGame();

