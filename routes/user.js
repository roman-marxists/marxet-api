const express = require("express");
const router = express.Router();
const { User } = require("../models");
const mongoose = require("mongoose");

// GET ALL
router.get("/", async (req, res) => {
  const users = await User.find({});
  return res.status(200).json(users);
});

// POST, won't work until we get firebase/auth0 user id's
router.post("/", async (req, res) => {
  console.log("hit");
  try {
    const { id, email, username } = req.body;
    const user = await User.create({ _id: id, email, username });
    console.log("🚀 ~ file: user.js ~ line 22 ~ router.post ~ user", user);
    return res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

// GET by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  return res.json(user);
});

// Delete from wishlist
router.delete("/favorites/:listing_id/:user_id", async (req, res) => {
  try {
    const { listing_id, user_id } = req.params;
    const user = await User.findById(user_id);
    user.wishlist.pull({ _id: listing_id });
    await user.save();
    return res.json(user);
  } catch (err) {
    console.log(err);
  }
});

// add to wishList
router.post("/wishList/", async (req, res) => {
  try {
    const { listing_id, user_id } = req.body;
    const user = await User.findById(user_id);
    user.wishlist.push(listing_id);
    await user.save();
    return res.json(user);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { username, wishlist, watchlist } = req.body;
  const user = await User.findByIdAndUpdate(
    id,
    { username, wishlist, watchlist },
    {
      new: true,
    }
  );
  return res.json(user);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id); // can be null but not necessary
  return res.send(`user ${id} deleted`);
});

module.exports = router;
