const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  unit: {
    type: String,
  },
  total: {
    type: Number,
  },
  count: {
    type: Number,
  },
  note: {
    type: String,
  },
  created: {
    type: String,
  },
  updated: {
    type: String,
  },
});

module.exports = mongoose.model("order", orderSchema);
