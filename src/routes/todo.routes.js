const { Router } = require('express');
const {
  getTodos,
  createTodoItem,
  getOneItem,
  updateItem,
  deleteItem,
} = require('../controllers/todo.controller');
const router = Router();

router.post('/create', createTodoItem);
router.get('/todos', getTodos);
router.get('/todo/:id', getOneItem);
router.put('/todos/:id', updateItem);
router.delete('/todos/:id', deleteItem);

module.exports = router;
