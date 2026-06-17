const pool = require("./dbConnection");

async function getAllParts() {
  const { rows } = await pool.query(
    `SELECT parts.id,cars.name as car_name,parts.name as part_name ,parts.price FROM parts inner join car_parts 
    on parts.id=car_parts.part_id
    inner join cars on cars.id=car_parts.car_id;`,
  );

  return rows;
}

async function createPart(data) {
  const result = await pool.query(
    `INSERT INTO parts (name,price) VALUES($1,$2) RETURNING id
    `,
    [data.name, data.price],
  );
  let partId = result.rows[0].id;
  await pool.query(`INSERT INTO car_parts (car_id,part_id) VALUES($1,$2)`, [
    data.carId,
    partId,
  ]);
}

async function getPart(partId) {
  const { rows } = await pool.query(
    `Select parts.id as part_id,parts.name,parts.price,c.name as car_name,c.id as car_id from parts 
    inner join car_parts as cp on parts.id=cp.part_id inner join cars as c on c.id=cp.car_id
    where parts.id=($1)`,
    [partId],
  );
  return rows[0];
}

async function updatePart(data) {
  await pool.query("DELETE from car_parts where part_id=($1)", [data.partId]);
  await pool.query("UPDATE parts set name=($1),price=($2) where id=($3)", [
    data.name,
    data.price,
    data.partId,
  ]);
  await pool.query(`INSERT INTO car_parts (car_id,part_id) VALUES($1,$2)`, [
    data.carId,
    data.partId,
  ]);
}

async function deletePart(partId) {
  await pool.query("DELETE FROM car_parts where part_id=($1)", [partId]);
  await pool.query("DELETE FROM parts where id=($1) ", [partId]);
}

module.exports = { getAllParts, createPart, getPart, updatePart, deletePart };
