const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  colorId: {
    type: String,
  },
  image: {
    type: Array,
  },
  reviews: {
    type: Array,
  },
  ratings: {
    type: Number,
  },
  categoryId: {
    type: String,
  },
  userId: {
    type: String,
  },
  price: {
    type: Number,
  },
  unit: {
    type: String,
  },
  price_rangeId: {
    type: String,
  },
});

module.exports = mongoose.model("product", productSchema);
