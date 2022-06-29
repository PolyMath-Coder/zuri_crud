const { Router } = require('express');
const { getTodos, createTodoItem } = require('../controllers/todo.controller');
const router = Router();

router.post('/create', createTodoItem);
router.get('/todos', getTodos);

module.exports = router;
