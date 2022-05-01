const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const colorSchema = new Schema({
  name: {
    type: String,
  },
  value: {
    type: String,
  },
});

module.exports = mongoose.model("color", colorSchema);
