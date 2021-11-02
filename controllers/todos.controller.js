const db = require("../models");

function success(res, payload) {
  return res.status(200).json(payload);
}

exports.getAllTodos = async (req, res, next) => {
  try {
    let filterBy = req.query.filterBy;
    const order = req.query.order;
    switch (filterBy) {
      case "all":
        filterBy = null
        break;
      case "done":
        filterBy = true
        break;
      case "undone":
        filterBy = false
        break;
    }
    let todos = await db.listTodos
      .find(filterBy === null || filterBy === undefined ? {} : { done: filterBy })
      .sort(order === undefined ? {} : { createdAt: `${order}` });
    return success(res, todos);
  } catch (err) {
    next({ status: 400, message: "failed to get todos" });
  }
};

exports.postOneTodo = async (req, res, next) => {
  try {
    const todo = await db.listTodos.create(req.body);
    if (!todo) return next({ status: 404, message: "failed to post todo" });
    return success(res, todo);
  } catch (err) {
    next({ status: 400, message: "failed to create todo" });
  }
};

exports.putOneTodo = async (req, res, next) => {
  try {
    const todo = await db.listTodos.findOneAndUpdate(
      { uuid: req.params.id },
      req.body
    );
    console.log(todo)
    if (!todo) return next({ status: 404, message: "failed to updated todo" });
    return success(res, "todo updated");
  } catch (err) {
    next({ status: 400, message: "failed to update todo" });
  }
};

exports.deleteOneTodo = async (req, res, next) => {
  try {
    const deletedTodo = await db.listTodos.findOneAndDelete({ uuid: req.params.id });
    console.log(deletedTodo)
    if (!deletedTodo) return next({ status: 404, message: "failed to updated todo" });
    return success(res, "todo deleted");
  } catch (err) {
    next({ status: 400, message: "failed to delete todo" });
  }
}