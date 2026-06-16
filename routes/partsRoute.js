const express = require("express");
const partsRouter = express.Router();
const partsController = require("../controllers/partsController");

partsRouter.get("/", partsController.getDisplayAll);
partsRouter.get("/create", partsController.partCreateGet);
partsRouter.post("/create", partsController.partCreatePost);
partsRouter.get("/update/:partId", partsController.partUpdateGet);
partsRouter.post("/update/:partId", partsController.partUpdatePost);
module.exports = partsRouter;
