const express = require('express');
const router = express.Router();
const model = require('../../models/index.js');

/* GET todo listing. */
router.get('/', function(req, res, next) {
  model.todo_list.findAll({})
  .then(todos => res.json({
      status: "ok",
      data: todos
  }))
  .catch(error => res.json({
      error: "nok",
      data: [],
      error: error
  }));
});
 
 
/* POST todo. */
router.post('/', function(req, res, next) {
  const {
    title,
    description
  } = req.body;
  
  model.todo_list.create({
    title: title,
    description: description
  })
  .then(todo => res.status(201).json({
    status: false,
    data: todo,
    message: 'New todo has been created.'
  }))
  .catch(error => res.json({
    status: "nok",
    data: [],
    error: error
  }));
});
 
 
/* update todo. */
router.put('/:id', function(req, res, next) {
  const todo_id = req.params.id;
  const { title, description } = req.body;

  model.todo_list.update({
    title: title,
    description: description
  },{
    where: {
      id: todo_id
    }
  })
  .then(todo => res.json({
    status: 'ok',
    data: todo,
    message: `todo with id ${todo_id} has been updated`
  }))
  .catch(error => res.json({
    status: "nok",
    data: [],
    error: error
  }))
});
 
 
/* GET todo listing. */
router.delete('/:id', function(req, res, next) {
  const todo_id = req.params.id;
  const { title, description } = req.body;

  model.todo_list.destroy({
    where: {
      id: todo_id
    }
  })
  .then(todo => res.json({
    status: 'ok',
    data: todo,
    message: `todo with id ${todo_id} has been removed`
  }))
  .catch(error => res.json({
    status: "nok",
    data: [],
    error: error
  }))
});

module.exports = router;
