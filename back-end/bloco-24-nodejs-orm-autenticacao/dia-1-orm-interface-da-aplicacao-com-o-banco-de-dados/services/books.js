const {Book} = require('../models');

const getAllBooks = async () => {
  const books = await Book.findAll();
  return books;
}

const putBookModel = async (title, author, pageQuantity) => {
  const id = await Book.create({ title, author, pageQuantity })
  return id;
}

module.exports = {
  getAllBooks,
  putBookModel
}