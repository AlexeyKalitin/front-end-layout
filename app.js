const express = require('express');
const port = 9000;
const app = express();
const bodyParser = require('body-parser');

const todos = [{ id: 1, title: 'buy the milk' }, { id: 2, title: 'rent a car' }, { id: 3, title: 'feed the cat' }];
const count = todos.length;

app.use(bodyParser);
const todoModel = require('../models/todo')
app.get('/', (request, response) => response.status(200).json(todos));

app.post('/', (request, response) => {
  const newTodo = JSON.parse(request.body);
  count = count + 1;
  newTodo.id = count;
  todos.push(newTodo);
  response.status(201).json();
});

app.put('/:id', (request, response) => {
  const id = request.params.id;
  if (todos[id]) {
    const updatedTodo = JSON.parse(request.body);
    todos[id] = updatedTodo;
    response.status(204).send();
  } else {
    response.status(404, 'The task is not found').send();
  }
});

app.delete('/:id', (request, response) => {
  const id = parseInt(request.params.id);
  if (todos.filter(todo => todo.id == id).length !== 0) {
    todos = todos.filter(todo => todo.id !== id);
    response.status(200).send();
  } else {
    response.status(404).send();
  }
});

app.listen(port);
