const express = require('express');
const { getAll, putBook } = require('./controllers/book');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', getAll);

app.put('/addbook', putBook);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));