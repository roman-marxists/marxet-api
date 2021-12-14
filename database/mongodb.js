const mongoose = require('mongoose');
const { User, Item } = require('../models/User');
const Product = require('../models/Product');

console.log(process.env.MONGO_URL);
const connectDb = () => {
  return mongoose.connect(process.env.MONGO_URL);
};

const models = { User, Item, Product };

module.exports = { connectDb, models };
