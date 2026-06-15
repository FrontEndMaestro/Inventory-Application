const express = require("express");
const partsRouter = express.Router();
const partsController = require("../controllers/partsController");

partsRouter.get("/", partsController.getDisplayAll);

module.exports = partsRouter;
