const { Pool } = require("pg");

const sql = `
CREATE TABLE IF NOT EXISTS company (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(100),
  country VARCHAR(100),
  rating FLOAT CHECK (rating BETWEEN 0 AND 5)
);

CREATE TABLE IF NOT EXISTS cars (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(100),
  model_year INTEGER,
  trim VARCHAR(255),
  price decimal(12,2),
  company_id INTEGER, 
  CONSTRAINT fk_company_id FOREIGN KEY (company_id) REFERENCES company(id)
);

CREATE TABLE IF NOT EXISTS parts (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255),
  price decimal(12,2)
);

CREATE TABLE IF NOT EXISTS car_parts (
  car_id INTEGER, 
  part_id INTEGER,
  CONSTRAINT fk_car_id FOREIGN KEY (car_id) REFERENCES cars(id),
  CONSTRAINT fk_part_id FOREIGN KEY (part_id) REFERENCES parts(id)
);


`;

const addCompany = `INSERT INTO company (name, country, rating) VALUES 
('Toyota', 'Japan', 4.8),
('Ford', 'USA', 4.2),
('BMW', 'Germany', 4.5),
('Hyundai', 'South Korea', 4.1),
('Honda', 'Japan', 4.7);`;

const addData = `


INSERT INTO cars (name, model_year, trim, price, company_id) VALUES 
('Camry', 2023, 'LE', 26000.00, 1),
('Mustang', 2022, 'GT', 45000.00, 2),
('M3', 2024, 'Competition', 76000.00, 3),
('Elantra', 2021, 'SEL', 21000.00, 4),
('Civic', 2023, 'Sport', 25000.00, 5);


INSERT INTO parts (name, price) VALUES 
('Brake Pads', 50.00),
('Oil Filter', 25.00),
('Spark Plug', 15.00),
('Alternator', 300.00),
('Timing Belt', 120.00);



INSERT INTO car_parts (car_id, part_id) VALUES 
(1, 1), 
(2, 4), 
(3, 3), 
(4, 2),
(5, 5);`;

async function main() {
  console.log("seeding...");
  const client = new Pool({
    host: process.env.DBHOST,
    database: process.env.DBNAME,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    port: 5432,
    ssl: {
      require: true,
    },
  });
  await client.connect();
  await client.query(sql);
  await client.query(addCompany);
  await client.query(addData);
  await client.end();
  console.log("done");
}

main();
