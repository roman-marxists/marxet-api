const { db } = require('../database/mongodb');
const { User, Product, Transaction } = require('../models');

/**
 * To be implemented as Users will have their inventories updated in addition
 * to Transactions needing to have an entry created.
 *
 * @param {*} buyerId
 * @param {*} sellerId
 * @param {*} productId
 * @returns
 */
const createTransactionReplicaSet = async (buyerId, sellerId, productId) => {
  const session = await Transaction.startSession();

  try {
    const transactionResults = await session.withTransaction(async () => {
      const buyerUser = await User.findById(buyerId).session(session);
      const sellerUser = await User.findById(sellerId).session(session);
      const listing = await Product.findById(productId).session(session);

      const isListingAlreadySold = await Transaction.findOne({ product: listing }).session(session);
      if (isListingAlreadySold) {
        await session.abortTransaction();
        throw new Error('This listing is already sold. The transaction could not take place.');
      }

      // Create the transaction
      const transactionUpdateResults = await Transaction.create(
        [
          {
            seller: sellerUser,
            buyer: buyerUser,
            product: listing,
          },
        ],
        { session: session }
      );
      if (transactionUpdateResults?.modifiedCount !== 1) {
        await session.abortTransaction();
        throw new Error('This transaction was not completed.');
      }

      // remove the listing from user inventory.
      const deleteFromUserInventoryResults = await User.findById(listing._id).populate().session(session);
      if (deleteFromUserInventoryResults?.deletedCount !== 1) {
        await session.abortTransaction();
        throw new Error('This transaction was not completed because the listing could not be removed.');
      }

      return transactionUpdateResults;
    });

    console.log(transactionResults);
    if (transactionResults) {
      console.log('Transaction was completed successfully.');
    } else {
      console.log('Transaction was aborted.');
    }
  } catch (e) {
    console.log('The transaction was aborted due to an unexpected error: ' + e);
  } finally {
    await session.endSession();
  }
};

const createTransaction = async (buyerId, sellerId, productId) => {
  const buyerUser = await User.findById(buyerId).exec();
  const sellerUser = await User.findById(sellerId).exec();
  const listing = await Product.findById(productId).exec();

  const isListingAlreadySold = await Transaction.findOne({ product: listing }).exec();
  if (isListingAlreadySold) {
    throw new Error('This listing is already sold. The transaction could not take place.');
  }

  if (!buyerUser || !sellerUser) {
    throw new Error('The buyer or seller could not be found.');
  }

  return Transaction.create({
    seller: sellerUser,
    buyer: buyerUser,
    product: listing,
  });
};

// Tests
const buyer1 = 1;
const seller1 = 2;
const saleProduct = '61b969652af66bf11d6d550b';

createTransaction(buyer1, seller1, saleProduct)
  .then(() => {
    console.log('Completed succesfully');
  })
  .catch(err => {
    console.log('Sorry, the transaction was not completed: ' + err);
  });
