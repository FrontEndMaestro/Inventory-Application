const pool = require("./dbConnection");
const partsModel = require("./partsModel");

async function getAllCars() {
  const { rows } = await pool.query(
    `SELECT car.id,co.name as company_name,car.name,car.model_year,car.trim,car.price FROM cars as car inner join company as co
    on car.company_id=co.id;`,
  );

  return rows;
}

async function addCar(data) {
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

async function updateCar(data) {
  await pool.query(
    "UPDATE cars set name=($1),model_year=($2),trim=($3),price=($4),company_id=($5) where id=($6)",
    [data.name, data.model, data.trim, data.price, data.company, data.carId],
  );
}

async function deleteCar(carId) {
  let { rows } = await pool.query(
    "SELECT part_id,id,name from cars inner join car_parts on car_id=id",
  );
  let data = rows;
  if (data != undefined) {
    for (const part of data) {
      await partsModel.deletePart(part.part_id);
    }
  }

  await pool.query("DELETE FROM cars where id=($1)", [carId]);
}

async function deleteAllCarsInCompany(companyId) {
  const results = await pool.query("SELECT * FROM cars where company_id=($1)", [
    companyId,
  ]);
  if (results.rows) {
    for (const car of results.rows) {
      await deleteCar(car.id);
    }
  }
}

module.exports = {
  getAllCars,
  addCar,
  getCar,
  updateCar,
  deleteCar,
  deleteAllCarsInCompany,
};
