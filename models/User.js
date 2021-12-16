const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    _id: String,
    username: {
      type: String,
      unique: true,
      require: true,
    },
    email: String,
    zipcode: Number,
    listings: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    wishlist: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    watchList: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true, _id: false }
);
const User = mongoose.model("User", userSchema);

module.exports = User;
