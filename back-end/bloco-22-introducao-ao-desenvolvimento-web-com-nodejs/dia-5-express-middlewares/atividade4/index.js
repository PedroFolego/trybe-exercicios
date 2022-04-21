const express = require('express');
const { errMiddle, validateObj } = require('./middleware');

const app = express();

app.use(express.json());

app.post('/teams', validateObj, (req, res) => {
  res.status(200).json(req.body);
})

app.use(errMiddle);
app.listen(3000, () => console.log('ouvindo na porta 3000'));