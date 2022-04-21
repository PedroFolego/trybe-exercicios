const Joi = require('joi');

const SCHEMA = Joi.object({
  name: Joi.string().min(5).required(),
  initials: Joi.string().max(3).case('upper').required(),
  country: Joi.string().min(3).required(),
  // league: Joi.string(),
})


const validateObj = (req, res, next) => {
  const { name, initials, country, league } = req.body;

  const { error } = SCHEMA.validate({ name , initials, country });

  if(error) next({ status: 400, message: error.message });
  
  next();
}

const errMiddle = (err, req, res, next) => {
  if(err.status) return res.status(err.status).json({ message: err.message })

  console.log(err);
  return res.status(500).json({ message: '500 Internal Server Error' });
}


module.exports = {
  errMiddle,
  validateObj
}