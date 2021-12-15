const express = require('express');
const router = express.Router();
const { Transaction } = require('../models');

// GET ALL
router.get('/', async (req, res) => {
  const transactions = await Transaction.find({});
  return res.status(200).json(transactions);
});

// GET by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const transaction = await Transaction.findById(id);
  return res.json(transaction);
});

// POST, won't work until we get firebase/auth0 user id's
router.post('/', async (req, res) => {
  const { buyerId, sellerId, listingId } = req.body;
  createTransaction(buyerId, sellerId, listingId)
    .then(() => res.status(201).send())
    .catch((err) => {console.log('Sorry, the transaction was not completed: ' + err); res.status(404).send('Sorry, the transaction was not completed: ' + err)});
});

module.exports = router;
