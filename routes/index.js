
const product = require("./product");
const category = require("./category");
const user = require('./user');

module.exports = {
  productRouter: product,
  userRouter: user,
  categoryRouter: category
};
