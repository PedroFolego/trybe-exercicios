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

function formatedBookNames() {
  // escreva seu código aqui
  const listBooks = books.map((book) => {
   return `${book.name} - ${book.genre} - ${book.author.name}`
  })
  return listBooks
}
// console.log(formatedBookNames());

function nameAndAge() {
  // escreva seu código aqui
  const authorAge = books.map((book) => {
    return {
      age: book.releaseYear - book.author.birthYear,
      author: book.author.name,
    }
  })
  return authorAge.sort((a, b) => a.age - b.age);
}
// console.log(nameAndAge());

function fantasyOrScienceFiction() {
  // escreva seu código aqui
  const fantasyScience = books.filter((book) => {
    return book.genre === 'Ficção Científica' || book.genre === 'Fantasia';
  })
  return fantasyScience;
}
// console.log(fantasyOrScienceFiction());

function oldBooksOrdered() {
  // escreva seu código aqui
  const oldestBooks = books.filter((book) => {
    return ( 2021 - book.releaseYear) > 60;
  })
  return oldestBooks.sort((a, b) => a.releaseYear - b.releaseYear);
}
// console.log(oldBooksOrdered());

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  const genreBook = ['Ficção Científica', 'Fantasia']
  const fantasyBooks = books
    .filter((book) => genreBook.includes(book.genre))
    .map((book) => book.author.name);
  return fantasyBooks.sort(); 
}
// console.log(fantasyOrScienceFictionAuthors());

function oldBooks() {
  // escreva seu código aqui
  const oldests = books
    .filter((book) => (2021 - book.releaseYear) > 60)
    .map((book) => book.name)
  return oldests
}
// console.log(oldBooks());

function authorWith3DotsOnName() {
  // escreva seu código aqui
  const dots = 'J. R. R.';
  const nameBook = books
    .find((book) => (
    book.author.name.split(' ').filter((word) => word.endsWith('.')). length === 3
    )).name
  return nameBook;
}
console.log(authorWith3DotsOnName());

