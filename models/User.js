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
    wishlist: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    watchList: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

module.exports = User;
