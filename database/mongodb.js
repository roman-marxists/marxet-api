const mongoose = require("mongoose");
const User = require("../models/User");
console.log(process.env.DATABASE_URL);
const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { User };

module.exports = { connectDb, models };
