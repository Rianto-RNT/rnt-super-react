const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
  author: {
    type: String,
    maxlength: [50, 'Author name can not be longer than 50 character'],
  },
  title: {
    type: String,
    required: [true, 'Please add a author'],
    unique: true,
    trim: true,
    maxlength: [100, 'Title can not be more than 100 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [1000, 'Description can not be more than 1000 characters'],
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
