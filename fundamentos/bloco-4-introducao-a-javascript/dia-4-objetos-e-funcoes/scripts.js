/* let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medal: {
    golden: 2,
    silver: 3
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
} */
/* 
console.log('A jogadora foi campeã ' + player.bestInTheWorld.length);
console.log(player.bestInTheWorld[2] , player.medal.silver) */

/* let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge'
};

for (let i in names) {
  console.log('Ola ' + names[i]);
}
 */
/* let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
 console.log(car); */
/* for (i in car) {
  console.log( i + ' ' + car[i])
}; */

/* let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};
 */
//1
/* console.log('Bem-vinda,', info.personagem); */

//2
//console.log(info.recorrente);

//3

/* for(key in info) {
  console.log(key);
} */

//4
/* for(key in info) {
  console.log(info[key]);
}; */

//5
/* let info2  = {

personagem: ' e Tio Patinhas',
origem:" e Christmas on Bear Mountain, Dell's Four Color Comics #178",
nota: ' e O iltimo MacPatinhas',
recorrente: 'Sim',
}

for(key in info) {

  if ( key === 'recorrente' && info.recorrente == 'Sim' && info2.recorrente == 'Sim' ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[key] + ' e ' + info2[key]);
  }
}; */

//Função 

//1
/* function ehPalindromo(palavra) {
  
  let palavraOposta = '';

  for(i = palavra.length -1; i >= 0; i -= 1){
    palavraOposta += palavra[i];
  }

  if (palavra == palavraOposta) {
    return console.log(true);
  } else {
    return console.log(false);

  }
}

ehPalindromo('abacaxi'); */

//2
/* let arrayMaior = [2, 3, 6, 7, 100, 1];
function maiorNumero(numero) {
  
  let comparacao = 0;

  for (n in numero) {

    if (comparacao < arrayMaior[n]) {
      comparacao = n;
    }
  }
  return console.log(comparacao);
};

maiorNumero(arrayMaior);
 */

//3
/* let array = [2, 4, -6, 7, 10, 4, -3];
function indexMinNumber(array) {
  let indi = 0
  for(i of array) {
    if (indi < i) {
      indi = i;
    }
  };
  let indice;
  for(let j in array) {
    if(array[j] < indi ) {
      indi = array[j];
      indice = j;
    }
  }
  return console.log(indice);
};

indexMinNumber(array); */


//4

/* let array = ['José', 'Lucas', 'Nádila', 'Fernanda', 'Cairo', 'Joana']; 

function nomeMaior(array) {

  let quantCaracter = [];

  for (let i of array) {
    let numero = 0;
    for( let j of i ) {
      numero += 1; 
    }
    quantCaracter.push(numero);
  }
  let quant = 0;
  let indice;
  for(n in quantCaracter) {
    if(quant < quantCaracter[n]) {
      quant = quantCaracter[n];
      indice = n;
    }
  }

  return console.log(array[indice])
}

nomeMaior(array); */

//5
/* let array = [2, 3, 2, 5, 8, 2, 3, 3];
function repeteco(array) {
  let arrayContador = [];
  
  for(let i = 0; i <= array.length; i++) {
    let numeroRepetido = 0;
    for (let j = 0; j <= array.length; j++){
      if (array[i] == array[j]) {
        numeroRepetido += 1;
      };
    };
    arrayContador.push(numeroRepetido);
  }
  let numeroDeVezes = 0;
  let posicao;
  for (d of arrayContador) {
    if (arrayContador[d] > numeroDeVezes) {
      numeroDeVezes = arrayContador[d]
      posicao = d;
    }
  }
  return console.log(array[posicao]);
};

repeteco(array);
 */


//6

/* function somatorio(num) {
  let soma = 0;
  for(i = 1; i <= num; i++ ) {
    soma = soma + i ;
  }
  return console.log(soma);
};

somatorio(5); */


//7


/* function verifica(string1, string2) {
  let primeiraPalavra = '';
  let segundaPalavra = '';
  for (i = string1.length - 2; i < string1.length; i++) {
    primeiraPalavra += string1[i];
  }

  for (j = string2.length - 2; j < string2.length; j++) {
    segundaPalavra += string2[j];
  }

  if (primeiraPalavra === segundaPalavra) {
   return console.log(true);
  } else {
    return console.log(false);
  }
}

verifica('pedro', 'ro'); */


//Bonus
//1

/* function numberRoman(string) {
  let = numberTranform = [];
  for (i = 0; i < string.length; i += 1) {
    
    switch (string[i]) {
      case 'I':
        numberTranform.push(1);
        break;
      case 'V':
        numberTranform.push(5);
        break;
      case 'X':
        numberTranform.push(10);
        break;
      case 'L':
        numberTranform.push(50);
        break;
      case 'C':
        numberTranform.push(100);
        break;
      case 'D':
        numberTranform.push(500);
        break;
      case 'M':
        numberTranform.push(1000);
        break;
    }
  }

    let result = numberTranform[0];
    if (result >= numberTranform[1] ) {
      for (j = 1; j < numberTranform.length; j += 1){
        result += numberTranform[j];
    }
    } else {
      for (j = 1; j < numberTranform.length; j += 1){
        result = numberTranform[j] - result;
    }
  }
  return console.log(result);
}
numberRoman('IX'); */

//2

/* function arrayOfNumbers(array) {
  let numberPar = [];

  for (let i = 0; i < array.length; i++) {
    let number = array[i];

    for (j = 0; j < number.length; j += 1) {

      if (number[j] % 2 == 0) {
        numberPar.push(number[j]);
      };
    };
  };
  console.log(numberPar);
};


let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];
arrayOfNumbers(vector); */

//3 melancia, abacate, uva, laranja, jaca, pera, 

/* const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

function numberOfFruit(array) {
  let result = {};

  for (i = 0; i < array.length; i++) {
    let fruit = array[i];
    if (!result[fruit]) result[fruit] = 0;
    result[fruit] += 1;
  }

  let summaries = [];
  for (fruit in result) {
    let message = `${result[fruit]} ${fruit}`;
    if (result[fruit] > 1) message += 's';
    summaries.push(message);
  }

  console.log(`Sua cesta poussui: ${summaries.join(', ')}.`);
};

numberOfFruit(basket);
 */
//exercício 1:
// Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer
// essa função deve receber dois parâmetros: base e altura
// e retornar um objeto no formato: 
// { area: 0, perimetro: 0 }
// perimetro = (2*base) + (2*altura)
// area = base * altura

/* function quadrilatero(base, altura) {
  let areaPeri = {
    area: 0,
    perimetro: 0
  };

  areaPeri.perimetro = (2 * base) + (2 * altura);
  areaPeri.area = base * altura;
  return console.log(areaPeri);
};

quadrilatero(20, 10); */

 //1 - crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares
 //e ímpares no formato:
// { pares: 0,
 //  impares: 0 }

/*  let array = [30,24,33,67,8,5];

 function parImpar(array) {
   let parEImpar = {
     pares: 0,
     impares: 0,
   }
   for(i in array) {
     if (array[i] % 2 == 0) {
       parEImpar.pares += 1;
     } else {
       parEImpar.impares += 1;
     }
   }
   return console.log(parEImpar);
 }

parImpar(array); */