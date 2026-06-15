const carsModel = require("../database/carsModel");
async function getDisplayAll(req, res) {
  let data = await carsModel.getAllCars();
  console.log(data);
  res.render("cars", { cars: data });
}

module.exports = { getDisplayAll };
