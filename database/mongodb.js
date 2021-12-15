const mongoose = require("mongoose");

const connectDb = () => {
  return mongoose.connect(process.env.MONGO_URL);
};

const db = mongoose.connection;

module.exports = { db, mongoose, connectDb };
