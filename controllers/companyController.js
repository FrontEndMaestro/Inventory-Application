const {
  fetchAllCompanies,
  addCompany,
  getCompany,
  updateCompany,
} = require("../database/companyModel");

async function getDisplayAll(req, res) {
  let data = await fetchAllCompanies();

  res.render("company", { companies: data });
}

function companyCreateGet(req, res) {
  res.render("createCompany");
}

async function companyCreatePost(req, res) {
  console.log(req.body);
  await addCompany(req.body);
  res.redirect("/company");
}

async function companyUpdateGet(req, res) {
  let data = await getCompany(req.params.companyId);
  res.render("updateCompany", { company: data });
}

async function companyUpdatePost(req, res) {
  let id = req.params.companyId;
  req.body.id = id;
  await updateCompany(req.body);
  res.redirect("/company");
}

module.exports = {
  getDisplayAll,
  companyCreateGet,
  companyCreatePost,
  companyUpdateGet,
  companyUpdatePost,
};
