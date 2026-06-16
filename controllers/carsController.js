const carsModel = require("../database/carsModel");
const companyModel = require("../database/companyModel");
async function getDisplayAll(req, res) {
  let data = await carsModel.getAllCars();
  console.log(data);
  res.render("cars", { cars: data });
}

async function getAddCar(req, res) {
  let companies = await companyModel.fetchAllCompanies();
  res.render("createCar", { companies });
}

async function postAddCar(req, res) {
  await carsModel.addCar(req.body);
  res.redirect("/cars");
}

async function getUpdateCar(req, res) {
  console.log(req.params);
  let car = await carsModel.getCar(req.params.carId);
  let companies = await companyModel.fetchAllCompanies();
  car.price = car.price.splice(0,2).filter((item) => item != ",");
  res.render("updateCar", { car, companies });
}

module.exports = { getDisplayAll, getAddCar, postAddCar, getUpdateCar };
