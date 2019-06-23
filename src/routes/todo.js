const express = require('express');
const Todos = require('../models/todo');

const router = express.Router();

router.get('/', (req, res) => {
  Todos
    .fetch()
    .then(todos => res.render('index', { todos }))
    .catch(err => res.send(err));
});

router.post('/todo', (req, res) => {
  const { name, description } = req.body;
  Todos
    .create(name, description)
    .then(() => res.redirect('/'))
    .catch(err => res.send(err));
});

// Delete todo item (use POST due to problems in html5)
router.post('/todo/:id', (req, res) => {
  Todos
    .remove(req.params.id)
    .then(() => res.redirect('/'))
    .catch(err => res.send(err));
});

module.exports = router;
