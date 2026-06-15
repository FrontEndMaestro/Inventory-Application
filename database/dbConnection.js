const { Pool } = require("pg");

module.exports = new Pool({
  host: process.env.DBHOST,
  user: process.env.USERNAME,
  database: process.env.DBNAME,
  password: process.env.PASSWORD,
  port: 5432,
});
