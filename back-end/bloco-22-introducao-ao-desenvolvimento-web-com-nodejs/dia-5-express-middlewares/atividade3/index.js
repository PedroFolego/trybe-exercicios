const express = require('express');
const { idValition, errorMiddleware, idCadastrados } = require('./middlewares');

const app = express();

app.get('/post/:id', idValition, (req, res) => {
  
  return res.status(200).json({ message: 'id encontrado' });
});

app.get('/post', (req, res) => {
  return res.status(200).json({ post: idCadastrados });
})

app.all('*', (res, req, next) => {
  next({ status: 404, message: 'Opsss, route not found!' });
})

app.use(errorMiddleware);
app.listen(3000);
