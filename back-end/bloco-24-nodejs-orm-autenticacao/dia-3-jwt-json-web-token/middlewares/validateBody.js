const jwt = require('jsonwebtoken');



module.exports = (req, res, next) => {
  const { username, password } = req.body;
  
  next();

}