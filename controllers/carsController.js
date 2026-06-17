const carsModel = require("../database/carsModel");
const companyModel = require("../database/companyModel");
async function getDisplayAll(req, res) {
  let data = await carsModel.getAllCars();
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
  let car = await carsModel.getCar(req.params.carId);
  car.id = req.params.carId;
  let companies = await companyModel.fetchAllCompanies();

  res.render("updateCar", { car, companies });
}

async function postUpdateCar(req, res) {
  let carId = req.params.carId;
  req.body.carId = carId;
  let car = await carsModel.updateCar(req.body);
  res.redirect("/cars");
}

async function carDelete(req, res) {
  let carId = req.params.carId;
  await carsModel.deleteCar(carId);
  res.status(200).end();
}

module.exports = {
  getDisplayAll,
  getAddCar,
  postAddCar,
  getUpdateCar,
  postUpdateCar,
  carDelete,
};
