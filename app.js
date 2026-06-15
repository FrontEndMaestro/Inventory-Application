const express = require("express");
const { loadEnvFile } = require("node:process");
const path = require("node:path");
loadEnvFile();
app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const companyRouter = require("./routes/companyRoute");
const carsRouter = require("./routes/carsRoute");
const partsRouter = require("./routes/partsRoute");

app.use("/company", companyRouter);

app.use("/cars", carsRouter);

app.use("/parts", partsRouter);

app.use((error, req, res, next) => {
  console.log(error);
});

app.listen(3000, () => {
  console.log(`Server listening on http://localhost:3000`);
});
