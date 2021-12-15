const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    _id: Number,
    username: {
      type: String,
      unique: true,
      require: true,
    },
    zipcode: Number,
    listings: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    transactions: [{ type: Schema.Types.ObjectId, ref: "Transaction"}],
    wishlist: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    watchList: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

module.exports = User;
