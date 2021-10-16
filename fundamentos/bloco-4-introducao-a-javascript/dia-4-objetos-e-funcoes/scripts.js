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
function ehPalindromo(palavra) {
  
  let palavraOposta = '';

  for(i = palavra.length -1; i >= 0; i -= 1){
    palavraOposta += palavra[i];
  }

  if (palavra == palavraOposta) {
    return true;
  } else {
    return false;
  }
}

ehPalindromo('abacaxi');



//exercício 1:
// Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer
// essa função deve receber dois parâmetros: base e altura
// e retornar um objeto no formato: 
// { area: 0, perimetro: 0 }
// perimetro = (2*base) + (2*altura)
// area = base * altura

/*  1 - crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares
 e ímpares no formato:
 { pares: 0,
   impares: 0 } */


   