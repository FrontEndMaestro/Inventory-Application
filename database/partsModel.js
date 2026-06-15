const pool = require("./dbConnection");

async function getAllParts() {
  const { rows } = await pool.query(
    `SELECT cars.name as car_name,parts.name as part_name ,parts.price FROM parts inner join car_parts 
    on parts.id=car_parts.part_id
    inner join cars on cars.id=car_parts.car_id;`,
  );

  return rows;
}

/**
 * 
 * CREATE TABLE IF NOT EXISTS cars (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(100),
  model_year INTEGER,
  trim VARCHAR(255),
  price MONEY,
  company_id INTEGER, 
  CONSTRAINT fk_company_id FOREIGN KEY (company_id) REFERENCES company(id)
);
 * 
 * CREATE TABLE IF NOT EXISTS parts (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255),
  price MONEY
);

CREATE TABLE IF NOT EXISTS car_parts (
  car_id INTEGER, 
  part_id INTEGER,
  CONSTRAINT fk_car_id FOREIGN KEY (car_id) REFERENCES cars(id),
  CONSTRAINT fk_part_id FOREIGN KEY (part_id) REFERENCES parts(id)
);
 * 
 */

module.exports = { getAllParts };
