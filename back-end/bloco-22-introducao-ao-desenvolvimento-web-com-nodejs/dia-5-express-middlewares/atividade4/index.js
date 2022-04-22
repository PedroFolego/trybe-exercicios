const express = require('express');
const fs = require('fs');
const path = require('path');
const { errMiddle, validateObj } = require('./middleware');

const app = express();

app.use(express.json());

const filePath = path.join(__dirname, 'teams.txt');

const createTeam = ({ name, initials, country, league }) => ` - ${name} ${initials} ${country} ${league}\n`;

app.post('/teams', validateObj, (req, res) => {
  fs.appendFileSync(filePath, createTeam(req.body) );

  return res.status(200).json(req.body);
})

app.get('/teams', (req, res) => {
  try {
    return res.status(200).send(fs.readFileSync(filePath));
  } catch (error) {
    return res.status(200).json({ teams: [] });
  }
});

app.use(errMiddle);
app.listen(3000, () => console.log('ouvindo na porta 3000'));
