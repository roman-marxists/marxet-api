const mongoose = require("mongoose");
const { User, Item } = require("../models/User");
const Product = require("../models/Product");
const Category = require("../models/Category");

console.log(process.env.DATABASE_URL);
const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { User, Item, Product, Category };

module.exports = { connectDb, models };
