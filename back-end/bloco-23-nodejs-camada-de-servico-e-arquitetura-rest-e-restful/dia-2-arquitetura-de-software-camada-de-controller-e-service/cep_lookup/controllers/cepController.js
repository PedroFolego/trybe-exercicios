const { validateCep, validateDataCep } = require('../services/cepService')

const getCep = async (req, res) => {
  const { cep } = req.params;
  const { error, cepFound, status } = await validateCep(cep);
  if (error) return res.status(status).json(error);
  return res.status(status).json(cepFound);
}

const postCep = async (req,res) => {
  const { error, status, createdCep } = await validateDataCep(req.body);
  if(error) return res.status(status).json(error);
  return res.status(status).json(createdCep);
}

module.exports = {
  getCep,
  postCep,
}