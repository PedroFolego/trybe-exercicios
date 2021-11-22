// const numbers = [50, 85, -30, 3, 15];

const highestNumber = (arr) => {
  let num = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    num < arr[i] ? num = arr[i] : 0;
  }
  return num
}
//console.log(highestNumber(numbers));
const theHighestNUmber = (numMaior, num) => ((numMaior > num) ? numMaior : num);
// console.log( numbers.reduce(theHighestNUmber) );

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getPair = (num) => num % 2 === 0;
const sumPairNumbers = (sumPair, num) => sumPair + num;
// console.log(numbers.filter(getPair).reduce(sumPairNumbers)); 

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const bestNote = (highestNote, nextNote) => highestNote.nota > nextNote.nota ? highestNote : nextNote;

const returnBestClassStudent = () => {
  return estudantes.map((estudante) => {
    return {
      nome: estudante.nome,
      materia: estudante.materias.reduce(bestNote).name
    }
  })
}
// console.log(returnBestClassStudent());


const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acc, values) => acc.concat(values), [])
}
// console.log(flatten());

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
function reduceNames() {
  // escreva seu código aqui
  return books.reduce((acc, name, index, arr) => {
    if (index === arr.length - 1) return  `${acc}, ${name.author.name}.`
    acc += `${name.author.name}, `
    return acc
  }, '')
}
// console.log(reduceNames());
function averageAge() {
  // escreva seu código aqui
  return books.reduce((acc, age) => {
    acc += age.releaseYear - age.author.birthYear;
    return acc;
  }, 0) / books.length;  
}
// console.log(averageAge());

function longestNamedBook() {
  // escreva seu código aqui
  return books.reduce((largestNameBook, book) => 
  largestNameBook.name.length > book.name.length ? 
  largestNameBook : book);
}
// console.log(longestNamedBook());

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, name) => {
    if (name.includes('A'))  acc.A += 1 ;
    Object.values(name).filter((word) => word.includes('a') ? acc.a += 1 : acc);
    return acc;
  }, { A: 0, a: 0})
}
// console.log(containsA()); 

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  return students.reduce((acc, student, index) => {
    acc.push({
      name: student,
      average: grades[index].reduce((accNota, nota) => accNota + nota) / grades[index].length,
    })
    return acc;
  }, [])
}
console.log(studentAverage());
const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

