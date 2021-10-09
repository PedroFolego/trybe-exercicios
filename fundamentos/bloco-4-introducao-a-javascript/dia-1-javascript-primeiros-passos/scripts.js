let a = 10;
let b = 30;
let c = 40;
let num = 0;

let adicao = (a + b);
let subtracao = (a - b);
let multiplicacao = (a * b);
let divisao = (a / b);
let modulo = (a % b);

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

if (a > b & a > c) {
  console.log(a);
} else if (b > c) {
  console.log(b);
} else {
  console.log(c);
}

if (num > 0) {
  console.log("positivo");
} else if (num < 0) {
  console.log("negativo");
} else {
  console.log("zero");
}

const x = 20;
const y = 100;
const z = -60;

if (x > 0 & y > 0 & z > 0) {
  if ((x + y + z) == 180) {
    console.log(true)
  } else {
    console.log(false)
  }
} else {
  console.log("numero negativo")
}

let peca = "CAVALO".toLowerCase();
;

switch(peca) {
  case "cavalo":
    console.log("anda em 'L'");
    break;
  case "bispo":
    console.log("diagonal");
    break;
  case "torre":
    console.log("reto");
    break;
  case "rainha":
    console.log("reto e diagonal");
    break;
  case "rei":
    console.log("um casa para todos os lados");
    break;
  case "peao":
    console.log("1 casa para frente ou se for o primeiro movimento podendo ser ate duas casas em frente");
    break;
  default:
    console.log("essa peça não existe")  
}

let numPorcento = 49;
let nota;
if (numPorcento >= 0 & numPorcento <= 100) {
  if (numPorcento >= 90) {
    nota = "A"
    console.log(nota)
  } else if (numPorcento >= 80) {
    nota = "B"
    console.log(nota)
  } else if (numPorcento >= 70) {
    nota = "C"
    console.log(nota)
  } else if (numPorcento >= 60) {
    nota = "D"
    console.log(nota)
  } else if (numPorcento >= 50) {
    nota = "E"
    console.log(nota)
  } else if (numPorcento < 50){
    nota = "F"
    console.log(nota)
  }
} else {
  console.log("Erro na nota")
}

const numA = 1;
const numB = 4;
const numC = 6;

if ((numA % 2) == 1 || (numB % 2) == 1 || (numC % 2) == 1) {
  console.log(true)
} else {
  console.log(false)
}

const valorCusto = 10;
const impostoSobreOCusto = 1.2;
let valorCustoTotal = valorCusto * impostoSobreOCusto;
const valorVenda = 20;

console.log(valorCustoTotal);


