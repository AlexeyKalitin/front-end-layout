const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  PORT: process.env.PORT,
  mongoDbUrl: process.env.mongoDbUrl
};