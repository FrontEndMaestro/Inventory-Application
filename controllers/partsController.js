const {
  getAllParts,
  createPart,
  getPart,
  updatePart,
  deletePart,
} = require("../database/partsModel");
const carsModel = require("../database/carsModel");
async function getDisplayAll(req, res) {
  let data = await getAllParts();
  res.render("parts", { parts: data });
}

async function partCreateGet(res, res) {
  let cars = await carsModel.getAllCars();
  res.render("createParts.ejs", { cars });
}

async function partCreatePost(req, res) {
  await createPart(req.body);
  res.redirect("/parts");
}

async function partUpdateGet(req, res) {
  let part = await getPart(req.params.partId);
  let cars = await carsModel.getAllCars();
  res.render("updatePart", { part, cars });
}

async function partUpdatePost(req, res) {
  let partId = req.params.partId;
  req.body.partId = partId;
  await updatePart(req.body);
  res.redirect("/parts");
}

async function partDelete(req, res) {
  let partId = req.params.partId;
  await deletePart(partId);
  res.status(200).end();
}

module.exports = {
  getDisplayAll,
  partCreateGet,
  partCreatePost,
  partUpdateGet,
  partUpdatePost,
  partDelete,
};
