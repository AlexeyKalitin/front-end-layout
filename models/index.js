const mongoose = require('mongoose');
const { mongoDbUrl } = require('../config');
mongoose.connect(mongoDbUrl);
mongoose.set('debug', true);
mongoose.Promise = Promise;

module.exports.listTodos = require("./todo.model");
