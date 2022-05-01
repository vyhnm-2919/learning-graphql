const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  title: {
    type: String
  },
  completed: {
    type: Boolean
  }
})

module.exports = mongoose.model('todo', todoSchema)