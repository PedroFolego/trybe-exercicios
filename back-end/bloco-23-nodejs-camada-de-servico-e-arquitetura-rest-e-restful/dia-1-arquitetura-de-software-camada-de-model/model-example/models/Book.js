const connection = require('./connection');

const serialize = ({ id, title, author_id }) => ({
  id,
  title,
  authorId: author_id
})

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books;',
  );
  return books.map(serialize);
}

const getById = async (id) => {
  const [books] = await connection.execute(
    `SELECT * FROM model_example.books WHERE author_id LIKE ${id}`
  );
  return books.map(serialize);
}

const addBook = async ({ id, title, authorId }) => {
  await connection.execute(
    'INSERT INTO models_example.books (id, title, author_id) VALUES (?, ?, ?)',
    [id, title, authorId],
  )
} 

module.exports = {
  getAll,
  getById,
  addBook,
};