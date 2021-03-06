const mongoose = require("mongoose");
const { Schema } = mongoose;
const { categorySchema } = require("./Category");

const productSchema = new Schema(
  {
    name: String,
    description: String,
    zipCode: Number,
    watchCount: {
      type: Number,
      default: 0
    },
    createdBy: { type: String, ref: "User" },
    photos: [String],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
