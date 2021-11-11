const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else if (escopo === false) {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  //console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

// testingScope();

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a-b);

// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!.`); // será necessário alterar essa linha 😉
// n = 5
const fatorialNumber = n => n > 1 ? n * fatorialNumber(n-1) : 1;

//console.log(fatorialNumber(5));

const longestWord = string => {

  let arr = string.split(' ');
  let arrNumber = [];
  for (let n = 0; n < arr.length; n += 1) {
    arrNumber.push(arr[n].length);
  } 
  let highestNumber = arrNumber[0];
  let position = 0;
  for(let n = 0; n < arrNumber.length; n += 1 ) {
    if (arrNumber[n] > highestNumber) {
      highestNumber = arrNumber[n];
      position = n;
    }
  }
  console.log(arr[position]);
}
//longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

// const btn = document.getElementById('btn');
// const h1 = document.getElementById('h1');

// let value = 0;
// btn.addEventListener('click', () => {
//   value += 1;
//   h1.innerHTML = value;
// })

const changeX = (string, name) => string.replace('x', `${name}`);

//changeX('Pedro x Mongelos', 'Henrique');

