const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://todoListApp:Qwerty12345@cluster0.tipvb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
mongoose.set('debug', true);
mongoose.Promise = Promise;

module.exports.list = require("./todo");
