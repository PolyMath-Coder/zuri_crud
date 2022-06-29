const Todo = require('../models/todo.models');

const createTodoItem = async (req, res) => {
  try {
    const newItem = await Todo.create(req.body);
    res.status(200).json({ status: 'success', data: newItem });
  } catch (err) {
    res.status(400).json({ status: 'error', error: err });
  }
};

const getTodos = (req, res) => {
  res.status(200).json({ data: 'Here are all todos' });
};

module.exports = { getTodos, createTodoItem };
