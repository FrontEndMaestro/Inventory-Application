const { fetchAllCompanies } = require("../database/companyModel");

async function getDisplayAll(req, res) {
  let data = await fetchAllCompanies();
  
  res.render("company", { companies: data });
}
module.exports = { getDisplayAll };
