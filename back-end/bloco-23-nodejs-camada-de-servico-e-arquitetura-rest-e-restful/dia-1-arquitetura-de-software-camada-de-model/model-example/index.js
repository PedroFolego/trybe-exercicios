  // index.js

const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./models/Author');
const Books = require('./models/Book');

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.post('/books', async (req, res) => {

    const { id } = req.body;
    console.log(req.body);
    // await Books.addBook(req.body);
    return res.status(201).json('foi'); 

})


app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.getAuthorById(id);
  console.log(id);
  return res.status(200).json(author);
})

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();
  return res.status(200).json(authors);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const books = await Books.getById(id);
  return res.status(200).json(books);
})


app.get('/books', async (req, res) => {
  const books = await Books.getAll();
  return res.status(200).json(books);
})

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
