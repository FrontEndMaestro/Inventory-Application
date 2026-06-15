const pool = require("./dbConnection");

async function getAllCars() {
  const { rows } = pool.query("SELECT * FROM cars;");
  return rows;
}
