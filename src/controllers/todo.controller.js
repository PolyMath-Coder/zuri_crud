const getTodos = (req, res) => {
  res.status(200).json({ data: 'Here are all todos' });
};

module.exports = { getTodos };
