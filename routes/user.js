const express = require('express');
const router = express.Router();
const { User, Item } = require('../models').User;

// GET ALL
router.get('/', async (req, res) => {
  const users = await User.find({});
  return res.json(users);
});

// GET by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  return res.json(user);
});

// POST
router.post('/', async (req, res) => {
  const { username } = req.body;
  const user = await User.create({ username });
  return res.json(user);
});

router.put('/:id', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  return res.send(`user ${id} deleted`);
});

module.exports = router;
