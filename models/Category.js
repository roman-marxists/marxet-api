const { mongoose } = require("../database/mongodb");
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = { categorySchema, Category };
