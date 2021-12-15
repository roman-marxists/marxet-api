const { db } = require('../database/mongodb');
const { User, Product, Transaction } = require('../models');

const createTransaction = async (buyer, seller, productId) => {
  const session = await Transaction.startSession();

  try {
    const transactionResults = await session.withTransaction(async () => {
      const buyerUser = await User.findById(buyer.id);
      const sellerUser = await User.findById(seller.id);
      const listing = await Product.findById(productId);

      const isListingAlreadySold = await Transaction.findOne({ product: listing }).session(session);
      if (isListingAlreadySold) {
        console.error('This listing is already sold. The transaction could not take place.');
        return session.abortTransaction();
      }

      const transactionUpdateResults = await Transaction.create([{
        seller: sellerUser,
        buyer: buyerUser,
        product: listing,
      }], { session: session });
      console.log(`${transactionUpdateResults}`)


    });

    if (transactionResults) {
      console.log('Transaction was completed successfully.');
    } else {
      console.log("🚀 ~ file: TransactionController.js ~ line 33 ~ createTransaction ~ transactionResults", transactionResults)
      console.log('Transaction was aborted.');
    }
  } catch (e) {
    console.log("The transaction was aborted due to an unexpected error: " + e);
  } finally {
    await session.endSession();
  }
};


const buyer1 = {id: 1}
const seller1 = {id: 2}
const saleProduct = '61b969652af66bf11d6d550b';

createTransaction(buyer1, seller1, saleProduct);