const carsModel = require("../database/carsModel");
const partsModel = require("../database/partsModel");
const companyModel = require("../database/companyModel");
async function displayInventory(req, res) {
  let parts = await partsModel.getAllParts();
  let companies = await companyModel.fetchAllCompanies();
  let cars = await carsModel.getAllCars();
  res.render("index", { parts, companies, cars });
}
module.exports = { displayInventory };
