const pool = require("./dbConnection");

async function fetchAllCompanies() {
  const { rows } = await pool.query("SELECT * FROM company");
  return rows;
}

async function addCompany(data) {
  await pool.query(
    "INSERT INTO company (name,country,rating) VALUES ($1,$2,$3)",
    [data.name, data.country, data.rating],
  );
}

async function getCompany(id) {
  const { rows } = await pool.query("SELECT * FROM company where id=$1", [id]);
  return rows[0];
}

async function updateCompany(data) {
  const { rows } = await pool.query(
    "update company set name=$1 ,country=$2,rating=$3 where id=$4",
    [data.name, data.country, data.rating, data.id],
  );
}

module.exports = { fetchAllCompanies, addCompany, getCompany, updateCompany };
