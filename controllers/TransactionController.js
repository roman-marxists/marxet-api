const { db } = require('../database/mongodb');
const { User } = require('../models');

const createTransaction = async (buyer, seller, productId) => {
  const buyerUser = await User.findOne({ _id: buyer.id, username: buyer.username});
  const sellerUser = await User.findOne({ _id: seller.id, username: seller.username});

  if (!!buyerUser || !!sellerUser) {
    return;
  }

  const session = await db.startSession();
}