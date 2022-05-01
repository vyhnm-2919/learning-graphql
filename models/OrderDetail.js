const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderDetailSchema = new Schema({
  unit: {
    type: String,
  },
  subtotal: {
    type: Number,
  },
  count: {
    type: Number,
  },
});

module.exports = mongoose.model("order_detail", orderDetailSchema);
