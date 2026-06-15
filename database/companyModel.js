const pool = require("./dbConnection");

async function fetchAllCompanies() {
  const { rows } = await pool.query("SELECT * FROM company");
  return rows;
}

module.exports = { fetchAllCompanies };
