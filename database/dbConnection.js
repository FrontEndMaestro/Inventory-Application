const { Pool } = require("pg");

module.exports = new Pool({
  host: process.env.DBHOST,
  database: process.env.DBNAME,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  port: 5432,
  ssl: {
    require: true,
  },
});
