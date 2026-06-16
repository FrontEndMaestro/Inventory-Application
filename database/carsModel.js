const pool = require("./dbConnection");

async function getAllCars() {
  const { rows } = await pool.query(
    `SELECT car.id,co.name as company_name,car.name,car.model_year,car.trim,car.price FROM cars as car inner join company as co
    on car.company_id=co.id;`,
  );

  return rows;
}

async function addCar(data) {
  //name, model_year, trim, price, company_id
  console.log(data);
  await pool.query(
    "INSERT INTO cars (name,model_year,trim,price,company_id) VALUES ($1,$2,$3,$4,$5)",
    [data.name, data.model, data.trim, data.price, data.company],
  );
}

async function getCar(id) {
  let { rows } = await pool.query(
    `select cars.name as car_name,cars.model_year,cars.trim,cars.price,company.name as company_name, company.id as company_id from cars inner join company on cars.company_id=company.id
    where cars.id=($1)`,
    [id],
  );

  return rows[0];
}

module.exports = { getAllCars, addCar, getCar };
