const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const price_rangeSchema = new Schema({
  text: {
    type: String,
  },
  price_gte: {
    type: Number,
  },
  price_lte: {
    type: Number,
  },
  unit: {
    type: String,
  },
});

module.exports = mongoose.model("price_range", price_rangeSchema);
