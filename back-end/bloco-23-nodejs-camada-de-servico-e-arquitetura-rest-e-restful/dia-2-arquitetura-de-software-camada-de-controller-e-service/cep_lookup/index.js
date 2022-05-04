const express = require('express')
const { getCep, postCep } = require('./controllers/cepController')
const app = express()
const port = 3000

app.use(express.json());

app.get('/cep/:cep', getCep);

app.post('/cep', postCep)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
