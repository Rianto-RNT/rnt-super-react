const express = require('express')
const {
  getBooks,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook,
} = require('../controllers/Books')

const Book = require('../models/Book')

const router = express.Router()

const advancedResults = require('../middleware/advancedResults')

router.route('/').get(advancedResults(Book), getBooks).post(createBook)

router.route('/:id').get(getSingleBook).put(updateBook).delete(deleteBook)

module.exports = router
