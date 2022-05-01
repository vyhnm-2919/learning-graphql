const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  message: {
    type: String,
  },
  created: {
    type: String
  }
});

module.exports = mongoose.model("contact", contactSchema);
