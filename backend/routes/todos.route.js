const express = require('express');
const router = express.Router();

const todos_controller = require('../controllers/todos.controller');

router.get('/', todos_controller.get);
router.post('/', todos_controller.post);
router.delete('/:id', todos_controller.delete);

module.exports = router;