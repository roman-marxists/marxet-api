const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    _id: String,
    username: {
      type: String,
      unique: false, //TODO: change back to true once usernames implemented
      require: true,
    },
    email: String,
    zipcode: Number,
    bio: String,
    listings: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    wishlist: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    watchList: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true, _id: false }
);
const User = mongoose.model("User", userSchema);

module.exports = User;
