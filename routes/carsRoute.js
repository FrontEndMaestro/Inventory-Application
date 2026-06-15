const express = require("express");
const carsRouter = express.Router();
const carsController = require("../controllers/carsController");

carsRouter.get("/", carsController.getDisplayAll);

module.exports = carsRouter;
