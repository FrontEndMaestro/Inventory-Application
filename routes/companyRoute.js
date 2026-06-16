const express = require("express");
const companyRouter = express.Router();
const companyController = require("../controllers/companyController");

companyRouter.get("/", companyController.getDisplayAll);
companyRouter.get("/create", companyController.companyCreateGet);
companyRouter.post("/create", companyController.companyCreatePost);
companyRouter.get("/update/:companyId", companyController.companyUpdateGet);
companyRouter.post("/update/:companyId", companyController.companyUpdatePost);
module.exports = companyRouter;
