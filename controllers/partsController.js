const { getAllParts } = require("../database/partsModel");

async function getDisplayAll(req, res) {
  let data = await getAllParts();
  res.render("parts", { parts: data });
}
module.exports = { getDisplayAll };
