/* let num = 5;

for (let i = 0; i < num; i++) {
  let quant = '';
  for (let j = 0; j < num; j++) {
    quant += '*';
  }
  console.log(quant);  
} */


/* let num = 8;
let asterisco = '';

for (let i = 0; i < num; i += 1) {
  asterisco += '*';
  console.log(asterisco);
}
 */

/* let num = 10;

let asterisco = '';

for (let i = num; i >= 1; i -= 1) {
  let espaco = '';
  asterisco += '*';
  for(let j = i; j >= 2; j -= 1) {
    espaco += " ";
  }

  console.log(espaco + asterisco);
} */

/* let num = 6;

let simbol = '*';
let inputLine = '';

let midOfPirame = (num + 1) / 2;
let controlEsquerda = midOfPirame;
let controlDireita = midOfPirame;

for (let i = 0; i <= midOfPirame; i += 1) {
  for (let j = 0; j <= num; j += 1) {
    if (j > controlEsquerda && j < controlDireita) {
      inputLine += simbol;
    } else {
      inputLine += ' ';
    }
  }
  console.log(inputLine);
  inputLine =  '';
  controlDireita += 1;
  controlEsquerda -= 1;
}
 */


let num = 5;

let simbol = '*';
let inputLine = '';

let midOfPirame = (num + 1) / 2;
let controlEsquerda = midOfPirame;
let controlDireita = midOfPirame;

for (let i = 1; i <= midOfPirame; i += 1) {
  for (let j = 1; j <= num; j += 1) {
    if (j == controlEsquerda || j == controlDireita || i == midOfPirame) {
      inputLine += simbol;

    } else {
      inputLine += ' ';
    }
  }
  console.log(inputLine);
  inputLine =  '';
  controlDireita += 1;
  controlEsquerda -= 1;
}


