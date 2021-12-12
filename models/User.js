const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema({
  name: String,
  description: String,
});

const userSchema = new Schema(
  {
    _id: Number,
    username: {
      type: String,
      unique: true,
      require: true,
    },
    wishlist: [itemSchema],
    watchList: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);
const User = mongoose.model("User", userSchema);

module.exports = { User, Item };
