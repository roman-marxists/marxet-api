const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const { pgsql, mongodb } = require("../database");

const { connectDb, models } = require("../database/mongodb");

const port = process.env.PORT || 3001;

let app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log("Listening on port %d...", port);
    });
  })
  .catch((err) => console.log(err));
