const express = require("express");
const router = express.Router();
const db = require("../models");

const {
  getTodos,
  postTodo,
  putTodo,
  deleteTodo,
} = require("../controllers/todo");

router.get("/todos", getTodos);

router.post("/todo", postTodo);

router.put("/todo/:id", putTodo);

router.delete("/todo/:id", deleteTodo);

module.exports = router;
