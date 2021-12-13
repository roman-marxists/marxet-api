const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  description: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
