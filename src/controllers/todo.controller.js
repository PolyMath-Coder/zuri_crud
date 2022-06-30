const Todo = require('../models/todo.models');

const createTodoItem = async (req, res) => {
  try {
    const newItem = await Todo.create(req.body);
    res.status(200).json({ status: 'success', data: newItem });
  } catch (err) {
    res.status(400).json({ status: 'error', error: err });
  }
};

const getTodos = async (req, res) => {
  const allData = await Todo.find()
    .sort({ createdAt: -1 })
    .limit(5);
  res.status(200).json({ status: 'success', data: allData });
};
const getOneItem = async (req, res) => {
  const { id } = req.params;
  const getOne = await Todo.findById(id);
  res.status(200).json({ status: 'success', data: getOne });
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const options = { new: true };
    const updatedbody = req.body;
    const update = await Todo.findByIdAndUpdate(id, updatedbody, options);
    res.status(200).json({ status: 'success', update });
  } catch (err) {
    res.status(400).json({ status: 'error', error: err });
  }
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  const options = { new: true };
  const deleted = await Todo.findByIdAndDelete(id, req.body);
  res.status(200).json({ status: 'This task was just deleted', data: deleted });
};
module.exports = {
  createTodoItem,
  getOneItem,
  getTodos,
  updateItem,
  deleteItem,
};
