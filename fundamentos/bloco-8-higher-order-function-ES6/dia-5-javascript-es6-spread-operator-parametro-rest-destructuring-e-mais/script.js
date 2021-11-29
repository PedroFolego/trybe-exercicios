// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'mirtilo', 'mamão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite em pó', 'paçoca', 'leite condensado'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

// console.log(fruitSalad(specialFruit, additionalItens));

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [ saudacao, func ] = saudacoes;

// saudacoes[1](saudacoes[0]); // Olá
// func(saudacao);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];

//console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[,,, ...numerosPares] = numerosPares;
console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality = 'Brazilian' } = person;
// console.log(nationality);

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));


const multiply = (number, value = 1 ) => number * value;

// console.log(multiply(8, 2));
