const connection = require('./connection');

const searchCep = async(cep) => {
  const [cepSearch] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps WHERE cep = ?;',
    [cep]
  );
  return cepSearch[0];
}

const createCep = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const [returnSQL] = await connection.execute(
    `INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf)
      VALUES (?, ?, ?, ?, ?)`,
    [cep, logradouro, bairro, localidade, uf])
  return returnSQL;
}

module.exports = {
  searchCep,
  createCep,
}