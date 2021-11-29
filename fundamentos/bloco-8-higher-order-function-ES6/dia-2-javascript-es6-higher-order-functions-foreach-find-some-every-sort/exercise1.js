const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 19 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
  return arr.every((person) => person.age >= minimumAge);
}

// console.log(verifyAges(people, 18));

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

const authorBornIn = (booksArr, year) => {
  // escreva aqui o seu código
  return booksArr.find((arr) => year === arr.author.birthYear).author.name;
}
//console.log( authorBornIn(books, 1947) );

function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  books.sort((a, b) => a.name.length - b.name.length);
  nameBook = books[0].name
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
//console.log(smallerName())

function getNamedBook() {
  // escreva seu código aqui
  return books.find((character) => character.name.length === 26); 
}
//console.log(getNamedBook()); 


function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort((a, b) => b.releaseYear - a.releaseYear);
}
//console.log(booksOrderedByReleaseYearDesc());

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((bornYear) => bornYear.author.birthYear >= 1901 && bornYear.author.birthYear <= 2000); 
}
// console.log(everyoneWasBornOnSecXX());

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some((book) => book.releaseYear > 1980 && book.releaseYear < 1990);
}
// console.log(someBookWasReleaseOnThe80s());

function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}
// console.log(authorUnique());

