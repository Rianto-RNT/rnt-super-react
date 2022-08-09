const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
  author: {
    type: String,
    maxlength: [20, 'Author name can not be longer than 50 character'],
  },
  title: {
    type: String,
    required: [true, 'Please add a author'],
    unique: true,
    trim: true,
    maxlength: [50, 'Author can not be more than 50 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description can not be more than 500 characters'],
  },
  image: {
    type: String,
  },
  published: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Book', BookSchema)
