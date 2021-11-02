const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const { PORT } = require('./config');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const todoRoutes = require('./routes/todo.routes');

app.use("/", todoRoutes);

app.use((err, req, res, next) => {
  return res.status(err.status || 400).json({
    status: err.status || 400,
    message: err.message || "there was an error processing request",
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
