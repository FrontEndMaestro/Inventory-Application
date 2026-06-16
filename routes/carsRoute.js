const express = require("express");
const carsRouter = express.Router();
const carsController = require("../controllers/carsController");

carsRouter.get("/", carsController.getDisplayAll);
carsRouter.get("/create", carsController.getAddCar);
carsRouter.post("/create", carsController.postAddCar);
carsRouter.get('/update/:carId',carsController.getUpdateCar)
module.exports = carsRouter;
