const express = require("express");
const { loadEnvFile } = require("node:process");
const path = require("node:path");
loadEnvFile();
app = express();
const companyRouter = require("./routes/companyRoute");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/company", companyRouter);
app.use((error, req, res, next) => {
  console.log(error);
});

app.listen(3000, () => {
  console.log(`Server listening on http://localhost:3000`);
});
