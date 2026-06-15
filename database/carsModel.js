const pool = require("./dbConnection");

async function getAllCars() {
  const { rows } = await pool.query(
    `SELECT co.name as company_name,car.name,car.model_year,car.trim,car.price FROM cars as car inner join company as co
    on car.company_id=co.id;`,
  );

  return rows;
}



module.exports = { getAllCars };
