const mongoose = require("mongoose");
const { Schema } = mongoose;
const { categorySchema } = require("./Category");

const productSchema = new Schema(
  {
    name: String,
    description: String,
    categories: [String],
    zipcode: Number,
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
