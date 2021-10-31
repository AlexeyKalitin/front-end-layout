const db = require("../models");

function success(res, payload) {
  return res.status(200).json(payload);
}

exports.getTodos = async (req, res, next) => {
  try {
    const todos = await db.list.find({});
    return success(res, todos);
  } catch (err) {
    next({ status: 400, message: "failed to get todos" });
  }
};

exports.postTodo = async (req, res, next) => {
  try {
    const todo = await db.list.create(req.body);
    return success(res, todo);
  } catch (err) {
    next({ status: 400, message: "failed to create todo" });
  }
};

exports.putTodo = async (req, res, next) => {
  try {
    const todo = await db.list.findOneAndUpdate(
      { uuid: req.params.id },
      req.body
    );
    if (todo !== null) return success(res, "todo updated");
    else next({ status: 404, message: "failed to updated todo" });
  } catch (err) {
    next({ status: 400, message: "failed to update todo" });
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const deletedTodo = await db.list.findOneAndDelete({ uuid: req.params.id });
    if (deletedTodo !== null) return success(res, "todo deleted");
    else next({ status: 404, message: "failed to delete todo" });
  } catch (err) {
    next({ status: 400, message: "failed to delete todo" });
  }
}