const express = require("express");
const companyRouter = express.Router();
const companyController = require("../controllers/companyController");

companyRouter.get("/", companyController.getDisplayAll);

module.exports = companyRouter;
