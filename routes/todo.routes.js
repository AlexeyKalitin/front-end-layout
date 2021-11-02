const express = require("express");
const router = express.Router();

const {
  getAllTodos,
  postOneTodo,
  putOneTodo,
  deleteOneTodo,
} = require("../controllers/todos.controller");

router.get("/todos", getAllTodos);

router.post("/todo", postOneTodo);

router.put("/todo/:id", putOneTodo);

router.delete("/todo/:id", deleteOneTodo);

module.exports = router;