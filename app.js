const express = require("express");
const PORT = 3000;
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const todoRoutes  = require('./routes/index');


app.use("", todoRoutes);



app.use((err, req, res, next) => {
  return res.status(err.status || 400).json({
    status: err.status || 400,
    message: err.message || "there was an error processing request",
  });
});

app.listen(PORT, () => {
  // listening on port 3000
  console.log(`listening on port ${PORT}`); // print this when the server starts
});
