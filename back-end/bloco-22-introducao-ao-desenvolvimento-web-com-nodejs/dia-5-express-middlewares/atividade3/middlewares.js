const idCadastrados = [ 555, 666 ];
const idValition = (req, res, next) => {
  const { id } = req.params;

  
  console.log(idCadastrados.find((i) => i == id));

  if (!idCadastrados.find((i) => i == id)) return next({ status: 404, message: 'post not found' });

  next();
}

const errorMiddleware = (err, req, res, next) => {
  console.log(err);
  if(err.status) return res.status(err.status).json(err.message);

  if(err) return res.status(500).json({ message: '500 - Internal Server Error' })
}

module.exports = {
  idValition,
  errorMiddleware,
  idCadastrados
};