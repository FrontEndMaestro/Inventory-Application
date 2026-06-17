const express = require("express");
const indexRouter = express.Router();
const indexController = require("../controllers/indexController");
indexRouter.get("/", indexController.displayInventory);

module.exports = indexRouter;
