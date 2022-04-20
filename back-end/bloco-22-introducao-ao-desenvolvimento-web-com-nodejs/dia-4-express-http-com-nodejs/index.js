const fs = require('fs');
const simpsons = require('./simpsons.json');
const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

const getErrors = (err, req, res, next) => {
  res.status(500).send('500 (Internal Server Error).')
}
app.use(getErrors);


 
app.get('/', (req, res) => {
  res.json(simpsons);
})

app.listen(PORT);