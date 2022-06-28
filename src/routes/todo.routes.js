const { Router } = require('express');
const { getTodos } = require('../controllers/todo.controller');
const router = Router();

router.get('/todos', getTodos);

module.exports = router;
