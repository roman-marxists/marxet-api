const express = require("express");
const { port } = require("pg/lib/defaults");
const router = express.Router();
const { Product } = require("../models");

router.get("/", async (req, res) => {
  const products = await Product.find({}).populate("createdBy");
  return res.json(products);
});

router.post("/", async (req, res) => {
  const { name, description, category, zipCode, image, createdBy } = req.body;
  console.log(
    "🚀 ~ file: product.js ~ line 12 ~ router.post ~ createdBy",
    createdBy
  );
  const product = await Product.create({
    name,
    description,
    category,
    zipCode,
    createdBy,
    photos: [image],
  });
  await product.populate("createdBy");
  return res.json(product);
});

router.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const products = await Product.find({ createdBy: id }).populate("createdBy");
  return res.json(products);
});

router.get("/search/:searchText", async (req, res) => {
  try {
    const { searchText } = req.params;
    const searchForProducts = await Product.find({
      name: { $regex: searchText, $options: "i" },
    });
    return res.json(searchForProducts);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id).populate("createdBy");
  return res.json(product);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const product = await Product.findByIdAndUpdate(
    id,
    { name, description },
    {
      new: true,
    }
  );
  return res.json(product);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  return res.send("product deleted");
});

module.exports = router;
