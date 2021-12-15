const { mongoose } = require("../database/mongodb");
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    enum: ['Electronics', 'Toys', 'Kids', 'Clothing', 'Vehicles']
  }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = { categorySchema, Category };
