const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const { connectDb } = require("../database/mongodb");
const routes = require("../routes");

const PORT = process.env.PORT || 3030;
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded());

app.use("/api/products", routes.product);
app.use("/api/category", routes.category);

connectDb()
  .then(() => {
    app.listen(PORT, (err) => {
      err ? err : console.log("Listening on port %d...", PORT);
    });
  })
  .catch((err) => console.log(err));
