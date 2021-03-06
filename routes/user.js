const express = require("express");
const router = express.Router();
const { User } = require("../models");
const mongoose = require("mongoose");

// GET ALL
router.get("/", async (req, res) => {
  const users = await User.find({});
  return res.status(200).json(users);
});

// GET by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  return res.json(user);
});

// POST, won't work until we get firebase/auth0 user id's
router.post("/", async (req, res) => {
  const { id, email, username } = req.body;
  const user = await User.create({ _id: id, email, username });
  console.log("🚀 ~ file: user.js ~ line 22 ~ router.post ~ user", user);
  return res.status(201).json(user);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const { username, email, zipcode, bio, listings, wishlist, watchList } = req.body;
  const user = await User.findByIdAndUpdate(
    id,
    {  username, email, zipcode, bio, listings, wishlist, watchList },
    {
      new: true,
    }
  );
  return res.status(201).json(user);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id); // can be null but not necessary
  return res.send(`user ${id} deleted`);
});

module.exports = router;
