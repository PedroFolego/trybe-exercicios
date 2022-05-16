const { getAllBooks, putBookModel } = require("../services/books")

const getAll = async (req, res) => {
  const books = await getAllBooks();

  res.status(200).json(books)
}

const putBook = async ( req, res ) => {
  const { title, author, pageQuantity } = req.body;
  const id = await putBookModel(title, author, pageQuantity)
  res.status(200).json(id)
}

module.exports = {
  getAll,
  putBook
}