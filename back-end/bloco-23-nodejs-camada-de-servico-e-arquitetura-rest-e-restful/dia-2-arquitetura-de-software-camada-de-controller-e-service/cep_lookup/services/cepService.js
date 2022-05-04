const Joi = require('joi');
const { searchCep, createCep } = require('../models/cepModel');

const validateCep = async (cep) => {
  const regex = new RegExp('\d{5}-?\d{3}');
  if (!regex.test(cep)) return {
    status: 400,
    error: {
      code: "invalidData",
      message: "CEP inválido"
    }
  }

  const cepFound = await searchCep(cep);
  if (!cepFound) return {
    status: 404,
    error: {
      code: "notFound",
      message: "CEP não encontrado"
    }
  }
  return {
    status: 200,
    cepFound
  };
}

const pattern = '\d{5}-\d{3}';
const schemaCep = Joi.object({
  cep: Joi
    .string()
    .regex(/\d{5}-\d{3}/)
    .required(),
  logradouro: Joi.string().required(),
  bairro: Joi.string().required(),
  localidade: Joi.string().required(),
  uf: Joi.string().required(),
})

const validateDataCep = async (dataCep) => {
  const foundCep = await searchCep(dataCep.cep);
  if (foundCep) return {
    status: 409,
    error: {
      code: "alreadyExists",
      message: "CEP já existente"
    }
  }

  const { error } =  schemaCep.validate({ ...dataCep })
  if(error) return {
    status: 400,
    error: {
      code: "invalidData",
      message: error.message
    }
  }
  createCep(dataCep)
  return {
    status: 201,
    createdCep: dataCep
  }
}

module.exports = {
  validateCep,
  validateDataCep,
}